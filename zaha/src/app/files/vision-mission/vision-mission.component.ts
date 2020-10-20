import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-vision-mission',
  templateUrl: './vision-mission.component.html',
  styleUrls: ['./vision-mission.component.css']
})
export class VisionMissionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
