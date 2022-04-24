import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Event } from 'src/app/testapi/Event';
import { ApicallService } from 'src/app/apicall.service';

@Component({
  selector: 'app-deleteevent',
  templateUrl: './deleteevent.component.html',
  styleUrls: ['./deleteevent.component.css']
})
export class DeleteeventComponent implements OnInit {

  constructor(private http : HttpClient,private apicallService:ApicallService) { }
  id:number=0;
  data:any;
  ngOnInit(): void {
  }
  search()
  {
 
this.apicallService.getbyid(this.id).subscribe(data => {
  this.data = data;
//console.log(this.data);


});}

  delete(){
    this.apicallService.delete(this.id)
  }
}
