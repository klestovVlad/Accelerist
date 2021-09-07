import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { useHistory } from 'react-router-dom';

import { SignIn } from './sign-in/sign-in';
import { SignUp } from './sign-up/sign-up';

interface AuthorizationProps {
  tabNum: number;
}

export const Authorization: FC<AuthorizationProps> = ({ tabNum }) => {
  const history = useHistory();
  if (tabNum === 0) {
    history.push('/signup');
  } else {
    history.push('/login');
  }
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={SignIn} />
    </Switch>
  );
};
