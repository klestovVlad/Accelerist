import {
  Content,
  Header,
  Table,
  TableCell,
  TableCellCaption,
  TableCellInfo,
} from './styles';
import React, { FC } from 'react';

interface ReportedProps {
  revenue: string;
  employees: number;
}

export const Reported: FC<ReportedProps> = ({ revenue, employees }) => (
  <Content>
    <Header>Reported</Header>
    <Table>
      <TableCell>
        <TableCellCaption>Revenue Reported</TableCellCaption>
        <TableCellInfo>
          ${' '}
          {(+revenue).toLocaleString('en-IN', {
            maximumSignificantDigits: 3,
          })}
        </TableCellInfo>
      </TableCell>
      <TableCell>
        <TableCellCaption>Employees Reported</TableCellCaption>
        <TableCellInfo>
          {(+employees).toLocaleString('en-IN', {
            maximumSignificantDigits: 3,
          })}
        </TableCellInfo>
      </TableCell>
    </Table>
  </Content>
);
