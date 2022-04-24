import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SpeakerapicallService } from '../speakerapicall.service';
@Component({
  selector: 'app-deletespeaker',
  templateUrl: './deletespeaker.component.html',
  styleUrls: ['./deletespeaker.component.css']
})
export class DeletespeakerComponent implements OnInit {
  constructor(private http : HttpClient,private speakerapicallService:SpeakerapicallService) { }
  id:string="";
  data:any;
  ngOnInit(): void {
  }
  search()
  {
 
this.speakerapicallService.getbyid(this.id).subscribe(data => {
  this.data = data;
//console.log(this.data);


});}

  delete(){
    this.speakerapicallService.delete(this.id)
    this.data=[];
  }

}
