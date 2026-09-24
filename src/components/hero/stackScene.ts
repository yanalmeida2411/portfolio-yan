/**
 * Cena do hero: a stack como desenho técnico em 3D.
 * Três planos empilhados — interface, API e dados — com os nós de cada camada
 * (telas, serviços, bancos) e requisições que descem e voltam entre eles.
 *
 * Módulo sem React: o componente HeroScene faz o import dinâmico, então o
 * three.js só é baixado depois da primeira pintura e fica fora do bundle inicial.
 */
import {
  BufferAttribute,
  BufferGeometry,
  Color,
  DoubleSide,
  Group,
  Line,
  LineBasicMaterial,
  LineLoop,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Points,
  PointsMaterial,
  Scene,
  Vector3,
  WebGLRenderer,
  type Material,
  type Object3D,
} from "three";

export type SceneColors = { line: string; accent: string };
export type LabelAnchor = { x: number; y: number };

export type SceneOptions = {
  canvas: HTMLCanvasElement;
  colors: SceneColors;
  reducedMotion: boolean;
  lowPower: boolean;
  onFrame?: (anchors: LabelAnchor[]) => void;
};

export type StackScene = {
  resize: (width: number, height: number) => void;
  /** posição do ponteiro na janela, de -1 a 1 */
  setPointer: (x: number, y: number) => void;
  /** 0 = hero inteiro na tela, 1 = hero rolado para fora */
  setScroll: (progress: number) => void;
  setColors: (colors: SceneColors) => void;
  start: () => void;
  stop: () => void;
  dispose: () => void;
};

type XZ = readonly [number, number];

const HALF = 1.6; // metade do lado de cada plano
const SPACING = 1.2; // distância entre camadas em repouso
const EXPLODE = 0.75; // quanto as camadas se afastam com a rolagem
const BASE_YAW = -0.62;
const NODE_LIFT = 0.16; // nós da API e de dados ficam um pouco acima do plano

// posições locais (x, z) dos nós em cada camada
const UI_NODES: XZ[] = [[-0.95, -0.75], [0.7, -0.95], [-0.6, 0.75], [0.95, 0.55]];
const API_NODES: XZ[] = [[-0.7, -0.25], [0.75, -0.1], [0, 0.85]];
const DATA_NODES: XZ[] = [[-0.45, -0.35], [0.7, 0.55]];

// quem chama quem: tela → serviço, serviço → banco
const UI_TO_API = [0, 1, 2, 1] as const;
const API_TO_DATA = [0, 1, 1] as const;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const clamp01 = (t: number) => Math.min(1, Math.max(0, t));

function segments(points: number[]): BufferGeometry {
  const geo = new BufferGeometry();
  geo.setAttribute("position", new BufferAttribute(new Float32Array(points), 3));
  return geo;
}

function squareOutline(half: number): BufferGeometry {
  return segments([-half, 0, -half, half, 0, -half, half, 0, half, -half, 0, half]);
}

function gridLines(half: number, divisions: number): BufferGeometry {
  const pts: number[] = [];
  const step = (half * 2) / divisions;
  for (let i = 1; i < divisions; i++) {
    const p = -half + i * step;
    pts.push(p, 0, -half, p, 0, half, -half, 0, p, half, 0, p);
  }
  return segments(pts);
}

/** As marcas de registro "+" do site, nos quatro cantos do plano. */
function cornerMarks(half: number): BufferGeometry {
  const pts: number[] = [];
  const o = half + 0.14;
  const s = 0.09;
  for (const [x, z] of [[-o, -o], [o, -o], [o, o], [-o, o]] as const) {
    pts.push(x - s, 0, z, x + s, 0, z, x, 0, z - s, x, 0, z + s);
  }
  return segments(pts);
}

/** Tela: retângulo com uma barra de título. */
function screenIcon(): BufferGeometry {
  const w = 0.26, d = 0.18, bar = 0.1;
  return segments([
    -w, 0, -d, w, 0, -d,  w, 0, -d, w, 0, d,
    w, 0, d, -w, 0, d,  -w, 0, d, -w, 0, -d,
    -w, 0, -d + bar, w, 0, -d + bar,
  ]);
}

/** Serviço: cubo em arame. */
function boxIcon(): BufferGeometry {
  const s = 0.17;
  const c = [
    [-s, -s, -s], [s, -s, -s], [s, -s, s], [-s, -s, s],
    [-s, s, -s], [s, s, -s], [s, s, s], [-s, s, s],
  ];
  const edges = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]];
  return segments(edges.flatMap(([a, b]) => [...c[a], ...c[b]]));
}

/** Banco de dados: três anéis empilhados com quatro geratrizes. */
function cylinderIcon(): BufferGeometry {
  const r = 0.2, h = 0.17, seg = 24;
  const pts: number[] = [];
  for (const y of [-h, 0, h]) {
    for (let i = 0; i < seg; i++) {
      const a0 = (i / seg) * Math.PI * 2;
      const a1 = ((i + 1) / seg) * Math.PI * 2;
      pts.push(Math.cos(a0) * r, y, Math.sin(a0) * r, Math.cos(a1) * r, y, Math.sin(a1) * r);
    }
  }
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
    pts.push(Math.cos(a) * r, -h, Math.sin(a) * r, Math.cos(a) * r, h, Math.sin(a) * r);
  }
  return segments(pts);
}

export function createStackScene(opts: SceneOptions): StackScene {
  const { canvas, reducedMotion, lowPower, onFrame } = opts;

  const renderer = new WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: "low-power",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, lowPower ? 1.5 : 2));
  renderer.setClearColor(0x000000, 0);

  const scene = new Scene();
  const camera = new PerspectiveCamera(30, 1, 0.1, 100);
  camera.position.set(0, 3.6, 10.2);
  camera.lookAt(0, -0.1, 0);

  // — materiais compartilhados: trocar de tema = trocar 5 cores —
  const lineMat = new LineBasicMaterial({ transparent: true, opacity: 0.7 });
  const gridMat = new LineBasicMaterial({ transparent: true, opacity: 0.13 });
  const nodeMat = new LineBasicMaterial({ transparent: true, opacity: 0.95 });
  const wireMat = new LineBasicMaterial({ transparent: true, opacity: 0.32 });
  const fillMat = new MeshBasicMaterial({
    transparent: true,
    opacity: 0.05,
    side: DoubleSide,
    depthWrite: false,
  });
  const packetMat = new PointsMaterial({
    size: lowPower ? 5 : 6,
    sizeAttenuation: false,
    transparent: true,
    opacity: 1,
    depthWrite: false,
  });

  function applyColors(c: SceneColors) {
    const line = new Color(c.line);
    const accent = new Color(c.accent);
    lineMat.color.copy(line);
    gridMat.color.copy(line);
    wireMat.color.copy(accent);
    nodeMat.color.copy(accent);
    fillMat.color.copy(accent);
    packetMat.color.copy(accent);
  }
  applyColors(opts.colors);

  // — camadas —
  const root = new Group();
  root.rotation.y = BASE_YAW;
  scene.add(root);

  const outline = squareOutline(HALF);
  const grid = gridLines(HALF, 8);
  const marks = cornerMarks(HALF);
  const fill = new PlaneGeometry(HALF * 2, HALF * 2).rotateX(-Math.PI / 2);
  const icons = { ui: screenIcon(), api: boxIcon(), data: cylinderIcon() };

  const nodeSets: { nodes: XZ[]; icon: BufferGeometry; lift: number }[] = [
    { nodes: UI_NODES, icon: icons.ui, lift: 0 },
    { nodes: API_NODES, icon: icons.api, lift: NODE_LIFT },
    { nodes: DATA_NODES, icon: icons.data, lift: NODE_LIFT },
  ];

  const layers = nodeSets.map(({ nodes, icon, lift }) => {
    const layer = new Group();
    layer.add(new LineLoop(outline, lineMat));
    layer.add(new LineSegments(grid, gridMat));
    layer.add(new LineSegments(marks, lineMat));
    layer.add(new Mesh(fill, fillMat));
    for (const [x, z] of nodes) {
      const node = new LineSegments(icon, nodeMat);
      node.position.set(x, lift, z);
      layer.add(node);
    }
    root.add(layer);
    return layer;
  });

  // — ligações entre camadas (reconstruídas quando o espaçamento muda) —
  const links: [number, XZ, number, XZ][] = [
    ...UI_TO_API.map((a, i): [number, XZ, number, XZ] => [0, UI_NODES[i], 1, API_NODES[a]]),
    ...API_TO_DATA.map((d, i): [number, XZ, number, XZ] => [1, API_NODES[i], 2, DATA_NODES[d]]),
  ];
  const linkGeo = segments(new Array(links.length * 6).fill(0));
  const linkLines = new LineSegments(linkGeo, wireMat);
  root.add(linkLines);

  // — requisições: cada pacote percorre tela → serviço → (banco) → serviço → tela —
  const routes = UI_NODES.map((_, ui) => {
    const api = UI_TO_API[ui];
    const data = API_TO_DATA[api];
    return { ui, api, data };
  });
  const packetCount = reducedMotion ? routes.length : lowPower ? 6 : 12;
  const packets = Array.from({ length: packetCount }, (_, i) => ({
    route: routes[i % routes.length],
    // metade das requisições volta do serviço sem descer ao banco (cache, validação)
    touchesData: i % 3 !== 2,
    phase: i / packetCount + (i % 2) * 0.13,
    speed: 0.11 + (i % 4) * 0.018,
  }));
  const packetGeo = segments(new Array(packetCount * 3).fill(0));
  root.add(new Points(packetGeo, packetMat));

  // — estado animado —
  let spacing = SPACING;
  let intro = reducedMotion ? 1 : 0;
  let scroll = 0;
  const pointer = { x: 0, y: 0 };
  const eased = { yaw: BASE_YAW, pitch: 0, scroll: 0 };
  let width = 1;
  let height = 1;

  const tmp = new Vector3();
  const a = new Vector3();
  const b = new Vector3();

  function layerY(index: number) {
    return (1 - index) * spacing;
  }

  function nodeWorld(layer: number, [x, z]: XZ, out: Vector3) {
    return out.set(x, layerY(layer) + nodeSets[layer].lift, z);
  }

  function updateGeometry(time: number) {
    layers.forEach((layer, i) => layer.position.setY(layerY(i)));

    const lp = linkGeo.attributes.position as BufferAttribute;
    links.forEach(([la, na, lb, nb], i) => {
      nodeWorld(la, na, a);
      nodeWorld(lb, nb, b);
      lp.setXYZ(i * 2, a.x, a.y, a.z);
      lp.setXYZ(i * 2 + 1, b.x, b.y, b.z);
    });
    lp.needsUpdate = true;

    const pp = packetGeo.attributes.position as BufferAttribute;
    packets.forEach((p, i) => {
      const stops: [number, XZ][] = [[0, UI_NODES[p.route.ui]], [1, API_NODES[p.route.api]]];
      if (p.touchesData) stops.push([2, DATA_NODES[p.route.data]]);
      // ida e volta pelo mesmo caminho
      const path = [...stops, ...stops.slice(0, -1).reverse()];
      const legs = path.length - 1;
      const t = (((p.phase + time * p.speed) % 1) + 1) % 1;
      const leg = Math.min(Math.floor(t * legs), legs - 1);
      const local = t * legs - leg;
      nodeWorld(path[leg][0], path[leg][1], a);
      nodeWorld(path[leg + 1][0], path[leg + 1][1], b);
      tmp.lerpVectors(a, b, local);
      pp.setXYZ(i, tmp.x, tmp.y, tmp.z);
    });
    pp.needsUpdate = true;
  }

  // rótulos HTML presos ao canto de cada plano
  const anchorLocal = new Vector3(HALF + 0.14, 0, -HALF - 0.14);
  function emitAnchors() {
    if (!onFrame) return;
    root.updateMatrixWorld();
    onFrame(
      layers.map((layer) => {
        tmp.copy(anchorLocal).applyMatrix4(layer.matrixWorld).project(camera);
        return { x: ((tmp.x + 1) / 2) * width, y: ((1 - tmp.y) / 2) * height };
      })
    );
  }

  let raf = 0;
  let last = 0;
  let elapsed = 0;
  let running = false;

  function step(dt: number) {
    elapsed += dt;
    if (intro < 1) intro = Math.min(1, intro + dt / 1.6);

    // amortecimento independente da taxa de quadros
    const k = 1 - Math.pow(0.02, dt);
    eased.yaw += (BASE_YAW + pointer.x * 0.32 + eased.scroll * 0.45 - eased.yaw) * k;
    eased.pitch += (pointer.y * 0.12 - eased.pitch) * k;
    eased.scroll += (scroll - eased.scroll) * k;

    root.rotation.y = eased.yaw;
    root.rotation.x = eased.pitch;
    spacing = (SPACING + eased.scroll * EXPLODE) * (0.12 + 0.88 * easeOutCubic(intro));
    const reveal = easeOutCubic(intro);
    lineMat.opacity = 0.7 * reveal;
    gridMat.opacity = 0.13 * reveal;
    packetMat.opacity = clamp01(intro * 2 - 1);

    updateGeometry(elapsed);
  }

  function render() {
    renderer.render(scene, camera);
    emitAnchors();
  }

  function loop(now: number) {
    raf = requestAnimationFrame(loop);
    const dt = last ? Math.min((now - last) / 1000, 0.05) : 0.016;
    last = now;
    step(dt);
    render();
  }

  function renderStatic() {
    step(0);
    render();
  }

  // perda de contexto (GPU reiniciada, aba em segundo plano no mobile)
  const onContextLost = (e: Event) => {
    e.preventDefault();
    cancelAnimationFrame(raf);
    running = false;
  };
  canvas.addEventListener("webglcontextlost", onContextLost);

  return {
    resize(w, h) {
      width = Math.max(1, w);
      height = Math.max(1, h);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      // em telas estreitas afasta a câmera para caber a pilha inteira
      camera.position.z = camera.aspect < 0.9 ? 11.6 : 10.2;
      camera.updateProjectionMatrix();
      if (!running) renderStatic();
    },
    setPointer(x, y) {
      if (reducedMotion) return;
      pointer.x = x;
      pointer.y = y;
    },
    setScroll(progress) {
      if (reducedMotion) return;
      scroll = clamp01(progress);
    },
    setColors(colors) {
      applyColors(colors);
      if (!running) renderStatic();
    },
    start() {
      if (running) return;
      if (reducedMotion) {
        renderStatic();
        return;
      }
      running = true;
      last = 0;
      raf = requestAnimationFrame(loop);
    },
    stop() {
      running = false;
      cancelAnimationFrame(raf);
    },
    dispose() {
      cancelAnimationFrame(raf);
      running = false;
      canvas.removeEventListener("webglcontextlost", onContextLost);
      const geometries = new Set<BufferGeometry>();
      const materials = new Set<Material>();
      scene.traverse((obj: Object3D) => {
        if (obj instanceof Mesh || obj instanceof Line || obj instanceof Points) {
          geometries.add(obj.geometry);
          materials.add(obj.material as Material);
        }
      });
      geometries.forEach((g) => g.dispose());
      materials.forEach((m) => m.dispose());
      renderer.dispose();
    },
  };
}
