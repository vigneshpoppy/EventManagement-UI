import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApicallService } from 'src/app/apicall.service';
import { Event } from 'src/app/testapi/Event';
@Component({
  selector: 'app-searchevent',
  templateUrl: './searchevent.component.html',
  styleUrls: ['./searchevent.component.css']
})
export class SearcheventComponent implements OnInit {

  constructor(private http : HttpClient,private apicallService:ApicallService) { }
id:number=0;
data:any=[]
  ngOnInit(): void {
  }

  search()
  {
 
this.apicallService.getbyid(this.id).subscribe(data => {
  this.data = data;
//console.log(this.data);


});
}

}
