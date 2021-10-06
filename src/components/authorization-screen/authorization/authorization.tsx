import { routes } from '../../../routes/routes';
import { SignIn } from '../../../pages/public/sign-in/sign-in';
import { SignUp } from '../../../pages/public/sign-up/sign-up';
import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';

export const Authorization: FC = () => {
  return (
    <Switch>
      <Route path={routes.public.signUp} component={SignUp} />
      <Route path={routes.public.signIn} component={SignIn} />
      <Redirect to={routes.public.signIn} />
    </Switch>
  );
};
