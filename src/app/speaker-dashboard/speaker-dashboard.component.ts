import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from '../apicall.service';
ApicallService
@Component({
  selector: 'app-speaker-dashboard',
  templateUrl: './speaker-dashboard.component.html',
  styleUrls: ['./speaker-dashboard.component.css']
})
export class SpeakerDashboardComponent implements OnInit {
  data:any;
  dt:any=[];
  sata:any;
  st:any=[]
  constructor(private http : HttpClient,private apicallService:ApicallService,private router: Router) { }
   speakername:any=localStorage.getItem("username");
  ngOnInit(): void {

  }

  viewfeedback(){
    // this.speakername=JSON.parse(localStorage.getItem("username"));
    //console.log(this.speakername);
    
    this.fetchdata(this.speakername);
  }

  fetchdata(data:any){
    let Observable=this.apicallService.getspeakerfeedback(data);
    Observable.subscribe((data)=>{
      this.dt=data;
     // console.log(this.dt);
    })
    }
  //   search()
  //   {
   
  // this.speakerapicallService.getbyid(this.id).subscribe(sata => {
  //   this.data = sata;
  // console.log(this.data);
  
  
  // });
  // }
  logout(){
    localStorage.setItem("speakeraccess","false");
    this.router.navigate(['/Speaker']);
   // localStorage.SetItem("useraccess","false");
    
  }
  
}

export class feedbacksp{
  eventname:string="";
  feedback:string="";
  pname:string="";
}