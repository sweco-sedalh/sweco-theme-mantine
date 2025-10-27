import { FC } from "react";
import {
  Box,
  getContrastColor,
  Grid,
  Stack,
  Title,
  useMantineTheme,
} from "@mantine/core";
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
              <Box
                key={idx}
                bg={`gray.${idx}`}
                p="xs"
                c={getContrastColor({
                  color: `green.${idx}`,
                  theme,
                })}
              >
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
              <Box
                key={idx}
                bg={`green.${idx}`}
                p="xs"
                c={getContrastColor({
                  color: `green.${idx}`,
                  theme,
                })}
              >
                green.{idx}
              </Box>
            ))}
          </Stack>
        </Grid.Col>
        <Grid.Col span={4}>
          <Stack gap={0}>
            {theme.colors.blue.map((_, idx) => (
              <Box
                key={idx}
                bg={`blue.${idx}`}
                p="xs"
                c={getContrastColor({
                  color: `green.${idx}`,
                  theme,
                })}
              >
                blue.{idx}
              </Box>
            ))}
          </Stack>
        </Grid.Col>
        <Grid.Col span={4}>
          <Stack gap={0}>
            {theme.colors.peach.map((_, idx) => (
              <Box
                key={idx}
                bg={`peach.${idx}`}
                p="xs"
                c={getContrastColor({
                  color: `green.${idx}`,
                  theme,
                })}
              >
                peach.{idx}
              </Box>
            ))}
          </Stack>
        </Grid.Col>
        <Grid.Col span={4}>
          <Stack gap={0}>
            {theme.colors.sand.map((_, idx) => (
              <Box
                key={idx}
                bg={`sand.${idx}`}
                p="xs"
                c={getContrastColor({
                  color: `green.${idx}`,
                  theme,
                })}
              >
                sand.{idx}
              </Box>
            ))}
          </Stack>
        </Grid.Col>
        <Grid.Col span={12}>
          <Title order={2}>Validation colors</Title>
        </Grid.Col>
        <Grid.Col span={4}>
          <Box
            bg="alert"
            p="xs"
            c={getContrastColor({
              color: "alert",
              theme,
            })}
          >
            alert
          </Box>
        </Grid.Col>
        <Grid.Col span={4}>
          <Box
            bg="success"
            p="xs"
            c={getContrastColor({
              color: "success",
              theme,
            })}
          >
            success
          </Box>
        </Grid.Col>
        <Grid.Col span={4}>
          <Box
            bg="warning"
            p="xs"
            c={getContrastColor({
              color: "warning",
              theme,
            })}
          >
            warning
          </Box>
        </Grid.Col>
      </Grid>
    </Section>
  );
};
