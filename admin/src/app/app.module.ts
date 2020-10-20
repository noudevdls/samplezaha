import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MenuComponent } from './layout/menu/menu.component';
import { HomeComponent } from './files/home/home.component';
import { RecruitmentComponent } from './files/recruitment/recruitment.component';
import { LoginComponent } from './files/login/login.component';
import { PostNewComponent } from './files/post-new/post-new.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {admin} from './admin-api';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    RecruitmentComponent,
    LoginComponent,
    PostNewComponent,
    admin
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
