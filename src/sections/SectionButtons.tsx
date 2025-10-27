import { FC } from "react";
import Section from "../Section.tsx";
import {
  Burger,
  Button,
  CloseButton,
  Grid,
  Group,
  Stack,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const SectionButtons: FC = () => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <Section title="Buttons">
      <Grid>
        <Grid.Col span={2}>
          <Stack>
            <Title order={2}>Button</Title>
            {[
              "filled",
              "light",
              "outline",
              "subtle",
              "transparent",
              "white",
            ].map((variant) => (
              <Button key={variant} variant={variant} color="green">
                variant="{variant}"
              </Button>
            ))}
          </Stack>
        </Grid.Col>
        <Grid.Col span={6}>
          <Stack>
            <Title order={2}>Button</Title>
            {["green", "blue", "peach", "sand", "alert", "warning", "gray"].map(
              (color) => (
                <Group key={color}>
                  <Button variant="filled" color={color}>
                    color="{color}"
                  </Button>
                  <Button variant="light" color={color}>
                    color="{color}"
                  </Button>
                  <Button variant="outline" color={color}>
                    color="{color}"
                  </Button>
                </Group>
              ),
            )}
          </Stack>
        </Grid.Col>
        <Grid.Col span={4}>
          <Stack>
            <Title order={2}>Special buttons</Title>
            <Title order={3}>Burger</Title>
            <Burger opened={opened} onClick={toggle} />

            <Title order={3}>Close button</Title>
            <CloseButton />

            <Title order={3}>Navigation button</Title>
            <Button
              variant="subtle"
              color="green"
              size="xl"
              rightSection={<FontAwesomeIcon icon={faArrowRight} />}
            >
              Go there now
            </Button>
          </Stack>
        </Grid.Col>
      </Grid>
    </Section>
  );
};
