import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Router } from '@angular/router';
import { ApicallService } from '../apicall.service';
import { Observable } from 'rxjs';
import{Event} from'./Event'


@Component({
  selector: 'app-testapi',
  templateUrl: './testapi.component.html',
  styleUrls: ['./testapi.component.css']
})
export class TestapiComponent implements OnInit {

  constructor(private http : HttpClient,private apicallService:ApicallService,private router: Router) { }
data:any;
dt:any=[]
event:any=[];
eventid:number=0;
eventname:string="";
amount:number=0;
id:number=0;
  ngOnInit(): void {

this.fetchdata();
  }
  
  fetchdata(){
    let Observable=this.apicallService.get();
    Observable.subscribe((data)=>{
      this.dt=data;
      console.log(this.dt);})

  
}
search()
  {
    
//this.suppID=event.suppID;
//alert(this.suppID);


this.apicallService.getbyid(103).subscribe(data => {
  this.event = data;
console.log(this.event);

 
  
  // console.log(this.supplierdata);
});
}

add(event:any)
{
  var ev=new Event();
 ev.Eventid=event.eventid;
 ev.Name=event.eventname;
 ev.Amount=event.amount;
 this.post(ev);
 

}
post(d:Event){
  this.apicallService.postData(d);
}
delete(){
  this.apicallService.delete(this.id)
}
}