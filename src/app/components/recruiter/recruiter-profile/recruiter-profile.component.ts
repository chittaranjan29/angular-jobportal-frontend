import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruiter-profile',
  templateUrl: './recruiter-profile.component.html',
  styleUrls: ['./recruiter-profile.component.css']
})
export class RecruiterProfileComponent {

  constructor(private router:Router)
  {

  }
  logout()
  {
    sessionStorage.removeItem('status');
    if(confirm('are you sure??'))
    {
    this.router.navigate(['jobseeker-login']);
    }
  }
}
