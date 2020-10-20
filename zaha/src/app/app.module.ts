import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './files/home/home.component';
import { HistoryComponent } from './files/history/history.component';
import { MeetOurCeoComponent } from './files/meet-our-ceo/meet-our-ceo.component';
import { MessageCeoComponent } from './files/message-ceo/message-ceo.component';
import { OrganizationComponent } from './files/organization/organization.component';
import { VisionMissionComponent } from './files/vision-mission/vision-mission.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component'; 
import { ImportExportComponent } from './files/import-export/import-export.component';
import { DevelopEnergyComponent } from './files/develop-energy/develop-energy.component';
import { TechnologySolutionComponent } from './files/technology-solution/technology-solution.component';
import { ProvideTelecomComponent } from './files/provide-telecom/provide-telecom.component';
import { NewsEmployeeComponent } from './files/news-employee/news-employee.component';
import { NewsMeetingComponent } from './files/news-meeting/news-meeting.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ImageSlideComponent } from './image-slide/image-slide.component';
import { OperationComponent } from './files/operation/operation.component';
import { FormRegisterComponent } from './files/form-register/form-register.component';  
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoryComponent,
    MeetOurCeoComponent,
    MessageCeoComponent,
    OrganizationComponent,
    VisionMissionComponent,
    NavbarComponent,
    ContactComponent,
    ImportExportComponent,
    DevelopEnergyComponent,
    TechnologySolutionComponent,
    ProvideTelecomComponent,
    NewsEmployeeComponent,
    NewsMeetingComponent,
    ContactPageComponent,
    ImageSlideComponent,
    OperationComponent,
    FormRegisterComponent,
    ScrollToTopComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
