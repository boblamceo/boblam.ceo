import React from "react";
import { Table } from "semantic-ui-react";
import styled from "styled-components";

const Everything = styled.div`
  width: 90%;
  margin: auto auto;
`;

const ExtraFonts = styled.div`
  color: red;
  font-family: 'Hanalei Fill', cursive;
`
const Center = styled.div`
  text-align: center;
`

const Project = () => (
  <Everything>
    <Table definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>Showcase</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>
           <Center>
            Vue Calculator
           </Center>
          </Table.Cell>
          <Table.Cell>
            <div>My first calculator program written in react</div>
            <br />
            <iframe src="/calculator.html" width="260" height="320" frameBorder="0"></iframe>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Tic Tac Toe</Table.Cell>
          <Table.Cell>To be continued...</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>MediaScroll</Table.Cell>
          <Table.Cell>To be continued...</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Everything>
);
export default Project;
