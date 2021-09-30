import styled from 'styled-components';

export const Content = styled.div`
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.line};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  min-width: 166px;
  min-height: 216px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const PriorityContainer = styled.div`
  padding: 8px;
  border-top: 1px solid;
  border-color: ${(props) => props.theme.colors.line};
`;

export const PriorityCaption = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.dark_grey};
  text-align: center;
`;

export const PriorityInfo = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  color: ${(props) => props.theme.colors.black};
  text-align: center;
`;
