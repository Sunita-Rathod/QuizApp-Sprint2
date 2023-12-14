// question.model.ts
export class Question {
    id: number;
    questionTitle: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    rightAnswer: string;
    difficultyLevel: string;
    category: string;
    quiz?: any[]; 
  
    constructor() {
      this.id = 0;
      this.questionTitle = '';
      this.option1 = '';
      this.option2 = '';
      this.option3 = '';
      this.option4 = '';
      this.rightAnswer = '';
      this.difficultyLevel = '';
      this.category = '';
      this.quiz = [];
    }
  }
  