import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/Service/question.service';

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {
  questions: any[] = [];

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.loadQuestionData();
  }

  private loadQuestionData(): void {
    // Assuming you have a method in your service to get questions
    this.questionService.getAllQuestions().subscribe(
      (questions) => {
        this.questions = questions;
      },
      (error) => {
        console.error('Error loading questions:', error);
      }
    );
  }
  
}
