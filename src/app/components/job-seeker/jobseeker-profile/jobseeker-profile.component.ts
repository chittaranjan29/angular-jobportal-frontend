import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobseeker-profile',
  templateUrl: './jobseeker-profile.component.html',
  styleUrls: ['./jobseeker-profile.component.css']
})
export class JobseekerProfileComponent {

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
