import { FC } from "react";
import Section from "../Section.tsx";
import {
  Accordion,
  Avatar,
  Button,
  Center,
  Drawer,
  Grid,
  HoverCard,
  Indicator,
  Menu,
  Modal,
  Notification,
  Paper,
  Popover,
  rem,
  Skeleton,
  Stack,
  Text,
  Timeline,
  Title,
  Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeBranch,
  faCodeCommit,
  faCodePullRequest,
  faCommentDots,
  faComments,
  faGear,
  faImages,
  faMagnifyingGlass,
  faRightLeft,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

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
          <Button variant="default" color="gray.0">
            Cancel
          </Button>
          <Button variant="filled" color="green">
            Do something
          </Button>
        </Button.Group>
      </Modal>
      <Button fullWidth variant="filled" color="green" onClick={open}>
        Show modal
      </Button>
    </>
  );
};
export const SectionComponents: FC = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Section title="Components">
      <Grid>
        <Grid.Col span={4}>
          <Paper p="sm" mb="md">
            <Stack>
              <Title order={2}>Modals</Title>
              <StandardModal />
            </Stack>
          </Paper>
          <Paper p="sm" mb="md">
            <Stack>
              <Title order={2}>Toast message</Title>
              <Notification title="Message">See? Just like this.</Notification>
              <Notification title="This went well" color="success">
                Yay, successful execution!
              </Notification>
            </Stack>
          </Paper>
          <Paper p="sm">
            <Stack>
              <Title order={2}>Timeline</Title>
              <Timeline active={1} bulletSize={24} lineWidth={2}>
                <Timeline.Item
                  bullet={
                    <FontAwesomeIcon
                      icon={faCodeBranch}
                      style={{ width: rem(12), height: rem(12) }}
                    />
                  }
                  title="New branch"
                >
                  <Text c="dimmed" size="sm">
                    You&apos;ve created new branch{" "}
                    <Text variant="link" component="span" inherit>
                      fix-notifications
                    </Text>{" "}
                    from master
                  </Text>
                  <Text size="xs" mt={4}>
                    2 hours ago
                  </Text>
                </Timeline.Item>

                <Timeline.Item
                  bullet={
                    <FontAwesomeIcon
                      icon={faCodeCommit}
                      style={{ width: rem(12), height: rem(12) }}
                    />
                  }
                  title="Commits"
                >
                  <Text c="dimmed" size="sm">
                    You&apos;ve pushed 23 commits to
                    <Text variant="link" component="span" inherit>
                      fix-notifications branch
                    </Text>
                  </Text>
                  <Text size="xs" mt={4}>
                    52 minutes ago
                  </Text>
                </Timeline.Item>

                <Timeline.Item
                  title="Pull request"
                  bullet={
                    <FontAwesomeIcon
                      icon={faCodePullRequest}
                      style={{ width: rem(12), height: rem(12) }}
                    />
                  }
                  lineVariant="dashed"
                >
                  <Text c="dimmed" size="sm">
                    You&apos;ve submitted a pull request
                    <Text variant="link" component="span" inherit>
                      Fix incorrect notification message (#187)
                    </Text>
                  </Text>
                  <Text size="xs" mt={4}>
                    34 minutes ago
                  </Text>
                </Timeline.Item>

                <Timeline.Item
                  title="Code review"
                  bullet={
                    <FontAwesomeIcon
                      icon={faCommentDots}
                      style={{ width: rem(12), height: rem(12) }}
                    />
                  }
                >
                  <Text c="dimmed" size="sm">
                    <Text variant="link" component="span" inherit>
                      Robert Gluesticker
                    </Text>{" "}
                    left a code review on your pull request
                  </Text>
                  <Text size="xs" mt={4}>
                    12 minutes ago
                  </Text>
                </Timeline.Item>
              </Timeline>
            </Stack>
          </Paper>
        </Grid.Col>
        <Grid.Col span={4}>
          <Paper p="sm" mb="md">
            <Stack>
              <Title order={2}>Popovers</Title>
              <Popover width={200} position="bottom" withArrow shadow="md">
                <Popover.Target>
                  <Button>Toggle popover</Button>
                </Popover.Target>
                <Popover.Dropdown>
                  <Text size="xs">
                    This is uncontrolled popover, it is opened when button is
                    clicked
                  </Text>
                </Popover.Dropdown>
              </Popover>
            </Stack>
          </Paper>
          <Paper p="sm" mb="md">
            <Stack>
              <Title order={2}>Drawer</Title>
              <Drawer opened={opened} onClose={close} title="Authentication">
                Hello!
              </Drawer>
              <Button onClick={open}>Open drawer</Button>
            </Stack>
          </Paper>
          <Paper p="sm" mb="md">
            <Stack>
              <Title order={2}>Hover card</Title>
              <HoverCard width={280} shadow="md">
                <HoverCard.Target>
                  <Button>Hover to reveal the card</Button>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                  <Text size="sm">
                    Hover card is revealed when user hovers over target element,
                    it will be hidden once mouse is not over both target and
                    dropdown elements
                  </Text>
                </HoverCard.Dropdown>
              </HoverCard>
            </Stack>
          </Paper>
          <Paper p="sm" mb="md">
            <Stack>
              <Title order={2}>Menu</Title>
              <Menu shadow="md" width={200}>
                <Menu.Target>
                  <Button>Toggle menu</Button>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Label>Application</Menu.Label>
                  <Menu.Item
                    leftSection={
                      <FontAwesomeIcon
                        icon={faGear}
                        style={{ width: rem(14), height: rem(14) }}
                      />
                    }
                  >
                    Settings
                  </Menu.Item>
                  <Menu.Item
                    leftSection={
                      <FontAwesomeIcon
                        icon={faComments}
                        style={{ width: rem(14), height: rem(14) }}
                      />
                    }
                  >
                    Messages
                  </Menu.Item>
                  <Menu.Item
                    leftSection={
                      <FontAwesomeIcon
                        icon={faImages}
                        style={{ width: rem(14), height: rem(14) }}
                      />
                    }
                  >
                    Gallery
                  </Menu.Item>
                  <Menu.Item
                    leftSection={
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        style={{ width: rem(14), height: rem(14) }}
                      />
                    }
                    rightSection={
                      <Text size="xs" c="dimmed">
                        ⌘K
                      </Text>
                    }
                  >
                    Search
                  </Menu.Item>

                  <Menu.Divider />

                  <Menu.Label>Danger zone</Menu.Label>
                  <Menu.Item
                    leftSection={
                      <FontAwesomeIcon
                        icon={faRightLeft}
                        style={{ width: rem(14), height: rem(14) }}
                      />
                    }
                  >
                    Transfer my data
                  </Menu.Item>
                  <Menu.Item
                    color="red"
                    leftSection={
                      <FontAwesomeIcon
                        icon={faTrash}
                        style={{ width: rem(14), height: rem(14) }}
                      />
                    }
                  >
                    Delete my account
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Stack>
          </Paper>
          <Paper p="sm" mb="md">
            <Stack>
              <Title order={2}>Tooltips</Title>
              <Tooltip label="Tooltip">
                <Button>Button with tooltip</Button>
              </Tooltip>
            </Stack>
          </Paper>
          <Paper p="sm">
            <Stack>
              <Title order={2}>Skeleton</Title>
              <div>
                <Skeleton height={50} circle mb="xl" />
                <Skeleton height={8} radius="xl" />
                <Skeleton height={8} mt={6} radius="xl" />
                <Skeleton height={8} mt={6} width="70%" radius="xl" />
              </div>
            </Stack>
          </Paper>
        </Grid.Col>
        <Grid.Col span={4}>
          <Paper p="sm" mb="md">
            <Stack>
              <Title order={2}>Date & time</Title>
            </Stack>
          </Paper>
          <Paper p="sm" mb="md">
            <Stack>
              <Title order={2}>Accordion</Title>
              <Accordion defaultValue="Apples">
                <Accordion.Item value="Apples">
                  <Accordion.Control>Apples</Accordion.Control>
                  <Accordion.Panel>
                    Apples are great, they are tasty and healthy
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="Oranges">
                  <Accordion.Control>Oranges</Accordion.Control>
                  <Accordion.Panel>
                    Oranges are great, they are tasty and healthy
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="Bananas">
                  <Accordion.Control>Bananas</Accordion.Control>
                  <Accordion.Panel>
                    Bananas are great, they are tasty and healthy
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultValue="Apples" variant="contained">
                <Accordion.Item value="Apples">
                  <Accordion.Control>Apples</Accordion.Control>
                  <Accordion.Panel>
                    Apples are great, they are tasty and healthy
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="Oranges">
                  <Accordion.Control>Oranges</Accordion.Control>
                  <Accordion.Panel>
                    Oranges are great, they are tasty and healthy
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="Bananas">
                  <Accordion.Control>Bananas</Accordion.Control>
                  <Accordion.Panel>
                    Bananas are great, they are tasty and healthy
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </Stack>
          </Paper>
          <Paper p="sm">
            <Stack>
              <Title order={2}>Avatar & Indicator</Title>
              <div style={{ width: "fit-content" }}>
                <Indicator color="green.1" processing>
                  <Avatar
                    size="lg"
                    radius="sm"
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
                  />
                </Indicator>
              </div>
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid>
    </Section>
  );
};
