import { Component, OnInit } from '@angular/core';
import { QuizApiService } from '../quiz-api.service';

@Component({
  selector: 'app-php-quiz',
  templateUrl: './php-quiz.component.html',
  styleUrls: ['./php-quiz.component.css']
})
export class PhpQuizComponent implements OnInit {

  questions = [];
  answer = false;
  num = 0;
  scroes = 0;

  constructor(private quizapi: QuizApiService) { }

  ngOnInit(): void {
    this.start();
  }

  start()
  {
   
    this.questions = [];
    this.quizapi.getQuestion().subscribe(async res=> {
      let quiz = res['results'];
      quiz.forEach(element => {
        element.incorrect_answers.push(element.correct_answer);
        element.incorrect_answers.sort(() => .5 - Math.random());
      });
      this.questions = await quiz;
      this.num = 0;
      this.scroes = 0;
    });
  }

  checkAnswer(correct_answer: any, userAnswer: any)
  {
    this.answer = correct_answer == userAnswer ? true : false;
    this.answer ? this.scroes += 10 : this.scroes -= 5;
    this.num < this.questions.length ? this.num += 1 : null;
   
  }

}
