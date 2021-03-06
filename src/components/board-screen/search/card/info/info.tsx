import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import { routes } from '../../../../../routes/routes';
import { likeCompanyAction } from '../../../../../store/companies';
import { Button } from '../../../../../ui/buttons/button';
import { Like } from '../../../../../ui/buttons/like/like';
import {
  AddressInfo,
  ButtonContainer,
  ButtonRow,
  CellInfo,
  CellTitle,
  Content,
  Header,
  PhoneInfo,
  Table,
  TableCell,
} from './styles';

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
  like: boolean;
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
  like,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <Content>
      <Link to={`${routes.private.company}/${id}`}>
        <Header>{name}</Header>
      </Link>

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
        <Like isActive={like} onClicK={() => dispatch(likeCompanyAction({ id, like }))} />
        <ButtonContainer>
          <Button
            label="Profile"
            onClick={() => history.push(`/company/${id}`)}
            colorScheme="blueLine"
            type="button"
            isLoading={false}
          />
        </ButtonContainer>
      </ButtonRow>
    </Content>
  );
};
