import { FC } from "react";
import Section from "../Section.tsx";
import {
  Anchor,
  Code,
  Grid,
  List,
  Mark,
  Text,
  Title,
  TitleOrder,
} from "@mantine/core";

export const SectionTypography: FC = () => (
  <Section title="Typography">
    <Grid>
      <Grid.Col span={6}>
        {[1, 2, 3, 4, 5, 6].map((h) => (
          <Title key={h} order={h as TitleOrder}>
            Heading h{h}
          </Title>
        ))}
        <Text variant="preamble">Preamble</Text>
        <Text variant="blockquote">Blockquote</Text>
        <Text variant="bodyDefault">Default body text, forms</Text>
        <Text variant="bodySmall">
          Small body text, form label, breadcrumbs
        </Text>
        <Text variant="bodyInfoText">Toast, info text, badge, tags</Text>
        <Text variant="bodyTiny">Tiny body text, Form helper text</Text>
        <Text size="xs">Font-size-xs</Text>
        <Text size="sm">Font-size-sm</Text>
        <Text size="md">Font-size-sm</Text>
        <Text size="lg">Font-size-lg</Text>
        <Text size="xl">Font-size-xl</Text>
      </Grid.Col>
      <Grid.Col span={6}>
        <Text>
          This line has <Anchor href="#">inline link</Anchor>
        </Text>
        <Text>
          You can use the mark tag to <Mark>highlight</Mark> text
        </Text>
        <Text>
          This is{" "}
          <Text c="dimmed" inherit span>
            dimmed
          </Text>{" "}
          text
        </Text>
        <Text fw="var(--sweco-font-weight-medium)">Semibold</Text>
        <Text fw="var(--sweco-font-weight-bold)">Bold</Text>
        <Text fs="italic">Italic</Text>
        <Text td="underline">Underlined</Text>
        <Text td="line-through">Strikethrough</Text>
        <Text tt="uppercase">Uppercase</Text>
        <Text tt="capitalize">capitalized text</Text>
        <Text>
          Some inline <Code>code</Code>
        </Text>
        <Code block>
          &lt;pre&gt; &lt;code&gt;This is a pre code block&lt;/code&gt;
          &lt;/pre&gt;
        </Code>
        <Title order={2}>Lists</Title>
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
      </Grid.Col>
    </Grid>
  </Section>
);
