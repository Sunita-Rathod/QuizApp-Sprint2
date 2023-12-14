// quiz-attempt.model.ts
export class QuizAttempt {
    id: number;
    user: any; // Adjust the type based on your User model
    quiz: any; // Adjust the type based on your Quiz model
    score: number;
  
    constructor(id: number, user: any, quiz: any, score: number) {
      this.id = id;
      this.user = user;
      this.quiz = quiz;
      this.score = score;
    }
  }
  