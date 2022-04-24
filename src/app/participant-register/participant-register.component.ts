import { HttpClient } from '@angular/common/http';
import {  Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ParticipantService } from '../participant-login/participant.service';

@Component({
  selector: 'app-participant-register',
  templateUrl: './participant-register.component.html',
  styleUrls: ['./participant-register.component.css']
})

export class ParticipantRegisterComponent implements OnInit {
  constructor(private http : HttpClient,private participantService:ParticipantService,private router: Router) { }

  
data:any;
model:any=[];
cnumber:string="";
  ngOnInit(): void {
    
  }
  ValidateRegistration(event:any)
  
  
  {
   
    
    if((event.pwd==event.cpwd)&&(this.cnumber.length==10)){
    var ad=new Participant();
    ad.useremailid=event.email;
    ad.password=event.pwd;
    ad.name=event.name;
    ad.city=event.city;
    ad.contactnumber=event.contactnumber;
    ad.gender=event.gender;
    
    

    this.fetchdata(ad);
    alert("success");
    
  }else{
    alert("password and confirm password does not match or invalid data");
  }
    
    // console.log(reg.GetEmail);
    
    }
    fetchdata(reg:Participant){
      let Observable=this.participantService.register(reg);
      Observable.subscribe((data)=>{
        this.data=data;
     
    
     
       // console.log(this.data);
        if(this.data){
          this.router.navigate(['/Participant']);
         }
         else{
           alert("error")
         }
      })
  
  }
}
export class Participant{
  useremailid:string="";
  password:string="";
  name:string="";
  city:string="";
  contactnumber:string="";
  gender:string="";
}