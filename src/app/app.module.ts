import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhpQuizComponent } from './php-quiz/php-quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { VideoQuizComponent } from './video-quiz/video-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    PhpQuizComponent,
    VideoQuizComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
