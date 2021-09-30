import styled from 'styled-components';

export const Content = styled.div``;

export const SectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  margin: 4px -12px 0px;
`;

export const EmptyListSaved = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 40px 0px 34px;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.white};
`;

export const EmptyListHeader = styled.h3`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  margin-top: 40px;
  margin-bottom: 6px;
  color: ${(props) => props.theme.colors.black};
`;

export const EmptyListCapture = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.gray};
  margin-bottom: 30px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 244px;
`;
