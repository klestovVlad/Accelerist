import { FC } from 'react';
import { Route, Switch, useHistory } from 'react-router';

import { NewPassword } from '../../pages/public/new-password/new-password';
import { ResetPassword } from '../../pages/public/reset/reset';
import { routes } from '../../routes/routes';
import { Button } from '../../ui/buttons/button';
import { Authorization } from './authorization/authorization';
import { Body, ButtonContainer, Container, H1 } from './styles';

export const Content: FC = () => {
  const history = useHistory();
  return (
    <Body>
      <Container>
        <Switch>
          <Route path={routes.public.resetPassword}>
            <ResetPassword />
          </Route>
          <Route path={routes.public.newPassword}>
            <NewPassword />
          </Route>
          <Route path="/">
            <H1>Welcome to Accelerist</H1>
            <Authorization />
          </Route>
        </Switch>
      </Container>
      {history.location.pathname !== '/login' && history.location.pathname !== '/signup' && (
        <ButtonContainer>
          <Button
            label="Return to Login"
            onClick={() => history.push('/login')}
            colorScheme="darkTransparent"
            type="button"
            isLoading={false}
          />
        </ButtonContainer>
      )}
    </Body>
  );
};
