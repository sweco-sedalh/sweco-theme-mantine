export const textStyles = {
  blockquote: {
    fontSize: "var(--sweco-text-md)",
    lineHeight: "var(--sweco-text-md-line-height)",
    fontWeight: "var(--sweco-font-weight-normal)",
    fontStyle: "italic",
  },
  preamble: {
    fontSize: "var(--sweco-text-md)",
    lineHeight: "var(--sweco-text-md-line-height)",
    fontWeight: "var(--sweco-font-weight-normal)",
  },
  bodyDefault: {
    fontSize: "var(--sweco-text-base)",
    lineHeight: "var(--sweco-text-base-line-height)",
    fontWeight: "var(--sweco-font-weight-normal)",
  },
  bodySmall: {
    fontSize: "var(--sweco-text-sm)",
    lineHeight: "var(--sweco-text-sm-line-height)",
    fontWeight: "var(--sweco-font-weight-normal)",
  },
  bodyInfoText: {
    fontSize: "var(--sweco-text-sm)",
    lineHeight: "var(--sweco-text-base-line-height)",
    fontWeight: "var(--sweco-font-weight-medium)",
  },
  bodyTiny: {
    fontSize: "var(--sweco-text-xs)",
    lineHeight: "var(--sweco-text-xs-line-height)",
    fontWeight: "var(--sweco-font-weight-normal)",
  },
};

export type TextStyle = keyof typeof textStyles;
