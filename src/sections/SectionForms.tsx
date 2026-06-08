import { FC } from "react";
import Section from "../Section.tsx";
import {
  Alert,
  Checkbox,
  Chip,
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
  TextInput,
  Title,
} from "@mantine/core";

export const SectionForms: FC = () => {
  return (
    <Section title="Forms">
      <Grid mt="sm">
        <Grid.Col span={6}>
          <Paper p="sm">
            <Stack>
              <Title order={2}>Input</Title>
              <TextInput label="Text" placeholder="The placeholder" />
              <NumberInput label="Number" placeholder="The placeholder" />
              <ColorInput label="Color" />
              <PasswordInput label="Password" placeholder="The placeholder" />
              <SegmentedControl data={["React", "Angular", "Vue"]} />
              <Slider label="Slider" />
              <Switch label="Switch" />
              <Radio.Group label="Radio — default (green)">
                <Stack>
                  <Radio value="react" label="Option 1" defaultChecked />
                  <Radio value="angular" label="Option 2" />
                  <Radio value="vue" label="Option 3 (disabled)" disabled />
                </Stack>
              </Radio.Group>
              <Radio.Group
                label="Radio — caution (alert)"
                error="Helper text that explains how to resolve the issue."
              >
                <Stack>
                  <Radio value="a" label="Option A" color="alert" />
                  <Radio value="b" label="Option B (disabled)" color="alert" disabled />
                </Stack>
              </Radio.Group>
              <Radio.Group
                label="Radio — warning state"
                error="Helper text that explains how to resolve the issue."
              >
                <Stack>
                  <Radio value="x" label="Option (warning state)" />
                </Stack>
              </Radio.Group>
              <Checkbox label="Checkbox — default (green)" />
              <Checkbox label="Checkbox — caution (alert)" color="alert" />
              <Checkbox label="Checkbox disabled" disabled />
              <Checkbox label="Checkbox caution disabled" color="alert" disabled />
              <Checkbox label="Option (indeterminate)" indeterminate />
              <Checkbox label="Option (indeterminate disabled)" indeterminate disabled />
              <Checkbox
                label="Option (warning state)"
                error="Helper text that explains how to resolve the issue."
              />
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
          <Paper p="sm" mt="lg">
            <Stack>
              <Title order={2}>Alerts</Title>
              <Alert
                variant="light"
                color="alert"
                withCloseButton
                title="Alert"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                officiis, quae tempore necessitatibus placeat saepe.
              </Alert>
              <Alert
                variant="filled"
                color="success"
                withCloseButton
                title="Alert"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                officiis, quae tempore necessitatibus placeat saepe.
              </Alert>
              <Alert
                variant="outline"
                color="blue"
                withCloseButton
                title="Alert"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                officiis, quae tempore necessitatibus placeat saepe.
              </Alert>
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid>
    </Section>
  );
};
