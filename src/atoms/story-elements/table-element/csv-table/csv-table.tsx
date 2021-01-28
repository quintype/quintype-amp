import React from "react";
import { StoryElementProps } from "../../types";
import { parse } from "papaparse";
import styled from "styled-components";
import get from "lodash.get";

export const CsvTable = ({ element }: StoryElementProps) => {
  const csvData = element.data?.content;
  if (!csvData) return null;

  const hasHeader = element.metadata?.["has-header"];
  const parsedData = parse(csvData, { worker: true, header: false });
  if (!parsedData || !parsedData.data || !parsedData.data.length) return null;

  const tableHeadData = get(parsedData, ["data", "0"], null);
  const tableBodyData = hasHeader ? parsedData.data.slice(1) : parsedData.data;

  return (
    <StyledTable>
      {hasHeader && <TableHead rowData={tableHeadData} />}
      <tbody>
        {tableBodyData.map((rowData, idx) => (
          <TableBodyRow rowData={rowData} index={idx} key={idx} />
        ))}
      </tbody>
    </StyledTable>
  );
};

const TableHead = ({ rowData }) => {
  if (!rowData) return null;
  return (
    <thead>
      <tr>
        {rowData.map((cellData, i) => (
          <StyledTableHeadCell key={i}>{cellData}</StyledTableHeadCell>
        ))}
      </tr>
    </thead>
  );
};

const StyledTableHeadCell = styled.th`
  background-color: ${(props) => props.theme.color.mono3};
  border: ${(props) => `1px solid ${props.theme.color.mono6}`};
  font-weight: ${(props) => props.theme.font.weight.bold};
  padding: 5px;
  position: sticky;
  top: -2px;
  box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4);
`;

const TableBodyRow = ({ rowData, index }) => (
  <StyledTableBodyRow index={index}>
    {rowData.map((cellData, i) => (
      <StyledTableBodyCell key={i}>{cellData}</StyledTableBodyCell>
    ))}
  </StyledTableBodyRow>
);

const StyledTableBodyRow = styled.tr<StyledTableBodyRowTypes>`
  background-color: ${(props) => (props.index % 2 ? props.theme.color.mono2 : "unset")};
`;

interface StyledTableBodyRowTypes {
  index: number;
}

const StyledTable = styled.table`
  max-height: 600px;
  display: block;
  overflow: auto;
  border-collapse: collapse;
  position: relative;
`;

const StyledTableBodyCell = styled.td`
  border: ${(props) => `1px solid ${props.theme.color.mono6}`};
  padding: 5px;
`;
