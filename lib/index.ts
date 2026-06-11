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
import { modals } from "@mantine/modals";

import { SwecoLoader } from "./components/SwecoLoader.tsx";
import { textStyles } from "./textStyles.tsx";
import type { TextStyle } from "./textStyles.tsx";
import "./style.layer.css";

/** Color identifiers exposed by this theme (plus any string for forwards-compat). */
export type ExtendedColor =
  | "white"
  | "gray"
  | "green"
  | "blue"
  | "peach"
  | "sand"
  | "alert"
  | (string & {});

/** Custom `<Button>` variants added on top of Mantine's built-ins. */
export type ButtonVariant =
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

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedColor, MantineColorsTuple>;
  }
  export interface MantineThemeOther {
    /** Configurable second accent color, mirrored via `--mantine-secondary-color-*`. */
    secondaryColor: "green" | "blue" | "peach" | "sand";
  }
  export interface TextProps {
    variant?: TextStyle;
  }
  export interface ButtonProps {
    variant?: ButtonVariant;
  }
}

/* === Color palettes ======================================================
 * Each tuple has 10 stops. Indices 0/2/4/6/8 are the official Sweco shades;
 * the odd in-between stops keep the visual ramp smooth, and index 9 is a
 * darker shade used for `filled-hover` / `outline-hover` in dark mode.
 * ========================================================================= */

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
  "#b32f2f",
  "#871c1c",
  "#770f0f",
  "#660707",
  "#4d0303",
  darken("#4d0303", 0.1),
];

const FONT_FAMILY =
  '"Sweco Sans", Arial, ui-sans-serif, system-ui, sans-serif, ' +
  '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';

/**
 * Sweco design-system Mantine theme.
 *
 * Use together with {@link cssVariablesResolver} on the `MantineProvider`:
 *
 * ```tsx
 * <MantineProvider theme={theme} cssVariablesResolver={cssVariablesResolver}>
 *   {children}
 * </MantineProvider>
 * ```
 */
export const theme = createTheme({
  primaryColor: "gray",
  primaryShade: 4,
  defaultRadius: 4,
  radius: {
    pill: "9999px",
    md: "4px",
    sm: "2px",
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
    ActionIcon: ActionIcon.extend({
      // Match `<Button size="xs">` (30px) so icon + button line up on a row.
      vars: (_theme, props) => {
        if (props.size === "xs") {
          return { root: { "--ai-size": "1.875rem" } };
        }
        return { root: {} };
      },
    }),
    Alert: Alert.extend({
      defaultProps: { variant: "light", radius: "md" },
      // Sweco spec — every themed Alert color uses the official `-100`
      // surface tint with the `-500` outline (the `alert` color is the
      // destructive variant and pairs a peach-100 surface with the alert
      // warning red as border). Mantine's 0-9 palette stores the official
      // Sweco shades at the EVEN indices (0/2/4/6/8 → 100/300/500/700/900),
      // so `-100` = index 0 and `-500` = index 4.
      // The `-0` shades are auto-translucent in dark mode via
      // `buildDarkLightShades`, so the same rule renders correctly on both
      // light and dark surfaces.
      // Text color tracks `--mantine-color-text` everywhere — only the
      // title carries medium weight to keep the visual hierarchy.
      styles: (_theme, props) => {
        const c = props.color;
        const surface: Record<string, { bg: string; border: string }> = {
          alert: { bg: "peach-0", border: "alert-4" },
          green: { bg: "green-0", border: "green-4" },
          blue: { bg: "blue-0", border: "blue-4" },
          peach: { bg: "peach-0", border: "peach-4" },
          sand: { bg: "sand-0", border: "sand-4" },
        };
        const tokens = c && surface[c];
        return {
          ...(tokens
            ? {
                root: {
                  backgroundColor: `var(--mantine-color-${tokens.bg})`,
                  borderColor: `var(--mantine-color-${tokens.border})`,
                  borderWidth: 1,
                  borderStyle: "solid",
                },
              }
            : {}),
          title: {
            color: "var(--mantine-color-text)",
            fontWeight: "var(--sweco-font-weight-medium)",
          },
          message: {
            color: "var(--mantine-color-text)",
            fontWeight: "var(--sweco-font-weight-normal)",
          },
          closeButton: {
            color: "var(--mantine-color-text)",
          },
        };
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
          backgroundColor: "var(--mantine-secondary-color-filled)",
          color: "var(--mantine-color-green-contrast)",
          marginBottom: "var(--mantine-spacing-md)",
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
      defaultProps: {
        closeButtonProps: { size: "lg", radius: "xl" },
        radius: "sm",
        size: "512px",
      },
      styles: () => ({
        content: {
          padding: "var(--mantine-spacing-lg)",
        },
        header: {
          padding: 0,
          minHeight: "unset",
          marginBottom: "var(--mantine-spacing-lg)",
        },
        body: { padding: 0 },
        // Sweco close button — 32×32 pill on green-100 surface with a 20×20
        // X icon in text color. Mirrors the `.btn.btn-x` spec.
        close: {
          color: "var(--mantine-color-text)",
          backgroundColor: "var(--mantine-color-green-0)",
          borderRadius: "var(--mantine-radius-pill)",
          border: "none",
          width: "32px",
          height: "32px",
          minWidth: "32px",
          minHeight: "32px",
          padding: 0,
          "--cb-icon-size": "20px",
          transition: "box-shadow var(--sweco-transition)",
        },
        // Shift the modal down from the mathematical center so it reads
        // closer to the "visual center" of the viewport (slightly above
        // true center feels more natural on tall screens).
        // Horizontal padding provides the `md` gutter on mobile so the modal
        // never touches the screen edges.
        inner: {
          paddingTop: "20vh",
          paddingBottom: "5vh",
          paddingLeft: "var(--mantine-spacing-md)",
          paddingRight: "var(--mantine-spacing-md)",
        },
      }),
    }),
    ModalTitle: ModalTitle.extend({
      defaultProps: {
        fw: "var(--sweco-h4-font-weight)",
        fz: "var(--sweco-h4-font-size)",
        lh: "var(--sweco-h4-line-height)",
      },
    }),
    Pagination: Pagination.extend({ defaultProps: { radius: "xl" } }),
    MenuItem: MenuItem.extend({
      defaultProps: { fz: "var(--sweco-text-base)" },
    }),
    Checkbox: Checkbox.extend({ defaultProps: { color: "green" } }),
    Radio: Radio.extend({
      defaultProps: { color: "green" },
      vars: (_theme, props) => {
        const c = props.color ?? "green";
        const shadeMap: Record<string, number> = {
          green: 4,
          alert: 3,
          blue: 4,
          peach: 4,
          sand: 4,
        };
        const shade = shadeMap[c as string] ?? 4;
        return {
          root: {
            "--radio-color": `var(--mantine-color-${c}-${shade})`,
            "--radio-size": "1.5rem",
          },
        };
      },
    }),
    Switch: Switch.extend({ defaultProps: { color: "green" } }),
    Slider: Slider.extend({ defaultProps: { color: "green" } }),
    Stepper: Stepper.extend({ defaultProps: { color: "green" } }),
    Timeline: Timeline.extend({ defaultProps: { color: "green" } }),
    Chip: Chip.extend({
      defaultProps: { size: "md" },
      vars: (_theme, props) => {
        const isSecondary = props.variant === "secondary";
        return {
          root: {
            "--chip-bg": isSecondary
              ? "var(--mantine-color-sand-2)"
              : "var(--mantine-color-green-2)",
            "--chip-color": "var(--mantine-color-text)",
            "--chip-hover": isSecondary
              ? "var(--mantine-color-sand-4)"
              : "var(--mantine-secondary-color-filled-hover)",
            "--chip-radius": "var(--mantine-radius-md)",
            "--chip-fz":
              props.size === "sm"
                ? "var(--sweco-text-sm)"
                : "var(--sweco-text-base)",
            "--chip-size":
              props.size === "sm"
                ? "calc(var(--sweco-spacing) * 8)"
                : "calc(var(--sweco-spacing) * 10)",
            "--chip-padding":
              props.size === "sm"
                ? "calc(var(--sweco-spacing) * 2) calc(var(--sweco-spacing) * 3)"
                : undefined,
          },
        };
      },
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
        // Keep the label in the regular text color for outline/light variants
        // on the default (green) color — only the border / background tint is
        // green per Sweco spec, not the text.
        const isDefaultColor = !props.color || props.color === "green";
        const isDefaultOutline = props.variant === "outline" && isDefaultColor;
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
        // Sweco buttons default to 48px (md) — Mantine's built-in default is
        // 36px (sm). Buttons default to the brand `green` accent rather than
        // the theme's `primaryColor` ("gray"), which is reserved for chrome.
        size: "md",
        color: "green",
        variant: "filled",
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
    // brand-green 2px border with text in the default text color.
    if (input.variant === "outline" && input.color === "gray") {
      return {
        border: "2px solid var(--mantine-color-green-filled)",
        color: "var(--mantine-color-text)",
        background: "transparent",
        hover: "var(--mantine-secondary-color-filled-hover)",
      };
    }
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

/** Mantine's built-in palettes that this theme intentionally hides. */
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
        !BUILTIN_COLORS.some((c) => key.startsWith(`--mantine-color-${c}-`)),
    ),
  );
}

/* === Secondary-color aliases =============================================
 * Mantine exposes `--mantine-primary-color-*` aliases for the primary palette;
 * we mirror the same set for the configurable `theme.other.secondaryColor`.
 * ========================================================================= */
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

/* === Dark-mode color overrides ============================================
 * Re-tone the themed palettes for dark surfaces. `alert` is included so red
 * destructive UI gets a slightly lighter shade that stays readable on dark.
 * ========================================================================= */
const DARK_THEMED_COLORS = ["green", "blue", "peach", "sand", "alert"] as const;

// Shades 0-1 in every palette are near-white in the static palette and clash
// with dark surfaces. Replace them with semi-transparent tints of the vivid
// mid-shade so they fade gracefully into the dark background. Shade 2+ stays
// solid so text/border use cases (e.g. alert-2 for error text) remain crisp.
const DARK_SHADE_PERCENTS = [10, 20] as const;

const buildDarkLightShades = (): Record<string, string> => {
  const entries: [string, string][] = [];
  for (const color of DARK_THEMED_COLORS) {
    // Alert's palette runs lighter, so use shade-4 as anchor; others use 5.
    const anchor = color === "alert" ? 4 : 5;
    DARK_SHADE_PERCENTS.forEach((pct, idx) => {
      entries.push([
        `--mantine-color-${color}-${idx}`,
        `color-mix(in srgb, var(--mantine-color-${color}-${anchor}) ${pct}%, transparent)`,
      ]);
    });
  }
  // Gray: tint of white so the overlay reads as a subtle divider/zebra on dark.
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
      // Alert uses lighter shades so the color reads on dark surfaces.
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

// Always use black-based shadows. In dark mode we keep the same tokens so
// cards/dropdowns drop a real shadow instead of an inverted "halo" glow.
const SHADOW_VARS = () => {
  const c = "#000000";
  return {
    "--sweco-shadow-color-1a": `${c}1a`,
    "--sweco-shadow-color-1b": `${c}21`,
    "--sweco-shadow-color-2a": `${c}2e`,
    "--sweco-shadow-color-2b": `${c}38`,
  };
};

/* === Per-color "light" tokens =============================================
 * Mantine exposes 4 aliases per palette used by `variant="light"`, Badge.light,
 * Alert and the themed CSS rules:
 *   --{c}-light          → background
 *   --{c}-light-hover    → hover for above
 *   --{c}-light-color    → text/icon on top of `light`
 *   --{c}-filled-hover   → hover for `variant="filled"`
 * Tuple: [light, light-hover, light-color, filled-hover | null]
 * (null = leave Mantine's computed `filled-hover` untouched.)
 * ========================================================================= */
type LightShades = readonly [number, number, number, number | null];

const LIGHT_MODE_SHADES: Record<string, LightShades> = {
  // Secondary (green) is slightly lighter than others per design.
  green: [0, 1, 7, 2],
  blue: [1, 2, 8, 2],
  peach: [1, 2, 8, 2],
  sand: [1, 2, 8, 2],
  alert: [1, 2, 5, 5],
  gray: [1, 2, 8, 6],
};

const buildLightModeLightTokens = (): Record<string, string> =>
  Object.fromEntries(
    Object.entries(LIGHT_MODE_SHADES).flatMap(
      ([color, [light, lightHover, lightColor, filledHover]]) => {
        const entries: [string, string][] = [
          [
            `--mantine-color-${color}-light`,
            `var(--mantine-color-${color}-${light})`,
          ],
          [
            `--mantine-color-${color}-light-hover`,
            `var(--mantine-color-${color}-${lightHover})`,
          ],
          [
            `--mantine-color-${color}-light-color`,
            `var(--mantine-color-${color}-${lightColor})`,
          ],
        ];
        if (filledHover !== null) {
          entries.push([
            `--mantine-color-${color}-filled-hover`,
            `var(--mantine-color-${color}-${filledHover})`,
          ]);
        }
        return entries;
      },
    ),
  );

// Dark-mode "light" tokens: translucent dark tint of the vivid shade (9; 8 for
// alert which is darker). `light-color` picks shade-2 for bright legible text.
const DARK_LIGHT_BG_ANCHOR: Record<string, number> = {
  alert: 8,
  green: 9,
  blue: 9,
  peach: 9,
  sand: 9,
};

const buildDarkModeLightTokens = (): Record<string, string> =>
  Object.fromEntries(
    Object.entries(DARK_LIGHT_BG_ANCHOR).flatMap(([color, anchor]) => [
      [
        `--mantine-color-${color}-light`,
        `color-mix(in srgb, var(--mantine-color-${color}-${anchor}) 35%, transparent)`,
      ],
      [
        `--mantine-color-${color}-light-hover`,
        `color-mix(in srgb, var(--mantine-color-${color}-${anchor}) 50%, transparent)`,
      ],
      [
        `--mantine-color-${color}-light-color`,
        `var(--mantine-color-${color}-2)`,
      ],
    ]),
  );

/**
 * CSS variables resolver that wires the Sweco palettes, the configurable
 * secondary-color aliases, the dark-mode color re-toning and the per-mode
 * surface tokens (text, error, table border, header glass, …) into Mantine.
 *
 * Pass it to `MantineProvider` together with {@link theme}.
 */
export const cssVariablesResolver: CSSVariablesResolver = (theme) => {
  const default_ = defaultCssVariablesResolver(theme);
  const secondary = theme.other.secondaryColor;
  const anchorColor = `var(--mantine-color-${secondary}-${theme.primaryShade})`;

  return {
    variables: {
      ...clearColors(default_.variables),
      ...buildSecondaryAliases(secondary, theme.colors[secondary].length),
      // AppShell.Main padding — Sweco layouts use `lg` (1.5rem) as the
      // canonical gutter between the chrome (header/navbar/aside) and the
      // page content. Mantine's default is `md`, which produces a too-tight
      // layout under our typography scale.
      "--app-shell-padding": "var(--mantine-spacing-lg)",
      // Default header offset matches the canonical Sweco header height
      // (--sweco-header-height = 3.5rem / 56 px). Mantine still overrides
      // this per-instance when AppShell receives `header={{ height }}`.
      "--app-shell-header-offset": "var(--sweco-header-height)",
    },
    light: {
      ...clearColors(default_.light),
      ...SHADOW_VARS(),
      ...buildLightModeLightTokens(),
      "--mantine-color-anchor": anchorColor,
      "--mantine-color-text": "var(--mantine-color-gray-8)",
      "--mantine-color-error": "var(--mantine-color-alert-4)",
      "--table-border-color": "var(--mantine-color-default-border)",
      "--table-header-bg": "var(--mantine-color-gray-2)",
      "--loader-track-color": "var(--mantine-color-gray-2)",
      "--mantine-color-disabled": "var(--mantine-color-gray-1)",
      "--mantine-color-disabled-color": "var(--mantine-color-gray-5)",
      // Standard hairline border for the whole app (Cards, Inputs, Divider,
      // Select, Table, Section). Solid #e1e1e1 (gray-2). Translucent surfaces
      // that need to blend with what's behind them (the glass <Header />)
      // use --sweco-header-border instead.
      "--mantine-color-default-border": "var(--mantine-color-gray-2)",
      // Mantine's Paper uses its own --paper-border-color (defaults to
      // gray-3). Align it with the rest of the design system so Cards and
      // any other Paper-based surface render the canonical #e1e1e1 hairline.
      "--paper-border-color": "var(--mantine-color-default-border)",
      // Glass header (light): semi-transparent white surface + translucent
      // hairline so the bottom border blends with whatever scrolls behind
      // the glass. Base color = gray-2 so the perceived hue still matches
      // the rest of the design system.
      "--sweco-header-bg":
        "color-mix(in oklab, var(--mantine-color-white) 50%, transparent)",
      "--sweco-header-border":
        "color-mix(in oklab, var(--mantine-color-gray-4) 40%, transparent)",
      "--sweco-header-fallback-bg": "var(--mantine-color-white)",
      "--app-shell-header-offset": "var(--sweco-header-height)",
    },
    dark: {
      ...clearColors(default_.dark),
      ...SHADOW_VARS(),
      ...buildDarkFilledOutline(),
      ...buildDarkLightShades(),
      ...buildDarkModeLightTokens(),
      "--mantine-color-anchor": anchorColor,
      // Dimmed text (placeholders, input section icons) must be readable on
      // dark surfaces — Mantine's default `dark-2` is too dark.
      "--mantine-color-dimmed": "var(--mantine-color-gray-4)",
      // Gray light-color in dark mode must be bright enough for icons inside
      // inputs (e.g. ColorInput eye-dropper, Select chevron). Mantine
      // defaults to a translucent white-tint from the shade override which
      // is nearly invisible on dark surfaces.
      "--mantine-color-gray-light-color": "var(--mantine-color-gray-3)",
      // Error text/border must be light enough to read on dark surfaces.
      // alert-2 (#ee9a9a) gives ~5.4:1 contrast vs dark bg.
      "--mantine-color-error": "var(--mantine-color-alert-2)",
      // Auto-contrast text for filled variants: in dark mode we shifted
      // filled bg shades lighter (alert→3, sand→6) — the default white
      // contrast text becomes unreadable, so override per-color.
      "--mantine-color-alert-contrast": "var(--mantine-color-gray-9)",
      "--mantine-color-sand-contrast": "var(--mantine-color-gray-9)",
      "--table-border-color": "var(--mantine-color-default-border)",
      "--table-header-bg": "var(--mantine-color-dark-4)",
      // Spinner track blends into the body with a hint of loader color so the
      // track is barely visible, not a harsh light-gray ring.
      "--loader-track-color":
        "color-mix(in srgb, var(--mantine-color-body) 70%, var(--mantine-primary-color-filled) 30%)",
      "--mantine-color-disabled": "var(--mantine-color-dark-4)",
      "--mantine-color-disabled-color": "var(--mantine-color-gray-7)",
      // Standard hairline border (dark mode): solid dark-4.
      "--mantine-color-default-border": "var(--mantine-color-dark-4)",
      // Paper border aligned with --mantine-color-default-border (dark mode).
      "--paper-border-color": "var(--mantine-color-default-border)",
      // Glass header (dark): translucent dark surface + translucent border.
      "--sweco-header-bg":
        "color-mix(in oklab, var(--mantine-color-dark-7) 60%, transparent)",
      "--sweco-header-border":
        "color-mix(in oklab, var(--mantine-color-dark-3) 40%, transparent)",
      "--sweco-header-fallback-bg": "var(--mantine-color-dark-7)",
    },
  };
};

/**
 * Sweco-styled confirm modal — wraps `@mantine/modals`' `openConfirmModal`
 * and injects the canonical footer separator (edge-to-edge top border above
 * the action buttons, right-aligned).
 *
 * Drop-in replacement:
 * ```ts
 * import { openConfirmModal } from "@sweco/theme-mantine";
 * openConfirmModal({ title, children, labels, onConfirm });
 * ```
 */
export const openConfirmModal = (
  props: Parameters<typeof modals.openConfirmModal>[0],
) =>
  modals.openConfirmModal({
    ...props,
    groupProps: {
      justify: "flex-end",
      gap: "sm",
      // `mt` needs to be a Mantine prop (not inline style) because
      // ConfirmModal sets `mt={children ? 0 : "md"}` on the Group BEFORE
      // spreading our `groupProps`, and that gets applied as inline style.
      // Setting `mt` here overrides it cleanly.
      mt: "lg",
      ...props.groupProps,
      style: {
        borderTop: "1px solid var(--mantine-color-default-border)",
        paddingTop: "var(--mantine-spacing-lg)",
        marginLeft: "calc(-1 * var(--mantine-spacing-lg))",
        marginRight: "calc(-1 * var(--mantine-spacing-lg))",
        paddingLeft: "var(--mantine-spacing-lg)",
        paddingRight: "var(--mantine-spacing-lg)",
        ...(props.groupProps?.style as object | undefined),
      },
    },
  });

// ── Public components & assets ────────────────────────────────────────────
export { SwecoLogo } from "./components/SwecoLogo.tsx";
export type { SwecoLogoProps } from "./components/SwecoLogo.tsx";
export { Header, HEADER_HEIGHT } from "./components/Header.tsx";
export type { HeaderProps } from "./components/Header.tsx";
export {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  QuaternaryButton,
  WarningButton,
  CautionButton,
} from "./components/Button";
export { SwecoLoader } from "./components/SwecoLoader.tsx";
export { SearchIcon } from "./components/SearchIcon.tsx";
export { CloseIcon } from "./components/CloseIcon.tsx";
export { TrashIcon } from "./components/TrashIcon.tsx";
export { ArrowLeftIcon, ArrowRightIcon } from "./components/ArrowIcons.tsx";
export { ChevronDownIcon } from "./components/ChevronDownIcon.tsx";
export { ChipWithClose } from "./components/ChipWithClose.tsx";
export type { ChipWithCloseProps } from "./components/ChipWithClose.tsx";
export type { TextStyle } from "./textStyles.tsx";

// Radio SVG assets — both inherit color via `currentColor` (checked uses
// `fill`, unchecked uses `stroke`) so they pick up --radio-color / the
// surrounding text color from CSS.
export { default as radioCheckedSvg } from "./assets/radio-checked.svg";
export { default as radioUncheckedSvg } from "./assets/radio-unchecked.svg";
