import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/Model/question';
import { QuestionService } from 'src/app/Service/question.service';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {
[x: string]: any;


    questionId!: number;
    question: Question = new Question();

    
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private questionService: QuestionService
    ) {}
  
    ngOnInit(): void {
      const questionIdParam = this.route.snapshot.paramMap.get('id');
  
      if (questionIdParam !== null) {
        this.questionId = +questionIdParam;
  
        this.questionService.getQuestionById(this.questionId).subscribe(
          (user) => {
            this.question = user;
          },
          (error) => {
            console.error('Error fetching questions data:', error);
          }
        );
      } else {
        console.error('Question ID parameter is null.');
      }
    }
  
  
    updateQuestion(): void {
      this.questionService.updateQuestion(this.question).subscribe(
        (updatedUser) => {
          console.log('Question updated successfully:', updatedUser);
          this.router.navigate(['/list-question']);
        },
        (error) => {
          console.error('Error updating question:', error);
          this.router.navigate(['/list-question']);
        }
      );
    }
  }
  
