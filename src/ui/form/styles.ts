import styled from 'styled-components';

interface InputProps {
  validateError: boolean | undefined;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const Input = styled.input<InputProps>`
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.line};
  border-radius: 6px;
  padding: 11px 31px 10px 16px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 155%;
  color: ${(props) => props.theme.colors.black};
`;

export const Label = styled.span`
  font-family: 'Rubik';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.dark_gray};
  margin-bottom: 4px;
`;
