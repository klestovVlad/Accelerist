import { Button } from '../../../../../ui/buttons/button';
import { Like } from '../../../../../ui/buttons/like/like';
import {
  Content,
  Header,
  AddressInfo,
  PhoneInfo,
  Table,
  TableCell,
  CellTitle,
  CellInfo,
  ButtonRow,
  ButtonContainer,
} from './styles';
import React, { FC } from 'react';
import { useHistory } from 'react-router';

interface InfoProps {
  name: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  revenue: string;
  id: string;
}

export const Info: FC<InfoProps> = ({
  name,
  phone,
  street,
  city,
  state,
  country,
  zipCode,
  revenue,
  id,
}) => {
  const history = useHistory();
  return (
    <Content>
      <Header href={`/company/${id}`}>{name}</Header>
      <AddressInfo>
        {street} {city} {state} {country} {zipCode}
      </AddressInfo>
      <PhoneInfo>{phone}</PhoneInfo>
      <Table>
        <TableCell>
          <CellTitle>CSR Focus</CellTitle>
          <CellInfo>No information</CellInfo>
        </TableCell>

        <TableCell>
          <CellTitle>Revenue</CellTitle>
          <CellInfo>
            ${' '}
            {(+revenue).toLocaleString('en-IN', {
              maximumSignificantDigits: 3,
            })}
          </CellInfo>
        </TableCell>
      </Table>

      <ButtonRow>
        <Like isActive={false} onClicK={() => null} />
        <ButtonContainer>
          <Button
            label="Profile"
            onClick={() => history.push(`/company/${id}`)}
            colorScheme="white2"
            type="button"
            isLoading={false}
            validate
          />
        </ButtonContainer>
      </ButtonRow>
    </Content>
  );
};
