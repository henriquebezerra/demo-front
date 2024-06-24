import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/user-model';


@Injectable({
  providedIn: 'root'
})
export class DemoService {

  readonly url = 'http://localhost:8080/api/';

  constructor(
    private http: HttpClient,
  ) { }

  readonly options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  buscarUsuarios(): Observable<User[]> {
    return this.http.get<User[]>(this.url + 'users');
  }

}
