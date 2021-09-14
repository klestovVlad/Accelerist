import styled from 'styled-components';

export const Content = styled.div`
  padding: 24px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 6px;
`;

export const CompanyContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Logo = styled.div`
  width: 48px;
  height: 48px;
  border: 1px solid;
  border-radius: 6px;
  border-color: ${(props) => props.theme.colors.line};
`;

export const Info = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const CompanyName = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.black};
`;

export const PriorityRanking = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.dark_gray};
`;

export const CRSHeader = styled.p`
  margin-top: 20px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.dark_gray};
`;

export const CRSContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CRSItems = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.black};
  position: relative;
  margin-left: 16px;

  &::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 4px;
    background-color: #c4c4c4;
    border-radius: 50%;
    position: relative;
    text-align: center;
    position: absolute;
    top: 50%;
    left: -9px;
    transform: translateY(-50%);
  }

  &:first-child {
    margin-left: 0;
  }

  &:first-child::before {
    display: none;
  }
`;
