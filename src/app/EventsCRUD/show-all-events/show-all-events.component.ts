import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApicallService } from 'src/app/apicall.service';
import { Event } from 'src/app/testapi/Event';

@Component({
  selector: 'app-show-all-events',
  templateUrl: './show-all-events.component.html',
  styleUrls: ['./show-all-events.component.css']
})
export class ShowAllEventsComponent implements OnInit {

  constructor(private http : HttpClient,private apicallService:ApicallService) { }
  data:any;
  dt:any=[]
  ngOnInit(): void {
    this.fetchdata();
  }
  fetchdata(){
    let Observable=this.apicallService.get();
    Observable.subscribe((data)=>{
      this.dt=data;
     // console.log(this.dt);
    })

  
}
}
