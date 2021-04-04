import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VideoQuizComponent } from './video-quiz/video-quiz.component';
import { PhpQuizComponent } from './php-quiz/php-quiz.component';


const routes: Routes = [
  { path: '', component: PhpQuizComponent},
  { path: 'allvideoQuiz', component: VideoQuizComponent },
  { path: 'questionquiz', component: PhpQuizComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
