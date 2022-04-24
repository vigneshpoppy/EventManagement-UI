import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Speaker } from './Speaker';


@Injectable({
  providedIn: 'root'
})
export class SpeakerapicallService {
  baseApi:string="http://localhost:56190/api/speakertests";
  constructor(private http : HttpClient) { }

  public get():Observable<Array<Speaker>>{
    //console.log('hello');
   
    return this.http.get<Array<Speaker>>(this.baseApi);}

    getbyid(id:string):Observable<Speaker>  {
    
    
      console.log(id);
        
        return this.http.get<Speaker>(this.baseApi+"/"+id);
    }
    delete(id:string)
    {
      
      return this.http.delete(this.baseApi+"/"+id).subscribe(data => {
        console.log(data);
      });
  
    }
    postData(event:any)
    {
      
      this.http.post(this.baseApi,event).subscribe(data => {
        console.log(data);
      });
      alert("Done");
    }
   
    putspeakerData(id:string,event:any)
  {
   
  
    
    let endPoints=this.baseApi+"/"+id;
   
    this.http.put(endPoints, event).subscribe(data => {
      console.log(data);
    });
    alert("Done");

  }
}
