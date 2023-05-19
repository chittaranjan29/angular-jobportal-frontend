import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobseeker-password-change',
  templateUrl: './jobseeker-password-change.component.html',
  styleUrls: ['./jobseeker-password-change.component.css']
})
export class JobseekerPasswordChangeComponent {
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
