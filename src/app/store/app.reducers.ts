import { ActionReducerMap } from '@ngrx/store';
import * as usersReducer from './users/users.reducer';
import * as userReducer from './user/user.reducer';

export interface AppState {
  users: usersReducer.UsersState;
  user: userReducer.UserState;
}

export const appReducers: ActionReducerMap<AppState> = {
  users: usersReducer.usersReducer,
  user: userReducer.userReducer,
};
