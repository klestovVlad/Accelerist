import styled from 'styled-components';

export const Content = styled.div`
  margin-bottom: 24px;
  align-items: center;
  max-width: 1096px;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;
`;

export const SaveButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SaveButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SaveTitle = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.dark_gray};
  margin-left: 18px;
  margin-right: 40px;
`;

export const PageControlContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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

export const CompanyCounter = styled.h2`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  color: ${(props) => props.theme.colors.black};
`;
