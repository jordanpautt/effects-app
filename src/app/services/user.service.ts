import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.http
      .get<any>(`${this.url}/users?per_page=6&delay=3`)
      .pipe(map((dataUser) => dataUser['data']));
  }

  getUserById(id: string): Observable<IUser> {
    return this.http
      .get<any>(`${this.url}/users/${id}`)
      .pipe(map((dataUser) => dataUser['data']));
  }
}
