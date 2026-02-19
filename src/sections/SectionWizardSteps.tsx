import { FC } from "react";
import Section from "../Section.tsx";
import { Group, Stepper } from "@mantine/core";

export const SectionWizardSteps: FC = () => (
  <Section title="Wizard steps">
    <Group mt="sm">
      <Stepper active={2} orientation="vertical">
        <Stepper.Step label="Step 1" description="Description for step 1" />
        <Stepper.Step label="Step 2" description="Description for step 2" />
        <Stepper.Step label="Step 3" description="Description for step 3" />
        <Stepper.Step label="Step 4" description="Description for step 4" />
      </Stepper>
      <Stepper active={2}>
        <Stepper.Step label="Step 1" />
        <Stepper.Step label="Step 2" />
        <Stepper.Step label="Step 3" loading />
        <Stepper.Step label="Step 4" />
      </Stepper>
    </Group>
  </Section>
);
