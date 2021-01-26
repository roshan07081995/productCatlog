import { Component, OnInit } from '@angular/core';
import {   FormBuilder,FormControl,FormGroup,Validators, } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  myForm: FormGroup;
  constructor(public fb: FormBuilder,) { }

  ngOnInit() {
    this.reactiveForm();
  }
  reactiveForm() {
    this.myForm = this.fb.group({
      email: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }
  submitForm(){
    console.log('hi');
  }

}


