import type { HTMLAttributes } from "react";
import chevronDownSvg from "../assets/chevron-down.svg";
import { iconMaskStyles } from "./iconMaskStyles";

/**
 * Sweco chevron-down icon — 24×24 design-system icon.
 * Rendered as a CSS mask so it inherits surrounding text color via `currentColor`.
 */
export const ChevronDownIcon = ({
  style,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => (
  <span
    aria-hidden
    {...props}
    style={{ ...iconMaskStyles(chevronDownSvg), ...style }}
  />
);

