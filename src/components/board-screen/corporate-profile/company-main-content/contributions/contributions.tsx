import {
  Content,
  Header,
  Table,
  TableRow,
  TableCell,
  TableCellCaption,
  TableCellInfo,
} from './styles';
import React, { FC } from 'react';

interface ContributionProps {
  cashContributions: string | null;
  annualContributions: string | null;
  employeeContributions: string | null;
  inKindContributions: string | null;
}

export const Contributions: FC<ContributionProps> = ({
  cashContributions,
  annualContributions,
  employeeContributions,
  inKindContributions,
}) => (
  <Content>
    <Header>Contributions</Header>
    <Table>
      <TableRow>
        <TableCell>
          <TableCellCaption>Cash Contributions</TableCellCaption>
          <TableCellInfo>
            {cashContributions ? cashContributions : '-'}
          </TableCellInfo>
        </TableCell>

        <TableCell>
          <TableCellCaption>Employee Contributions</TableCellCaption>
          <TableCellInfo>
            {employeeContributions ? employeeContributions : '-'}
          </TableCellInfo>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell>
          <TableCellCaption>Total Social Contributions</TableCellCaption>
          <TableCellInfo>
            {annualContributions ? annualContributions : '-'}
          </TableCellInfo>
        </TableCell>

        <TableCell>
          <TableCellCaption>In-Kind Contributions</TableCellCaption>
          <TableCellInfo>
            {inKindContributions ? inKindContributions : '-'}
          </TableCellInfo>
        </TableCell>
      </TableRow>
    </Table>
  </Content>
);
