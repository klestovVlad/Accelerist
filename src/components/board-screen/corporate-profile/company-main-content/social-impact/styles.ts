import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 60px;
`;

export const Header = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 148%;
  color: ${(props) => props.theme.colors.black};
`;

export const Columns = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 24px;
  margin-left: -24px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  width: 50%;
`;

export const CardHeader = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  color: ${(props) => props.theme.colors.black};
`;

export const Card = styled.div`
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.line};
  box-sizing: border-box;
  border-radius: 6px;
  padding: 12px 24px 24px 24px;
  margin-top: 16px;
`;

export const CardInfo = styled.p`
  position: relative;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 155%;
  color: ${(props) => props.theme.colors.black};
  margin-left: 12px;
  margin-top: 12px;
  &::before {
    content: '';
    background-color: ${(props) => props.theme.colors.blue};
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    top: 50%;
    left: -12px;
    transform: translateY(-50%);
  }
`;
