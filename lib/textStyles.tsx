export const textStyles = {
  blockquote: {
    fontSize: "1.5rem",
    lineHeight: "2rem",
    fontWeight: 400,
    fontStyle: "italic",
  },
  preamble: {
    fontSize: "1.5rem",
    lineHeight: "2rem",
    fontWeight: 400,
  },
  bodyDefault: {
    fontSize: "1rem",
    lineHeight: "1.5rem",
    fontWeight: 400,
  },
  bodySmall: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: 400,
  },
  bodyInfoText: {
    fontSize: "0.875 rem",
    lineHeight: "1.5rem",
    fontWeight: 500,
  },
  bodyTiny: {
    fontSize: "0.75rem",
    lineHeight: "1.25rem",
    fontWeight: 400,
  },
};

export type TextStyle = keyof typeof textStyles;
