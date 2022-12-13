import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidator } from './password.validator';
import * as M from 'materialize-css';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {

  
  signUpForm: any = FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
     ) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      username:["", [Validators.required, PasswordValidator.strong]],
      password:["", [Validators.required, PasswordValidator.strong]],
      confirm_password:["", [Validators.required, PasswordValidator.strong]],

  });
  }

  signUp(){

  }

  return(){
    this.router.navigate(["/"]);
  }

  hide = true;
  get passwordInput() { return this.signUpForm.get('password'); }
    

}
