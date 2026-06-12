import { FC, ReactNode } from "react";
import { Paper, Stack, Title } from "@mantine/core";

const Section: FC<{ title: string | false; children?: ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <Paper
      withBorder
      p="md"
      radius="md"
      shadow="none"
      style={{ borderColor: "var(--table-border-color)" }}
    >
      <Stack>
        {title && <Title>{title}</Title>}
        {children}
      </Stack>
    </Paper>
  );
};
export default Section;
