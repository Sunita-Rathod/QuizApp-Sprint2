import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizAttempt } from 'src/app/Model/QuizAttempt';

@Component({
  selector: 'app-quiz-attempt',
  templateUrl: './quiz-attempt.component.html',
  styleUrls: ['./quiz-attempt.component.css']
})
export class QuizAttemptComponent {

  private apiUrl = 'http://localhost:8080/quiz-attempts'; // Adjust the URL based on your backend API
quizAttempts: any;

  constructor(private http: HttpClient) {}

  getAllQuizAttempts(): Observable<QuizAttempt[]> {
    return this.http.get<QuizAttempt[]>(`${this.apiUrl}/listquizattempts`);
  }

  // getQuizAttemptById(id: number): Observable<QuizAttempt> {
  //   return this.http.get<QuizAttempt>(`${this.apiUrl}/quizattemptbyid/${id}`);
  // }

  // createQuizAttempt(quizAttempt: QuizAttempt): Observable<QuizAttempt> {
  //   return this.http.post<QuizAttempt>(`${this.apiUrl}/createquizattempt`, quizAttempt);
  // }

  deleteQuizAttempt(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deletequizattempt/${id}`);
  }


}
