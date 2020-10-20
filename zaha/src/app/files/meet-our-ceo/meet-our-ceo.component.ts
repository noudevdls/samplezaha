import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-meet-our-ceo',
  templateUrl: './meet-our-ceo.component.html',
  styleUrls: ['./meet-our-ceo.component.css']
})
export class MeetOurCeoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
