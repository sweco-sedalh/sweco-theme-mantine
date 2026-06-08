import { FC } from "react";
import {
  Box,
  Code,
  Grid,
  Group,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import Section from "../Section.tsx";

const BRAND_PALETTES = ["green", "blue", "peach", "sand"] as const;
const VALIDATION_PALETTES = ["alert"] as const;

const PaletteStrip: FC<{ name: string; colors: readonly string[] }> = ({
  name,
  colors,
}) => {
  return (
    <Stack gap={0}>
      <Text size="sm" fw={500} mb={4}>
        {name}
      </Text>
      {colors.map((_, idx) => (
        <Box key={idx} bg={`${name}.${idx}`} p="xs">
          <Group justify="space-between">
            <span>
              {name}.{idx}
            </span>
            <Code fz="xs">{colors[idx]}</Code>
          </Group>
        </Box>
      ))}
    </Stack>
  );
};

export const SectionColors: FC = () => {
  const theme = useMantineTheme();
  return (
    <Section title="Colors">
      <Grid>
        {/* Grayscale — full width */}
        <Grid.Col span={12}>
          <Title order={4} mb="sm">
            Grayscale
          </Title>
          <PaletteStrip name="gray" colors={theme.colors.gray} />
        </Grid.Col>

        {/* Brand colors — 4 equal columns */}
        <Grid.Col span={12}>
          <Title order={4} mb="sm">
            Brand colors
          </Title>
        </Grid.Col>
        {BRAND_PALETTES.map((name) => (
          <Grid.Col key={name} span={3}>
            <PaletteStrip name={name} colors={theme.colors[name]} />
          </Grid.Col>
        ))}

        {/* Validation colors — full palettes */}
        <Grid.Col span={12}>
          <Title order={4} mb="sm">
            Validation colors
          </Title>
        </Grid.Col>
        {VALIDATION_PALETTES.map((name) => (
          <Grid.Col key={name} span={3}>
            <PaletteStrip name={name} colors={theme.colors[name]} />
          </Grid.Col>
        ))}
      </Grid>
    </Section>
  );
};
