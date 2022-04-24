import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SpeakerapicallService } from '../speakerapicall.service';
import { Speaker } from '../Speaker';


@Component({
  selector: 'app-createspeaker',
  templateUrl: './createspeaker.component.html',
  styleUrls: ['./createspeaker.component.css']
})
export class CreatespeakerComponent implements OnInit {

  constructor(private http : HttpClient,private speakerapicallService:SpeakerapicallService) { }
cnum:string="";
speakerid:string="";
pwd:string="";
speakername:string="";
  ngOnInit(): void {
  }
  add(event:any)
  {this.cnum=event.contactnum;
    if((this.cnum.length==10)&&(this.speakername.length>4)&&(this.speakerid.length>3)&&(this.pwd.length>5)){
    var speaker=new Speaker();
    speaker.speakeremailid=event.speakerid;
    speaker.password=event.pwd;
    speaker.name=event.speakername;
    speaker.skills=event.speakerskills;
    speaker.contactnumber=event.contactnum;
   
    //console.log(speaker);
 
    this.post(speaker);
  }else{
    alert("insufficient data or invalid data")
  }

  }

  post(d:Speaker){
    this.speakerapicallService.postData(d);
  }
}
