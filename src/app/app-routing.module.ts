import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoblistComponent } from './components/common/joblist/joblist.component';
import { JobseekerLoginComponent } from './components/job-seeker/jobseeker-login/jobseeker-login.component';
import { RecruiterSigninComponent } from './components/recruiter/recruiter-signin/recruiter-signin.component';
import { RecruiterSignupComponent } from './components/recruiter/recruiter-signup/recruiter-signup.component';
import { RecruiterJobListComponent } from './components/recruiter/recruiter-job-list/recruiter-job-list.component';
import { RecruiterProfileComponent } from './components/recruiter/recruiter-profile/recruiter-profile.component';
import { JobseekerProfileComponent } from './components/job-seeker/jobseeker-profile/jobseeker-profile.component';
import { JobApplicationsStatusComponent } from './components/job-seeker/job-applications-status/job-applications-status.component';
import { JobApplicantListComponent } from './components/recruiter/job-applicant-list/job-applicant-list.component';
import { JobDetailsComponent } from './components/common/job-details/job-details.component';
import { PostJobComponent } from './components/recruiter/post-job/post-job.component';
import { ErrorComponent } from './components/common/error/error.component';
import { JobseekerSignupComponent } from './components/job-seeker/jobseeker-signup/jobseeker-signup.component';
import { AuthenticationGuard } from './services/authentication.guard';
import { JobseekerProfileImageComponent } from './components/job-seeker/jobseeker-profile-image/jobseeker-profile-image.component';
import { JobseekerResumeComponent } from './components/job-seeker/jobseeker-resume/jobseeker-resume.component';
import { JobseekerPasswordChangeComponent } from './components/job-seeker/jobseeker-password-change/jobseeker-password-change.component';

const routes: Routes = [
  {path:'', component:JoblistComponent},
  {path:'joblist', component:JoblistComponent},
  {path:'single-job', component:JobDetailsComponent},
  {path:'jobseeker-login', component:JobseekerLoginComponent},
  {path:'jobseeker-signup', component:JobseekerSignupComponent},
  {path:'jobseeker-profile', component:JobseekerProfileComponent}, 
  {path:'jobseeker-image', component:JobseekerProfileImageComponent},
  {path:'jobseeker-resume', component:JobseekerResumeComponent},
  {path:'jobseeker-password-change', component:JobseekerPasswordChangeComponent},

  {path:'jobseeker-applications-status', component:JobApplicationsStatusComponent},
  {path:'recruiter-login', component:RecruiterSigninComponent},
  {path:'recruiter-signup', component:RecruiterSignupComponent},
  {path:'job-post', component:PostJobComponent},
  {path:'recruiter-joblist', component:RecruiterJobListComponent},
  {path:'recruiter-profile', component:RecruiterProfileComponent},
  {path:'job-applicant-list', component:JobApplicantListComponent},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
