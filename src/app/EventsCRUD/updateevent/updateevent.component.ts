import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/apicall.service';
import { Event } from 'src/app/testapi/Event';

@Component({
  selector: 'app-updateevent',
  templateUrl: './updateevent.component.html',
  styleUrls: ['./updateevent.component.css']
})
export class UpdateeventComponent implements OnInit {
  id:number=0;
  data:any=[]
  constructor(private http : HttpClient,private apicallService:ApicallService) { }
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
  ngOnInit(): void {
  }
  search()
  {
    
    //this.suppID=event.suppID;
    var event=new Event();

    this.apicallService.getbyid(this.id).subscribe(data => {
      this.data = data;
   // console.log(this.data);
    this.eventid=this.data.eventid;
    this.name=this.data.name;
    this.duration=this.data.duration;
    this.location=this.data.location;
    this.description=this.data.description;
    this.speakerid=this.data.speakeremail;
    this.speakername=this.data.speakername;
    this.contactnumber=this.data.contactnumber;
    this.amount=this.data.amount;
    this.date=this.data.date;
    
      // console.log(this.supplierdata);
    });

}

savechanges(event:any)
{if((this.contactnumber.length==10)&&(this.name.length>0)&&(this.name.length>0)&&(this.speakerid.length>0)&&(this.speakername.length>0)&&(this.amount>0)){
  var ev=new Event();
  ev.Eventid=event.eventid;
  ev.Name=event.name;
  ev.Date=event.date;
  ev.Amount=event.amount;
  ev.Description=event.description;
  ev.Duration=event.duration;
  ev.Location=event.location;
  ev.Speakeremail=event.speakerid;
  ev.Speakername=event.speakername;
  ev.Contactnumber=event.contactnumber
  


this.apicallService.puteventData(this.eventid,ev);

}
else{
  alert("insuffcient data")
}
}
}
