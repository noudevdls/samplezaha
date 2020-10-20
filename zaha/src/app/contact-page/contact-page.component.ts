import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
