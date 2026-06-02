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
// Each tuple: indices 0/2/4/6/8 are the official Sweco shades.
// `withDarkest(palette)` appends a darkened 10th step at index 9.
const withDarkest = (p: readonly string[]): MantineColorsTuple =>
  [...p, darken(p[8]!, 0.1)] as unknown as MantineColorsTuple;

const solidWhite: MantineColorsTuple = Array(10).fill(
  "#FFFFFF",
) as unknown as MantineColorsTuple;

const grayBase = [
  "#f2f2f2",
  "#eaeaea",
  "#e1e1e1",
  "#cacaca",
  "#b2b2b2",
  "#858484",
  "#575656",
  "#343434",
  "#111111",
] as const;
const greenBase = [
  "#eef9e9",
  "#d6eecc",
  "#bde3af",
  "#a2d191",
  "#87be73",
  "#6da35a",
  "#538840",
  "#497838",
  "#3f6730",
] as const;
const blueBase = [
  "#f3f8fc",
  "#e5eef7",
  "#d6e4f1",
  "#b7d1e7",
  "#98bddc",
  "#699dce",
  "#3a7dbf",
  "#325d89",
  "#293c53",
] as const;
const peachBase = [
  "#fcf3f0",
  "#f5dacf",
  "#eec1ae",
  "#e6a386",
  "#de845d",
  "#b36848",
  "#874c33",
  "#773d30",
  "#662d2d",
] as const;
const sandBase = [
  "#f7f6ed",
  "#e7e2ce",
  "#d7cdaf",
  "#cfc096",
  "#c6b37c",
  "#afa27a",
  "#989077",
  "#85806d",
  "#727063",
] as const;
const alertBase = [
  "#fbeaea",
  "#f5c2c2",
  "#ee9a9a",
  "#e66e6e",
  "#de4242",
  "#b32f2f",
  "#871c1c",
  "#770f0f",
  "#660707",
] as const;
const warningBase = [
  "#fff8e1",
  "#ffe1a3",
  "#ffd066",
  "#ffc233",
  "#ffb300",
  "#cd9e08",
  "#a67c00",
  "#8c6a00",
  "#735800",
] as const;

const gray: MantineColorsTuple = [
  ...grayBase,
  "#000000",
] as unknown as MantineColorsTuple;
const green = withDarkest(greenBase);
const blue = withDarkest(blueBase);
const peach = withDarkest(peachBase);
const sand = withDarkest(sandBase);
const alert = withDarkest(alertBase);
const warning = withDarkest(warningBase);
// `error` shares the lighter shades with `alert` but uses a shifted darker ramp.
const error: MantineColorsTuple = [
  ...alertBase.slice(0, 4), // 0..3 same as alert
  "#b32f2f", // 4 — used by filled / outline / light variants
  "#871c1c",
  "#770f0f",
  "#660707",
  "#4d0303",
  "#330000",
] as unknown as MantineColorsTuple;

// Components that should all default to the brand green.
// Key = Mantine component name (must match `components` map keys exactly).
const GREEN_DEFAULT_COMPONENTS = {
  Checkbox,
  Radio,
  Switch,
  SegmentedControl,
  Slider,
  Stepper,
  Timeline,
} as const;
const greenDefaults = Object.fromEntries(
  Object.entries(GREEN_DEFAULT_COMPONENTS).map(([name, C]) => [
    name,
    C.extend({ defaultProps: { color: "green" } }),
  ]),
);

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
  fontFamily: "var(--font-sans)",
  headings: {
    fontFamily: "var(--font-sans)",
    sizes: {
      h1: {
        fontWeight: "var(--font-weight-normal)",
        fontSize: "var(--text-4xl)",
        lineHeight: "var(--text-5xl--line-height)",
      },
      h2: {
        fontWeight: "var(--font-weight-normal)",
        fontSize: "var(--text-2xl)",
        lineHeight: "var(--text-2xl--line-height)",
      },
      h3: {
        fontWeight: "var(--font-weight-normal)",
        fontSize: "var(--text-xl)",
        lineHeight: "var(--text-xl--line-height)",
      },
      h4: {
        fontWeight: "var(--font-weight-normal)",
        fontSize: "var(--text-lg)",
        lineHeight: "var(--text-lg--line-height)",
      },
      h5: {
        fontWeight: "var(--font-weight-medium)",
        fontSize: "var(--text-md)",
        lineHeight: "var(--text-md--line-height)",
      },
      h6: {
        fontWeight: "var(--font-weight-medium)",
        fontSize: "var(--text-base)",
        lineHeight: "var(--text-base--line-height)",
      },
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
    xs: "var(--text-xs)", // 12px
    sm: "var(--text-sm)", // 14px
    md: "var(--text-base)", // 16px
    lg: "var(--text-md)", // 18px
    xl: "1.25rem", // 20px — no matching design-system token
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
      defaultProps: {
        fw: "var(--font-weight-normal)",
        fz: "var(--text-lg)",
      },
    }),
    Pagination: Pagination.extend({ defaultProps: { radius: "xl" } }),
    MenuItem: MenuItem.extend({ defaultProps: { fz: "var(--text-base)" } }),
    // Checkbox/Radio/Switch/SegmentedControl/Slider/Stepper/Timeline → color: "green"
    ...greenDefaults,
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
        label: { fontWeight: "var(--font-weight-medium)" },
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
      "--mantine-color-error": "var(--mantine-color-alert-5)",
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
