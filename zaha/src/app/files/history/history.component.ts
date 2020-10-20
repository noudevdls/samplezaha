import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
