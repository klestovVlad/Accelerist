import { createAction } from '@reduxjs/toolkit';

import { UserActionTypes } from './action-types';
import { SignRequest } from './state';

export const postSignInAction = createAction<SignRequest>(UserActionTypes.SIGN_IN);

export const postSignUpAction = createAction<SignRequest>(UserActionTypes.SIGN_UP);

export const sendChangePasswordEmail = createAction<string>(
  UserActionTypes.SEND_CHANGE_PASSWORD_EMAIL,
);
