import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { feedbacksp } from './speaker-dashboard/speaker-dashboard.component';
import { Event } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  baseApi:string="http://localhost:56190/api/eventtests";
  constructor(private http : HttpClient) { }

  public get():Observable<Array<Event>>{
    console.log('hello');
   
    return this.http.get<Array<Event>>(this.baseApi);}

    getbyid(id:number):Observable<Event>  {
    
    
      console.log(id);
        
        return this.http.get<Event>(this.baseApi+"/"+id);
    }

    postData(event:any)
    {
      
      this.http.post(this.baseApi,event).subscribe(data => {
        console.log(data);
      });
      alert("Done");
    }

    delete(id:number)
  {
    
    return this.http.delete(this.baseApi+"/"+id).subscribe(data => {
      console.log(data);
    });

  }

feedbackuri:string="http://localhost:56190/api/feedbacktests"
  postfeedback(event:any)
  {
      
    this.http.post(this.feedbackuri,event).subscribe(data => {
      console.log(data);
    });
    alert("Done");
  }
postenrolluri:string="http://localhost:56190/api/Enroll"
  postenroll(event:any)
  {
      
    this.http.post(this.postenrolluri,event).subscribe(data => {
      console.log(data);
    });
    
  }
  getspeakerfeedbackuri:string="http://localhost:56190/api/feedbacktests";
getspeakerfeedback(id:any):Observable<any>  {
    
    
  console.log(id);
    
    return this.http.get<feedbacksp>(this.getspeakerfeedbackuri+"/"+id);
}

puteventData(id:number,event:any)
  {
    // alert(id);
    // alert(supplier.ContactName);
    // alert(supplier.CompanyName);
  
    
    let endPoints=this.baseApi+"/" + id;
    //let endPoints="Suppliers/";
    this.http.put(endPoints, event).subscribe(data => {
      console.log(data);
    });
    alert("Done");

  }

   //admin see all feedback
allfeedbackUri:string="http://localhost:56190/api/feedbacktests"
  allfeedback():Observable<Array<any>>{
    //console.log('hello');
   
    return this.http.get<Array<any>>(this.allfeedbackUri);}

//get userdataby id
getuserdatabyid:string="http://localhost:56190/api/pariticipanttests";
    getuserdata(id:any):Observable<any>  {
    
    
      console.log(id);
        
        return this.http.get<any>(this.getuserdatabyid+"/"+id);

        
    }
    getalluserdata():Observable<any>  {
    
    
      //console.log(id);
        
        return this.http.get<any>(this.getuserdatabyid);

        
    }
deleteenrolluri:string="http://localhost:56190/api/CancelEnroll"
    cancelenroll(event:any)
    {
        console.log("im service");
        
      this.http.post(this.deleteenrolluri,event).subscribe(data => {
        console.log(data);
      });
      //alert("Done");
    }

    sendmailuri:string="http://localhost:56190/api/Email"
    sendmail(event:any)
    {
        console.log("im service");
        
      this.http.post(this.sendmailuri,event).subscribe(data => {
        console.log(data);
      });
      alert("sent success");
    }

    sendcontactusuri:string="http://localhost:56190/api/Email";
    sendcontactusform(id:number,event:any)
    {
        console.log("im service");
        let contactURI=this.sendcontactusuri+"/" + id;
      this.http.put(contactURI,event).subscribe(data => {
        console.log(data);
      });
      alert("sent success");
    }

    deletemyaccountURI:string="http://localhost:56190/api/pariticipanttests"
    deletemyaccount(id:string)
    {
      
      return this.http.delete(this.deletemyaccountURI+"/"+id).subscribe(data => {
        console.log(data);
      });
  
    }
}
