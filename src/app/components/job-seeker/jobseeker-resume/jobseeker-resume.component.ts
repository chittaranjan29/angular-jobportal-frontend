import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobseeker-resume',
  templateUrl: './jobseeker-resume.component.html',
  styleUrls: ['./jobseeker-resume.component.css']
})
export class JobseekerResumeComponent {
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
