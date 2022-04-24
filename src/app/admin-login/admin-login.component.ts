import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {  AdminauthService } from './adminauth.service';
import { Router } from '@angular/router';


   




@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private http : HttpClient,private adminauthservice:AdminauthService,private router: Router) { }
  model:any=[];
  ngOnInit(): void {

 
  }
res:boolean=true;
data:any;
access:boolean=true;
local:any
email:string="";
status:any="";





  ValidateRegistration(event:any)
  {
    var ad=new RegData();
    ad.SetEmail=event.email;
    ad.SetPass=event.pwd;
  
   
  
  if(ad.GetEmail=="admin123@gmail.com"&&ad.GetPass=="admin123"){
    localStorage.setItem("adminaccess","true");
      
     // localStorage.setItem("useraccess","true")
     this.router.navigate(['/Admindashboard']);

    }
    else{
      //this.status="invalid Credential";
     alert("invalid Credential");
    }

  }

  dashboard(){
    
    
    var access= localStorage.getItem("adminaccess");
   // console.log(access);
    if(access=="true"){
           this.res=true;
    }else{
      this.res=false;
    }

    if(this.res){
      this.router.navigate(['/Admindashboard']);
     }else{
       alert("You have to enter Credentials");
     }
        };
  
  }

  export class RegData
  {

  private  adminemail:string="";
  
  public set SetEmail(_eml:string)
  {
  
    this.adminemail=_eml;
  }
  
  public get GetEmail():string{
    return  this.adminemail;
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
  
