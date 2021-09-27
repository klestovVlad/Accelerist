import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.nav`
  margin-left: 22px;
  @media (max-width: ${(props) => props.theme.mediaQuery.large}) {
    margin-left: 0px;
  }
  position: relative;
`

export const List = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  @media (max-width: ${(props) => props.theme.mediaQuery.large}) {
    flex-direction: column;
  }
`

export const ListItem = styled.li`
  @media (max-width: ${(props) => props.theme.mediaQuery.large}) {
    margin-bottom: 32px;
  }
`

export const Link = styled(NavLink)`
  font-family: Rubik;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.colors.black};
  text-decoration: none;
  margin-left: 28px;
  &::active {
    text-decoration: underline;
  }

  @media (max-width: ${(props) => props.theme.mediaQuery.large}) {
    font-weight: 500;
    font-size: 16px;
    line-height: 155%;
    margin-left: 0;
  }
`
