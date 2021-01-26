import { Component, OnInit } from '@angular/core';
import {   FormBuilder,FormControl,FormGroup,Validators, } from '@angular/forms';
import { AuthenticateService } from '../Services/authenticate.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;
  constructor(public fb: FormBuilder,public AuthenticateService: AuthenticateService,private router: Router,) { }

  ngOnInit() {
    this.reactiveForm();
  }
  reactiveForm() {
    this.myForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmpassword: ['', [Validators.required]],
      recaptchaReactive: ['', [Validators.required]]
      
    });
  }
  submitForm(){
    this.AuthenticateService.register(this.myForm.value)
          .then((data: any) => {
            if (data) {
            }
            //for refresh
          })
          .catch((err) => {});
        this.router.navigate(['/login']);
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved response token: ${captchaResponse}`);
   
  }

}
