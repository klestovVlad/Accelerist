import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h3`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  color: ${(props) => props.theme.colors.black};
  margin-top: 34px;
  margin-bottom: 38px;
`;

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 23px;
  grid-row-gap: 46px;
`;

export const SlideContainer = styled.div`
  width: 87%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
