export const textStyles = {
  blockquote: {
    fontSize: "var(--text-lg)",
    lineHeight: "var(--text-lg--line-height)",
    fontWeight: "var(--font-weight-normal)",
    fontStyle: "italic",
  },
  preamble: {
    fontSize: "var(--text-lg)",
    lineHeight: "var(--text-lg--line-height)",
    fontWeight: "var(--font-weight-normal)",
  },
  bodyDefault: {
    fontSize: "var(--text-base)",
    lineHeight: "var(--text-base--line-height)",
    fontWeight: "var(--font-weight-normal)",
  },
  bodySmall: {
    fontSize: "var(--text-sm)",
    lineHeight: "var(--text-sm--line-height)",
    fontWeight: "var(--font-weight-normal)",
  },
  bodyInfoText: {
    fontSize: "var(--text-sm)",
    lineHeight: "var(--text-base--line-height)",
    fontWeight: "var(--font-weight-medium)",
  },
  bodyTiny: {
    fontSize: "var(--text-xs)",
    lineHeight: "var(--text-xs--line-height)",
    fontWeight: "var(--font-weight-normal)",
  },
};

export type TextStyle = keyof typeof textStyles;
