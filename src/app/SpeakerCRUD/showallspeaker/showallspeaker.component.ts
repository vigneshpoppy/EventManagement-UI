import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SpeakerapicallService } from '../speakerapicall.service';

@Component({
  selector: 'app-showallspeaker',
  templateUrl: './showallspeaker.component.html',
  styleUrls: ['./showallspeaker.component.css']
})
export class ShowallspeakerComponent implements OnInit {
  constructor(private http : HttpClient,private speakerapicallService:SpeakerapicallService) { }
  data:any;
  dt:any=[]
  ngOnInit(): void {
    this.fetchdata();
  }
  fetchdata(){
    let Observable=this.speakerapicallService.get();
    Observable.subscribe((data)=>{
     // console.log(data);
      
      this.dt=data;
    //  console.log(this.dt);
    })
    }

}
