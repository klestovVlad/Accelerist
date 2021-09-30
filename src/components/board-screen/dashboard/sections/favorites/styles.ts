import styled from 'styled-components';

export const Content = styled.section`
  max-width: 536px;
  width: 100%;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 4px -12px 0 -12px;
  flex-wrap: wrap;
`;

export const EmptyFavorites = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100% - 81px);
  background: ${(props) => props.theme.colors.white};
  border-radius: 6px;
`;
export const EmptyFavoritesHeader = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  margin-top: 40px;
  margin-bottom: 6px;
  color: ${(props) => props.theme.colors.black};
`;
export const EmptyFavoritesCapture = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.gray};
  margin-bottom: 30px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 244px;
`;
