import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecruiterLogin } from 'src/app/models/RecruiterLogin';
import { RecruiterService } from 'src/app/services/recruiter.service';

@Component({
  selector: 'app-recruiter-signin',
  templateUrl: './recruiter-signin.component.html',
  styleUrls: ['./recruiter-signin.component.css']
})
export class RecruiterSigninComponent {
  obj:any;
  constructor(private recruiterService:RecruiterService, private router:Router)
  {

  }

  onSubmit(obj:any)
  {
    console.log(obj.value);
    this.obj=new RecruiterLogin(obj.value.usernameOrEmail,obj.value.password);
    this.recruiterService.recruiterLogin(this.obj).subscribe(
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
