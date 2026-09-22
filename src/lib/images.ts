/**
 * Gerado a partir dos prints em `public/projects/`.
 * Cada entrada carrega as dimensões reais e um placeholder de 16px embutido,
 * para o Next reservar o espaço do card e evitar layout shift no carregamento.
 */

export type ProjectImage = {
  src: string;
  width: number;
  height: number;
  blurDataURL: string;
};

export const PROJECT_IMAGES = {
  "cineville": {
    src: "/projects/cineville.webp",
    width: 1600,
    height: 773,
    blurDataURL:
      "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAADQAQCdASoQAAgAA4BaJZQAAsf339m+cAD+9uDe5MSHxJge5n/7sVCYMGhIXoD5txQAAA==",
  },
  "muquiranas": {
    src: "/projects/muquiranas.webp",
    width: 1280,
    height: 615,
    blurDataURL:
      "data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAACwAQCdASoQAAgAA4BaJZwAAueJHjPAAP72LW1Bjpvb+C50BZ2xTsZQEAA=",
  },
  "vitrine": {
    src: "/projects/vitrine.webp",
    width: 1600,
    height: 748,
    blurDataURL:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAACwAQCdASoQAAcAA4BaJZwAAuaaKWAAAP7dv+zSjC+yWRyARZ99nBy8RQDe9H7/Tjoqml9nrZ+v8xKwAAA=",
  },
  "studio": {
    src: "/projects/studio.webp",
    width: 1600,
    height: 725,
    blurDataURL:
      "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACQAQCdASoQAAcAA4BaJY0wARgAiwAA/vGf9Yy5+nToSeBQYxUPzWTAskswAA==",
  },
  "educagil": {
    src: "/projects/educagil.webp",
    width: 1320,
    height: 924,
    blurDataURL:
      "data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAADQAQCdASoQAAsAA4BaJZwAAmiME5HAAAD+9R3aFQAGPKGcSw2jrDQdz292x9XqDygx5ktY9H3oKr0HAP908SRd9zJShC0nxEHNEqh2oH2FTMlWPXPYFYAA",
  },
  "belle-rose": {
    src: "/projects/belle-rose.webp",
    width: 1600,
    height: 782,
    blurDataURL:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADwAQCdASoQAAgAA4BaJZwAAudlwmu3HAAA/vlI+kSQOnKLUam5vtWERBdGBPMqKnM9bkWIU5A4AA==",
  },
  "conectando-leitores": {
    src: "/projects/conectando-leitores.webp",
    width: 1600,
    height: 846,
    blurDataURL:
      "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAADwAQCdASoQAAgAA4BaJbACdAEPdoLNJwgA/uvB78OKN7TzQkHxZH20xor7+l3QBEni0saWT25VTgSK5ILocdRv829/CZr1HGRrMCLBzmhgj4zgdcHAxG1SgAA=",
  },
} as const satisfies Record<string, ProjectImage>;

export type ProjectImageKey = keyof typeof PROJECT_IMAGES;
