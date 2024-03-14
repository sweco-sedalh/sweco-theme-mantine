import { FC } from "react";
import Section from "../Section.tsx";
import { Table, Title } from "@mantine/core";

export const SectionTable: FC = () => (
  <Section title="Table">
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        <Table.Tr>
          <Table.Td>1</Table.Td>
          <Table.Td>Hydrogen</Table.Td>
          <Table.Td>H</Table.Td>
          <Table.Td>1.008</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>2</Table.Td>
          <Table.Td>Helium</Table.Td>
          <Table.Td>He</Table.Td>
          <Table.Td>4.0026</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>3</Table.Td>
          <Table.Td>Lithium</Table.Td>
          <Table.Td>Li</Table.Td>
          <Table.Td>6.94</Table.Td>
        </Table.Tr>
      </Table.Tbody>
      <Table.Caption>Parts of the periodic table</Table.Caption>
    </Table>
    <Title order={2}>With more borders, striped rows and hovering</Title>

    <Table striped highlightOnHover withTableBorder withColumnBorders>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        <Table.Tr>
          <Table.Td>1</Table.Td>
          <Table.Td>Hydrogen</Table.Td>
          <Table.Td>H</Table.Td>
          <Table.Td>1.008</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>2</Table.Td>
          <Table.Td>Helium</Table.Td>
          <Table.Td>He</Table.Td>
          <Table.Td>4.0026</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>3</Table.Td>
          <Table.Td>Lithium</Table.Td>
          <Table.Td>Li</Table.Td>
          <Table.Td>6.94</Table.Td>
        </Table.Tr>
      </Table.Tbody>
      <Table.Caption>Parts of the periodic table</Table.Caption>
    </Table>
  </Section>
);
