import type { HTMLAttributes } from "react";

import arrowLeftSvg from "../assets/arrow-left.svg";
import arrowRightSvg from "../assets/arrow-right.svg";
import { iconMaskStyles } from "./iconMaskStyles";

/**
 * Sweco arrow icons — slim, fine-stroke 24×24 design-system icons.
 * Rendered as a CSS mask so they inherit the surrounding text color via
 * `currentColor`. Locked at 24×24 — no scaling tricks — to avoid
 * antialiasing artefacts.
 */
export const ArrowLeftIcon = ({
  style,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => (
  <span
    aria-hidden
    {...props}
    style={{ ...iconMaskStyles(arrowLeftSvg), ...style }}
  />
);

export const ArrowRightIcon = ({
  style,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => (
  <span
    aria-hidden
    {...props}
    style={{ ...iconMaskStyles(arrowRightSvg), ...style }}
  />
);

