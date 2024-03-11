import {
  Code,
  createTheme,
  CSSVariablesResolver,
  defaultCssVariablesResolver,
  MantineColorsTuple,
  Mark,
  Modal,
  ModalBody,
  ModalHeader,
  ModalTitle,
} from "@mantine/core";

export { SwecoLogo } from "./components/SwecoLogo.tsx";
export { Header } from "./components/Header.tsx";

import "./style.layer.css";

type ExtendedColor =
  | "white"
  | "gray"
  | "green"
  | "blue"
  | "ochre"
  | "alert"
  | "warning"
  | "success"
  | (string & {});

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedColor, MantineColorsTuple>;
  }
  export interface MantineThemeOther {
    secondaryColor: "green" | "blue" | "ochre";
  }
}

export const theme = createTheme({
  primaryColor: "gray",
  primaryShade: 1,
  defaultRadius: 0,
  fontFamily:
    "Sweco Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif",
  headings: {
    fontFamily:
      "Sweco Sans Medium,Sweco Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif",
    sizes: {
      h1: { fontWeight: "400", fontSize: "2.25rem", lineHeight: "2.625rem" },
      h2: { fontWeight: "400", fontSize: "1.75rem", lineHeight: "2.25rem" },
      h3: { fontWeight: "400", fontSize: "1.5rem", lineHeight: "1.75rem" },
      h4: { fontWeight: "400", fontSize: "1.25rem", lineHeight: "1.5rem" },
      h5: { fontWeight: "400", fontSize: "1rem", lineHeight: "1.5rem" },
      h6: { fontWeight: "400", fontSize: ".75rem", lineHeight: "1rem" },
    },
  },
  colors: {
    white: [
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
    ],
    gray: [
      "#000000",
      "#202021",
      "#3f3f42",
      "#727274",
      "#a4a4a6",
      "#C3C2C0",
      "#e2e0da",
      "#EBEAE5",
      "#f3f3f0",
      "#F9F9F8",
    ],
    green: ["#7a9b62", "#9dd354", "#c4e598", "#e6f4d4"] as any,
    blue: ["#8595af", "#c0d4fd", "#d9e5fe", "#eff4fe"] as any,
    ochre: ["#a48730", "#dec55b", "#ebdc9d", "#f7f0d6"] as any,
    alert: [
      "#821307",
      "#821307",
      "#821307",
      "#821307",
      "#821307",
      "#821307",
      "#821307",
      "#821307",
      "#821307",
      "#821307",
    ],
    warning: [
      "#a48730",
      "#a48730",
      "#a48730",
      "#a48730",
      "#a48730",
      "#a48730",
      "#a48730",
      "#a48730",
      "#a48730",
      "#a48730",
    ],
    success: [
      "#7a9b62",
      "#7a9b62",
      "#7a9b62",
      "#7a9b62",
      "#7a9b62",
      "#7a9b62",
      "#7a9b62",
      "#7a9b62",
      "#7a9b62",
      "#7a9b62",
    ],
  },
  components: {
    Code: Code.extend({
      defaultProps: {
        color: "gray.8",
        c: "ochre.0",
      },
    }),
    Mark: Mark.extend({
      defaultProps: {
        color: "ochre",
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        closeButtonProps: {
          size: "lg",
        },
      },
    }),
    ModalHeader: ModalHeader.extend({
      defaultProps: {
        bg: "gray",
        style: { "--mb-padding": "0.5rem", "--_pl": "1rem", "--_pr": "1rem" },
      },
    }),
    ModalBody: ModalBody.extend({
      defaultProps: {
        style: {
          "--_pt": "var(--mantine-spacing-md)",
        },
      },
    }),
    ModalTitle: ModalTitle.extend({
      defaultProps: {
        c: "white",
        fw: 400,
        ff: "Sweco Sans Medium",
        fz: "1.25rem",
      },
    }),
  },
  other: {
    secondaryColor: "green",
  },
});

const BUILTIN_COLORS = [
  "red",
  "pink",
  "grape",
  "violet",
  "indigo",
  "cyan",
  "teal",
  "lime",
  "yellow",
  "orange",
];
function clearColors(input: Record<string, string>): Record<string, string> {
  return Object.fromEntries(
    Object.entries(input).filter(
      ([key]) =>
        !BUILTIN_COLORS.some((c) => key.startsWith(`--mantine-color-${c}-`))
    )
  );
}

export const cssVariablesResolver: CSSVariablesResolver = (theme) => {
  const default_ = defaultCssVariablesResolver(theme);
  return {
    variables: {
      ...clearColors(default_.variables),
      "--mantine-secondary-color-filled": `var(--mantine-color-${theme.other.secondaryColor}-filled)`,
      "--mantine-secondary-color-filled-hover": `var(--mantine-color-${theme.other.secondaryColor}-filled-hover)`,
      "--mantine-secondary-color-light": `var(--mantine-color-${theme.other.secondaryColor}-light)`,
      "--mantine-secondary-color-light-hover": `var(--mantine-color-${theme.other.secondaryColor}-light-hover)`,
      "--mantine-secondary-color-light-color": `var(--mantine-color-${theme.other.secondaryColor}-light-color)`,
      ...Object.fromEntries(
        theme.colors[theme.other.secondaryColor].map((_, i) => [
          `--mantine-secondary-color-${i}`,
          `var(--mantine-color-${theme.other.secondaryColor}-${i})`,
        ])
      ),
    },
    light: {
      ...clearColors(default_.light),
      "--mantine-color-error": "var(--mantine-color-alert-2)",
      "--mantine-color-default-border": "var(--mantine-color-gray-5)",
      "--mantine-color-default-hover": "var(--mantine-color-gray-8)",
      "--mantine-color-anchor": `var(--mantine-color-${theme.other.secondaryColor}-1)`,
      "--mantine-color-dimmed": "var(--mantine-color-gray-3)",
      "--mantine-color-gray-filled": "var(--mantine-color-gray-2)",
      "--mantine-color-gray-filled-hover": "var(--mantine-color-gray-1)",
      "--mantine-color-green-filled-hover": "#85b93e",
    },
    dark: {
      ...clearColors(default_.dark),
    },
  };
};
