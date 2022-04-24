import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminauthService } from '../admin-login/adminauth.service';

@Component({
  selector: 'app-speaker-login',
  templateUrl: './speaker-login.component.html',
  styleUrls: ['./speaker-login.component.css']
})
export class SpeakerLoginComponent implements OnInit {

  constructor(private http : HttpClient,private adminauthservice:AdminauthService,private router: Router) { }
  model:any=[];
  ngOnInit(): void {
    
  }
data:any;
  ValidateRegistration(event:any)
  {
    var ad=new Admin();
    ad.Speakeremail=event.email;
    ad.password=event.pwd;
    // var reg=new RegData();
  
    // reg.SetPass=event.pwdname;
   
    // reg.SetEmail=event.email;
    localStorage.setItem("username",event.email);
    localStorage.setItem("speakeraccess","true")
    this.fetchdata(ad);
    
    // console.log(reg.GetEmail);
    
    }
    fetchdata(reg:Admin){
      let Observable=this.adminauthservice.getauth(reg);
      Observable.subscribe((data)=>{
        this.data=data;
       // console.log(this.data);
        if(this.data){
          this.router.navigate(['/Speakerdashboard']);
         
         }
         else{
           alert("error password invalid");
         }
      },(error)=>{
        alert("invalid Credential");
      })
  
  }
}
export class Admin{
  Speakeremail:string="";
  password:string="";
}


  export class RegData
  {

  private  speakeremail:string="";
  
  public set SetEmail(_eml:string)
  {
  
    this.speakeremail=_eml;
  }
  
  public get GetEmail():string{
    return  this.speakeremail;
  }
  
  
  private  password:string="";
  
  public set SetPass(_p:string)
  {
  
    this.password=_p;
  }
  
  public get GetPass():string{
    return  this.password;
  }
  
  

}
