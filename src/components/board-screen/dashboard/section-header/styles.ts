import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  align-items: center;
`;

export const Header = styled.h2`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 148%;
  color: ${(props) => props.theme.colors.black};
`;

export const DetailButton = styled.span`
  font-family: 'Rubik';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.blue};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
