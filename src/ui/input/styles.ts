import styled from 'styled-components';

import { ReactComponent as CLoseSvg } from '../icons/svg/close-icon.svg';

export const Content = styled.div`
  position: relative;
  width: 100%;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 11px 31px 10px 16px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 155%;
  color: ${(props) => props.theme.colors.black};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.line};
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.white};
`;

export const InputLabel = styled.span`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.dark_gray};
  position: absolute;
  top: -4px;
  transform: translateY(-100%);
`;

export const ButtonsRow = styled.div`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  line-height: 0;
`;

export const Button = styled.button``;

export const CLoseIcon = styled(CLoseSvg)``;

export const ListContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  top: calc(100% - 6px);
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.line};
  border-top-color: transparent;
  box-sizing: border-box;
  border-radius: 0px 0px 8px 8px;
  padding: 0 18px 10px 16px;
  max-height: 150px;
  overflow-y: scroll;
  z-index: 99;
`;

export const ListRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 21px;
  align-items: center;
`;

export const ListItemName = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 155%;
  color: ${(props) => props.theme.colors.black};
`;

export const CheckedParamList = styled.p`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 155%;
  color: ${(prop) => prop.theme.colors.black};
`;
