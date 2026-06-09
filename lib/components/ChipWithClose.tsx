import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { CloseButton, type MantineSize } from "@mantine/core";

export interface ChipWithCloseProps {
  /** Chip label content */
  children: ReactNode;
  /** Called when the close button is clicked */
  onRemove: () => void;
  /** Visual size — `"sm"` = 32 px, `"md"` (default) = 40 px */
  size?: MantineSize;
  /** Color variant — `"secondary"` uses sand palette */
  variant?: "default" | "secondary";
  /** Extra className appended to the root element */
  className?: string;
  /** Extra inline styles on the root element */
  style?: CSSProperties;
}

/**
 * Removable chip with an actual `<CloseButton>` instead of a CSS
 * pseudo-element hack.  Renders a pill-shaped label + ×-button that
 * inherits the Sweco chip look-and-feel.
 */
export const ChipWithClose = ({
  children,
  onRemove,
  size = "md",
  variant,
  className,
  style,
}: ChipWithCloseProps) => {
  const handleRemove = (e: MouseEvent) => {
    e.stopPropagation();
    onRemove();
  };

  return (
    <span
      className={`chip-with-close${className ? ` ${className}` : ""}`}
      data-size={size}
      data-variant={variant}
      style={style}
    >
      <span className="chip-with-close-label">{children}</span>
      <CloseButton
        size="sm"
        variant="transparent"
        className="chip-with-close-btn"
        onClick={handleRemove}
        aria-label="Remove"
      />
    </span>
  );
};
