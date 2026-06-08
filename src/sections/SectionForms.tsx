import { FC, useState } from "react";
import Section from "../Section.tsx";
import {
  Alert,
  Checkbox,
  Chip,
  Code,
  ColorInput,
  Grid,
  Group,
  MultiSelect,
  NumberInput,
  Paper,
  PasswordInput,
  PinInput,
  Radio,
  SegmentedControl,
  Select,
  Slider,
  Stack,
  Switch,
  TagsInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";

export const SectionForms: FC = () => {
  const [radioDefault, setRadioDefault] = useState("option1");
  const [radioAlert, setRadioAlert] = useState("a");
  const [radioWarning, setRadioWarning] = useState<string | undefined>(undefined);

  return (
    <Section title="Forms">
      <Grid mt="sm">
        <Grid.Col span={6}>
          <Paper p="sm">
            <Stack>
              <Title order={4}>Input</Title>
              <TextInput label="Text" placeholder="The placeholder" />
              <NumberInput label="Number" placeholder="The placeholder" />
              <ColorInput label="Color" />
              <PasswordInput label="Password" placeholder="The placeholder" />
              <SegmentedControl data={["React", "Angular", "Vue"]} />
              <Slider label="Slider" />
              <Switch label="Switch" />
              <Paper withBorder p="md" radius="md" shadow="none">
                <Stack gap="xs">
                  <div>
                    <Title order={4}>Radio — default</Title>
                    <Text size="xs" c="dimmed">Standard green radio group. One selected, one disabled.</Text>
                  </div>
                  <Radio.Group
                    value={radioDefault}
                    onChange={setRadioDefault}
                  >
                    <Stack mt={4}>
                      <Radio value="option1" label="Option 1 (selected)" />
                      <Radio value="option2" label="Option 2" />
                      <Radio value="option3" label="Option 3 (disabled)" disabled />
                    </Stack>
                  </Radio.Group>
                </Stack>
              </Paper>

              <Paper withBorder p="md" radius="md" shadow="none">
                <Stack gap="xs">
                  <div>
                    <Title order={4}>Radio — caution (alert)</Title>
                    <Text size="xs" c="dimmed">Alert-colored group with error message.</Text>
                  </div>
                  <Radio.Group
                    value={radioAlert}
                    onChange={setRadioAlert}
                    error="Helper text that explains how to resolve the issue."
                  >
                    <Stack mt={4}>
                      <Radio value="a" label="Option A (selected)" color="alert" />
                      <Radio value="b" label="Option B" color="alert" />
                      <Radio value="c" label="Option C (disabled)" color="alert" disabled />
                    </Stack>
                  </Radio.Group>
                </Stack>
              </Paper>

              <Paper withBorder p="md" radius="md" shadow="none">
                <Stack gap="xs">
                  <div>
                    <Title order={4}>Radio — warning / error state</Title>
                    <Text size="xs" c="dimmed">No option selected — validation error visible below.</Text>
                  </div>
                  <Radio.Group
                    value={radioWarning}
                    onChange={setRadioWarning}
                    error="Helper text that explains how to resolve the issue."
                  >
                    <Stack mt={4}>
                      <Radio value="x" label="Option (warning state)" />
                      <Radio value="y" label="Option 2" />
                    </Stack>
                  </Radio.Group>
                </Stack>
              </Paper>
              <Paper withBorder p="md" radius="md" shadow="none">
                <Stack gap="xs">
                  <div>
                    <Title order={4}>Checkbox — default</Title>
                    <Text size="xs" c="dimmed">Standard green checkbox. Checked, unchecked and disabled states.</Text>
                  </div>
                  <Checkbox defaultChecked label="Checked" />
                  <Checkbox label="Unchecked" />
                  <Checkbox label="Disabled" disabled />
                  <Checkbox defaultChecked label="Checked disabled" disabled />
                </Stack>
              </Paper>

              <Paper withBorder p="md" radius="md" shadow="none">
                <Stack gap="xs">
                  <div>
                    <Title order={4}>Checkbox — caution (alert)</Title>
                    <Text size="xs" c="dimmed">Alert-colored checkbox — label and border use the alert palette.</Text>
                  </div>
                  <Checkbox defaultChecked label="Checked (alert)" color="alert" />
                  <Checkbox label="Unchecked (alert)" color="alert" />
                  <Checkbox label="Disabled (alert)" color="alert" disabled />
                </Stack>
              </Paper>

              <Paper withBorder p="md" radius="md" shadow="none">
                <Stack gap="xs">
                  <div>
                    <Title order={4}>Checkbox — indeterminate</Title>
                    <Text size="xs" c="dimmed">Used for parent checkboxes where children are partially selected.</Text>
                  </div>
                  <Checkbox label="Indeterminate" indeterminate />
                  <Checkbox label="Indeterminate disabled" indeterminate disabled />
                </Stack>
              </Paper>

              <Paper withBorder p="md" radius="md" shadow="none">
                <Stack gap="xs">
                  <div>
                    <Title order={4}>Checkbox — warning / error state</Title>
                    <Text size="xs" c="dimmed">Validation error shown below the label.</Text>
                  </div>
                  <Checkbox
                    label="Option (warning state)"
                    error="Helper text that explains how to resolve the issue."
                  />
                </Stack>
              </Paper>
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
          <Paper p="sm">
            <Stack>
              <Title order={4}>Validation</Title>
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
          <Paper p="sm" mt="lg">
            <Stack>
              <Title order={4}>Alerts</Title>
              <Stack gap={2}>
                <Alert title="Success" color="green">
                  Action completed successfully.
                </Alert>
                <Code fz="xs">{'<Alert title="Success" color="green">'}</Code>
              </Stack>
              <Stack gap={2}>
                <Alert title="Info" color="blue">
                  Informational message or guidance.
                </Alert>
                <Code fz="xs">{'<Alert title="Info" color="blue">'}</Code>
              </Stack>
              <Stack gap={2}>
                <Alert title="Warning" color="sand">
                  Neutral caution — check before proceeding.
                </Alert>
                <Code fz="xs">{'<Alert title="Warning" color="sand">'}</Code>
              </Stack>
              <Stack gap={2}>
                <Alert title="Alert / Error" color="alert">
                  Destructive action or error state.
                </Alert>
                <Code fz="xs">
                  {'<Alert title="Alert / Error" color="alert">'}
                </Code>
              </Stack>
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid>
    </Section>
  );
};
