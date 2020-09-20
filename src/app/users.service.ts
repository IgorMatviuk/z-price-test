import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = 'http://localhost:3000/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  static getAll() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(API);
  }

  create(data): Observable<any> {
    return this.http.post(API, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${API}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${API}/${id}`);
  }
}
