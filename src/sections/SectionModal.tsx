import { FC, useState } from "react";
import { Button, Group, Modal, Text } from "@mantine/core";
import Section from "../Section.tsx";
import { openConfirmModal } from "../../lib";

export const SectionModal: FC = () => {
  const [opened, setOpened] = useState(false);

  const handleConfirm = () =>
    openConfirmModal({
      title: "Ta bort bedömningsgrund",
      children: (
        <Text size="sm">
          Är du säker på att du vill ta bort <strong>BG-123</strong>? Åtgärden
          kan inte ångras.
        </Text>
      ),
      labels: { confirm: "Ta bort", cancel: "Avbryt" },
      confirmProps: { variant: "warning" },
      cancelProps: { variant: "outline" },
      onConfirm: () => console.log("confirmed"),
    });

  return (
    <Section title="Modal">
      <Group>
        <Button onClick={() => setOpened(true)}>Öppna Modal</Button>
        <Button variant="warning" onClick={handleConfirm}>
          Öppna Confirm Modal
        </Button>
      </Group>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Exempel Modal"
      >
        <Text size="sm">
          Detta är en standard <code>&lt;Modal&gt;</code> från Mantine, stylad
          av Sweco-temat. Stängknappen sitter uppe till höger med
          green-100-bakgrund.
        </Text>
      </Modal>
    </Section>
  );
};

