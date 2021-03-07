import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class QuizApiService {

  constructor(private http: HttpClient) { }

  getQuestion(): Observable<object>
  {
    return this.http.get('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy')
  }

}
