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
  Loader,
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
export {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./components/Button";
export { SwecoLoader } from "./components/SwecoLoader.tsx";
import { SwecoLoader } from "./components/SwecoLoader.tsx";
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

// ── Color palettes ─────────────────────────────────────────────────────────
// One explicit tuple per palette. Indices 0/2/4/6/8 are the official Sweco
// shades; the in-between odd indices keep the visual ramp smooth, and index 9
// is a darker shade for dark-mode `filled-hover`/`outline-hover`.

const solidWhite: MantineColorsTuple = Array(10).fill(
  "#FFFFFF",
) as unknown as MantineColorsTuple;

const gray: MantineColorsTuple = [
  "#f2f2f2",
  "#eaeaea",
  "#e1e1e1",
  "#cacaca",
  "#b2b2b2",
  "#858484",
  "#575656",
  "#343434",
  "#111111",
  "#000000",
];

const green: MantineColorsTuple = [
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
];

const blue: MantineColorsTuple = [
  "#f3f8fc",
  "#e5eef7",
  "#d6e4f1",
  "#b7d1e7",
  "#98bddc",
  "#699dce",
  "#3a7dbf",
  "#325d89",
  "#293c53",
  darken("#293c53", 0.1),
];

const peach: MantineColorsTuple = [
  "#fcf3f0",
  "#f5dacf",
  "#eec1ae",
  "#e6a386",
  "#de845d",
  "#b36848",
  "#874c33",
  "#773d30",
  "#662d2d",
  darken("#662d2d", 0.1),
];

const sand: MantineColorsTuple = [
  "#f7f6ed",
  "#e7e2ce",
  "#d7cdaf",
  "#cfc096",
  "#c6b37c",
  "#afa27a",
  "#989077",
  "#85806d",
  "#727063",
  darken("#727063", 0.1),
];

const alert: MantineColorsTuple = [
  "#fbeaea",
  "#f5c2c2",
  "#ee9a9a",
  "#e66e6e",
  "#b32f2f", // filled — darker red per design
  "#871c1c",
  "#770f0f",
  "#660707",
  "#4d0303",
  darken("#4d0303", 0.1),
];

const warning: MantineColorsTuple = [
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
];

// `error` is an alias for `alert` — same palette, kept as a separate key so
// existing call-sites using `color="error"` keep working. The slightly darker
// "filled" shade used by some components comes from the
// `--mantine-color-error` override in cssVariablesResolver below, which
// points at alert-5 (light) / alert-8 mixed with red (dark).
const error = alert;

// Components that all default to the brand green are declared individually
// in the `components` map below (Checkbox, Radio, Switch, SegmentedControl,
// Slider, Stepper, Timeline). Keeping the extends inline makes it obvious
// where to add per-component overrides later.

const FONT_FAMILY =
  '"Sweco Sans", Arial, ui-sans-serif, system-ui, sans-serif, ' +
  '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';

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
  fontFamily: FONT_FAMILY,
  headings: {
    fontFamily: FONT_FAMILY,
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
    white: solidWhite,
    gray,
    green,
    blue,
    peach,
    sand,
    alert,
    warning,
    success: green, // success palette is identical to green
    error,
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
    xxl: "3rem",
    hero: "4rem",
  },
  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    md: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65",
  },
  components: {
    Loader: Loader.extend({
      defaultProps: {
        loaders: { ...Loader.defaultLoaders, sweco: SwecoLoader },
        type: "sweco",
      },
    }),
    Mark: Mark.extend({ defaultProps: { color: "gray" } }),
    Drawer: Drawer.extend({
      defaultProps: { closeButtonProps: { size: "lg" } },
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
      defaultProps: { closeButtonProps: { size: "lg" } },
    }),
    ModalHeader: ModalHeader.extend({ defaultProps: {} }),
    ModalBody: ModalBody.extend({ defaultProps: { style: {} } }),
    ModalTitle: ModalTitle.extend({
      defaultProps: { fw: 400, fz: "1.5rem" },
    }),
    Pagination: Pagination.extend({ defaultProps: { radius: "xl" } }),
    MenuItem: MenuItem.extend({
      defaultProps: { fz: "var(--mantine-font-size-md)" },
    }),
    Checkbox: Checkbox.extend({ defaultProps: { color: "green" } }),
    Radio: Radio.extend({ defaultProps: { color: "green" } }),
    Switch: Switch.extend({ defaultProps: { color: "green" } }),
    SegmentedControl: SegmentedControl.extend({
      defaultProps: { color: "green" },
    }),
    Slider: Slider.extend({ defaultProps: { color: "green" } }),
    Stepper: Stepper.extend({ defaultProps: { color: "green" } }),
    Timeline: Timeline.extend({ defaultProps: { color: "green" } }),
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
    Tooltip: Tooltip.extend({
      styles: () => ({
        tooltip: { "box-shadow": "var(--mantine-shadow-lg)" },
        arrow: { "box-shadow": "var(--mantine-shadow-lg)" },
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
        label: { fontWeight: 500 },
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
        // Mantine's built-in default is "sm" (36px). Sweco design system
        // uses "md" (48px) as the default button height, so override here
        // for any <Button> without an explicit `size` prop.
        size: "md",
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
      ([key]) =>
        !BUILTIN_COLORS.some((c) => key.startsWith(`--mantine-color-${c}-`)),
    ),
  );
}

// ── Secondary-color aliases ────────────────────────────────────────────────
// Mantine exposes `--mantine-primary-color-*` aliases for the primary palette;
// we mirror the same set for the configurable `theme.other.secondaryColor`.
const SECONDARY_ALIAS_SUFFIXES = [
  "filled",
  "filled-hover",
  "light",
  "light-hover",
  "light-color",
] as const;

const buildSecondaryAliases = (secondary: string, shadeCount: number) => ({
  ...Object.fromEntries(
    SECONDARY_ALIAS_SUFFIXES.map((s) => [
      `--mantine-secondary-color-${s}`,
      `var(--mantine-color-${secondary}-${s})`,
    ]),
  ),
  ...Object.fromEntries(
    Array.from({ length: shadeCount }, (_, i) => [
      `--mantine-secondary-color-${i}`,
      `var(--mantine-color-${secondary}-${i})`,
    ]),
  ),
});

// ── Dark-mode color overrides ──────────────────────────────────────────────
// For each themed color, override Mantine's `filled` / `filled-hover` and
// `outline` / `outline-hover` aliases to fit the darker scheme.
const DARK_THEMED_COLORS = ["green", "blue", "peach", "sand"] as const;

const buildDarkFilledOutline = () =>
  Object.fromEntries(
    DARK_THEMED_COLORS.flatMap((c) => [
      [`--mantine-color-${c}-filled`, `var(--mantine-color-${c}-6)`],
      [`--mantine-color-${c}-filled-hover`, `var(--mantine-color-${c}-5)`],
      [`--mantine-color-${c}-outline`, `var(--mantine-color-${c}-6)`],
      [`--mantine-color-${c}-outline-hover`, `var(--mantine-color-${c}-9)`],
    ]),
  );

const SHADOW_VARS = (mode: "light" | "dark") => {
  const c = mode === "light" ? "#000000" : "#ffffff";
  return {
    "--sweco-shadow-color-1a": `${c}1a`,
    "--sweco-shadow-color-1b": `${c}21`,
    "--sweco-shadow-color-2a": `${c}2e`,
    "--sweco-shadow-color-2b": `${c}38`,
  };
};

export const cssVariablesResolver: CSSVariablesResolver = (theme) => {
  const default_ = defaultCssVariablesResolver(theme);
  const secondary = theme.other.secondaryColor;
  const anchorColor = `var(--mantine-color-${secondary}-${theme.primaryShade})`;

  return {
    variables: {
      ...clearColors(default_.variables),
      ...buildSecondaryAliases(secondary, theme.colors[secondary].length),
    },
    light: {
      ...clearColors(default_.light),
      ...SHADOW_VARS("light"),
      "--mantine-color-anchor": anchorColor,
      "--mantine-color-error": "var(--mantine-color-alert-4)",
      "--table-border-color": "var(--mantine-color-gray-2)",
    },
    dark: {
      ...clearColors(default_.dark),
      ...SHADOW_VARS("dark"),
      ...buildDarkFilledOutline(),
      "--mantine-color-anchor": anchorColor,
      "--mantine-color-error":
        "color-mix(in srgb, var(--mantine-color-alert-8) 70%, red)",
      "--mantine-color-alert-light-color":
        "color-mix(in srgb, var(--mantine-color-alert-8) 70%, red)",
      "--mantine-color-alert-outline": "var(--mantine-color-alert-6)",
      "--mantine-color-alert-outline-hover":
        "color-mix(in srgb, var(--mantine-color-alert-9) 60%, black)",
      "--mantine-color-warning-outline": "var(--mantine-color-warning-6)",
      "--mantine-color-warning-outline-hover":
        "color-mix(in srgb, var(--mantine-color-warning-9) 60%, black)",
    },
  };
};
