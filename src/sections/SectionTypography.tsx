import { FC } from "react";
import Section from "../Section.tsx";
import {
  Anchor,
  Code,
  Grid,
  Group,
  List,
  Mark,
  Stack,
  Text,
  Title,
  TitleOrder,
} from "@mantine/core";

const HEADINGS = [
  { order: 1, size: "3.5rem / 56px", lh: "4rem / 64px", weight: "400 (normal)" },
  { order: 2, size: "2.5rem / 40px", lh: "3rem / 48px", weight: "400 (normal)" },
  { order: 3, size: "2rem / 32px", lh: "2.5rem / 40px", weight: "400 (normal)" },
  { order: 4, size: "1.5rem / 24px", lh: "2rem / 32px", weight: "400 (normal)" },
  {
    order: 5,
    size: "1.125rem / 18px",
    lh: "1.5rem / 24px",
    weight: "500 (medium)",
  },
  {
    order: 6,
    size: "1rem / 16px",
    lh: "1.5rem / 24px",
    weight: "500 (medium)",
  },
] as const;

const SEMANTIC_VARIANTS = [
  {
    variant: "preamble",
    label: "preamble",
    size: "1.125rem / 18px",
    lh: "1.5rem / 24px",
    weight: "400 (normal)",
    style: "normal",
    fauxStyle: false,
  },
  {
    variant: "blockquote",
    label: "blockquote",
    size: "1.125rem / 18px",
    lh: "1.5rem / 24px",
    weight: "400 (normal)",
    style: "italic",
    fauxStyle: true, // italic is synthesized — only "normal" font file loaded
  },
  {
    variant: "bodyDefault",
    label: "bodyDefault — default body text, forms",
    size: "1rem / 16px",
    lh: "1.5rem / 24px",
    weight: "400 (normal)",
    style: "normal",
    fauxStyle: false,
  },
  {
    variant: "bodySmall",
    label: "bodySmall — form label, breadcrumbs",
    size: "0.875rem / 14px",
    lh: "1.25rem / 20px",
    weight: "400 (normal)",
    style: "normal",
    fauxStyle: false,
  },
  {
    variant: "bodyInfoText",
    label: "bodyInfoText — toast, info text, badge, tags",
    size: "0.875rem / 14px",
    lh: "1.5rem / 24px",
    weight: "500 (medium)",
    style: "normal",
    fauxStyle: false,
  },
  {
    variant: "bodyTiny",
    label: "bodyTiny — form helper text",
    size: "0.75rem / 12px",
    lh: "1rem / 16px",
    weight: "400 (normal)",
    style: "normal",
    fauxStyle: false,
  },
] as const;

const FONT_SIZES = [
  { size: "xs", token: "--sweco-text-xs", value: "0.75rem / 12px", lh: "1rem / 16px", mantineSize: "xs" },
  { size: "sm", token: "--sweco-text-sm", value: "0.875rem / 14px", lh: "1.25rem / 20px", mantineSize: "sm" },
  { size: "md (base)", token: "--sweco-text-base", value: "1rem / 16px", lh: "1.5rem / 24px", mantineSize: "md" },
  { size: "lg", token: "--sweco-text-md", value: "1.125rem / 18px", lh: "1.5rem / 24px", mantineSize: "lg" },
  { size: "xl", token: "--sweco-text-lg", value: "1.5rem / 24px", lh: "2rem / 32px", mantineSize: "xl" },
  { size: "2xl", token: "--sweco-text-xl", value: "2rem / 32px", lh: "2.5rem / 40px", mantineSize: null },
  { size: "3xl", token: "--sweco-text-2xl", value: "2.5rem / 40px", lh: "3rem / 48px", mantineSize: null },
  { size: "4xl", token: "--sweco-text-3xl", value: "3rem / 48px", lh: "3.5rem / 56px", mantineSize: null },
  { size: "5xl", token: "--sweco-text-4xl", value: "3.5rem / 56px", lh: "4rem / 64px", mantineSize: null },
  { size: "6xl", token: "--sweco-text-5xl", value: "4rem / 64px", lh: "4.5rem / 72px", mantineSize: null },
] as const;

const TRACKING = [
  {
    token: "--sweco-tracking-tighter",
    value: "-0.05em",
    usage: "Kerning — pull large display text together",
  },
  {
    token: "--sweco-tracking-tight",
    value: "-0.025em",
    usage: "Slight kerning for headings",
  },
  {
    token: "--sweco-tracking-normal",
    value: "0",
    usage: "Default for body text",
  },
  {
    token: "--sweco-tracking-wide",
    value: "0.025em",
    usage: "Sparingly applied",
  },
  {
    token: "--sweco-tracking-widest",
    value: "0.1em",
    usage: "ALL CAPS labels",
  },
] as const;

const Meta: FC<{ children: React.ReactNode }> = ({ children }) => (
  <Text size="xs" c="dimmed" lh={1.4}>
    {children}
  </Text>
);

const Synthesized: FC = () => (
  <Text span size="xs" c="alert" fw={500}>
    ⚠ synthesized (faux) — avoid
  </Text>
);

export const SectionTypography: FC = () => (
  <Section title="Typography">
    <Stack gap="xl">

      {/* ── GROUP 1: Headings + Font sizes — stacked, full width ──────── */}
      <Stack gap="md">
        <Title order={4}>Headings</Title>
        {HEADINGS.map(({ order, size, lh, weight }) => (
          <Stack key={order} gap={2}>
            <Title order={order as TitleOrder}>Heading h{order}</Title>
            <Meta>
              <Code>{`<Title order={${order}}>`}</Code>
              {" · "}font-size: {size}
              {" · "}line-height: {lh}
              {" · "}weight: {weight}
            </Meta>
          </Stack>
        ))}

        <Title order={4} mt="md">Font sizes</Title>
        {FONT_SIZES.map(({ size, token, value, lh, mantineSize }) => (
          <Stack key={size} gap={2}>
            <Text
              fz={mantineSize ?? `var(${token})`}
              lh={`var(${token}-line-height)`}
            >
              The quick brown fox jumps over the lazy dog
            </Text>
            <Meta>
              {mantineSize ? (
                <><Code>{`<Text size="${mantineSize}">`}</Code>{" · "}</>
              ) : (
                <><Code>{`fz="var(${token})"`}</Code>{" · "}</>
              )}
              {size} · font-size: {value} · line-height: {lh}
            </Meta>
          </Stack>
        ))}
      </Stack>

      {/* ── GROUP 2: Rest — two columns ───────────────────────────────── */}
      <Grid>
        {/* Left */}
        <Grid.Col span={6}>
          <Stack gap="md">
            <Title order={4}>Semantic text variants</Title>
            <Text size="xs" c="dimmed">
              Pre-composed text styles (size + line-height + weight + style).
              All weights/styles are <strong>loaded font files</strong> except{" "}
              <Code>blockquote</Code> which uses{" "}
              <Code>font-style: italic</Code> — faux italic synthesized by the
              browser.
            </Text>
            {SEMANTIC_VARIANTS.map(
              ({ variant, label, size, lh, weight, style, fauxStyle }) => (
                <Stack key={variant} gap={2}>
                  <Text variant={variant}>{label}</Text>
                  <Meta>
                    <Code>{`<Text variant="${variant}">`}</Code>
                    {" · "}font-size: {size}
                    {" · "}line-height: {lh}
                    {" · "}weight: {weight}
                    {" · "}style: {style}
                    {fauxStyle && <> · <Synthesized /></>}
                  </Meta>
                </Stack>
              ),
            )}

            <Title order={4} mt="md">Font weights</Title>
            <Text size="xs" c="dimmed">
              Only <strong>three</strong> Sweco Sans font files are loaded:{" "}
              <Code>400</Code>, <Code>500</Code> and <Code>700</Code>. Any
              other value (100/200/300/600/800/900) is{" "}
              <strong>synthesized by the browser</strong> (faux bold/light)
              and renders inconsistently — avoid them.
            </Text>
            {[
              { value: 400, label: "Normal", token: "--sweco-font-weight-normal" },
              { value: 500, label: "Medium", token: "--sweco-font-weight-medium" },
              { value: 700, label: "Bold", token: "--sweco-font-weight-bold" },
            ].map(({ value, label, token }) => (
              <Stack key={value} gap={2}>
                <Text fw={value}>
                  {value} — {label} — The quick brown fox
                </Text>
                <Meta>
                  <Code>{token}</Code>
                  {" · "}
                  <Code>{`fw={${value}}`}</Code>
                  {" · "}font-weight: {value}
                </Meta>
              </Stack>
            ))}

            <Title order={4} mt="md">Font style</Title>
            <Text size="xs" c="dimmed">
              Only <strong>one</strong> Sweco Sans font style is loaded:{" "}
              <Code>normal</Code>. <Code>italic</Code> / <Code>oblique</Code>{" "}
              is <strong>synthesized by the browser</strong> — avoid it.
            </Text>
            <Stack gap={2}>
              <Text fs="normal">Normal — The quick brown fox</Text>
              <Meta>
                <Code>fs="normal"</Code> · font-style: normal · loaded ✓
              </Meta>
            </Stack>

            <Title order={4} mt="md">Tracking (letter-spacing)</Title>
            <Text size="xs" c="dimmed">
              Negative values tighten (kerning), positive widen. Shown on{" "}
              <Code>{`<Title order={3}>`}</Code>.
            </Text>
            {TRACKING.map(({ token, value, usage }) => (
              <Stack key={token} gap={2}>
                <Title order={3} style={{ letterSpacing: `var(${token})` }}>
                  The quick brown fox
                </Title>
                <Meta>
                  <Code>{token}</Code>
                  {" · "}letter-spacing: {value}
                  {" · "}
                  {usage}
                </Meta>
              </Stack>
            ))}
          </Stack>
        </Grid.Col>

        {/* Right */}
        <Grid.Col span={6}>
          <Stack gap="md">
            <Title order={4}>Inline & emphasis</Title>
            <Stack gap={2}>
              <Text>
                Standalone <Anchor href="#">Anchor link</Anchor> — inherits
                text color, animated underline on hover.
              </Text>
              <Meta>
                <Code>{"<Anchor href=\"#\">"}</Code>
                {" · "}color: currentColor · animated underline via CSS mask
              </Meta>
            </Stack>
            <Stack gap={2}>
              <p>
                Inline link inside a paragraph:{" "}
                <a href="#">native &lt;a&gt; inside &lt;p&gt;</a> — green
                static underline, light bg + focus ring on hover.
              </p>
              <Meta>
                <Code>{"<p><a href=\"#\">…</a></p>"}</Code>
                {" · "}p a:not(.mantine-Anchor-root) rule in anchor.css
              </Meta>
            </Stack>
            <Stack gap={2}>
              <Text>
                Using the <Text span className="link" component="span">
                  .link utility class
                </Text>{" "}
                outside a paragraph — same inline-link style.
              </Text>
              <Meta>
                <Code>{'className="link"'}</Code>
                {" · "}same styles as p a — use when not inside a &lt;p&gt;
              </Meta>
            </Stack>
            <Text>
              You can use the mark tag to <Mark>highlight</Mark> text
            </Text>
            <Text>
              This is{" "}
              <Text c="dimmed" inherit span>dimmed</Text>{" "}
              text
            </Text>
            <Stack gap={2}>
              <Text fs="italic">
                Italic — The quick brown fox · <Synthesized />
              </Text>
            </Stack>
            <Text td="underline">Underlined</Text>
            <Text td="line-through">Strikethrough</Text>
            <Text tt="uppercase" style={{ letterSpacing: "var(--sweco-tracking-widest)" }}>
              Uppercase (widest tracking)
            </Text>
            <Text tt="capitalize">capitalized text</Text>
            <Text>Some inline <Code>code</Code></Text>
            <Code block>
              &lt;pre&gt; &lt;code&gt;code block&lt;/code&gt; &lt;/pre&gt;
            </Code>

            <Title order={4} mt="md">Lists</Title>
            <List>
              <List.Item>Unordered list item 1</List.Item>
              <List.Item>Unordered list item 2</List.Item>
              <List.Item>Unordered list item 3</List.Item>
            </List>
            <List type="ordered">
              <List.Item>Ordered list item 1</List.Item>
              <List.Item>Ordered list item 2</List.Item>
              <List.Item>Ordered list item 3</List.Item>
            </List>

            <Title order={4} mt="md">Quick reference</Title>
            <Group gap="xs" wrap="wrap">
              <Code>font-family: "Sweco Sans"</Code>
              <Code>--sweco-leading-normal: 1.5</Code>
            </Group>
          </Stack>
        </Grid.Col>
      </Grid>
    </Stack>
  </Section>
);
