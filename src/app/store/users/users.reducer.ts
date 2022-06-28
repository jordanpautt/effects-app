import { IError } from '../../interface/error.interface';
import { IUser } from '../../interface/user.interface';
import { createReducer, on } from '@ngrx/store';
import * as UserActions from './users.actions';

export interface UsersState {
  users: IUser[];
  loaded: boolean;
  loading: boolean;
  error: IError;
}

const initialState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: {
    url: '',
    message: '',
    name: '',
  },
};

export const _usersReducer = createReducer(
  initialState,

  on(UserActions.loadUsers, (state) => ({
    ...state,
    loading: true,
  })),

  on(UserActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users: [...users],
    loaded: true,
    loading: false,
  })),

  on(UserActions.loadUsersFailure, (state, { error }) => ({
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

export function usersReducer(state: any, action: any) {
  return _usersReducer(state, action);
}
