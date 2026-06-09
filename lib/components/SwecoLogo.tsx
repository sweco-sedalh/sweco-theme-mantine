import { ComponentPropsWithoutRef, FC } from "react";

/**
 * Native viewBox of the Sweco wordmark artwork (114 × 56, aspect ≈ 2.04 : 1).
 * The artwork has built-in horizontal whitespace around the glyphs — kept
 * intentionally so the wordmark has its canonical breathing room (matches
 * `sweco.se`'s rendered logo).
 */
const VIEWBOX_WIDTH = 114;
const VIEWBOX_HEIGHT = 56;
const ASPECT = VIEWBOX_WIDTH / VIEWBOX_HEIGHT;

export interface SwecoLogoProps
  extends Omit<
    ComponentPropsWithoutRef<"svg">,
    "viewBox" | "fill" | "color"
  > {
  /**
   * Pixel height of the rendered logo. Width is derived automatically from
   * the wordmark's native aspect ratio (≈ 2.04 : 1). Defaults to 56 px —
   * matches the canonical Sweco header height.
   *
   * Pass explicit `width` / `height` to override (e.g. the Sweco footer
   * canonical is `width={214} height={96}` — a wider container than the
   * native ratio that lets the wordmark sit centered with extra horizontal
   * breathing room via `preserveAspectRatio="xMidYMid meet"`).
   */
  size?: number;
  /**
   * Render the wordmark in solid black (`#111`). When omitted (and `white`
   * is also omitted) the logo inherits `currentColor` from the surrounding
   * text — pass any CSS color via the parent's `color` to recolor it.
   */
  black?: boolean;
  /**
   * Render the wordmark in solid white. Use this on dark surfaces (e.g.
   * the dark footer) where the surrounding `currentColor` would otherwise
   * make the logo invisible.
   */
  white?: boolean;
}

/**
 * Inline Sweco wordmark — a real `<svg>` (not an `<img>`) so it scales
 * crisply, follows `currentColor`, prints without external assets and
 * never spills styling rules onto the consumer.
 *
 * Everything is emitted as plain SVG attributes — `width`, `height` on the
 * root and `fill` on the paths (`currentColor` by default, or `#111` /
 * `#fff` when `black` / `white` is set). The component never emits an
 * inline `style`.
 */
export const SwecoLogo: FC<SwecoLogoProps> = ({
  size = VIEWBOX_HEIGHT,
  width,
  height,
  black,
  white,
  className,
  ...rest
}) => {
  const finalHeight = height ?? size;
  const finalWidth = width ?? Number(finalHeight) * ASPECT;
  const fill = black ? "#111" : white ? "#fff" : "currentColor";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
      width={finalWidth}
      height={finalHeight}
      role="img"
      aria-label="Sweco"
      className={className ? `sweco-logo ${className}` : "sweco-logo"}
      {...rest}
    >
      <path
        fill={fill}
        d="M93.956 35.298V37.4H81.22v-2.102l6.335-6.332zm4.3-9.246-7.746-.011 5-5.002-1.792-1.758-6.163 6.163-6.198-6.265-1.762 1.796 5.083 5.08h-7.726v2.335h7.691l-5.927 5.86v5.657h17.75V34.25l-5.927-5.86h7.72v-2.335z"
      />
      <path
        fill={fill}
        d="M90.114 18.512a2.514 2.514 0 0 1-2.516 2.516 2.514 2.514 0 1 1 0-5.028 2.513 2.513 0 0 1 2.516 2.512M66.777 29.572c3.328 0 5.104 1.887 5.104 5.214S70.108 40 66.777 40c-3.33 0-5.103-1.997-5.103-5.214s1.776-5.214 5.103-5.214m0 8.43c1.663 0 2.219-1.55 2.219-3.216 0-1.779-.556-3.22-2.219-3.22s-2.332 1.444-2.332 3.22c0 1.665.664 3.217 2.332 3.217M56.792 29.572c.995 0 1.997.221 2.993.443l-.225 2.218q-1.33-.666-2.663-.667c-1.884 0-3.214 1.334-3.214 3.22 0 1.997 1.444 3.217 3.438 3.217.888 0 1.776-.224 2.553-.553l.11 2.107c-.777.222-1.665.443-2.992.443-2.777 0-5.884-1.33-5.884-5.214 0-3.552 2.553-5.214 5.884-5.214M41.587 29.68h7.1v1.886H44.14v2.11h4.215v1.998H44.14v2.218h4.658v1.994h-7.211zM25.165 29.68h2.774l1.22 7.77h.113l1.33-7.77h3.439l1.444 7.77 1.33-7.77h2.664l-2.332 10.206h-3.438l-1.441-7.877-1.334 7.877h-3.548zM20.172 29.572q1.497-.002 2.663.332l-.224 2.105c-.663-.33-1.44-.443-2.218-.443-.667 0-1.887 0-1.887.891 0 1.662 4.886.553 4.886 4.213 0 2.67-2.222 3.33-4.55 3.33-.886 0-2.108-.114-2.993-.443l.224-2.22c.774.331 1.662.666 2.771.666.888 0 1.665-.224 1.665-.999 0-1.886-4.768-.663-4.768-4.329 0-2.442 2.44-3.103 4.437-3.103"
      />
    </svg>
  );
};
