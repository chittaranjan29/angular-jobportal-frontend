import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobseeker-profile-image',
  templateUrl: './jobseeker-profile-image.component.html',
  styleUrls: ['./jobseeker-profile-image.component.css']
})
export class JobseekerProfileImageComponent {
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
