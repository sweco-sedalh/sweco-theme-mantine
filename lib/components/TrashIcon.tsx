import type { HTMLAttributes } from "react";
import trashSvg from "../assets/trash.svg";
import { iconMaskStyles } from "./iconMaskStyles";

/**
 * Sweco trash/delete icon — 24×24 design-system icon.
 * Rendered as a CSS mask so it inherits surrounding text color via `currentColor`.
 */
export const TrashIcon = ({
  style,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => (
  <span
    aria-hidden
    {...props}
    style={{ ...iconMaskStyles(trashSvg), ...style }}
  />
);
