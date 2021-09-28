import styled from 'styled-components';

export const Content = styled.section`
  width: 100%;
  padding: 40px;
  align-items: center;
  background-color: ${(props) => props.theme.colors.gray4};
  display: flex;
  flex-direction: row;
`;

export const CompanyIcon = styled.div`
  background: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 8px;
`;

export const CompanyInformation = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;

export const CompanyHeaderRow = styled.div``;

export const CompanyName = styled.h2`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 148%;
  color: ${(props) => props.theme.colors.black};
`;

export const CompanyCaption = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.dark_gray};
`;
