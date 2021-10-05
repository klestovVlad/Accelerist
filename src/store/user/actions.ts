import { UserActionTypes } from './action-types';
import { SignRequest } from './state';
import { createAction } from '@reduxjs/toolkit';

export const postSignInAction = createAction<SignRequest>(
  UserActionTypes.SIGN_IN
);

export const postSignUpAction = createAction<SignRequest>(
  UserActionTypes.SIGN_UP
);

export const sendChangePasswordEmail = createAction<string>(
  UserActionTypes.SEND_CHANGE_PASSWORD_EMAIL
);
