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
            <Text fw="var(--sweco-font-weight-medium)">
              Norway Fjord Adventures
            </Text>
            <Badge color="sand">On Sale</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button color="green" variant="outline" fullWidth mt="md">
            Book classic tour now
          </Button>
        </Card>
      </Grid.Col>

      <Grid.Col span={4}>
        <Card
          component="a"
          href="#"
          shadow="sm"
          padding="lg"
          withBorder
        >
          <Card.Section>
            <Image
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
              height={160}
              alt="Sweden"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw="var(--sweco-font-weight-medium)">
              Swedish Archipelago
            </Text>
            <Badge color="green">Popular</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            Hela kortet är en länk — fokusring och hover-lyft styrs av
            card-link-stilen i temat.
          </Text>
        </Card>
      </Grid.Col>
    </Grid>
  </Section>
);
