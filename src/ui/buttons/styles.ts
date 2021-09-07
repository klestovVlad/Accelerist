import styled from 'styled-components';

interface StyledButtonProps {
  typeNum: number;
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 12px;
  background-color: ${(props) => props.theme.colors.blue};
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  border-radius: 6px;
`;
