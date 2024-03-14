import { FC } from "react";
import Section from "../Section.tsx";
import { Button, Grid, Loader } from "@mantine/core";

export const SectionSpinner: FC = () => (
  <Section title="Spinner">
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
  </Section>
);
