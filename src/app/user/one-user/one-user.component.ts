import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { IError } from 'src/app/interface/error.interface';
import { IUser } from 'src/app/interface/user.interface';
import { AppState } from 'src/app/store/app.reducers';
import { loadUser } from 'src/app/store/user/user.actions';

@Component({
  selector: 'app-one-user',
  templateUrl: './one-user.component.html',
  styles: [],
})
export class OneUserComponent implements OnInit {
  userData: IUser = {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  };
  error: IError = {
    name: '',
    message: '',
    url: '',
  };
  loading: boolean = false;
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.store.dispatch(loadUser({ id }));
    });

    this.store.pipe(select('user')).subscribe(({ user, loading, error }) => {
      this.userData = { ...user };
      this.error = { ...error };
      this.loading = loading;
    });
  }
}
