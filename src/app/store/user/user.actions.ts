import { createAction, props } from '@ngrx/store';
import { IError } from 'src/app/interface/error.interface';
import { IUser } from 'src/app/interface/user.interface';

export const loadUser = createAction(
  '[User Component] Load User',
  props<{ id: string }>()
);

export const loadUserSuccess = createAction(
  '[User Component] Load User Success',
  props<{ user: IUser }>()
);

export const loadUserFailure = createAction(
  '[User Component] Load User Failure',
  props<{ error: IError }>()
);
