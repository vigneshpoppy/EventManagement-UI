import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ɵLocaleDataIndex } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-participant-dashboard',
  templateUrl: './participant-dashboard.component.html',
  styleUrls: ['./participant-dashboard.component.css']
})
export class ParticipantDashboardComponent implements OnInit {

  constructor(private http : HttpClient,private apicallService:ApicallService,private router: Router) { }
  ngOnInit(): void {
    this.fetchdataofuser(this.email);
    this.fetchdata();
  
  // console.log(this.button);
   
  }
  logout(){
    localStorage.removeItem("participantid");
    localStorage.setItem("participantaccess","false");
    this.router.navigate(['/Participant']);
    
   // localStorage.SetItem("useraccess","false");
    
  }
//getdata
  data:any;
  dt:any=[];

  //get userdatabyid
  udata:any;
  udt:any=[];
  enrollstatus:any;
//enroll
  localdata:any= localStorage.getItem("participantid");
  
  id:any;
  email:any=this.localdata;
  ename:string="";
//feedback
eventid:number=0;
eventname:string="";
feedback:string="";
pname:string="";
 button:boolean=true;

//cancel enrollment
cancelenroll(){
  var en=new enroll();
  
  //console.log("btn service");
  en.emailid=this.email;
this.delete(en);
alert("Enrollment Canceled");
location.reload();
}

delete(data:enroll){
 // console.log("execute service");
  
  this.apicallService.cancelenroll(data);
}


//fetch all event
fetchdata(){
  let Observable=this.apicallService.get();
  Observable.subscribe((data)=>{
    this.dt=data;
   // console.log(this.dt);
  })
  }

add(event:any){
  var fd=new Feedback();
  fd.eventid=event.eventid;
  fd.eventname=event.eventname;
  fd.feedback=event.feedback;
  fd.pname=event.pname;

this.postdata(fd);
}

postdata(data:Feedback){
  this.apicallService.postfeedback(data);
}

//enroll action
enroll(){
var en=new enroll();
en.eventid=this.id;
en.eventname=this.ename;
en.emailid=this.email;
this.postenroll(en);
alert("enrolled")
location.reload()
}

postenroll(data:enroll){
  this.apicallService.postenroll(data);
}

fetchdataofuser(data:any){
  let Observable=this.apicallService.getuserdata(data);
  Observable.subscribe((data)=>{
    this.udt=data;
  
   
    if(data.eventid==null){
    //  console.log(data.eventid);
      
  this.enrollstatus="notEnrolled";
  this.eventid=0;
  this.eventname="";
  this.ename="";
  this.pname=data.name;
  this.button=false;
    }
    else{
  this.enrollstatus="enrolled already"
  this.eventid=data.eventid;
  this.eventname=data.eventname;
  this.ename=data.eventname;
  //this.id=data.eventid;
  this.pname=data.name;
  this.button=true;
 
  
  
    }
    
    //console.log(this.udt);
  })
  }
  promotionalcode:string="";
  mastercode:any="";

  checkcode(){
    this.mastercode=localStorage.getItem("code");
    this.mastercode.toString();
    if(this.promotionalcode==this.mastercode){
      alert("code applied");
    }
    else{
      alert("invalid code");
    }
  }
  DeleteMyAccount(){
    this.apicallService.deletemyaccount(this.email)
    this.router.navigate(['/Participant']);
  }
  
}

export class Feedback{
  eventid:number=0;
  eventname:string="";
  feedback:string="";
  pname:string="";
}
export class enroll{
  eventid:any;
  emailid:any="";
  eventname:string="";
}