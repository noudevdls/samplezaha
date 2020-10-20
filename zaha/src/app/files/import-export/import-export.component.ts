import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-import-export',
  templateUrl: './import-export.component.html',
  styleUrls: ['./import-export.component.css']
})
export class ImportExportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
