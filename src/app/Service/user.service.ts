// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Model/User';

const baseUrl = 'http://localhost:8080/users'; // Adjust the URL to match your Spring Boot application

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${baseUrl}/listuser`);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${baseUrl}/byid/${id}`);
  }
  
  updateUser(id: number, updatedUser: User): Observable<User> {
    return this.http.put<User>(`${baseUrl}/updatebyid/${id}`, updatedUser);
  }
  
  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${baseUrl}/deletebyid/${userId}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${baseUrl}/create`, user);
  }
}
