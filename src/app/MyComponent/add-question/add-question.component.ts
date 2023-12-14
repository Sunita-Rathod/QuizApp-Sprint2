import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/Model/question';
import { QuestionService } from 'src/app/Service/question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent {
  question: Question = {
    questionTitle: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    rightAnswer: '',
    difficultyLevel: '',
    category: '',
    id: 0
  };

  constructor(
    private questionService: QuestionService,
    private router: Router
  ) {}

  createQuestion(): void {
    this.questionService.createQuestion(this.question).subscribe(
      (createdQuestion) => {
        console.log('Question created successfully:', createdQuestion);
        this.router.navigate(['/list-question']);
      },
      (error) => {
        console.error('Error creating question:', error);
      }
    );
  }
}
