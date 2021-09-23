import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 40px;
`;

export const Header = styled.h3`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  color: ${(props) => props.theme.colors.black};
`;

export const TabContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TabHeader = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.dark_gray};
  margin-bottom: 6px;
`;

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 23px;
  grid-row-gap: 46px;
`;
