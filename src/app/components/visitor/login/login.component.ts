import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidator } from './password.validator';
import * as M from 'materialize-css';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  
  loginForm: any = FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
     ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:["", [Validators.required, PasswordValidator.strong]],
      password:["", [Validators.required, PasswordValidator.strong]],
  });
  }

  enter(){

  }

  return(){
    this.router.navigate(["/"]);
  }

  hide = true;
  get passwordInput() { return this.loginForm.get('password'); }  

}
