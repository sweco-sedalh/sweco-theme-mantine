import {
  Blockquote,
  Button,
  Checkbox,
  Chip,
  createTheme,
  CSSVariablesResolver,
  darken,
  defaultCssVariablesResolver,
  defaultVariantColorsResolver,
  Drawer,
  MantineColorsTuple,
  Mark,
  MenuItem,
  Modal,
  ModalBody,
  ModalHeader,
  ModalTitle,
  Pagination,
  Radio,
  SegmentedControl,
  Slider,
  Stepper,
  Switch,
  Timeline,
} from "@mantine/core";

export { SwecoLogo } from "./components/SwecoLogo.tsx";
export { Header } from "./components/Header.tsx";

import "./style.layer.css";

export type ExtendedColor =
  | "white"
  | "gray"
  | "green"
  | "blue"
  | "peach"
  | "sand"
  | "alert"
  | "warning"
  | "success"
  | (string & {});

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedColor, MantineColorsTuple>;
  }
  export interface MantineThemeOther {
    secondaryColor: "green" | "blue" | "peach" | "sand";
  }
}

export const theme = createTheme({
  primaryColor: "gray",
  primaryShade: 4,
  defaultRadius: 4,
  autoContrast: true,
  fontFamily:
    "Sweco Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif",
  headings: {
    fontFamily:
      "Sweco Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif",
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
      "#f2f2f2", // official
      "#eaeaea",
      "#e1e1e1", // official
      "#cacaca",
      "#b2b2b2", // official
      "#858484",
      "#575656", // official
      "#343434",
      "#111111", // official
      "#000000",
    ],
    green: [
      "#eef9e9", // official
      "#d6eecc",
      "#bde3af", // official
      "#a2d191",
      "#87be73", // official
      "#6da35a",
      "#538840", // official
      "#497838",
      "#3f6730", // official
      darken("#3f6730", 0.1),
    ],
    blue: [
      "#f3f8fc", // official
      "#e5eef7",
      "#d6e4f1", // official
      "#b7d1e7",
      "#98bddc", // official
      "#699dce",
      "#3a7dbf", // official
      "#325d89",
      "#293c53", // official
      darken("#293c53", 0.1),
    ],
    peach: [
      "#fcf3f0", // official
      "#f5dacf",
      "#eec1ae", // official
      "#e6a386",
      "#de845d", // official
      "#b36848",
      "#874c33", // official
      "#773d30",
      "#662d2d", // official
      darken("#662d2d", 0.1),
    ],
    sand: [
      "#f7f6ed", // official
      "#e7e2ce",
      "#d7cdaf", // official
      "#cfc096",
      "#c6b37c", // official
      "#afa27a",
      "#989077", // official
      "#85806d",
      "#727063", // official
      darken("#727063", 0.1),
    ],
    alert: [
      "#fbeaea", // lightest
      "#f5c2c2",
      "#ee9a9a", // official
      "#e66e6e",
      "#de4242", // official
      "#b32f2f",
      "#871c1c", // official
      "#770f0f",
      "#660707", // official
      darken("#660707", 0.1),
    ],
    warning: [
      "#fff8e1", // lightest
      "#ffe1a3",
      "#ffd066", // official
      "#ffc233",
      "#ffb300", // official
      "#cd9e08",
      "#a67c00", // official
      "#8c6a00",
      "#735800", // official
      darken("#735800", 0.1),
    ],
    success: [
      "#eef9e9", // official
      "#d6eecc",
      "#bde3af", // official
      "#a2d191",
      "#87be73", // official
      "#6da35a",
      "#538840", // official
      "#497838",
      "#3f6730", // official
      darken("#3f6730", 0.1),
    ],
  },
  shadows: {
    sm: "0 .3px .9px var(--sweco-shadow-color-1a), 0 1.5px 3.6px var(--sweco-shadow-color-1b)",
    md: "0 .6px 1.8px var(--sweco-shadow-color-1a), 0 3.2px 7.2px var(--sweco-shadow-color-1b)",
    lg: "0 1.2px 3.6px var(--sweco-shadow-color-1a), 0 6.4px 14.4px var(--sweco-shadow-color-1b)",
    xl: "0 4.8px 14.4px var(--sweco-shadow-color-2a), 0 25.6px 57.6px var(--sweco-shadow-color-2b)",
    inset:
      "inset 0 .6px 1.8px var(--sweco-shadow-color-1a), inset 0 3.2px 7.2px var(--sweco-shadow-color-1b)",
  },
  components: {
    Mark: Mark.extend({
      defaultProps: {
        color: "gray",
      },
    }),
    Drawer: Drawer.extend({
      defaultProps: {
        closeButtonProps: {
          size: "lg",
        },
      },
    }),
    Blockquote: Blockquote.extend({
      vars: () => ({
        root: {
          "--bq-bd": "transparent",
          "--bq-bg-light": "transparent",
          "--bq-bg-dark": "transparent",
        },
      }),
    }),
    Modal: Modal.extend({
      defaultProps: {
        closeButtonProps: {
          size: "lg",
        },
      },
    }),
    ModalHeader: ModalHeader.extend({
      defaultProps: {},
    }),
    ModalBody: ModalBody.extend({
      defaultProps: {
        style: {},
      },
    }),
    ModalTitle: ModalTitle.extend({
      defaultProps: {
        fw: 400,
        fz: 24,
      },
    }),
    Pagination: Pagination.extend({
      defaultProps: {
        radius: "xl",
      },
    }),
    MenuItem: MenuItem.extend({
      defaultProps: {
        fz: 16,
      },
    }),
    Checkbox: Checkbox.extend({
      defaultProps: {
        color: "green",
      },
    }),
    Radio: Radio.extend({
      defaultProps: {
        color: "green",
      },
    }),
    Switch: Switch.extend({
      defaultProps: {
        color: "green",
      },
    }),
    SegmentedControl: SegmentedControl.extend({
      defaultProps: {
        color: "green",
      },
    }),
    Slider: Slider.extend({
      defaultProps: {
        color: "green",
      },
    }),
    Chip: Chip.extend({
      defaultProps: {
        color: "green",
      },
    }),
    Stepper: Stepper.extend({
      defaultProps: {
        color: "green",
      },
    }),
    Button: Button.extend({
      defaultProps: {
        radius: "xl",
      },
    }),
    Timeline: Timeline.extend({
      defaultProps: {
        color: "green",
      },
    }),
  },
  other: {
    secondaryColor: "green",
  },
  variantColorResolver: (input) => {
    if (input.variant === "outline" && input.color === "gray") {
      return {
        border: "1px solid var(--mantine-color-text)",
        color: "var(--mantine-color-text)",
        background: "transparent",
        hover: "var(--mantine-primary-color-light-hover)",
      };
    }
    return defaultVariantColorsResolver(input);
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

/**
 * Remove variables for the built-in colors - they are not available in this theme
 */
function clearColors(input: Record<string, string>): Record<string, string> {
  return Object.fromEntries(
    Object.entries(input).filter(
      ([key, _]) =>
        !BUILTIN_COLORS.some((c) => key.startsWith(`--mantine-color-${c}-`)),
    ),
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
        ]),
      ),
    },
    light: {
      ...clearColors(default_.light),
      "--mantine-color-anchor": `var(--mantine-color-${theme.other.secondaryColor}-${theme.primaryShade})`,
      "--sweco-shadow-color-1a": "#0000001a",
      "--sweco-shadow-color-1b": "#00000021",
      "--sweco-shadow-color-2a": "#0000002e",
      "--sweco-shadow-color-2b": "#00000038",
      "--mantine-color-error": `var(--mantine-color-alert-${theme.primaryShade})`,
      //      "--mantine-color-default-border": "var(--mantine-color-gray-5)",
      //      "--mantine-color-default-hover": "var(--mantine-color-gray-8)",
      //      "--mantine-color-dimmed": "var(--mantine-color-gray-3)",
      //      "--mantine-color-gray-filled": "var(--mantine-color-gray-2)",
      //      "--mantine-color-gray-filled-hover": "var(--mantine-color-gray-1)",
      //      "--mantine-color-gray-light": "var(--mantine-color-gray-10)",
      //      "--mantine-color-gray-light-hover": "var(--mantine-color-gray-9)",
      //      "--mantine-color-gray-light-color": "var(--mantine-color-gray-10)",
      //      "--mantine-color-green-filled-hover": "var(--mantine-color-green-2)",
      //      "--mantine-color-green-filled": "var(--mantine-color-green-3)",
      //      "--mantine-color-blue-filled-hover": "var(--mantine-color-blue-2)",
      //      "--mantine-color-blue-filled": "var(--mantine-color-blue-3)",
      //      "--mantine-color-peach-filled-hover": "var(--mantine-color-peach-2)",
      //      "--mantine-color-peach-filled": "var(--mantine-color-peach-3)",
      //      "--mantine-color-sand-filled-hover": "var(--mantine-color-sand-2)",
      //      "--mantine-color-sand-filled": "var(--mantine-color-sand-3)",
      //      "--table-border-color": "var(--mantine-color-gray-6)",
      //      "--table-striped-color": "var(--mantine-color-gray-8)",
      //      "--table-highlight-on-hover-color": "var(--mantine-color-gray-7)",
      //      "--tooltip-bg": "var(--mantine-color-gray-filled)",
    },
    dark: {
      ...clearColors(default_.dark),
      "--mantine-color-anchor": `var(--mantine-color-${theme.other.secondaryColor}-${theme.primaryShade})`,
      "--sweco-shadow-color-1a": "#ffffff1a",
      "--sweco-shadow-color-1b": "#ffffff21",
      "--sweco-shadow-color-2a": "#ffffff2e",
      "--sweco-shadow-color-2b": "#ffffff38",
      "--mantine-color-error":
        "color-mix(in srgb, var(--mantine-color-alert-8) 70%, red)",
      "--mantine-color-alert-light-color":
        "color-mix(in srgb, var(--mantine-color-alert-8) 70%, red)",
      "--mantine-color-green-filled": "var(--mantine-color-green-6)",
      "--mantine-color-green-filled-hover": "var(--mantine-color-green-5)",
      "--mantine-color-blue-filled": "var(--mantine-color-blue-6)",
      "--mantine-color-blue-filled-hover": "var(--mantine-color-blue-5)",
      "--mantine-color-peach-filled": "var(--mantine-color-peach-6)",
      "--mantine-color-peach-filled-hover": "var(--mantine-color-peach-5)",
      "--mantine-color-sand-filled": "var(--mantine-color-sand-6)",
      "--mantine-color-sand-filled-hover": "var(--mantine-color-sand-5)",
      "--mantine-color-green-outline": "var(--mantine-color-green-6)",
      "--mantine-color-green-outline-hover": "var(--mantine-color-green-9)",
      "--mantine-color-blue-outline": "var(--mantine-color-blue-6)",
      "--mantine-color-blue-outline-hover": "var(--mantine-color-blue-9)",
      "--mantine-color-peach-outline": "var(--mantine-color-peach-6)",
      "--mantine-color-peach-outline-hover": "var(--mantine-color-peach-9)",
      "--mantine-color-sand-outline": "var(--mantine-color-sand-6)",
      "--mantine-color-sand-outline-hover": "var(--mantine-color-sand-9)",
      "--mantine-color-alert-outline": "var(--mantine-color-alert-6)",
      "--mantine-color-alert-outline-hover":
        "color-mix(in srgb, var(--mantine-color-alert-9) 60%, black)",
      "--mantine-color-warning-outline": "var(--mantine-color-warning-6)",
      "--mantine-color-warning-outline-hover":
        "color-mix(in srgb, var(--mantine-color-warning-9) 60%, black)",
    },
  };
};
