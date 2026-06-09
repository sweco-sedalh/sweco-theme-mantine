import {
  ActionIcon,
  Anchor,
  AppShell,
  Burger,
  Container,
  Group,
  Stack,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { FC } from "react";
import { SectionColors } from "./sections/SectionColors.tsx";
import { SectionComponents } from "./sections/SectionComponents.tsx";
import { SectionCard } from "./sections/SectionCard.tsx";
import { SectionWizardSteps } from "./sections/SectionWizardSteps.tsx";
import { SectionSpinner } from "./sections/SectionSpinner.tsx";
import { SectionBadgeAndIcons } from "./sections/SectionBadgeAndIcons.tsx";
import { SectionForms } from "./sections/SectionForms.tsx";
import { SectionNavLinks } from "./sections/SectionNavLinks.tsx";
import { SectionNavigation } from "./sections/SectionNavigation.tsx";
import { SectionButtons } from "./sections/SectionButtons.tsx";
import { SectionGrid } from "./sections/SectionGrid.tsx";
import { SectionTable } from "./sections/SectionTable.tsx";
import { SectionTypography } from "./sections/SectionTypography.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

import { Header, HEADER_HEIGHT, SwecoLogo } from "../lib";

const App: FC = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");
  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  return (
    <AppShell header={{ height: HEADER_HEIGHT }} padding="md">
      <Header>
        <Group>
          <Burger size="sm" hiddenFrom="sm" />
          <SwecoLogo />
        </Group>

        <Group gap="md" visibleFrom="sm">
          <Anchor href="#">Start</Anchor>
          <Anchor href="#">Projects</Anchor>
          <Anchor href="#">Reports</Anchor>
          <ActionIcon
            onClick={toggleColorScheme}
            title="Toggle color scheme"
            variant="outline"
          >
            <FontAwesomeIcon icon={faCircleHalfStroke} />
          </ActionIcon>
        </Group>
      </Header>
      <AppShell.Main>
        <Container>
          <Stack>
            <SectionColors />
            <SectionTypography />
            <SectionTable />
            <SectionGrid />
            <SectionButtons />
            <SectionNavigation />
            <SectionNavLinks />
            <SectionForms />
            <SectionBadgeAndIcons />
            <SectionSpinner />
            <SectionWizardSteps />
            <SectionCard />
            <SectionComponents />
          </Stack>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
};

export default App;
