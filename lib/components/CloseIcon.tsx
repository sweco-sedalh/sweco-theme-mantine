import type { HTMLAttributes } from "react";

import closeSvg from "../assets/close.svg";
import { iconMaskStyles } from "./iconMaskStyles";

/**
 * Sweco close (×) icon — matches the design system. Native size 20×20.
 * Rendered as a CSS mask so it inherits the surrounding text color via
 * `currentColor`. Locked size — no scaling tricks.
 */
export const CloseIcon = ({
  style,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => (
  <span
    aria-hidden
    {...props}
    style={{ ...iconMaskStyles(closeSvg, "1.25rem"), ...style }}
  />
);
