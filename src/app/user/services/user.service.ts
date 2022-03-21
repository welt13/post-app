import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getUser(idUser: number): Observable<User> {
    return this.http.get<User>(`${this._apiUrl}/users/${idUser}`);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this._apiUrl}/users`);
  }
}
