import type { CSSProperties } from "react";

/**
 * Shared CSS-mask styles for Sweco design-system icons. The SVG is rendered
 * via `mask-image` so the icon inherits the surrounding text color through
 * `currentColor`. Dimensions are locked (with `flex: none`) so flex/grid
 * containers can't stretch or shrink the icon and trigger antialiasing.
 */
export function iconMaskStyles(
  url: string,
  size: string = "1.5rem", // 24px
): CSSProperties {
  return {
    display: "inline-block",
    width: size,
    height: size,
    flex: "none",
    backgroundColor: "currentColor",
    WebkitMaskImage: `url("${url}")`,
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    WebkitMaskSize: "contain",
    maskImage: `url("${url}")`,
    maskRepeat: "no-repeat",
    maskPosition: "center",
    maskSize: "contain",
  };
}

