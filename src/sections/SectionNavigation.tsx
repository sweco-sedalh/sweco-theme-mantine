import { FC } from "react";
import Section from "../Section.tsx";
import {
  Accordion,
  ActionIcon,
  Anchor,
  AppShell,
  Autocomplete,
  Breadcrumbs,
  Burger,
  Center,
  Grid,
  Group,
  Menu,
  Pagination,
  rem,
  Stack,
  Tabs,
  Title,
} from "@mantine/core";
import { Header, SwecoLogo } from "../../lib";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons";

export const SectionNavigation: FC = () => (
  <Section title="Navigation">
    <Grid>
      <Grid.Col span={6}>
        <Stack>
          <Title order={2}>Nav tabs small</Title>
          <Tabs defaultValue="2" color="green">
            <Tabs.List>
              <Tabs.Tab value="1">1</Tabs.Tab>
              <Tabs.Tab value="2">2</Tabs.Tab>
              <Tabs.Tab value="3">3</Tabs.Tab>
              <Tabs.Tab value="4" disabled>
                4
              </Tabs.Tab>
            </Tabs.List>
          </Tabs>
          <Title order={2}>Nav tabs</Title>
          <Tabs defaultValue="2" variant="outline">
            <Tabs.List>
              <Tabs.Tab value="1">Link</Tabs.Tab>
              <Tabs.Tab value="2">Active</Tabs.Tab>
              <Tabs.Tab value="3">Link</Tabs.Tab>
              <Tabs.Tab value="4" disabled>
                Disabled
              </Tabs.Tab>
            </Tabs.List>
          </Tabs>
          <Title order={2}>Nav pills</Title>
          <Tabs defaultValue="2" variant="pills">
            <Tabs.List>
              <Tabs.Tab value="1">Link</Tabs.Tab>
              <Tabs.Tab value="2">Active</Tabs.Tab>
              <Tabs.Tab value="3">Link</Tabs.Tab>
              <Tabs.Tab value="4" disabled>
                Disabled
              </Tabs.Tab>
            </Tabs.List>
          </Tabs>
          <Title order={2}>Nav pills stacked</Title>
        </Stack>
      </Grid.Col>
      <Grid.Col span={6}>
        <Stack>
          <Title order={2}>Breadcrumb</Title>
          <Breadcrumbs>
            <Anchor href="#">Start</Anchor>
            <Anchor href="#">Library</Anchor>
            <Anchor href="#">Data</Anchor>
            <Anchor href="#">Lorem ipsum</Anchor>
          </Breadcrumbs>
          <Title order={2}>Pagination</Title>
          <Pagination total={10} />
          <Title order={2}>Accordion</Title>
          <Accordion defaultValue="1">
            <Accordion.Item value="1">
              <Accordion.Control>Collapsible item 1</Accordion.Control>
              <Accordion.Panel>
                Some quick lorem ipsum example text
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="2">
              <Accordion.Control>Collapsible item 2</Accordion.Control>
              <Accordion.Panel>
                Some quick lorem ipsum example text
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="3">
              <Accordion.Control>Collapsible item 3</Accordion.Control>
              <Accordion.Panel>
                Some quick lorem ipsum example text
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Stack>
      </Grid.Col>
      <Grid.Col span={12}>
        <Title order={2}>Navbar</Title>
        {[false, true].map((light, idx) => (
          <AppShell
            key={idx}
            header={{ height: rem(56) }}
            padding="md"
            mb={idx === 0 ? "xl" : 0}
          >
            <Header style={{ position: "relative" }} light={light}>
              <Group>
                <Burger size="sm" hiddenFrom="sm" color="white" />
                <SwecoLogo size={28} black={light || undefined} />
              </Group>
              <Group visibleFrom="sm" gap={0}>
                <Autocomplete
                  style={{}}
                  placeholder="Search"
                  data={[
                    "React",
                    "Angular",
                    "Vue",
                    "Next.js",
                    "Riot.js",
                    "Svelte",
                    "Blitz.js",
                  ]}
                  visibleFrom="xs"
                />
                <ActionIcon variant="filled" color="green">
                  <FontAwesomeIcon icon={faSearch} />
                </ActionIcon>
              </Group>
              <Group gap={15} style={{}} visibleFrom="sm">
                <Anchor href="#">Start</Anchor>
                <Menu
                  trigger="hover"
                  transitionProps={{ exitDuration: 0 }}
                  withinPortal
                  offset={11}
                  arrowOffset={0}
                >
                  <Menu.Target>
                    <Anchor href="#" onClick={(evt) => evt.preventDefault()}>
                      <Center>
                        <span style={{ marginRight: rem(5) }}>Dropdown</span>
                        <FontAwesomeIcon icon={faChevronDown} />
                      </Center>
                    </Anchor>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item>Action</Menu.Item>
                    <Menu.Item>Another action</Menu.Item>
                    <Menu.Item>Something else here</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
                <Anchor href="#">Link</Anchor>
              </Group>
            </Header>
          </AppShell>
        ))}
      </Grid.Col>
    </Grid>
  </Section>
);
