import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-message-ceo',
  templateUrl: './message-ceo.component.html',
  styleUrls: ['./message-ceo.component.css']
})
export class MessageCeoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
