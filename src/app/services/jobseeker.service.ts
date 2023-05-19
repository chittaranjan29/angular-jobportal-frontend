import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jobSeekerSignup } from '../models/JobseekerSignup';
import {Observable} from 'rxjs';
import { jobSeekerLogin } from '../models/JobseekerLogin';
@Injectable({
  providedIn: 'root'
})
export class JobseekerService {

  baseUrl="http://localhost:8080/api/auth/jobseeker/"
 
  constructor(private http:HttpClient, private route:Router) { }

  jobSeekerSignup(obj:jobSeekerSignup):Observable<Object>
  {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(obj);
    return this.http.post(this.baseUrl+'signup',body,{'headers':headers});
  }

  jobSeekerLogin(obj:jobSeekerLogin):Observable<Object>
  {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(obj);
    return this.http.post(this.baseUrl+'signin',body,{'headers':headers})

  }
}
