import styled from 'styled-components';

export const BackgroundShadow = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 6px;
  width: 100%;
  max-width: 333px;
`;

export const ImageRow = styled.div`
  background: rgb(242, 242, 242);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 174px;
`;

export const TextRow = styled.div`
  padding: 24px;
`;

export const Message = styled.h3`
  font-family: Rubik;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 8px;
  text-align: center;
`;

export const Capture = styled.p`
  font-family: Rubik;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.line};
  margin-bottom: 32px;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
