import { Container, P, SvgContainer } from './styled';
import React, { FC } from 'react';

export const LinkedIn: FC = () => (
  <Container>
    <P>or continue with</P>

    <SvgContainer href="/">
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        cursor="pointer"
      >
        <circle cx="22" cy="22" r="22" fill="#F8F8F8" />
        <path
          d="M22 10C15.3736 10 10 15.3736 10 22C10 28.6264 15.3736 34 22 34C28.6264 34 34 28.6264 34 22C34 15.3736 28.6264 10 22 10ZM18.5129 28.1406H15.5904V19.3481H18.5129V28.1406ZM17.0518 18.1475H17.0327C16.052 18.1475 15.4177 17.4724 15.4177 16.6286C15.4177 15.7658 16.0714 15.1094 17.0712 15.1094C18.0709 15.1094 18.6862 15.7658 18.7052 16.6286C18.7052 17.4724 18.0709 18.1475 17.0518 18.1475ZM29.051 28.1406H26.1288V23.4368C26.1288 22.2547 25.7057 21.4485 24.6483 21.4485C23.8409 21.4485 23.3601 21.9923 23.1488 22.5173C23.0715 22.7051 23.0527 22.9677 23.0527 23.2305V28.1406H20.1303C20.1303 28.1406 20.1686 20.173 20.1303 19.3481H23.0527V20.593C23.441 19.9939 24.1359 19.1417 25.6865 19.1417C27.6093 19.1417 29.051 20.3984 29.051 23.099V28.1406Z"
          fill="#0E6597"
        />
      </svg>
    </SvgContainer>
  </Container>
);
