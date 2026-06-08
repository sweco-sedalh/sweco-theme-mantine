import { FC, ReactNode, SVGProps } from "react";
import Section from "../Section.tsx";
import {
  Burger,
  Button,
  ButtonProps,
  Code,
  Flex,
  CloseButton,
  Group,
  Paper,
  Stack,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ArrowLeftIcon, ArrowRightIcon } from "../../lib";

/* ── Design-system icons that don't yet live in the theme are inlined here.
 *   ArrowLeft / ArrowRight come from the theme (lib/components/ArrowIcons).
 *   24×24, fill=currentColor, NO scaling tricks. */

const SvgIcon: FC<SVGProps<SVGSVGElement> & { children: ReactNode }> = ({
  children,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="currentColor"
    aria-hidden
    focusable={false}
    {...props}
  >
    {children}
  </svg>
);

const TrashIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <SvgIcon {...props}>
    <path d="M9.75 3a.75.75 0 0 0-.75.75V4.5H5.25a.75.75 0 0 0 0 1.5h.6l.78 12.51A2.25 2.25 0 0 0 8.876 20.625h6.248a2.25 2.25 0 0 0 2.246-2.115L18.15 6h.6a.75.75 0 0 0 0-1.5H15V3.75a.75.75 0 0 0-.75-.75zm.75 1.5h3V4.5h-3zM7.353 6h9.294l-.776 12.42a.75.75 0 0 1-.748.705H8.876a.75.75 0 0 1-.748-.705zM10.5 9a.75.75 0 0 0-.75.75v6.75a.75.75 0 0 0 1.5 0V9.75A.75.75 0 0 0 10.5 9m3 0a.75.75 0 0 0-.75.75v6.75a.75.75 0 0 0 1.5 0V9.75A.75.75 0 0 0 13.5 9" />
  </SvgIcon>
);

const WarningIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <SvgIcon {...props}>
    <path d="M12 2.25a1.5 1.5 0 0 1 1.32.787l9.13 16.5A1.5 1.5 0 0 1 21.13 21.75H2.87a1.5 1.5 0 0 1-1.32-2.213l9.13-16.5A1.5 1.5 0 0 1 12 2.25m0 1.965L3.45 19.875h17.1zM11.25 9.75a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-1.5 0zm.75 7.5a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1" />
  </SvgIcon>
);

/**
 * Card-style demo for one button variant. Shows the variant name + a short
 * description on the left, a `<Code>` snippet on the right, then a row of
 * variations (plain, with left icon, with right icon, icon-only).
 */
type VariantCardProps = {
  title: string;
  description: string;
  code: string;
  /** Props applied to every `<Button>` in this card. */
  buttonProps: ButtonProps;
  /** Skip the icon-only example (e.g. caution/quaternary don't have one). */
  hideIconOnly?: boolean;
  /** Extra example row appended after the standard variations. */
  extra?: ReactNode;
};

/**
 * Make a button square (icon-only) while keeping the exact same height
 * as a text button of the same size. Width is locked to --button-height
 * (set per-size in button.css) and all horizontal padding is removed.
 */
const ICON_ONLY_STYLE: React.CSSProperties = {
  width: "var(--button-height)",
  minWidth: "var(--button-height)",
  paddingInline: 0,
};

const ButtonVariantCard: FC<VariantCardProps> = ({
  title,
  description,
  code,
  buttonProps,
  hideIconOnly,
  extra,
}) => (
  <Paper withBorder p="lg" radius="md">
    <Stack gap="md">
      <Group justify="space-between" align="flex-start" wrap="wrap" gap="md">
        <Stack gap={4}>
          <Title order={4}>{title}</Title>
          <Text size="sm" c="dimmed">
            {description}
          </Text>
        </Stack>
        <Code>{code}</Code>
      </Group>
      <Flex gap="md" wrap="wrap" align="center">
        <Stack gap={4} align="flex-start" justify="center">
          <Text size="xs" c="dimmed">
            Default
          </Text>
          <Button {...buttonProps}>Button</Button>
        </Stack>
        <Stack gap={4} align="flex-start" justify="center">
          <Text size="xs" c="dimmed">
            leftSection
          </Text>
          <Button {...buttonProps} leftSection={<ArrowLeftIcon />}>
            Button
          </Button>
        </Stack>
        <Stack gap={4} align="flex-start" justify="center">
          <Text size="xs" c="dimmed">
            rightSection
          </Text>
          <Button {...buttonProps} rightSection={<ArrowRightIcon />}>
            Button
          </Button>
        </Stack>
        {!hideIconOnly && (
          <Stack gap={4} align="flex-start" justify="center">
            <Text size="xs" c="dimmed">
              Icon only
            </Text>
            <Button
              {...buttonProps}
              aria-label="Button"
              style={ICON_ONLY_STYLE}
            >
              <ArrowRightIcon />
            </Button>
          </Stack>
        )}
        {extra && (
          <Stack gap={4} align="flex-start" justify="center">
            <Text size="xs" c="dimmed">
              Extra
            </Text>
            {extra}
          </Stack>
        )}
      </Flex>
    </Stack>
  </Paper>
);

export const SectionButtons: FC = () => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <Section title="Buttons">
      <ButtonVariantCard
        title="Primary"
        description="High-emphasis filled button. Use for the main call-to-action on a page or in a section."
        code='variant="filled"'
        buttonProps={{ variant: "filled" }}
      />

      <ButtonVariantCard
        title="Secondary"
        description="Medium-emphasis outlined button. Pair with primary or use as a standalone secondary action."
        code='variant="outline"'
        buttonProps={{ variant: "outline" }}
      />

      <ButtonVariantCard
        title="Tertiary"
        description="Light filled button on a soft green background. Use for low-emphasis actions next to primary/secondary."
        code='variant="light"'
        buttonProps={{ variant: "light" }}
      />

      <ButtonVariantCard
        title="Quaternary"
        description="Minimal text button with an animated underline on hover. Use for inline / supplementary actions."
        code='variant="quaternary"'
        buttonProps={{ variant: "quaternary" }}
        hideIconOnly
      />

      <ButtonVariantCard
        title="Warning"
        description="Destructive primary action. Outlined in error red, fills on hover."
        code='variant="warning"'
        buttonProps={{
          variant: "warning",
          leftSection: <WarningIcon />,
        }}
        hideIconOnly
      />

      <ButtonVariantCard
        title="Caution"
        description="Compact, transparent text button in error red. Use for destructive inline actions (e.g. 'Ta bort alla')."
        code='variant="caution"'
        buttonProps={{
          variant: "caution",
          leftSection: <TrashIcon />,
        }}
        hideIconOnly
        extra={
          <Button
            variant="caution"
            size="xs"
            leftSection={<TrashIcon />}
          >
            Button (xs)
          </Button>
        }
      />

      <Paper withBorder p="lg" radius="md">
        <Stack gap="md">
          <Group justify="space-between" align="flex-start" wrap="wrap" gap="md">
            <Stack gap={4}>
              <Title order={4}>Sizes</Title>
              <Text size="sm" c="dimmed">
                All variants accept Mantine&apos;s size prop. Sweco default is{" "}
                <Code>md</Code> (48px).
              </Text>
            </Stack>
            <Code>size="xs|sm|md|lg|xl"</Code>
          </Group>
          <Flex gap="md" wrap="wrap" align="center">
            <Tooltip label='size="xs"' withArrow>
              <Button size="xs">Button</Button>
            </Tooltip>
            <Tooltip label='size="sm"' withArrow>
              <Button size="sm">Button</Button>
            </Tooltip>
            <Tooltip label='size="md" (default)' withArrow>
              <Button>Button</Button>
            </Tooltip>
            <Tooltip label='size="lg"' withArrow>
              <Button size="lg">Button</Button>
            </Tooltip>
            <Tooltip label='size="xl"' withArrow>
              <Button size="xl">Button</Button>
            </Tooltip>
          </Flex>
        </Stack>
      </Paper>

      <Paper withBorder p="lg" radius="md">
        <Stack gap="md">
          <Group justify="space-between" align="flex-start" wrap="wrap" gap="md">
            <Stack gap={4}>
              <Title order={4}>Disabled state</Title>
              <Text size="sm" c="dimmed">
                Every variant falls back to a muted gray when disabled.
              </Text>
            </Stack>
            <Code>disabled</Code>
          </Group>
          <Flex gap="md" wrap="wrap" align="center">
            {(
              [
                "filled",
                "outline",
                "light",
                "quaternary",
                "warning",
                "caution",
              ] as const
            ).map((v) => (
              <Stack key={v} gap={4} align="flex-start" justify="center">
                <Text size="xs" fw={600}>
                  {`variant="${v}"`}
                </Text>
                <Button variant={v} disabled>
                  Button
                </Button>
              </Stack>
            ))}
          </Flex>
        </Stack>
      </Paper>

      <Paper withBorder p="lg" radius="md">
        <Stack gap="md">
          <Group justify="space-between" align="flex-start" wrap="wrap" gap="md">
            <Stack gap={4}>
              <Title order={4}>Special buttons</Title>
              <Text size="sm" c="dimmed">
                Burger, close button and the navigation/hero button.
              </Text>
            </Stack>
          </Group>
          <Flex direction="row" gap="xl" wrap="wrap" align="flex-end">
            <Stack gap={4} align="flex-start">
              <Text size="xs" fw={600}>
                Burger
              </Text>
              <Burger opened={opened} onClick={toggle} />
            </Stack>
            <Stack gap={4} align="flex-start">
              <Text size="xs" fw={600}>
                CloseButton
              </Text>
              <CloseButton />
            </Stack>
            <Stack gap={4} align="flex-start">
              <Text size="xs" fw={600}>
                Navigation (hero)
              </Text>
              <Tooltip
                label='variant="subtle" size="xl" rightSection'
                withArrow
              >
                <Button
                  variant="subtle"
                  size="xl"
                  rightSection={<ArrowRightIcon />}
                >
                  Button
                </Button>
              </Tooltip>
            </Stack>
          </Flex>
        </Stack>
      </Paper>
    </Section>
  );
};
