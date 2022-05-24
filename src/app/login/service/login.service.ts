import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoginService {



   url:string = "http://challenge-react.alkemy.org";

  constructor(private http: HttpClient) { }

  loginUser(form):Observable<any>{
    return this.http.post<Observable<any>>(this.url,form)

}



}