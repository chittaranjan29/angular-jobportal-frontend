import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { JobseekerLoginComponent } from './components/job-seeker/jobseeker-login/jobseeker-login.component';
import { JoblistComponent } from './components/common/joblist/joblist.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { JobDetailsComponent } from './components/common/job-details/job-details.component';
import { JobApplicationsStatusComponent } from './components/job-seeker/job-applications-status/job-applications-status.component';
import { JobseekerProfileComponent } from './components/job-seeker/jobseeker-profile/jobseeker-profile.component';
import { JobseekerSignupComponent } from './components/job-seeker/jobseeker-signup/jobseeker-signup.component';
import { RecruiterSignupComponent } from './components/recruiter/recruiter-signup/recruiter-signup.component';
import { RecruiterSigninComponent } from './components/recruiter/recruiter-signin/recruiter-signin.component';
import { PostJobComponent } from './components/recruiter/post-job/post-job.component';
import { RecruiterJobListComponent } from './components/recruiter/recruiter-job-list/recruiter-job-list.component';
import { JobApplicantListComponent } from './components/recruiter/job-applicant-list/job-applicant-list.component';
import { RecruiterProfileComponent } from './components/recruiter/recruiter-profile/recruiter-profile.component';
import { ErrorComponent } from './components/common/error/error.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { JobseekerResumeComponent } from './components/job-seeker/jobseeker-resume/jobseeker-resume.component';
import { JobseekerProfileImageComponent } from './components/job-seeker/jobseeker-profile-image/jobseeker-profile-image.component';
import { JobseekerPasswordChangeComponent } from './components/job-seeker/jobseeker-password-change/jobseeker-password-change.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JobseekerLoginComponent,
    JoblistComponent,
    FooterComponent,
    JobDetailsComponent,
    JobApplicationsStatusComponent,
    JobseekerProfileComponent,
    JobseekerSignupComponent,
    RecruiterSignupComponent,
    RecruiterSigninComponent,
    PostJobComponent,
    RecruiterJobListComponent,
    JobApplicantListComponent,
    RecruiterProfileComponent,
    ErrorComponent,
    JobseekerResumeComponent,
    JobseekerProfileImageComponent,
    JobseekerPasswordChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
