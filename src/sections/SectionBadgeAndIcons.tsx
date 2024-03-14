import { FC } from "react";
import Section from "../Section.tsx";
import { Badge, Grid, Group, Stack, Title } from "@mantine/core";

export const SectionBadgeAndIcons: FC = () => (
  <Section title={false}>
    <Grid>
      <Grid.Col span={6}>
        <Title>Badge</Title>
        <Stack>
          <Group>
            <Badge>Badge</Badge>
            <Badge color="green">Green</Badge>
            <Badge color="alert">Alert</Badge>
            <Badge color="warning">Warning</Badge>
            <Badge color="success">Success</Badge>
            <Badge variant="outline">Outline</Badge>
          </Group>
          <Title order={2}>Badge small</Title>
          <Group>
            <Badge size="sm" color="gray">
              1
            </Badge>
            <Badge size="sm" color="green">
              2
            </Badge>
            <Badge size="sm" color="alert">
              3
            </Badge>
            <Badge size="sm" color="warning">
              4
            </Badge>
            <Badge size="sm" color="success">
              5
            </Badge>
            <Badge size="sm" variant="outline">
              6
            </Badge>
          </Group>
          <Title order={2}>Badge large</Title>
          <Group>
            <Badge size="lg" color="gray">
              1
            </Badge>
            <Badge size="lg" color="green">
              2
            </Badge>
            <Badge size="lg" color="alert">
              3
            </Badge>
            <Badge size="lg" color="warning">
              4
            </Badge>
            <Badge size="lg" color="success">
              5
            </Badge>
            <Badge size="lg" variant="outline">
              6
            </Badge>
          </Group>
        </Stack>
      </Grid.Col>
      <Grid.Col span={6}>
        <Title>Icons</Title>
      </Grid.Col>
    </Grid>
  </Section>
);
