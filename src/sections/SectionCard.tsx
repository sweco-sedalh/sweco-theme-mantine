import { FC } from "react";
import Section from "../Section.tsx";
import { Badge, Button, Card, Grid, Group, Image, Text } from "@mantine/core";

export const SectionCard: FC = () => (
  <Section title="Card">
    <Grid>
      <Grid.Col span={4}>
        <Card shadow="sm" padding="lg" withBorder>
          <Card.Section>
            <Image
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Norway Fjord Adventures</Text>
            <Badge color="ochre">On Sale</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button color="blue" fullWidth mt="md">
            Book classic tour now
          </Button>
        </Card>
      </Grid.Col>
    </Grid>
  </Section>
);
