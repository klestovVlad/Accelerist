import styled from 'styled-components';

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1320px;
  margin: 0px auto;
  padding: 32px 20px 20px;
  display: flex;
  flex-grow: 1;
`;

export const BackgroundContainer = styled.div`
  width: 100%;
  max-width: 1096px;
`;

export const ContentSection = styled.section`
  display: flex;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  margin: 4px -12px 0px;
`;

export const EmptyListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100% - 50px);
  background: ${(props) => props.theme.colors.white};
  border-radius: 6px;
`;
export const EmptyListCaption = styled.p`
  font-family: Rubik;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.black};
  margin-top: 40px;
`;
