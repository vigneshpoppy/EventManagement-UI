import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { SpeakerapicallService } from '../speakerapicall.service';

@Component({
  selector: 'app-updatespeaker',
  templateUrl: './updatespeaker.component.html',
  styleUrls: ['./updatespeaker.component.css']
})
export class UpdatespeakerComponent implements OnInit {

  data:any=[]
  constructor(private http : HttpClient,private speakerapicallService:SpeakerapicallService) { }
  speakeremailid:string="";
  name:string="";
  password:string="";
  skills:string="";
  contactnumber:string="";

  ngOnInit(): void {
  }
  search()
  {
    
    //this.suppID=event.suppID;
    var speaker=new Speaker();

    this.speakerapicallService.getbyid(this.speakeremailid).subscribe(data => {
      this.data = data;
  //  console.log(this.data);
    this.speakeremailid=this.data.speakeremailid;
    this.name=this.data.name;
    this.password=this.data.password;
    this.skills=this.data.skills;
    this.contactnumber=this.data.contactnumber;
    
      // console.log(this.supplierdata);
    });

}

savechanges(event:any)
{if((this.contactnumber.length==10)&&(this.name.length>4)&&(this.speakeremailid.length>3)&&(this.password.length>5)){
  var sp=new Speaker();
  sp.speakeremailid=event.speakeremailid;
  sp.name=event.name;
  sp.password=event.password;
  sp.skills=event.skills;
  sp.contactnumber=event.contactnumber
 // console.log(sp);
  


this.speakerapicallService.putspeakerData(this.speakeremailid,sp);
}else{
  alert("invalid data")
}


}


}
export class Speaker{
  speakeremailid:string="";
  name:string="";
  password:string="";
  skills:string="";
  contactnumber:string="";

}