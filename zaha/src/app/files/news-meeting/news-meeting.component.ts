import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-news-meeting',
  templateUrl: './news-meeting.component.html',
  styleUrls: ['./news-meeting.component.css']
})
export class NewsMeetingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
