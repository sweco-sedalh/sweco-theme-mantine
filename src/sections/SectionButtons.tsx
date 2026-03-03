import { FC } from "react";
import Section from "../Section.tsx";
import {
  Burger,
  Button,
  Flex,
  CloseButton,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "../../lib/components/Button.tsx";

export const SectionButtons: FC = () => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <Section title="Buttons">
      <Title order={2}>Primary buttons</Title>
      <Flex gap="sm">
        <PrimaryButton size="lg">{'<PrimaryButton size="lg">'}</PrimaryButton>
        <PrimaryButton>{"<PrimaryButton>"}</PrimaryButton>
        <PrimaryButton size="sm">{'<PrimaryButton size="sm">'}</PrimaryButton>
      </Flex>
      <Title order={2}>Secondary buttons</Title>
      <Flex gap="sm">
        <SecondaryButton size="lg">
          {'<SecondaryButton size="lg">'}
        </SecondaryButton>
        <SecondaryButton>{"<SecondaryButton>"}</SecondaryButton>
        <SecondaryButton size="sm">
          {'<SecondaryButton size="sm">'}
        </SecondaryButton>
      </Flex>
      <Title order={2}>Tertiary buttons</Title>
      <Flex gap="sm">
        <TertiaryButton size="lg">
          {'<TertiaryButton size="lg">'}
        </TertiaryButton>
        <TertiaryButton>{"<TertiaryButton>"}</TertiaryButton>
        <TertiaryButton size="sm">
          {'<TertiaryButton size="sm">'}
        </TertiaryButton>
      </Flex>
      <Title order={2}>Special buttons</Title>
      <Flex direction={"row"} gap={"xl"}>
        <Flex direction={"column"} gap="sm">
          <Title order={3}>Burger</Title>
          <Burger opened={opened} onClick={toggle} />
        </Flex>
        <Flex direction={"column"} gap="sm">
          <Title order={3}>Close button</Title>
          <CloseButton />
        </Flex>
        <Flex direction={"column"} gap="sm">
          <Title order={3}>Navigation button</Title>
          <Button
            variant="subtle"
            color="green"
            size="xl"
            rightSection={<FontAwesomeIcon icon={faArrowRight} />}
          >
            Go there now
          </Button>
        </Flex>
      </Flex>
    </Section>
  );
};
