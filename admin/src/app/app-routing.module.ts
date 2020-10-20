import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './files/home/home.component';
import { LoginComponent } from './files/login/login.component';
import { PostNewComponent } from './files/post-new/post-new.component';
import { RecruitmentComponent } from './files/recruitment/recruitment.component';


const routes: Routes = [
  {path: '', component:  LoginComponent},
  {path: 'recruitment', component: RecruitmentComponent},
  {path: 'post-new', component: PostNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
