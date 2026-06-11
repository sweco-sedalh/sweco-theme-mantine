import { FC } from "react";
import Section from "../Section.tsx";
import { Alert, Button, Grid, Group, Loader, Stack } from "@mantine/core";

// Filled (green) button has a green-contrast (white) label → spinner needs to
// match the contrast color. All other variants render dark text on a light/
// transparent surface → `currentColor` keeps the spinner aligned with text.
const lightSpinner = <Loader size="xs" color="white" />;
const darkSpinner = <Loader size="xs" color="currentColor" />;

export const SectionSpinner: FC = () => (
  <Section title="Spinner">
    <Grid>
      <Grid.Col
        span={3}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader />
      </Grid.Col>
      <Grid.Col
        span={3}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        bg="gray"
      >
        <Loader color="white" />
      </Grid.Col>
      <Grid.Col span={3}>
        <Button fullWidth leftSection={lightSpinner}>
          Filled
        </Button>
        <Button fullWidth mt="sm" variant="light" leftSection={darkSpinner}>
          Light
        </Button>
        <Button fullWidth mt="sm" variant="outline" leftSection={darkSpinner}>
          Outline
        </Button>
        <Button fullWidth mt="sm" variant="subtle" leftSection={darkSpinner}>
          Subtle
        </Button>
        <Button fullWidth mt="sm" variant="default" leftSection={darkSpinner}>
          Default
        </Button>
        <Button
          fullWidth
          mt="sm"
          variant="quaternary"
          leftSection={darkSpinner}
        >
          Quaternary
        </Button>
        <Button fullWidth mt="sm" variant="warning" leftSection={darkSpinner}>
          Warning
        </Button>
        <Button fullWidth mt="sm" variant="caution" leftSection={darkSpinner}>
          Caution
        </Button>
      </Grid.Col>
      <Grid.Col span={3}>
        <Stack gap="sm">
          {(["green", "blue", "sand", "alert"] as const).map((color) => (
            <Alert key={color} title="Loading…" color={color}>
              <Group gap="xs">
                {/* Spinner matches the Alert border color (palette shade 4)
                    so it reads as part of the alert chrome, not body text. */}
                <Loader size="xs" color={`${color}.4`} />
                <span>Working on it…</span>
              </Group>
            </Alert>
          ))}
        </Stack>
      </Grid.Col>
    </Grid>
  </Section>
);
