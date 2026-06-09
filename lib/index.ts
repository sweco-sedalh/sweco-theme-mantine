import {
  ActionIcon,
  Alert,
  Badge,
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
export { SearchIcon } from "./components/SearchIcon.tsx";
export { CloseIcon } from "./components/CloseIcon.tsx";
export { TrashIcon } from "./components/TrashIcon.tsx";
export { ArrowLeftIcon, ArrowRightIcon } from "./components/ArrowIcons.tsx";
export { ChevronDownIcon } from "./components/ChevronDownIcon.tsx";
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
  export interface ButtonProps {
    variant?:
      | "filled"
      | "outline"
      | "light"
      | "subtle"
      | "default"
      | "transparent"
      | "quaternary"
      | "warning"
      | "caution"
      | (string & {});
  }
}

// ── Color palettes ─────────────────────────────────────────────────────────
// One explicit tuple per palette. Indices 0/2/4/6/8 are the official Sweco
// shades; the in-between odd indices keep the visual ramp smooth, and index 9
// is a darker shade for dark-mode `filled-hover`/`outline-hover`.

const solidWhite: MantineColorsTuple = [
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
];

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

// `warning` palette removed — use `sand` for neutral-warm tones.
// `success` palette removed — use `green` directly.

// so Mantine's internal error UI (input error states, etc.) still works.

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
      h1: {
        fontWeight: "var(--sweco-h1-font-weight)",
        fontSize: "var(--sweco-h1-font-size)",
        lineHeight: "var(--sweco-h1-line-height)",
      },
      h2: {
        fontWeight: "var(--sweco-h2-font-weight)",
        fontSize: "var(--sweco-h2-font-size)",
        lineHeight: "var(--sweco-h2-line-height)",
      },
      h3: {
        fontWeight: "var(--sweco-h3-font-weight)",
        fontSize: "var(--sweco-h3-font-size)",
        lineHeight: "var(--sweco-h3-line-height)",
      },
      h4: {
        fontWeight: "var(--sweco-h4-font-weight)",
        fontSize: "var(--sweco-h4-font-size)",
        lineHeight: "var(--sweco-h4-line-height)",
      },
      h5: {
        fontWeight: "var(--sweco-h5-font-weight)",
        fontSize: "var(--sweco-h5-font-size)",
        lineHeight: "var(--sweco-h5-line-height)",
      },
      h6: {
        fontWeight: "var(--sweco-h6-font-weight)",
        fontSize: "var(--sweco-h6-font-size)",
        lineHeight: "var(--sweco-h6-line-height)",
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
  },
  shadows: {
    sm: "0 .3px .9px var(--sweco-shadow-color-1a), 0 1.6px 3.6px var(--sweco-shadow-color-1b)",
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
    "2xl": "3rem",
    "3xl": "4rem",
  },
  fontSizes: {
    xs: "var(--sweco-text-xs)",
    sm: "var(--sweco-text-sm)",
    md: "var(--sweco-text-base)",
    lg: "var(--sweco-text-md)",
    xl: "var(--sweco-text-lg)",
  },
  lineHeights: {
    xs: "var(--sweco-text-xs-line-height)",
    sm: "var(--sweco-text-sm-line-height)",
    md: "var(--sweco-text-base-line-height)",
    lg: "var(--sweco-text-md-line-height)",
    xl: "var(--sweco-text-lg-line-height)",
  },
  components: {
    // ActionIcon xs = 1.875rem (30 px) — matches Button size="xs" height so
    // CircularLink and xs buttons sit on the same baseline.
    ActionIcon: ActionIcon.extend({
      vars: (_theme, props) => {
        if (props.size === "xs") {
          return { root: { "--ai-size": "1.875rem" } };
        }
        return { root: {} };
      },
    }),
    Alert: Alert.extend({
      defaultProps: { variant: "light", radius: "md" },
      // Use the themed `-light` / `-light-color` / `-outline` tokens so the
      // Alert adapts automatically in dark mode (translucent bg + bright text)
      // instead of hardcoding opaque `-0` / `-7` shades that look bad on dark.
      styles: (_theme, props) => {
        const c = props.color;
        if (
          c === "alert" ||
          c === "green" ||
          c === "blue" ||
          c === "peach" ||
          c === "sand"
        ) {
          return {
            root: {
              backgroundColor: `var(--mantine-color-${c}-light)`,
              borderColor: `var(--mantine-color-${c}-outline)`,
              borderWidth: 1,
              borderStyle: "solid",
            },
            title: { color: `var(--mantine-color-${c}-light-color)` },
            message: { color: `var(--mantine-color-${c}-light-color)` },
            closeButton: { color: `var(--mantine-color-${c}-light-color)` },
          };
        }
        return {};
      },
    }),
    Loader: Loader.extend({
      defaultProps: {
        loaders: { ...Loader.defaultLoaders, sweco: SwecoLoader },
        type: "sweco",
      },
    }),
    Mark: Mark.extend({ defaultProps: { color: "gray" } }),
    Badge: Badge.extend({
      styles: () => ({
        root: {
          textTransform: "none",
          fontWeight: "var(--sweco-font-weight-normal)",
        },
      }),
    }),
    Drawer: Drawer.extend({
      defaultProps: { closeButtonProps: { size: "lg" } },
      styles: () => ({
        header: {
          backgroundColor: "var(--mantine-primary-color-7)",
          marginBottom: "var(--mantine-spacing-md)",
          color: "var(--mantine-color-white)",
        },
      }),
    }),
    SegmentedControl: SegmentedControl.extend({
      defaultProps: { color: "green" },
      styles: () => ({
        root: {
          backgroundColor: "transparent",
          border: "1px solid var(--mantine-color-default-border)",
        },
      }),
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
      defaultProps: { closeButtonProps: { size: "lg" }, radius: "sm" },
      styles: () => ({
        content: {
          padding: "var(--mantine-spacing-xl)",
        },
        header: {
          padding: 0,
          minHeight: "unset",
          marginBottom: "var(--mantine-spacing-md)",
        },
        body: {
          padding: 0,
        },
        close: {
          color: "var(--mantine-color-text)",
        },
      }),
    }),
    ModalHeader: ModalHeader.extend({}),
    ModalBody: ModalBody.extend({}),
    ModalTitle: ModalTitle.extend({
      defaultProps: {
        fw: "var(--sweco-h3-font-weight)",
        fz: "var(--sweco-h3-font-size)",
        lh: "var(--sweco-h3-line-height)",
      },
    }),
    Pagination: Pagination.extend({ defaultProps: { radius: "xl" } }),
    MenuItem: MenuItem.extend({
      defaultProps: { fz: "var(--sweco-text-base)" },
    }),
    Checkbox: Checkbox.extend({ defaultProps: { color: "green" } }),
    Radio: Radio.extend({ defaultProps: { color: "green" } }),
    Switch: Switch.extend({
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
          "--chip-hover": "var(--mantine-secondary-color-filled-hover)",
          "--chip-radius": "var(--mantine-radius-md)",
          "--chip-fz": "var(--sweco-text-base)",
        },
      }),
    }),
    Tooltip: Tooltip.extend({
      styles: () => ({
        tooltip: { boxShadow: "var(--mantine-shadow-lg)" },
        arrow: { boxShadow: "var(--mantine-shadow-lg)" },
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
        if (props.variant === "caution") return { root: "btn-caution" };
        return { root: "" };
      },
      styles: (_theme, props) => ({
        label: { fontWeight: "var(--sweco-font-weight-medium)" },
        root: {
          transition:
            "background-color var(--sweco-transition), color var(--sweco-transition), border-color var(--sweco-transition), outline-color var(--sweco-transition)",
          ...(props.variant === "outline" ? { borderWidth: "2px" } : {}),
        },
      }),
      vars: (_theme, props) => {
        // For the default-colored outline button we want to keep the label
        // in the regular text color (the green is only on the border), so
        // override --button-color here. All other cases use Mantine's
        // computed colors from the palette / variantColorResolver.
        const isDefaultColor = !props.color || props.color === "green";
        const isDefaultOutline = props.variant === "outline" && isDefaultColor;
        // Tertiary (variant="light") uses the light green background but
        // the label must stay in the default text color (#111 / gray-8)
        // per Sweco design system, not Mantine's auto green text.
        const isDefaultLight = props.variant === "light" && isDefaultColor;
        return {
          root: {
            ...(isDefaultOutline || isDefaultLight
              ? { "--button-color": "var(--mantine-color-text)" }
              : {}),
          },
        };
      },
      defaultProps: {
        radius: "xl",
        // Mantine's built-in default is "sm" (36px). Sweco design system
        // uses "md" (48px) as the default button height, so override here
        // for any <Button> without an explicit `size` prop.
        size: "md",
        // Sweco design system: buttons are green by default (the brand
        // primary action color). The theme's `primaryColor` stays "gray"
        // for other components, but buttons opt into green explicitly.
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
    // Default outline button (no explicit color, or color="green") gets the
    // brand-green 2px border per Sweco design system, while keeping the text
    // in the default text color (applied via Button `vars` above).
    if (input.variant === "outline" && input.color === "gray") {
      return {
        border: "2px solid var(--mantine-color-green-filled)",
        color: "var(--mantine-color-text)",
        background: "transparent",
        hover: "var(--mantine-secondary-color-filled-hover)", // green.2 = #bde3af
      };
    }
    // Custom variants — base colors set here, detailed styling (underline,
    // hover effects) handled by CSS class names applied via classNames above.
    if (input.variant === "quaternary") {
      return {
        background: "transparent",
        hover: "transparent",
        border: "none",
        color: "var(--mantine-color-text)",
      };
    }
    if (input.variant === "warning") {
      return {
        background: "var(--mantine-color-sand-0)",
        hover: "var(--mantine-color-sand-2)",
        border: "2px solid var(--mantine-color-sand-5)",
        color: "var(--mantine-color-sand-8)",
      };
    }
    if (input.variant === "caution") {
      return {
        background: "transparent",
        hover: "transparent",
        border: "none",
        color: "var(--mantine-color-error)",
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
// `alert` is included so red destructive UI also gets lighter shades on dark.
const DARK_THEMED_COLORS = ["green", "blue", "peach", "sand", "alert"] as const;

// In dark mode every color's lightest shades (0-1) are near-white in the static
// palette and look terrible on dark surfaces.  Replace them with semi-transparent
// tints of the colour's vivid mid-point (shade 5) so they fade into the dark bg
// gracefully instead of clashing with a white solid fill.
// Only shades 0-1 are converted — shade 2+ stays as solid opaque values so they
// remain usable as readable text / border colours (e.g. alert-2 for error text).
const DARK_SHADE_PERCENTS = [10, 20] as const;

const buildDarkLightShades = (secondary: string): Record<string, string> => {
  const colorNames = [
    ...DARK_THEMED_COLORS,
    secondary !== "green" &&
    secondary !== "blue" &&
    secondary !== "peach" &&
    secondary !== "sand"
      ? secondary
      : null,
  ].filter(Boolean) as string[];

  const entries: [string, string][] = [];

  for (const color of colorNames) {
    // Use shade 5 as the vivid anchor; alert's palette runs lighter so use 4.
    const anchor = color === "alert" ? 4 : 5;
    DARK_SHADE_PERCENTS.forEach((pct, idx) => {
      entries.push([
        `--mantine-color-${color}-${idx}`,
        `color-mix(in srgb, var(--mantine-color-${color}-${anchor}) ${pct}%, transparent)`,
      ]);
    });
  }

  // Gray: use white as the anchor so we get subtle white-tinted overlays
  // that work as dividers / zebra-stripe highlights on dark surfaces.
  DARK_SHADE_PERCENTS.forEach((pct, idx) => {
    entries.push([
      `--mantine-color-gray-${idx}`,
      `color-mix(in srgb, var(--mantine-color-white) ${pct}%, transparent)`,
    ]);
  });

  return Object.fromEntries(entries);
};

const buildDarkFilledOutline = () =>
  Object.fromEntries(
    DARK_THEMED_COLORS.flatMap((c) => {
      // Alert uses lighter shades so the colour reads on dark surfaces.
      // filled=3 (#e66e6e): vivid red, reads clearly as "error/alert", white text ~5.2:1 ✓
      // filled-hover=2 (#ee9a9a): lighter on hover, feedback, white text ~3:1 — swap bg/text on hover
      // outline=2 (#ee9a9a): legible as text/border on dark bg ~5.4:1 ✓
      // outline-hover=3: solid vivid red bg on hover ✓
      const isAlert = c === "alert";
      return [
        [
          `--mantine-color-${c}-filled`,
          `var(--mantine-color-${c}-${isAlert ? 3 : 6})`,
        ],
        [
          `--mantine-color-${c}-filled-hover`,
          `var(--mantine-color-${c}-${isAlert ? 2 : 5})`,
        ],
        [
          `--mantine-color-${c}-outline`,
          `var(--mantine-color-${c}-${isAlert ? 2 : 6})`,
        ],
        [
          `--mantine-color-${c}-outline-hover`,
          `var(--mantine-color-${c}-${isAlert ? 3 : 9})`,
        ],
      ];
    }),
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
      "--mantine-color-text": "var(--mantine-color-gray-8)",
      "--mantine-color-error": "var(--mantine-color-alert-4)",
      "--table-border-color": "var(--mantine-color-gray-2)",
      // Table header: one clear shade darker than striped rows so header is
      // always distinguishable. gray-1 (#eaeaea) vs striped near-transparent.
      "--table-header-bg": "var(--mantine-color-gray-1)",
      // Spinner track: subtle light gray matching design (same as gray-2)
      "--loader-track-color": "var(--mantine-color-gray-2)",
      // Override Mantine's auto-computed rgba() light/hover values for all
      // Sweco brand palettes so NavLink, Badge light, etc. use real shade indices
      // and have proper contrast instead of near-transparent rgba backgrounds.
      // ── green (secondary) ──
      [`--mantine-color-${secondary}-light`]: `var(--mantine-color-${secondary}-0)`,
      [`--mantine-color-${secondary}-light-hover`]: `var(--mantine-color-${secondary}-1)`,
      [`--mantine-color-${secondary}-light-color`]: `var(--mantine-color-${secondary}-7)`,
      [`--mantine-color-${secondary}-filled-hover`]: `var(--mantine-color-${secondary}-2)`,
      // ── blue ──
      "--mantine-color-blue-light": "var(--mantine-color-blue-1)",
      "--mantine-color-blue-light-hover": "var(--mantine-color-blue-2)",
      "--mantine-color-blue-light-color": "var(--mantine-color-blue-8)",
      "--mantine-color-blue-filled-hover": "var(--mantine-color-blue-2)",
      // ── peach ──
      "--mantine-color-peach-light": "var(--mantine-color-peach-1)",
      "--mantine-color-peach-light-hover": "var(--mantine-color-peach-2)",
      "--mantine-color-peach-light-color": "var(--mantine-color-peach-8)",
      "--mantine-color-peach-filled-hover": "var(--mantine-color-peach-2)",
      // ── sand ──
      "--mantine-color-sand-light": "var(--mantine-color-sand-1)",
      "--mantine-color-sand-light-hover": "var(--mantine-color-sand-2)",
      "--mantine-color-sand-light-color": "var(--mantine-color-sand-8)",
      "--mantine-color-sand-filled-hover": "var(--mantine-color-sand-2)",
      // ── alert ──
      "--mantine-color-alert-light": "var(--mantine-color-alert-1)",
      "--mantine-color-alert-light-hover": "var(--mantine-color-alert-2)",
      "--mantine-color-alert-light-color": "var(--mantine-color-alert-5)",
      "--mantine-color-alert-filled-hover": "var(--mantine-color-alert-5)",
      // ── gray ──
      "--mantine-color-gray-light": "var(--mantine-color-gray-1)",
      "--mantine-color-gray-light-hover": "var(--mantine-color-gray-2)",
      "--mantine-color-gray-light-color": "var(--mantine-color-gray-8)",
      "--mantine-color-gray-filled-hover": "var(--mantine-color-gray-6)",
    },
    dark: {
      ...clearColors(default_.dark),
      ...SHADOW_VARS("dark"),
      ...buildDarkFilledOutline(),
      ...buildDarkLightShades(secondary),
      "--mantine-color-anchor": anchorColor,
      // Error text/border must be light enough to read on dark surfaces.
      // alert-2 (#ee9a9a) gives ~5.4:1 contrast vs dark bg — better than alert-3.
      "--mantine-color-error": "var(--mantine-color-alert-2)",
      "--table-border-color": "var(--mantine-color-dark-4)",
      // Table header: dark-6 gives clear separation from striped rows on dark bg.
      "--table-header-bg": "var(--mantine-color-dark-6)",
      // Spinner track: blend into dark body — mostly background with a hint of
      // the loader color so the track is barely visible, not harsh light gray.
      "--loader-track-color":
        "color-mix(in srgb, var(--mantine-color-body) 70%, var(--mantine-primary-color-filled) 30%)",
      // ── Themed "light" tokens for dark mode ──
      // Each color gets a translucent dark-tinted bg + bright text/border so
      // light-variant surfaces (Alert, NavLink, Badge, etc.) read clearly.
      // ── alert ──
      "--mantine-color-alert-light":
        "color-mix(in srgb, var(--mantine-color-alert-8) 35%, transparent)",
      "--mantine-color-alert-light-hover":
        "color-mix(in srgb, var(--mantine-color-alert-8) 50%, transparent)",
      "--mantine-color-alert-light-color": "var(--mantine-color-alert-2)",
      // ── green (secondary) ──
      [`--mantine-color-${secondary}-light`]: `color-mix(in srgb, var(--mantine-color-${secondary}-9) 35%, transparent)`,
      [`--mantine-color-${secondary}-light-hover`]: `color-mix(in srgb, var(--mantine-color-${secondary}-9) 50%, transparent)`,
      [`--mantine-color-${secondary}-light-color`]: `var(--mantine-color-${secondary}-2)`,
      // ── blue ──
      "--mantine-color-blue-light":
        "color-mix(in srgb, var(--mantine-color-blue-9) 35%, transparent)",
      "--mantine-color-blue-light-hover":
        "color-mix(in srgb, var(--mantine-color-blue-9) 50%, transparent)",
      "--mantine-color-blue-light-color": "var(--mantine-color-blue-2)",
      // ── peach ──
      "--mantine-color-peach-light":
        "color-mix(in srgb, var(--mantine-color-peach-9) 35%, transparent)",
      "--mantine-color-peach-light-hover":
        "color-mix(in srgb, var(--mantine-color-peach-9) 50%, transparent)",
      "--mantine-color-peach-light-color": "var(--mantine-color-peach-2)",
      // ── sand ──
      "--mantine-color-sand-light":
        "color-mix(in srgb, var(--mantine-color-sand-9) 35%, transparent)",
      "--mantine-color-sand-light-hover":
        "color-mix(in srgb, var(--mantine-color-sand-9) 50%, transparent)",
      "--mantine-color-sand-light-color": "var(--mantine-color-sand-2)",
    },
  };
};
