import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {admin} from '../../admin-api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  admin = admin;
  username;
  password;

  constructor(private rouer: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  
  login(){
    
  }


}
