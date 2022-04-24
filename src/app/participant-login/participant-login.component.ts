import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ParticipantService } from './participant.service';
ParticipantService

@Component({
  selector: 'app-participant-login',
  templateUrl: './participant-login.component.html',
  styleUrls: ['./participant-login.component.css']
})
export class ParticipantLoginComponent implements OnInit {

  constructor(private http : HttpClient,private participantService:ParticipantService,private router: Router) { }
  model:any=[];
  email:string="";
  res:boolean=true;
  ngOnInit(): void {
    
  }
  // enter(){
  //   this.router.navigate(['/Participantdashboard']);
  // }
data:any;
  ValidateRegistration(event:any)
  {
    
    var ad=new Participant();
    ad.P_email=event.email;
    ad.P_password=event.pwd;
    
localStorage.setItem("participantid",event.email);
localStorage.setItem("participantaccess","true");
    this.fetchdata(ad);
    
    // console.log(reg.GetEmail);
    
    }
   
    dashboard(){
     var access= localStorage.getItem("participantaccess");
     if(access=="true"){
            this.res=true;
     }else{
       this.res=false;
     }
     if(this.res){
      this.router.navigate(['/Participantdashboard']);
     }else{
       alert("You have to enter Credentials");
     }
      
    }
    fetchdata(reg:Participant){
      let Observable=this.participantService.getauth(reg);
      Observable.subscribe((data)=>{
        console.log(data);
        
        this.data=data;
      
        //console.log(this.data);
        if(!this.data){
          alert("error password invalid")
          // localStorage.setItem("participantid",this.email)
          
         }
         else{
          this.router.navigate(['/Participantdashboard']);
           //localStorage.clear();
         }
      },(error)=>{alert("invalid credential");
      }
      )
  
  }

  updatepasswordirect(){
    this.router.navigate(['/updatepassword']);
  }
}
export class Participant{
  P_email:string="";
  P_password:string="";
}



