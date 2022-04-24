import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-adminfeedback',
  templateUrl: './adminfeedback.component.html',
  styleUrls: ['./adminfeedback.component.css']
})
export class AdminfeedbackComponent implements OnInit {
  data:any;
  dt:any=[];
 
  constructor(private http : HttpClient,private apicallService:ApicallService ,private router:Router) { }
  ngOnInit(): void {

    this.fetchdata();
  }
  fetchdata(){
    let Observable=this.apicallService.allfeedback();
    Observable.subscribe((data)=>{
      this.dt=data;
    // console.log(this.dt);
    })
    }
  //  
  logout(){
    this.router.navigate(['/Admin']);
   // localStorage.SetItem("useraccess","false");
    
  }
}
