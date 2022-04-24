import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(private http : HttpClient) { }

  getauth(data:any):Observable<any> {
    //  let  data =new admin
    //  data.Speakeremail='abc';
    //  data.password="abc";
    //  var json = JSON.stringify(data);
    //console.log(data);
    
      return this.http.post<boolean>("http://localhost:56190/api/ParticipantLoginCheck",data);
    }

    register(data:any):Observable<any> {
      //  let  data =new admin
      //  data.Speakeremail='abc';
      //  data.password="abc";
      //  var json = JSON.stringify(data);
      console.log(data);
      
        return this.http.post<boolean>("http://localhost:56190/api/pariticipanttests",data)
          
        
      }

      updatepassworduri:string="http://localhost:56190/api/participantLoginCheck";
    updatepassword(id:number,event:any)
    {
        console.log(event);
        let contactURI=this.updatepassworduri+"/" + id;
      this.http.put(contactURI,event).subscribe(data => {
        console.log(data);
      });
      alert("update success");
    }

}
