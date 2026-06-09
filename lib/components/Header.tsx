import { FC, useEffect, useState } from "react";

import { AppShell, AppShellHeaderProps } from "@mantine/core";
import cx from "clsx";

import classes from "./Header.module.css";

/**
 * Canonical height (in pixels) of the Sweco `<Header />`. Pass this to
 * `AppShell` so the layout reserves the matching space:
 *
 * ```tsx
 * <AppShell header={{ height: HEADER_HEIGHT }} … >
 *   <Header>…</Header>
 *   <AppShell.Main>…</AppShell.Main>
 * </AppShell>
 * ```
 *
 * The same value is also exposed as the CSS token `--sweco-header-height`.
 */
export const HEADER_HEIGHT = 56;

export interface HeaderProps extends AppShellHeaderProps {
  /**
   * @deprecated The light/glass surface is now the default. This prop is a
   * no-op kept for backwards compatibility and will be removed in the next
   * MAJOR release.
   */
  light?: boolean;
  /**
   * Auto-hide the header when the user scrolls down and reveal it again on
   * scroll-up ("smart sticky"). Defaults to `true`. Set to `false` for
   * pages where the header must always remain visible.
   *
   * Honors `prefers-reduced-motion`: the slide transition is removed for
   * users who request reduced motion (the header still toggles).
   */
  hideOnScroll?: boolean;
  /**
   * Minimum window scroll-Y (in pixels) before the auto-hide kicks in.
   * Below this threshold the header always stays visible. Defaults to `80`.
   */
  hideThreshold?: number;
  /**
   * Scroll container to observe. Defaults to `window`. Pass an element ref
   * (`.current`) if the page scrolls inside a custom container instead of
   * the window.
   */
  scrollContainer?: HTMLElement | Window | null;
}

/**
 * Sweco application header. Renders an {@link AppShell.Header} with the Sweco
 * glass surface: semi-transparent background with a backdrop blur on screens
 * `≥64rem`, gracefully falling back to a solid surface on smaller screens, in
 * browsers without `backdrop-filter`/`color-mix` support, and when the user
 * has `prefers-reduced-transparency: reduce`.
 *
 * Also implements "smart sticky" behavior — hides on scroll-down and reveals
 * on scroll-up — controllable via the `hideOnScroll` prop.
 */
export const Header: FC<HeaderProps> = ({
  // Destructured to strip the deprecated no-op prop from `...props` so it
  // doesn't leak onto AppShell.Header. See HeaderProps.light above.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  light,
  hideOnScroll = true,
  hideThreshold = 80,
  scrollContainer,
  ...props
}) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!hideOnScroll) {
      setHidden(false);
      return;
    }
    const target: HTMLElement | Window =
      scrollContainer ?? (typeof window !== "undefined" ? window : null!);
    if (!target) return;

    const getY = () =>
      target === window
        ? window.scrollY
        : (target as HTMLElement).scrollTop;

    let lastY = getY();
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = getY();
        if (y < hideThreshold) {
          setHidden(false);
        } else if (y > lastY + 2) {
          setHidden(true);
        } else if (y < lastY - 2) {
          setHidden(false);
        }
        lastY = y;
        ticking = false;
      });
    };

    target.addEventListener("scroll", onScroll, { passive: true });
    return () => target.removeEventListener("scroll", onScroll);
  }, [hideOnScroll, hideThreshold, scrollContainer]);

  return (
    <AppShell.Header
      {...props}
      data-hidden={hidden || undefined}
      className={cx(classes.header, props.className)}
    />
  );
};
