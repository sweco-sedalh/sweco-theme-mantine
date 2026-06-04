import type { HTMLAttributes } from "react";

import searchSvg from "../assets/search.svg";

/**
 * Sweco magnifying-glass (search) icon — matches the Sweco design system.
 *
 * Rendered as a CSS mask so it inherits the surrounding text color via
 * `currentColor`, just like any FontAwesome / inline-SVG icon.
 */
export const SearchIcon = ({
  style,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => {
  const maskUrl = `url("${searchSvg}")`;
  return (
    <span
      aria-hidden
      {...props}
      style={{
        display: "inline-block",
        width: "1.5rem",
        height: "1.5rem",
        backgroundColor: "currentColor",
        WebkitMaskImage: maskUrl,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        WebkitMaskSize: "contain",
        maskImage: maskUrl,
        maskRepeat: "no-repeat",
        maskPosition: "center",
        maskSize: "contain",
        ...style,
      }}
    />
  );
};
