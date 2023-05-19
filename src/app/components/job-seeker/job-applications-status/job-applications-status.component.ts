import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-applications-status',
  templateUrl: './job-applications-status.component.html',
  styleUrls: ['./job-applications-status.component.css']
})
export class JobApplicationsStatusComponent {
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
