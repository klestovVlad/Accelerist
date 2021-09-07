import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 40px;
  margin-bottom: 16px;
  text-align: center;
`;

export const P = styled.p`
  font-family: 'Rubik';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.colors.dark_gray};
`;

export const A = styled.a`
  cursor: pointer;
  color: ${(props) => props.theme.colors.black};
`;

export const Bold = styled.span`
  font-family: 'SF Pro Display';
  font-weight: 600;
  color: ${(props) => props.theme.colors.black};
`;
