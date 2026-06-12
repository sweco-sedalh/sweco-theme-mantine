import type { HTMLAttributes } from "react";

import searchSvg from "../assets/search.svg";
import { iconMaskStyles } from "./iconMaskStyles";

/**
 * Sweco magnifying-glass (search) icon — matches the Sweco design system.
 * Rendered as a CSS mask so it inherits the surrounding text color via
 * `currentColor`. Native size 24×24, locked (no scaling tricks).
 */
export const SearchIcon = ({
  style,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => (
  <span
    aria-hidden
    {...props}
    style={{ ...iconMaskStyles(searchSvg), ...style }}
  />
);
