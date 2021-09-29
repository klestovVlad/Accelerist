import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
  align-items: center;
  max-width: 1096px;
`;

export const CompanyCounter = styled.h2`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  color: ${(props) => props.theme.colors.black};
`;

export const PageControlContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PageCounter = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.black};
  margin: 0 12px 0 12px;
`;

export const PreviousPageButton = styled.button``;

export const NextPageButton = styled.button`
  transform: rotate(180deg);
`;
