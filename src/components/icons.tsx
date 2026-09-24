/** Ícones de traço de 1.6px, no mesmo desenho do toggle de tema. */

type IconProps = { size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": true,
  className: "icon",
});

/** Link que sai do site (nova aba). */
export function ExternalIcon({ size = 14 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path
        d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function CodeIcon({ size = 14 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
    </svg>
  );
}

export function CloseIcon({ size = 16 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
    </svg>
  );
}

export function ChevronIcon({ size = 14, dir }: IconProps & { dir: "left" | "right" }) {
  return (
    <svg {...base(size)}>
      <path
        d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="square"
      />
    </svg>
  );
}
