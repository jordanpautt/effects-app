import { IError } from '../../interface/error.interface';
import { IUser } from '../../interface/user.interface';
import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

export interface UserState {
  id: string;
  user: IUser;
  loaded: boolean;
  loading: boolean;
  error: IError;
}

const initialState: UserState = {
  id: '',
  user: {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  },
  loaded: false,
  loading: false,
  error: {
    url: '',
    message: '',
    name: '',
  },
};

export const _userReducer = createReducer(
  initialState,

  on(UserActions.loadUser, (state, { id }) => ({
    ...state,
    id,
    loading: true,
  })),

  on(UserActions.loadUserSuccess, (state, { user }) => ({
    ...state,
    user: { ...user },
    loaded: true,
    loading: false,
  })),

  on(UserActions.loadUserFailure, (state, { error }) => ({
    ...state,
    loaded: false,
    loading: false,
    error: {
      url: error.url,
      name: error.name,
      message: error.message,
    },
  }))
);

export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}
