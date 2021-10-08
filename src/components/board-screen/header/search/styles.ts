import styled from 'styled-components';

import { ReactComponent as Icon } from '../../../../ui/icons/svg/search-icon.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  max-width: 365px;
  min-width: 150px;
  flex-grow: 1;
  margin-right: 40px;
  @media (max-width: ${(props) => props.theme.mediaQuery.large}) {
    margin: 0 0 32px 0;
  }
`;

export const Input = styled.input`
  border-radius: 6px;
  border: none;
  margin-left: 15px;
  padding: 9px 24px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.light_blue};

  @media (max-width: ${(props) => props.theme.mediaQuery.large}) {
    margin: 0;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
`;

export const SearchIcon = styled(Icon)``;
