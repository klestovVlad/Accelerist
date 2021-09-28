import { routes } from '../../../../routes/routes';
import { SignIn } from './sign-in/sign-in';
import { SignUp } from './sign-up/sign-up';
import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { useHistory } from 'react-router-dom';

interface AuthorizationProps {
  tabNum: number;
}

export const Authorization: FC<AuthorizationProps> = ({ tabNum }) => {
  const history = useHistory();
  if (tabNum === 0) {
    history.push(routes.public.signUp);
  } else {
    history.push(routes.public.signIn);
  }
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Redirect to={routes.public.signIn} />}
      />
      <Route path={routes.public.signUp} component={SignUp} />
      <Route path={routes.public.signIn} component={SignIn} />
    </Switch>
  );
};
