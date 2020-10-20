import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpModel, Myresp } from './../../empModel';


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})



export class FormRegisterComponent implements OnInit {

  public postdata: any = {};

  form = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    birth_date: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    position: new FormControl('', Validators.required),
    phonenumber: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    present_address: new FormControl('', Validators.required)
  })

  registerForm: FormGroup;
  submitted = false;
  UserArray: EmpModel[] = new Array<EmpModel>();
  EmpModel: EmpModel = new EmpModel();
  url = 'http://localhost:2020';
  constructor(public http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.EmpModel = new EmpModel();
  }

  ngOnInit(): void {

  }


  save(postdata: any) {
    console.log("Postdata", this.postdata);
    // insert data 
    delete this.EmpModel.id
    this.EmpModel.firstname = postdata.firstname;
    this.EmpModel.lastname = postdata.lastname;
    this.EmpModel.birth_date = postdata.birth_date;
    this.EmpModel.gender = postdata.gender;
    this.EmpModel.position = postdata.position;
    this.EmpModel.phonenumber = postdata.phonenumber;
    this.EmpModel.email = postdata.email;
    this.EmpModel.present_address = postdata.present_address;
    this.EmpModel.more_detail = postdata.more_detail;
    this.http.put(this.url, this.EmpModel).subscribe(r => {
      console.log('r', r);
    }, e => {
      console.log(e);

    });
    this.router.navigate(['register-employee']);
  }


  closeModal() {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
}
