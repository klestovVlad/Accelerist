import styled from 'styled-components';

export const Content = styled.div`
  margin-left: 16px;
  width: 100%;
`;

export const Header = styled.a`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  color: ${(props) => props.theme.colors.black};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const AddressInfo = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.dark_gray};
  margin-top: 12px;
`;

export const PhoneInfo = styled(AddressInfo)`
  margin-top: 4px;
`;

export const Table = styled.div`
  display: flex;
  border-bottom: 1px solid;
  border-color: ${(props) => props.theme.colors.line};
  width: 100%;
  margin-top: 28px;
`;

export const TableCell = styled.div`
  max-width: 170px;
  width: 100%;
  border-right: 1px solid rgb(232, 232, 232);
  padding: 0px 20px 12px 0px;
  &:nth-child(2) {
    padding: 0px 0px 12px 20px;
    border: none;
    text-align: right;
  }
`;

export const CellTitle = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.dark_gray};
`;

export const CellInfo = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.black};
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 24px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  margin-left: 8px;
`;
