import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/core/http'
const baseUrl = 'http://localhost:8081/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl+"/allusers");
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}