
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn:"root"
})
export  class participantgaurd implements CanActivate{
    value:any =localStorage.getItem("participantaccess")
    res:boolean=true;
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        console.log(this.value);
        if(this.value=="false"){
            this.res=false;
        }
        else{
            this.res=true;
        }
       return this.res;
    }

}