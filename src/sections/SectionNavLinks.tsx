import { FC } from "react";
import Section from "../Section.tsx";
import { Badge, Grid, NavLink } from "@mantine/core";

export const SectionNavLinks: FC = () => (
  <Section title="Nav links">
    <Grid>
      <Grid.Col span={4}>
        <NavLink href="#" label="Lorem ipsum dolor sit amet" />
        <NavLink href="#" label="Active nav link" active />
        <NavLink href="#" label="Lorem ipsum" />
        <NavLink href="#" label="Lorem ipsum dolor sit" />
        <NavLink href="#" label="Disabled nav link" disabled />
        <NavLink href="#" label="Lorem ipsum dolor sit amet" />
      </Grid.Col>
      <Grid.Col span={4}>
        <NavLink
          href="#"
          label="Active nav link"
          active
          rightSection={<Badge color="green">14</Badge>}
        />
        <NavLink
          href="#"
          label="Lorem ipsum"
          rightSection={<Badge color="green">3</Badge>}
        />
        <NavLink
          href="#"
          label="Lorem ipsum dolor sit"
          rightSection={<Badge color="green">1</Badge>}
        />
        <NavLink href="#" label="Lorem ipsum dolor sit amet" />
        <NavLink href="#" label="Lorem ipsum" />
        <NavLink href="#" label="Lorem ipsum dolor sit" />
      </Grid.Col>
      <Grid.Col span={4}>
        <NavLink
          href="#"
          label="Nav link heading"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        />
        <NavLink
          href="#"
          label="Active nav link heading"
          active
          description="Lorem ipsum dolor sit amet, consectetur adipiscing"
        />
        <NavLink
          href="#"
          label="Nav link heading"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
        />
      </Grid.Col>
    </Grid>
  </Section>
);
