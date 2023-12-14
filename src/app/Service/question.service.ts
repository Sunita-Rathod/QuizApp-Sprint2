// question.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../Model/question';

const apiUrl = 'http://localhost:8080/question'; 

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  getAllQuestions(): Observable<any[]> {
    return this.http.get<any[]>(`${apiUrl}/allquestions`);
  }

  getQuestionById(id: number): Observable<Question> {
    return this.http.get<Question>(`${apiUrl}/getbyid/${id}`);
  }


  updateQuestion(question: Question): Observable<void> {
    return this.http.put<void>(`${apiUrl}/update/${question.id}`, question);
  }

  createQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(`${apiUrl}/add`, question);
  }

  
}
