import { Component, ElementRef, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import { QuizApiService } from '../quiz-api.service';

@Component({
  selector: 'app-video-quiz',
  templateUrl: './video-quiz.component.html',
  styleUrls: ['./video-quiz.component.css']
})
export class VideoQuizComponent implements OnInit {
  data: any;
  data2: any;
  num = 0;
  startbutton:boolean = true;
  videodiv:boolean = false;
  elem = document.documentElement;
  nexvideoid:any;
  lenghtno:any;

  @ViewChild('videoPlayer') videoplayer: ElementRef;
  @ViewChild('clickfull') clickfull: ElementRef;
  
  constructor(private quizservice: QuizApiService) { }

  ngOnInit(): void {}
  
  toggleVideo() {
    this.videoplayer.nativeElement.play();
  }

  getAllVideoQuestion()
  {

    this.data = [];
    this.quizservice.getArmezoQuestion().subscribe(async res => {
        this.data = await res;
        this.num = 0;
        //console.log(this.data);
    })
  }

  ngAfterViewInit() {
    //console.log("after view init")
  }

  fullscreen() {
   
  if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
      this.startbutton = false;
      this.videodiv = true;
      this.getAllVideoQuestion();
     
    }
  }

  ResponceSubmit(nextvideoid: any)
  {
    
    this.nexvideoid = nextvideoid;
    this.lenghtno = this.data.length;
    this.quizservice.getQuestionById(nextvideoid).subscribe(async res =>{
      this.data = await res;
      this.num < this.data.length ? this.num += 1 : null;
      this.videodiv = true;
      this.videoplayer.nativeElement.load();
      console.log(this.data);
    })

    //this.num < this.data.length ? this.num += 1 : null;
    //this.videoplayer.nativeElement.load();
    //this.toggleVideo();
    //console.log(this.nexvideoid);
    //console.log(this.lenghtno);
    //console.log(this.num);
  }

 


}
