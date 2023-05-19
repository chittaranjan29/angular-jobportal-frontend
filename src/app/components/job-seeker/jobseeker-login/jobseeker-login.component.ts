import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { jobSeekerLogin } from 'src/app/models/JobseekerLogin';
import { JobseekerService } from 'src/app/services/jobseeker.service';

@Component({
  selector: 'app-jobseeker-login',
  templateUrl: './jobseeker-login.component.html',
  styleUrls: ['./jobseeker-login.component.css']
})
export class JobseekerLoginComponent {
  
  obj:any;
  constructor(private jobSeekerService:JobseekerService, private router:Router)
  {

  }

  onSubmit(obj:any)
  {
    console.log(obj.value);
    this.obj=new jobSeekerLogin(obj.value.usernameOrEmail,obj.value.password);
    this.jobSeekerService.jobSeekerLogin(this.obj).subscribe(
      response =>
      {
        sessionStorage.setItem("status","success");
        console.log(response)
        alert('Login successfull.\n You will be redirected to the login page..');
        this.router.navigate(['jobseeker-profile']);
      },
      eresponse=>
      {
        console.log(eresponse)
        alert('incorrect username/email or password ');
      }
    );
  }
}
