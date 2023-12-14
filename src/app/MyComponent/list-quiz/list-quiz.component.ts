import { Component } from '@angular/core';
import { QuizService } from 'src/app/Service/quiz.service';

@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.css']
})
export class ListQuizComponent {

  quizzes: any[] = []; 

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.loadQuizzes();
  }

  loadQuizzes() {
    this.quizService.getAllQuizzes().subscribe(
      (data: any[]) => {
        this.quizzes = data;
      },
      error => {
        console.log('Error fetching quizzes', error);
      }
    );
  }

}
