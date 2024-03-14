import {
  Code,
  createTheme,
  CSSVariablesResolver,
  defaultCssVariablesResolver,
  Drawer,
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
      "#c3c2c0",
      "#e2e0da",
      "#ebeae5",
      "#f3f3f0",
      "#f9f9f8",
    ],
    green: [
      "#7a9b62",
      "#86AE5D",
      "#91C059",
      "#9dd354",
      "#AAD96B",
      "#B7DF81",
      "#c4e598",
      "#CFEAAC",
      "#DBEFC0",
      "#e6f4d4",
    ],
    blue: [
      "#8595af",
      "#99AAC9",
      "#ACBFE3",
      "#c0d4fd",
      "#C8DAFD",
      "#D1DFFE",
      "#d9e5fe",
      "#E0EAFE",
      "#E8EFFE",
      "#eff4fe",
    ],
    ochre: [
      "#a48730",
      "#B79C3E",
      "#CBB04D",
      "#dec55b",
      "#E2CD71",
      "#E7D487",
      "#ebdc9d",
      "#EFE3B0",
      "#F3E9C3",
      "#f7f0d6",
    ],
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
    Drawer: Drawer.extend({
      defaultProps: {
        closeButtonProps: {
          size: "lg",
        },
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
      "--mantine-color-anchor": `var(--mantine-color-${theme.other.secondaryColor}-3)`,
      "--mantine-color-dimmed": "var(--mantine-color-gray-3)",
      "--mantine-color-gray-filled": "var(--mantine-color-gray-2)",
      "--mantine-color-gray-filled-hover": "var(--mantine-color-gray-1)",
      "--mantine-color-green-filled-hover": "var(--mantine-color-green-2)",
      "--mantine-color-green-filled": "var(--mantine-color-green-3)",
      "--mantine-color-blue-filled-hover": "var(--mantine-color-blue-2)",
      "--mantine-color-blue-filled": "var(--mantine-color-blue-3)",
      "--mantine-color-ochre-filled-hover": "var(--mantine-color-ochre-2)",
      "--mantine-color-ochre-filled": "var(--mantine-color-ochre-3)",
      "--table-border-color": "var(--mantine-color-gray-6)",
      "--table-striped-color": "var(--mantine-color-gray-8)",
      "--table-highlight-on-hover-color": "var(--mantine-color-gray-7)",
      "--tooltip-bg": "var(--mantine-color-gray-filled)",
    },
    dark: {
      ...clearColors(default_.dark),
    },
  };
};
