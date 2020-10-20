import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { DevelopEnergyComponent } from './files/develop-energy/develop-energy.component';
import { FormRegisterComponent } from './files/form-register/form-register.component';
import { HistoryComponent } from './files/history/history.component';
import { HomeComponent } from './files/home/home.component';
import { ImportExportComponent } from './files/import-export/import-export.component';
import { MeetOurCeoComponent } from './files/meet-our-ceo/meet-our-ceo.component';
import { MessageCeoComponent } from './files/message-ceo/message-ceo.component';
import { NewsEmployeeComponent } from './files/news-employee/news-employee.component';
import { NewsMeetingComponent } from './files/news-meeting/news-meeting.component';
import { OperationComponent } from './files/operation/operation.component';
import { OrganizationComponent } from './files/organization/organization.component';
import { ProvideTelecomComponent } from './files/provide-telecom/provide-telecom.component';
import { TechnologySolutionComponent } from './files/technology-solution/technology-solution.component';
import { VisionMissionComponent } from './files/vision-mission/vision-mission.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'about us/history', component: HistoryComponent
  },
  {
    path: 'about us/vision-mission', component: VisionMissionComponent
  },
  {
    path: 'about us/message-ceo', component: MessageCeoComponent
  },
  {
    path: 'about us/meet-our-ceo', component: MeetOurCeoComponent
  },
  {
    path: 'about us/organization', component: OrganizationComponent
  },
  {
    path: 'activities/technology-solutions', component: TechnologySolutionComponent
  },
  {
    path: 'activities/provide-telecom', component: ProvideTelecomComponent
  },
  {
    path: 'activities/develop-energy', component: DevelopEnergyComponent
  },
  {
    path: 'activities/import-export', component: ImportExportComponent
  },
  {
    path: 'news/news-meeting', component: NewsMeetingComponent
  },
  {
    path: 'news/news-employee', component: NewsEmployeeComponent
  },
  {
    path: 'contact-page', component: ContactPageComponent
  },
  {
    path: 'activities/operation', component: OperationComponent
  },
  {
    path: 'register-employee', component: FormRegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
