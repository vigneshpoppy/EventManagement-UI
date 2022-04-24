import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from '../apicall.service';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private http : HttpClient,private apicallService:ApicallService) { }

  ngOnInit(): void {
  }

  sendform(event:any){
var cus=new contactus();
cus.email=event.email;
cus.cnumber=event.cnumber;
cus.comment=event.comment;
this.sendcontactusform(cus);
  }
  id:any=1;
  sendcontactusform(data:contactus){
this.apicallService.sendcontactusform(this.id,data);
  }
}
export class contactus {
  email:string="";
  cnumber:any="";
  comment:string=""

}
