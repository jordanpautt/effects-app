import { select, Store } from '@ngrx/store';
import { filter, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.reducers';
import { IUser } from './../../interface/user.interface';
import * as UserActions from '../../store/users/users.actions';
import { IError } from 'src/app/interface/error.interface';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent implements OnInit, OnDestroy {
  users: IUser[] = [];
  loading: boolean = false;
  error: IError = {
    name: '',
    url: '',
    message: '',
  };
  userSubcription$: Subscription = this.store.subscribe();
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(UserActions.loadUsers());
    this.userSubcription$ = this.store
      .pipe(select('users'))
      .subscribe(({ users, loading, error }) => {
        this.users = [...users];
        this.error = error;
        this.loading = loading;
      });
  }

  ngOnDestroy(): void {
    this.userSubcription$.unsubscribe();
  }
}
