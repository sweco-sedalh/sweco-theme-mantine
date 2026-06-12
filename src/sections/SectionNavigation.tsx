import { FC } from "react";
import Section from "../Section.tsx";
import {
  Accordion,
  Anchor,
  AppShell,
  Autocomplete,
  Breadcrumbs,
  Burger,
  Button,
  Center,
  Grid,
  Group,
  MantineProvider,
  Menu,
  Pagination,
  rem,
  Stack,
  Tabs,
  Title,
} from "@mantine/core";
import {
  Header,
  SwecoLogo,
  SearchIcon,
  ChevronDownIcon,
  theme,
  cssVariablesResolver,
} from "../../lib";

export const SectionNavigation: FC = () => (
  <Section title="Navigation">
    <Grid>
      <Grid.Col span={6}>
        <Stack>
          <Title order={4}>Nav tabs small</Title>
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
          <Title order={4}>Nav tabs</Title>
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
          <Title order={4}>Nav pills</Title>
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
          <Title order={4}>Nav pills stacked</Title>
        </Stack>
      </Grid.Col>
      <Grid.Col span={6}>
        <Stack>
          <Title order={4}>Breadcrumb</Title>
          <Breadcrumbs>
            <Anchor href="#">Start</Anchor>
            <Anchor href="#">Library</Anchor>
            <Anchor href="#">Data</Anchor>
            <Anchor href="#">Lorem ipsum</Anchor>
          </Breadcrumbs>
          <Title order={4}>Pagination</Title>
          <Pagination total={10} />
          <Title order={4}>Accordion</Title>
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
        <Title order={4}>Navbar — mörk variant</Title>
        <AppShell header={{ height: rem(56) }} padding="md" mb="xl">
          <Header style={{ position: "relative" }}>
            <Group>
              <Burger size="sm" hiddenFrom="sm" />
              <SwecoLogo size={28} />
            </Group>
            <Group visibleFrom="sm" gap="xs">
              <Autocomplete
                placeholder="Search"
                radius="xl"
                data={["React", "Angular", "Vue", "Next.js", "Svelte"]}
                visibleFrom="xs"
              />
              <Button aria-label="Sök" px={0} style={{ aspectRatio: 1 }}>
                <SearchIcon />
              </Button>
            </Group>
            <Group gap="md" visibleFrom="sm">
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
                      <ChevronDownIcon />
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

        <Title order={4}>Navbar — ljus variant</Title>
        <MantineProvider
          theme={theme}
          cssVariablesResolver={cssVariablesResolver}
          forceColorScheme="light"
          cssVariablesSelector=".sw-force-light"
        >
          <AppShell header={{ height: rem(56) }} padding="md">
            <Header style={{ position: "relative" }}>
              <Group>
                <Burger size="sm" hiddenFrom="sm" />
                <SwecoLogo size={28} black />
              </Group>
              <Group visibleFrom="sm" gap="xs">
                <Autocomplete
                  placeholder="Search"
                  radius="xl"
                  data={["React", "Angular", "Vue", "Next.js", "Svelte"]}
                  visibleFrom="xs"
                />
                <Button aria-label="Sök" px={0} style={{ aspectRatio: 1 }}>
                  <SearchIcon />
                </Button>
              </Group>
              <Group gap="md" visibleFrom="sm">
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
                        <ChevronDownIcon />
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
        </MantineProvider>
      </Grid.Col>
    </Grid>
  </Section>
);
