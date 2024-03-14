import { FC } from "react";
import { Box, Grid, Stack, Title, useMantineTheme } from "@mantine/core";
import Section from "../Section.tsx";

export const SectionColors: FC = () => {
  const theme = useMantineTheme();
  return (
    <Section title="Colors">
      <Grid>
        <Grid.Col span={6}>
          <Title order={2}>Grayscale</Title>
          <Stack gap={0}>
            {theme.colors.gray.map((_, idx) => (
              <Box key={idx} bg={`gray.${idx}`} p="xs">
                gray.{idx}
              </Box>
            ))}
          </Stack>
        </Grid.Col>
        <Grid.Col span={6} />
        <Grid.Col span={12}>
          <Title order={2}>Brand colors</Title>
        </Grid.Col>
        <Grid.Col span={4}>
          <Stack gap={0}>
            {theme.colors.green.map((_, idx) => (
              <Box key={idx} bg={`green.${idx}`} p="xs">
                green.{idx}
              </Box>
            ))}
          </Stack>
        </Grid.Col>
        <Grid.Col span={4}>
          <Stack gap={0}>
            {theme.colors.blue.map((_, idx) => (
              <Box key={idx} bg={`blue.${idx}`} p="xs">
                blue.{idx}
              </Box>
            ))}
          </Stack>
        </Grid.Col>
        <Grid.Col span={4}>
          <Stack gap={0}>
            {theme.colors.ochre.map((_, idx) => (
              <Box key={idx} bg={`ochre.${idx}`} p="xs">
                ochre.{idx}
              </Box>
            ))}
          </Stack>
        </Grid.Col>
        <Grid.Col span={12}>
          <Title order={2}>Validation colors</Title>
        </Grid.Col>
        <Grid.Col span={4}>
          <Box bg="alert" p="xs">
            alert
          </Box>
        </Grid.Col>
        <Grid.Col span={4}>
          <Box bg="success" p="xs">
            success
          </Box>
        </Grid.Col>
        <Grid.Col span={4}>
          <Box bg="warning" p="xs">
            warning
          </Box>
        </Grid.Col>
      </Grid>
    </Section>
  );
};
