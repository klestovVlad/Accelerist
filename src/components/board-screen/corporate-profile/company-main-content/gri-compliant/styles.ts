import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 32px;
`;

export const Header = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 148%;
  color: ${(props) => props.theme.colors.black};
`;

export const Text = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 155%;
  color: ${(props) => props.theme.colors.black};
`;
