import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Event } from 'src/app/testapi/Event';
import { ApicallService } from 'src/app/apicall.service';

@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.css']
})
export class CreateeventComponent implements OnInit {
  eventid:number=0;
  name:string="";
  date:string="";
  location:string="";
  duration:number=0;
  description:string="";
  amount:number=0;
  contactnumber:string="";
  speakername:string="";
  speakerid:string="";
  constructor(private http : HttpClient,private apicallService:ApicallService) { }

  ngOnInit(): void {
  }

add(event:any)
{
  this.contactnumber.length
  if((this.contactnumber.length==10)&&(this.name.length>0)&&(this.name.length>0)&&(this.speakerid.length>0)&&(this.speakername.length>0)&&(this.amount>0)){
  var ev=new Event();
 ev.Eventid=event.eventid;
 ev.Name=event.name;
 ev.Amount=event.amount;
 ev.Date=event.date;
 ev.Description=event.description;
 ev.Duration=event.duration;
 ev.Location=event.location;
 ev.Speakeremail=event.speakerid;
 ev.Speakername=event.speakername
 ev.Contactnumber=event.contactnumber;
 //console.log(ev);
 
 this.post(ev);
  }
  else{
    alert("You entered invalid  or insufficient data");
  }

}
post(d:Event){
  this.apicallService.postData(d);
}
}
