import {
  ActionIcon,
  Container,
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

const App: FC = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");
  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  return (
    <Container>
      <ActionIcon
        onClick={toggleColorScheme}
        title="Toggle color scheme"
        variant="outline"
        style={{ position: "fixed", right: 10, top: 10 }}
      >
        <FontAwesomeIcon icon={faCircleHalfStroke} />
      </ActionIcon>
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
  );
};

export default App;
