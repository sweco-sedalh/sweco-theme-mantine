import {
  Accordion,
  ActionIcon,
  Anchor,
  AppShell,
  Autocomplete,
  Badge,
  Blockquote,
  Box,
  Breadcrumbs,
  Burger,
  Button,
  Center,
  Checkbox,
  Chip,
  Code,
  ColorInput,
  Container,
  Grid,
  Group,
  List,
  Loader,
  Mark,
  Menu,
  Modal,
  MultiSelect,
  NavLink,
  Notification,
  NumberInput,
  Pagination,
  Paper,
  PasswordInput,
  PinInput,
  Radio,
  rem,
  SegmentedControl,
  Select,
  Slider,
  Stack,
  Stepper,
  Switch,
  Tabs,
  TagsInput,
  Text,
  TextInput,
  Title,
  TitleOrder,
  useMantineTheme,
} from "@mantine/core";
import { SwecoLogo } from "../lib";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Header } from "../lib";
import { FC } from "react";
import { useDisclosure } from "@mantine/hooks";

const StandardModal: FC = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Modal title"
        withCloseButton
      >
        <Center p="xl">
          <strong>Some content</strong>
        </Center>
        <Button.Group>
          <Button variant="default" c="gray.0">
            Cancel
          </Button>
          <Button variant="filled" color="green" c="gray.0">
            Do something
          </Button>
        </Button.Group>
      </Modal>
      <Button fullWidth variant="outline" bg="white" onClick={open}>
        Show modal
      </Button>
    </>
  );
};

const App: FC = () => {
  const theme = useMantineTheme();
  return (
    <Container>
      <Stack>
        <Paper shadow="sm" p="md">
          <Title>Sweco colors</Title>
          <Grid>
            <Grid.Col span={6}>
              <Title order={2}>Grayscale</Title>
              <Stack gap={0}>
                {theme.colors.gray.map((_, idx) => (
                  <Box key={idx} bg={`gray.${idx}`} p="xs">
                    gray.{idx}
                  </Box>
                ))}
              </Stack>
            </Grid.Col>
            <Grid.Col span={6} />
            <Grid.Col span={12}>
              <Title order={2}>Brand colors</Title>
            </Grid.Col>
            <Grid.Col span={4}>
              <Stack gap={0}>
                {theme.colors.green.map((_, idx) => (
                  <Box key={idx} bg={`green.${idx}`} p="xs">
                    green.{idx}
                  </Box>
                ))}
              </Stack>
            </Grid.Col>
            <Grid.Col span={4}>
              <Stack gap={0}>
                {theme.colors.blue.map((_, idx) => (
                  <Box key={idx} bg={`blue.${idx}`} p="xs">
                    blue.{idx}
                  </Box>
                ))}
              </Stack>
            </Grid.Col>
            <Grid.Col span={4}>
              <Stack gap={0}>
                {theme.colors.ochre.map((_, idx) => (
                  <Box key={idx} bg={`ochre.${idx}`} p="xs">
                    ochre.{idx}
                  </Box>
                ))}
              </Stack>
            </Grid.Col>
            <Grid.Col span={12}>
              <Title order={2}>Validation colors</Title>
            </Grid.Col>
            <Grid.Col span={4}>
              <Box bg="alert" p="xs">
                alert
              </Box>
            </Grid.Col>
            <Grid.Col span={4}>
              <Box bg="success" p="xs">
                success
              </Box>
            </Grid.Col>
            <Grid.Col span={4}>
              <Box bg="warning" p="xs">
                warning
              </Box>
            </Grid.Col>
          </Grid>
        </Paper>
        <Paper shadow="sm" p="md">
          <Title>Typography</Title>
          <Grid>
            <Grid.Col span={6}>
              {[1, 2, 3, 4, 5, 6].map((h) => (
                <Title key={h} order={h as TitleOrder}>
                  Heading h{h}
                </Title>
              ))}
              <Text size="xs">Font-size-xs</Text>
              <Text size="sm">Font-size-sm</Text>
              <Text size="md">Font-size-sm</Text>
              <Text size="lg">Font-size-lg</Text>
              <Text size="xl">Font-size-xl</Text>
              <Text>
                This line has <Anchor href="#">inline link</Anchor>
              </Text>
              <Text>
                You can use the mark tag to <Mark>highlight</Mark> text
              </Text>
              <Text>
                This is{" "}
                <Text c="dimmed" inherit span>
                  dimmed
                </Text>{" "}
                text
              </Text>
              <Text fw={500}>Semibold</Text>
              <Text fw={700}>Bold</Text>
              <Text fs="italic">Italic</Text>
              <Text td="underline">Underlined</Text>
              <Text td="line-through">Strikethrough</Text>
              <Text tt="uppercase">Uppercase</Text>
              <Text tt="capitalize">capitalized text</Text>
              <Text>
                Some inline <Code>code</Code>
              </Text>
              <Code block>
                &lt;pre&gt; &lt;code&gt;This is a pre code block&lt;/code&gt;
                &lt;/pre&gt;
              </Code>
            </Grid.Col>
            <Grid.Col span={6}>
              <Blockquote cite="- Persona Persona - Source Title">
                Blockquote, adipiscing elit. Integer posuere lorem.
              </Blockquote>
              <Title order={2}>Lists</Title>
              <List>
                <List.Item>Unordered list item 1</List.Item>
                <List.Item>Unordered list item 2</List.Item>
                <List.Item>Unordered list item 3</List.Item>
              </List>
              <List type="ordered">
                <List.Item>Ordered list item 1</List.Item>
                <List.Item>Ordered list item 2</List.Item>
                <List.Item>Ordered list item 3</List.Item>
              </List>
            </Grid.Col>
          </Grid>
        </Paper>
        <Paper shadow="sm" p="md">
          <Title>Table</Title>
        </Paper>
        <Paper shadow="sm" p="md">
          <Title>Grid</Title>
        </Paper>
        <Paper shadow="sm" p="md">
          <Title>Buttons</Title>
        </Paper>
        <Paper shadow="sm" p="md">
          <Title>Navigation</Title>
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
                <Pagination total={3} />
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
              <AppShell header={{ height: rem(56) }} padding="md">
                <Header style={{ position: "relative" }}>
                  <Group>
                    <Burger size="sm" hiddenFrom="sm" color="white" />
                    <SwecoLogo size={28} />
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
                      withArrow
                      offset={11}
                      arrowOffset={0}
                    >
                      <Menu.Target>
                        <Anchor
                          href="#"
                          onClick={(evt) => evt.preventDefault()}
                        >
                          <Center>
                            <span style={{ marginRight: rem(5) }}>
                              Dropdown
                            </span>
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
            </Grid.Col>
          </Grid>
        </Paper>
        <Paper shadow="sm" p="md">
          <Title>Nav links</Title>
          <Grid>
            <Grid.Col span={4}>
              <NavLink href="#" label="Lorem ipsum dolor sit amet" />
              <NavLink href="#" label="Active nav link" active />
              <NavLink href="#" label="Lorem ipsum" />
              <NavLink href="#" label="Lorem ipsum dolor sit" />
              <NavLink href="#" label="Disabled nav link" disabled />
              <NavLink href="#" label="Lorem ipsum dolor sit amet" />
            </Grid.Col>
            <Grid.Col span={4}>
              <NavLink
                href="#"
                label="Active nav link"
                active
                rightSection={<Badge color="green">14</Badge>}
              />
              <NavLink
                href="#"
                label="Lorem ipsum"
                rightSection={<Badge color="green">3</Badge>}
              />
              <NavLink
                href="#"
                label="Lorem ipsum dolor sit"
                rightSection={<Badge color="green">1</Badge>}
              />
              <NavLink href="#" label="Lorem ipsum dolor sit amet" />
              <NavLink href="#" label="Lorem ipsum" />
              <NavLink href="#" label="Lorem ipsum dolor sit" />
            </Grid.Col>
            <Grid.Col span={4}>
              <NavLink
                href="#"
                label="Nav link heading"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
              />
              <NavLink
                href="#"
                label="Active nav link heading"
                active
                description="Lorem ipsum dolor sit amet, consectetur adipiscing"
              />
              <NavLink
                href="#"
                label="Nav link heading"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
              />
            </Grid.Col>
          </Grid>
        </Paper>
        <Paper shadow="sm" p="md">
          <Title>Forms</Title>
          <Grid mt="sm">
            <Grid.Col span={6}>
              <Paper bg="gray.8" p="sm">
                <Stack>
                  <Title order={2}>Input</Title>
                  <TextInput label="Text" placeholder="The placeholder" />
                  <NumberInput label="Number" placeholder="The placeholder" />
                  <ColorInput label="Color" />
                  <PasswordInput
                    label="Password"
                    placeholder="The placeholder"
                  />
                  <SegmentedControl data={["React", "Angular", "Vue"]} />
                  <Slider label="Slider" />
                  <Switch label="Switch" />
                  <Radio.Group label="Radio">
                    <Stack>
                      <Radio value="react" label="React" />
                      <Radio value="angular" label="Angular" />
                      <Radio value="vue" label="Vue" />
                    </Stack>
                  </Radio.Group>
                  <Checkbox label="Checkbox" />
                  <Checkbox label="Checkbox disabled" disabled />
                  <PinInput />
                  <Group>
                    <Chip defaultChecked>Chip 1</Chip>
                    <Chip>Chip 2</Chip>
                  </Group>
                  <Select
                    label="Your favorite library"
                    placeholder="Pick value"
                    data={["React", "Angular", "Vue", "Svelte"]}
                  />
                  <MultiSelect
                    label="Your favorite libraries"
                    placeholder="Pick value"
                    data={["React", "Angular", "Vue", "Svelte"]}
                  />
                  <TagsInput
                    label="Press Enter to submit a tag"
                    placeholder="Enter tag"
                  />
                  <TextInput
                    label="Required input"
                    placeholder="The placeholder"
                    withAsterisk
                  />
                  <TextInput
                    label="Disabled input"
                    placeholder="The placeholder"
                    disabled
                  />
                  <TextInput
                    label="Read-only input"
                    placeholder="The placeholder"
                    readOnly
                  />
                </Stack>
              </Paper>
            </Grid.Col>
            <Grid.Col span={6}>
              <Paper bg="gray.8" p="sm">
                <Stack>
                  <Title order={2}>Validation</Title>
                  <TextInput
                    label="Input with error"
                    placeholder="The placeholder"
                    description="Some extra help"
                    error
                  />
                  <TextInput
                    label="Input with error message"
                    placeholder="The placeholder"
                    description="Some extra help"
                    error="This is wrong"
                  />
                  <Checkbox label="Checkbox with error" error />
                  <Checkbox
                    label="Checkbox with error message"
                    error="Check this please"
                  />
                </Stack>
              </Paper>
            </Grid.Col>
          </Grid>
        </Paper>
        <Paper shadow="sm" p="md">
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
        </Paper>
        <Paper shadow="sm" p="md">
          <Title>Spinner</Title>
          <Grid>
            <Grid.Col
              span={4}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Loader />
            </Grid.Col>
            <Grid.Col
              span={4}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              bg="gray"
            >
              <Loader color="white" />
            </Grid.Col>
            <Grid.Col span={4}>
              <Button loading={true} fullWidth />
              <Button loading={true} fullWidth mt="sm" variant="light" />
              <Button loading={true} fullWidth mt="sm" variant="outline" />
            </Grid.Col>
          </Grid>
        </Paper>
        <Paper shadow="sm" p="md">
          <Title>Wizard steps</Title>
          <Group mt="sm">
            <Stepper active={3} orientation="vertical">
              <Stepper.Step label="Step 1" />
              <Stepper.Step label="Step 2" />
              <Stepper.Step label="Step 3" />
              <Stepper.Step label="Step 4" />
            </Stepper>
            <Stepper active={3}>
              <Stepper.Step label="Step 1" />
              <Stepper.Step label="Step 2" />
              <Stepper.Step label="Step 3" />
              <Stepper.Step label="Step 4" />
            </Stepper>
          </Group>
        </Paper>
        <Paper shadow="sm" p="md">
          <Title>Card</Title>
        </Paper>
        <Paper shadow="sm" p="md">
          <Title>Components</Title>
          <Grid>
            <Grid.Col span={4}>
              <Paper bg="gray.8" p="sm" mb="md">
                <Stack>
                  <Title order={2}>Modals</Title>
                  <StandardModal />
                </Stack>
              </Paper>
              <Paper bg="gray.8" p="sm">
                <Stack>
                  <Title order={2}>Toast message</Title>
                  <Notification title="Message">
                    See? Just like this.
                  </Notification>
                  <Notification title="This went well" color="success">
                    Yay, successful execution!
                  </Notification>
                </Stack>
              </Paper>
            </Grid.Col>
            <Grid.Col span={4}>
              <Paper bg="gray.8" p="sm" mb="md">
                <Title order={2}>Popovers</Title>
              </Paper>
              <Paper bg="gray.8" p="sm">
                <Title order={2}>Tooltips</Title>
              </Paper>
            </Grid.Col>
            <Grid.Col span={4}>
              <Paper bg="gray.8" p="sm">
                <Title order={2}>Date & time</Title>
              </Paper>
            </Grid.Col>
          </Grid>
        </Paper>
      </Stack>
    </Container>
  );
};

export default App;
