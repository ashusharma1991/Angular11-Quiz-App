import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class QuizApiService {

  constructor(private http: HttpClient) { }

  getQuestion(): Observable<object>
  {
    return this.http.get('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy')
   
  }

  getArmezoQuestion()
  {
    return this.http.get('http://api.gammezo.com/test-videos/getVideos');
  }

  public getQuestionById(id: number) {
    //http://api.gammezo.com/test-videos/getVideo/5eea0d2677f2abc4b3fd18d7
    return this.http.get(`http://api.gammezo.com/test-videos/getVideo/${id}`);
  }

}
