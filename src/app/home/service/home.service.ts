import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  @Output() disTeam: EventEmitter<any> = new EventEmitter();

  heroes:object[] = [];
  url: string = 'https://superheroapi.com/api/4512040088829939';


  constructor(private http: HttpClient) { }


   search(q):Observable<any>{
     return this.http.get<Observable<any>>(`${this.url}/search/${q}`);
   }
  }

