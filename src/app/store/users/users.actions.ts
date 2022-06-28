import { createAction, props } from '@ngrx/store';
import { IError } from 'src/app/interface/error.interface';
import { IUser } from 'src/app/interface/user.interface';

export const loadUsers = createAction('[User Component] Load Users');

export const loadUsersSuccess = createAction(
  '[User Component] Load Users Success',
  props<{ users: IUser[] }>()
);

export const loadUsersFailure = createAction(
  '[User Component] Load Users Failure',
  props<{ error: IError }>()
);
