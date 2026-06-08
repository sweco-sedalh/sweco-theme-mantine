import { FC } from "react";
import Section from "../Section.tsx";
import { Badge, Code, Grid, Group, NavLink, Stack, Text, Title } from "@mantine/core";
import { ArrowRightIcon, SearchIcon, ChevronDownIcon } from "../../lib";

export const SectionNavLinks: FC = () => (
  <Section title="Nav links">
    <Grid>
      {/* ── Plain ──────────────────────────────────────────────────────── */}
      <Grid.Col span={4}>
        <Stack gap={4}>
          <Code mb="xs">{"<NavLink />"}</Code>
          <NavLink href="#" label="Default link" />
          <NavLink href="#" label="Active link" active />
          <NavLink href="#" label="Disabled link" disabled />
          <NavLink
            href="#"
            label="With left icon"
            leftSection={<SearchIcon />}
          />
          <NavLink
            href="#"
            label="With right arrow"
            rightSection={<ArrowRightIcon />}
          />
          <NavLink
            href="#"
            label="Active with icon"
            active
            leftSection={<SearchIcon />}
            rightSection={<ArrowRightIcon />}
          />
        </Stack>
      </Grid.Col>

      {/* ── With badge ─────────────────────────────────────────────────── */}
      <Grid.Col span={4}>
        <Stack gap={4}>
          <Code mb="xs">{"rightSection={<Badge>}"}</Code>
          <NavLink
            href="#"
            label="Active with badge"
            active
            rightSection={<Badge color="green">14</Badge>}
          />
          <NavLink
            href="#"
            label="Inbox"
            rightSection={<Badge color="green">3</Badge>}
          />
          <NavLink
            href="#"
            label="Notifications"
            rightSection={<Badge color="alert">99+</Badge>}
          />
          <NavLink
            href="#"
            label="Warnings"
            rightSection={<Badge color="warning">5</Badge>}
          />
          <NavLink
            href="#"
            label="No badge"
          />
          <NavLink
            href="#"
            label="Disabled with badge"
            disabled
            rightSection={<Badge color="green">2</Badge>}
          />
        </Stack>
      </Grid.Col>

      {/* ── With description + nested ───────────────────────────────────── */}
      <Grid.Col span={4}>
        <Stack gap={4}>
          <Code mb="xs">{"description + nested"}</Code>
          <NavLink
            href="#"
            label="With description"
            description="Supporting text below the label"
          />
          <NavLink
            href="#"
            label="Active with description"
            active
            description="This item is currently active"
          />
          <NavLink
            label="Expandable"
            rightSection={<ChevronDownIcon />}
            childrenOffset={28}
          >
            <NavLink href="#" label="Child link 1" />
            <NavLink href="#" label="Child link 2" active />
            <NavLink href="#" label="Child link 3" />
          </NavLink>
          <NavLink
            label="Expanded by default"
            defaultOpened
            rightSection={<ChevronDownIcon />}
            childrenOffset={28}
          >
            <NavLink href="#" label="Child link 1" />
            <NavLink href="#" label="Child link 2" />
          </NavLink>
        </Stack>
      </Grid.Col>

      {/* ── Color variants ─────────────────────────────────────────────── */}
      <Grid.Col span={12}>
        <Title order={2} mt="sm">
          Color variants
        </Title>
        <Text size="xs" c="dimmed" mb="sm">
          Active state with different <Code>color</Code> values.
        </Text>
        <Group gap="sm" align="flex-start" wrap="wrap">
          {(["green", "blue", "alert", "warning"] as const).map((color) => (
            <NavLink
              key={color}
              href="#"
              label={`color="${color}"`}
              active
              color={color}
              style={{ width: 180 }}
            />
          ))}
        </Group>
      </Grid.Col>
    </Grid>
  </Section>
);
