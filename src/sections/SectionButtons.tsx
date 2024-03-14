import { FC } from "react";
import Section from "../Section.tsx";
import { Burger, CloseButton, Grid, Stack, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export const SectionButtons: FC = () => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <Section title="Buttons">
      <Grid>
        <Grid.Col span={4}>
          <Stack>
            <Title order={2}>Button</Title>
          </Stack>
        </Grid.Col>
        <Grid.Col span={4}>
          <Stack>
            <Title order={2}>Button</Title>
          </Stack>
        </Grid.Col>
        <Grid.Col span={4}>
          <Stack>
            <Title order={2}>Special buttons</Title>
            <Title order={3}>Burger</Title>
            <Burger opened={opened} onClick={toggle} />

            <Title order={3}>Close button</Title>
            <CloseButton />
          </Stack>
        </Grid.Col>
      </Grid>
    </Section>
  );
};
