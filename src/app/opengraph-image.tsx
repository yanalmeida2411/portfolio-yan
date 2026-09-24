import { ImageResponse } from "next/og";

export const alt = "Yan Monteiro, desenvolvedor full stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const FIELD = "#1d2d3d";
const FG = "#f2f2f3";
const ACCENT = "#94bce3";

/** Os três planos da cena do hero, em versão plana. */
function Layers() {
  const plane = (y: number) => `M 210 ${y - 58} L 370 ${y} L 210 ${y + 58} L 50 ${y} Z`;
  return (
    <svg width="420" height="440" viewBox="0 0 420 440" fill="none">
      {[110, 220, 330].map((y) => (
        <path key={y} d={plane(y)} stroke={ACCENT} strokeWidth="2" />
      ))}
      <path d="M 210 150 V 290" stroke={ACCENT} strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 80px",
          background: FIELD,
          color: FG,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 120, fontWeight: 700, lineHeight: 0.9, letterSpacing: -3 }}>
            YAN
          </div>
          <div style={{ fontSize: 120, fontWeight: 700, lineHeight: 0.9, letterSpacing: -3 }}>
            MONTEIRO
          </div>
          <div style={{ marginTop: 34, fontSize: 40, color: ACCENT }}>Desenvolvedor Full Stack</div>
          <div style={{ marginTop: 14, fontSize: 28, opacity: 0.75 }}>
            Do banco de dados à interface. 8 projetos em produção.
          </div>
        </div>
        <Layers />
      </div>
    ),
    size
  );
}
