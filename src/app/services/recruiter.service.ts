import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RecruiterSignup } from '../models/RecruiterSignup';
import { RecruiterLogin } from '../models/RecruiterLogin';

@Injectable({
  providedIn: 'root'
})
export class RecruiterService {

 
  baseUrl="http://localhost:8080/api/auth/recruiter/"
 
  constructor(private http:HttpClient, private route:Router) { }

 recruiterSignup(obj:RecruiterSignup):Observable<Object>
  {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(obj);
    return this.http.post(this.baseUrl+'signup',body,{'headers':headers});
  }

  recruiterLogin(obj:RecruiterLogin):Observable<Object>
  {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(obj);
    return this.http.post(this.baseUrl+'signin',body,{'headers':headers})

  }

  jobs():Observable<Object>
  {
    return this.http.get("http://localhost:8080/api/job/alljobs");
  }
}
