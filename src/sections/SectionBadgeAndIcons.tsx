import { FC, useState } from "react";
import Section from "../Section.tsx";
import {
  Badge,
  Button,
  Chip,
  Chip as MantineChip,
  Code,
  Grid,
  Group,
  type MantineSize,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  ChipWithClose,
  CloseIcon,
  SearchIcon,
  TrashIcon,
} from "../../lib";

const ICONS = [
  { name: "SearchIcon", Component: SearchIcon, size: "24×24" },
  { name: "CloseIcon", Component: CloseIcon, size: "20×20" },
  { name: "ArrowLeftIcon", Component: ArrowLeftIcon, size: "24×24" },
  { name: "ArrowRightIcon", Component: ArrowRightIcon, size: "24×24" },
  { name: "ChevronDownIcon", Component: ChevronDownIcon, size: "24×24" },
  { name: "TrashIcon", Component: TrashIcon, size: "24×24" },
] as const;

const BADGE_COLORS = [
  "gray", "green", "blue", "peach", "sand", "alert",
] as const;

const BADGE_SIZES = ["xs", "sm", "md", "lg", "xl"] as const;

const INITIAL_TOGGLE_CHIPS = ["Category A", "Category B", "Category C"];
const INITIAL_REMOVABLE_CHIPS = ["Filter 1", "Filter 2", "Filter 3"];

/** Chip toggle group with Clear filters */
const ChipToggleDemo: FC<{ size?: MantineSize; variant?: string }> = ({ size, variant }) => {
  const [active, setActive] = useState<string | null>("Category A");
  const btnSize = size === "sm" ? "xs" : "sm";
  const btnFz = size === "sm" ? "var(--sweco-text-sm)" : "var(--sweco-text-base)";
  return (
    <Group gap="sm" wrap="wrap" align="center">
      {INITIAL_TOGGLE_CHIPS.map((label) => (
        <Chip
          key={label}
          size={size}
          variant={variant}
          checked={active === label}
          onChange={() => setActive(active === label ? null : label)}
        >
          {label}
        </Chip>
      ))}
      <Button
        variant="caution"
        size={btnSize}
        fz={btnFz}
        leftSection={<FontAwesomeIcon icon={faTrashCan} />}
        onClick={() => setActive(null)}
      >
        Clear filters
      </Button>
    </Group>
  );
};

/** Chip group — multiple selection */
const ChipGroupDemo: FC<{ size?: MantineSize; variant?: string }> = ({ size, variant }) => {
  const [values, setValues] = useState<string[]>(["Filter 1"]);
  const btnSize = size === "sm" ? "xs" : "sm";
  const btnFz = size === "sm" ? "var(--sweco-text-sm)" : "var(--sweco-text-base)";
  return (
    <Group gap="sm" wrap="wrap" align="center">
      <MantineChip.Group multiple value={values} onChange={setValues}>
        {INITIAL_TOGGLE_CHIPS.map((label) => (
          <Chip key={label} value={label} size={size} variant={variant}>
            {label}
          </Chip>
        ))}
      </MantineChip.Group>
      <Button
        variant="caution"
        size={btnSize}
        fz={btnFz}
        leftSection={<FontAwesomeIcon icon={faTrashCan} />}
        onClick={() => setValues([])}
      >
        Clear filters
      </Button>
    </Group>
  );
};

/** Dismissible chip with close button */
const ChipXDemo: FC<{ size?: MantineSize; variant?: "default" | "secondary" }> = ({ size, variant }) => {
  const [chips, setChips] = useState(INITIAL_REMOVABLE_CHIPS);
  const btnSize = size === "sm" ? "xs" : "sm";
  const btnFz = size === "sm" ? "var(--sweco-text-sm)" : "var(--sweco-text-base)";
  return (
    <Group gap="sm" wrap="wrap" align="center">
      {chips.map((label) => (
        <ChipWithClose
          key={label}
          size={size}
          variant={variant}
          onRemove={() => setChips((c) => c.filter((x) => x !== label))}
        >
          {label}
        </ChipWithClose>
      ))}
      <Button
        variant="caution"
        size={btnSize}
        fz={btnFz}
        leftSection={<FontAwesomeIcon icon={faTrashCan} />}
        onClick={() => setChips([])}
      >
        Clear filters
      </Button>
    </Group>
  );
};

export const SectionBadgeAndIcons: FC = () => (
  <Section title="Badges, Chips & Icons">
    <Grid>
      {/* ── Badges ────────────────────────────────────────────────────── */}
      <Grid.Col span={12}>
        <Title order={4}>Badge — variants</Title>
        <Text size="xs" c="dimmed" mb="sm">
          All available colors in <Code>filled</Code> (default),{" "}
          <Code>light</Code> and <Code>outline</Code> variants.
        </Text>
      </Grid.Col>

      {(["filled", "light", "outline"] as const).map((variant) => (
        <Grid.Col key={variant} span={4}>
          <Stack gap="xs">
            <Code>{`variant="${variant}"`}</Code>
            <Group gap="xs" wrap="wrap">
              {BADGE_COLORS.map((color) => (
                <Badge key={color} variant={variant} color={color}>
                  {color}
                </Badge>
              ))}
            </Group>
          </Stack>
        </Grid.Col>
      ))}

      <Grid.Col span={12}>
        <Title order={4} mt="md">Badge — sizes</Title>
        <Group gap="sm" align="center" wrap="wrap">
          {BADGE_SIZES.map((size) => (
            <Stack key={size} gap={2} align="center">
              <Badge size={size} color="green">{size}</Badge>
              <Code fz="xs">{`size="${size}"`}</Code>
            </Stack>
          ))}
        </Group>
      </Grid.Col>

      {/* ── Chips ─────────────────────────────────────────────────────── */}
      <Grid.Col span={12}>
        <Title order={4} mt="md">Chip — toggle (single select)</Title>
        <Text size="xs" c="dimmed" mb="sm">
          <Code>{"<Chip>"}</Code> — one active at a time. Pair with a{" "}
          <Code>variant="caution"</Code> Clear-filters button.
        </Text>
        <Paper withBorder p="md" radius="md" shadow="none">
          <Stack gap="md">
            <Stack gap="xs">
              <Code>{`size="md" (default — 40px)`}</Code>
              <ChipToggleDemo />
            </Stack>
            <Stack gap="xs">
              <Code>{`size="sm" (32px)`}</Code>
              <ChipToggleDemo size="sm" />
            </Stack>
            <Stack gap="xs">
              <Code>{`variant="secondary" (sand)`}</Code>
              <ChipToggleDemo variant="secondary" />
            </Stack>
            <Stack gap="xs">
              <Code>{`variant="secondary" size="sm"`}</Code>
              <ChipToggleDemo variant="secondary" size="sm" />
            </Stack>
          </Stack>
        </Paper>
      </Grid.Col>

      <Grid.Col span={12}>
        <Title order={4} mt="md">Chip.Group — multi select</Title>
        <Text size="xs" c="dimmed" mb="sm">
          <Code>{"<Chip.Group multiple>"}</Code> — multiple chips active simultaneously.
        </Text>
        <Paper withBorder p="md" radius="md" shadow="none">
          <Stack gap="md">
            <Stack gap="xs">
              <Code>{`size="md" (default — 40px)`}</Code>
              <ChipGroupDemo />
            </Stack>
            <Stack gap="xs">
              <Code>{`size="sm" (32px)`}</Code>
              <ChipGroupDemo size="sm" />
            </Stack>
            <Stack gap="xs">
              <Code>{`variant="secondary" (sand)`}</Code>
              <ChipGroupDemo variant="secondary" />
            </Stack>
          </Stack>
        </Paper>
      </Grid.Col>

      <Grid.Col span={12}>
        <Title order={4} mt="md">Chip with close</Title>
        <Text size="xs" c="dimmed" mb="sm">
          Dismissible filter tag using{" "}
          <Code>{"<ChipWithClose onRemove={…}>"}</Code>.
          Click any chip or "Clear filters" to remove.
        </Text>
        <Paper withBorder p="md" radius="md" shadow="none">
          <Stack gap="md">
            <Stack gap="xs">
              <Code>{`size="md" (default — 40px)`}</Code>
              <ChipXDemo />
            </Stack>
            <Stack gap="xs">
              <Code>{`size="sm" (32px)`}</Code>
              <ChipXDemo size="sm" />
            </Stack>
            <Stack gap="xs">
              <Code>{`variant="secondary" (sand)`}</Code>
              <ChipXDemo variant="secondary" />
            </Stack>
            <Stack gap="xs">
              <Code>{`variant="secondary" size="sm"`}</Code>
              <ChipXDemo variant="secondary" size="sm" />
            </Stack>
          </Stack>
        </Paper>
      </Grid.Col>

      {/* ── Icons ─────────────────────────────────────────────────────── */}
      <Grid.Col span={12}>
        <Title order={4} mt="md">Icons</Title>
        <Text size="xs" c="dimmed" mb="sm">
          Design-system icons exported from{" "}
          <Code>@sweco/theme-mantine</Code>. Rendered via CSS mask so they
          inherit <Code>currentColor</Code>. Sizes are locked — no scaling
          tricks — to avoid antialiasing artefacts.
        </Text>
        <Stack gap="sm">
          {ICONS.map(({ name, Component, size }) => (
            <Paper key={name} withBorder p="sm" radius="md" shadow="none">
              <Group justify="space-between" wrap="nowrap">
                <Group gap="md" align="center" wrap="nowrap">
                  <Component />
                  <Stack gap={2}>
                    <Code>{`<${name} />`}</Code>
                    <Text size="xs" c="dimmed">Native {size}</Text>
                  </Stack>
                </Group>
                {/* Color demos — proves currentColor inheritance */}
                <Group gap="sm" wrap="nowrap">
                  <Stack gap={2} align="center">
                    <Component style={{ color: "var(--mantine-color-text)" }} />
                    <Text size="xs" c="dimmed">text</Text>
                  </Stack>
                  <Stack gap={2} align="center">
                    <Component style={{ color: "var(--mantine-color-green-6)" }} />
                    <Text size="xs" c="dimmed">green.6</Text>
                  </Stack>
                  <Stack gap={2} align="center">
                    <Component style={{ color: "var(--mantine-color-error)" }} />
                    <Text size="xs" c="dimmed">error</Text>
                  </Stack>
                </Group>
              </Group>
            </Paper>
          ))}
        </Stack>
      </Grid.Col>
    </Grid>
  </Section>
);
