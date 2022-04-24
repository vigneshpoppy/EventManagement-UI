import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SpeakerapicallService } from '../speakerapicall.service';
@Component({
  selector: 'app-search-speaker',
  templateUrl: './search-speaker.component.html',
  styleUrls: ['./search-speaker.component.css']
})
export class SearchSpeakerComponent implements OnInit {

  constructor(private http : HttpClient,private speakerapicallService:SpeakerapicallService) { }

  id:string="";
  data:any=[]
    ngOnInit(): void {
    }
  
    search()
    {
   
  this.speakerapicallService.getbyid(this.id).subscribe(data => {
    this.data = data;
 // console.log(this.data);
  
  
  });
  }

}
