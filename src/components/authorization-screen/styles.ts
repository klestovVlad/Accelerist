import styled from 'styled-components'

import img from '../../img/homedark.jpg'

export const Container = styled.div`
  background-image: url(${img});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
