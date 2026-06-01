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
  Text,
  Timeline,
  Tooltip,
} from "@mantine/core";

export { SwecoLogo } from "./components/SwecoLogo.tsx";
export { Header } from "./components/Header.tsx";
export { PrimaryButton, SecondaryButton, TertiaryButton } from "./components/Button";
import { textStyles } from "./textStyles.tsx";
import type { TextStyle } from "./textStyles.tsx";

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
  | "error"
  | (string & {});

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedColor, MantineColorsTuple>;
  }
  export interface MantineThemeOther {
    secondaryColor: "green" | "blue" | "peach" | "sand";
  }
  export interface TextProps {
    variant?: TextStyle;
  }
}

export const theme = createTheme({
  primaryColor: "gray",
  primaryShade: 4,
  defaultRadius: 4,
  radius: {
    pill: "9999px", // Usage: Button, Search field
    md: "4px", // Forms, Input, Select, Choice chip, Checkbox, Tooltip, Dropdowns, Toast
    sm: "2px", // Modal dialogs, Link body text hover, focus-visible
  },
  autoContrast: true,
  fontFamily:
    "Sweco Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif",
  headings: {
    fontFamily:
      "Sweco Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif",
    sizes: {
      h1: { fontWeight: "400", fontSize: "3.5rem", lineHeight: "5rem" },
      h2: { fontWeight: "400", fontSize: "2.5rem", lineHeight: "3rem" },
      h3: { fontWeight: "400", fontSize: "2rem", lineHeight: "2.5rem" },
      h4: { fontWeight: "400", fontSize: "1.5rem", lineHeight: "2rem" },
      h5: { fontWeight: "500", fontSize: "1.125rem", lineHeight: "1.5rem" },
      h6: { fontWeight: "500", fontSize: "1rem", lineHeight: "1.5rem" },
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
      "#fff8e1",
      "#ffe1a3",
      "#ffd066",
      "#ffc233",
      "#ffb300",
      "#cd9e08",
      "#a67c00",
      "#8c6a00",
      "#735800",
      darken("#735800", 0.1),
    ],
    success: [
      "#eef9e9",
      "#d6eecc",
      "#bde3af",
      "#a2d191",
      "#87be73",
      "#6da35a",
      "#538840",
      "#497838",
      "#3f6730",
      darken("#3f6730", 0.1),
    ],
    error: [
      "#fbeaea",
      "#f5c2c2",
      "#ee9a9a",
      "#e66e6e",
      "#b32f2f", // index 4 — used by filled / outline / light variants
      "#871c1c",
      "#770f0f",
      "#660707",
      "#4d0303",
      "#330000",
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
  spacing: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
  fontSizes: {
    xs: "0.75rem",   // 12px
    sm: "0.875rem",  // 14px
    md: "1rem",      // 16px
    lg: "1.125rem",  // 18px
    xl: "1.25rem",   // 20px
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65",
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
      vars: () => ({
        root: {
          "--chip-bg": "var(--mantine-color-green-2)",
          "--chip-color": "var(--mantine-color-text)",
          "--chip-hover": "var(--mantine-color-green-2)",
          "--chip-radius": "var(--mantine-radius-md)",
          "--chip-fz": "var(--mantine-font-size-md)",
        },
      }),
    }),
    Stepper: Stepper.extend({
      defaultProps: {
        color: "green",
      },
    }),
    Tooltip: Tooltip.extend({
      styles: () => ({
        tooltip: {
          "box-shadow": "var(--mantine-shadow-lg)",
        },
        arrow: {
          "box-shadow": "var(--mantine-shadow-lg)",
        },
      }),
      defaultProps: {
        color: "white",
        arrowSize: 8,
        radius: "md",
        multiline: true,
        withArrow: true,
      },
    }),
    Button: Button.extend({
      classNames: (_theme, props) => {
        if (props.variant === "quaternary") return { root: "btn-quaternary" };
        if (props.variant === "warning") return { root: "btn-warning" };
        return { root: "" };
      },
      styles: (_theme, props) => ({
        label: {
          fontWeight: "500",
        },
        root: {
          transition:
            "background-color var(--default-sweco-transition), color var(--default-sweco-transition), border-color var(--default-sweco-transition), outline-color var(--default-sweco-transition)",
          ...(props.variant === "outline" ? { borderWidth: "2px" } : {}),
        },
      }),
      vars: () => ({
        root: {
          "--button-hover": "var(--mantine-color-green-2)",
          "--button-color": "var(--mantine-color-text)",
        },
      }),
      defaultProps: {
        radius: "xl",
      },
    }),
    Timeline: Timeline.extend({
      defaultProps: {
        color: "green",
      },
    }),
    Text: Text.extend({
      styles: (_theme, props) => ({
        root: textStyles[props.variant as keyof typeof textStyles],
      }),
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
      "--mantine-color-error": "var(--mantine-color-alert-5)",
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
