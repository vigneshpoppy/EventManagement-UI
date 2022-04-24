import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  public baseuri="https://localhost:44311/api/"

  constructor(private http : HttpClient) { }

  getauth(data:any):Observable<any> {
  //  let  data =new admin
  //  data.Speakeremail='abc';
  //  data.password="abc";
  //  var json = JSON.stringify(data);
    return this.http.post<boolean>("http://localhost:56190/api/SpeakerLoginCheck/",data);
  }


}

export class admin{
    
  Speakeremail:string="abc";
  password:string="abc";
}