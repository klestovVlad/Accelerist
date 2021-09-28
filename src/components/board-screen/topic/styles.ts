import styled from 'styled-components';

export const BackgroundContent = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
`;

export const Content = styled.div`
  padding: 24px 60px;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Header = styled.h1`
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 150%;
  color: ${(props) => [props.theme.colors.black]};
  display: block;
  background-color: ${(props) => props.theme.colors.white};
`;

export const InputContainer = styled.div`
  height: 36px;
  width: 100%;
  max-width: 715px;
  position: relative;
  flex: 1;
  margin-left: 80px;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.gray3};
  border-radius: 6px;
  border-color: transparent;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.dark_gray};
  padding: 8px 42px 8px 20px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
`;

export const IconsContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: row;
`;

export const ButtonContainer = styled.button`
  margin-left: 12px;
`;

export const BackButton = styled.button`
  margin-right: 17px;
`;
