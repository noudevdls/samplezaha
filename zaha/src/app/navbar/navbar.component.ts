import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goHistory(){
    this.router.navigate(['about us/history']);
  }
  

  goOrganization(){
    this.router.navigate(['about us/organization']);
  }

  goMeet(){
    this.router.navigate(['about us/meet-our-ceo']);
  }

  goMessage(){
    this.router.navigate(['about us/message-ceo']);
  }


  goVision(){
    this.router.navigate(['about us/vision-mission']);
  }

  goTechnologySolution(){
    this.router.navigate(['activities/technology-solutions']);
  }

  goProvideTelecom(){
    this.router.navigate(['activities/provide-telecom']);
  }

  goDevlopEnergy(){
    this.router.navigate(['activities/develop-energy']);
  }

  goImportExport(){
    this.router.navigate(['activities/import-export']);
  }

  goOperation(){
    this.router.navigate(['activities/operation']);
  }

  goNewsMeeting(){
    this.router.navigate(['news/news-meeting']);
  }

  goNewsEmployee(){
    this.router.navigate(['news/news-employee']);
  }

  goContactPage(){
    this.router.navigate(['/contact-page']);
  }

}
