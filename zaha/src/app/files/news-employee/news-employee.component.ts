import { AotSummaryResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-news-employee',
  templateUrl: './news-employee.component.html',
  styleUrls: ['./news-employee.component.css']
})
export class NewsEmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }


  showShortDesciption = true;

  alterDescriptionText() {
    this.showShortDesciption = !this.showShortDesciption
 }

}
