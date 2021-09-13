import styled from 'styled-components';

export const Container = styled.button`
  display: none;
  cursor: pointer;
  @media (max-width: ${(props) => props.theme.mediaQuery.large}) {
    display: block;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  width: 18px;
  height: 16px;

  z-index: 1;
  position: relative;
`;

interface SpanProps {
  checked: boolean;
}

export const Span = styled.span<SpanProps>`
  display: block;
  position: absolute;
  border-radius: 2px;

  width: 100%;
  height: 2px;
  background-color: ${(props) => props.theme.colors.black};
  transform: rotate(${(props) => (props.checked ? 45 : 0)}deg);
  transition: all 0.25s;

  &::before {
    content: '';
    top: ${(props) => (props.checked ? 0 : -5)}px;
    display: block;
    position: absolute;
    background-color: ${(props) => props.theme.colors.black};
    border-radius: 2px;
    transition: all 0.25s;

    width: 100%;
    height: 2px;
  }

  &::after {
    content: '';
    top: ${(props) => (props.checked ? 0 : 5)}px;
    display: block;
    position: absolute;
    background-color: ${(props) => props.theme.colors.black};
    border-radius: 2px;
    transform: rotate(${(props) => (props.checked ? 90 : 0)}deg);
    transition: all 0.25s;

    width: 100%;
    height: 2px;
  }
`;
