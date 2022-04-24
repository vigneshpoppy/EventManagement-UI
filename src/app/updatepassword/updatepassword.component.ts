import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantService } from '../participant-login/participant.service';


@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit {

  constructor(private http : HttpClient,private participantService:ParticipantService,private router: Router) { }

  ngOnInit(): void {
  }

  ValidateRegistration(event:any)
  {if(event.pwd==event.cpwd){
    var ad=new Participantupdate();
  ad.P_email=event.email;
  ad.P_password=event.pwd;
    
    
//console.log(ad);

    this.updatepassword(ad);
    alert("success");
    
  }else{
    alert("password and confirm password does not match");
  }
    
    // console.log(reg.GetEmail);
    
    }
    id:any=1;
    updatepassword(data:Participantupdate){
  this.participantService.updatepassword(this.id,data);
    }
  
  }
 


export class Participantupdate{
  P_email:string="";
  P_password:string="";

  
}
