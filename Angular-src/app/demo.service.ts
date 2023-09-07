import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class DemoService
 {

  link1 = "http://localhost:9001/login";

  constructor(private h1 : HttpClient) 
  { }

  logindata1(user : User):Observable<object>
  {
       return this.h1.post(`${this.link1}`,user);
  }
  
}
