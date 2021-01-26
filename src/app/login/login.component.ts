import { Component, OnInit } from '@angular/core';
import {   FormBuilder,FormControl,FormGroup,Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from '../Services/authenticate.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  constructor(public fb: FormBuilder,private router: Router,public AuthenticateService: AuthenticateService) { }

  ngOnInit() {
    this.reactiveForm();
  }
  reactiveForm() {
    this.myForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  submitForm(){
    this.AuthenticateService.login(this.myForm.value)
          .then((data: any) => {
            if (data) {
              //this.router.navigate(['/home']);
            }
            //for refresh
          })
          .catch((err) => {});
        
  }

}
