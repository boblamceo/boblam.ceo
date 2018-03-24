import React from "react";
import { Table } from "semantic-ui-react";
import styled from "styled-components";

const Everything = styled.div`
  width: 90%;
  margin: auto auto;
`;

const Project = () => (
  <Everything>
    <Table definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>Showcase</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>React Calculator</Table.Cell>
          <Table.Cell>To be continued...</Table.Cell>
          <Table.Cell>My first calculator program written in react</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>My second project</Table.Cell>
          <Table.Cell>I'm working on it.</Table.Cell>
          <Table.Cell>
            Any idea for me? I got no idea what to write. If you know, please
            email me (boblam.ceo@gmail.com).
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Everything>
);
export default Project;
