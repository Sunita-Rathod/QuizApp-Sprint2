import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiUrl = 'http://localhost:8080/quiz'; // Update with your backend API URL

  constructor(private http: HttpClient) { }

  getAllQuizzes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/allquiz`);
  }

  createQuiz(category: string, numQuestions: number, title: string): Observable<any> {
    const quizData = { category, numQuestions, title };
    return this.http.post<any>(`${this.apiUrl}/quiz/create`, quizData);
    console.log(quizData);
  }

  getQuizById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/quiz/getbyid/${id}`);
  }

  submitQuiz(id: number, responses: any[]): Observable<number> {
    return this.http.post<number>(`${this.apiUrl}/quiz/submit/${id}`, responses);
  }
}
