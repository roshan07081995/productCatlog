import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import {   FormBuilder,FormControl,FormGroup,Validators, } from '@angular/forms';
import {  GeneralService } from '../../Services/general.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  myForm: FormGroup;

  @ViewChild('UploadFileInput') uploadFileInput: ElementRef;
  myfilename = 'Select File';


 

  constructor(public fb: FormBuilder,public GeneralService: GeneralService,private router: Router) { }

  ngOnInit() {
    this.reactiveForm();
  }
  reactiveForm() {
    this.myForm = this.fb.group({
      pName: ['', [Validators.required]],
      pDescription: ['', [Validators.required]],
      pQuantity: ['', [Validators.required]],
      pAmount: ['', [Validators.required]],
	  memberContactNo: ['', [Validators.required]],
	  fileName: ['', [Validators.required]],
	  fileSource: ['', [Validators.required]],
    });
  }

  submitForm(){
	 // debugger;
	  
	   const formData = new FormData();

	     formData.append('pName', this.myForm.get('pName').value);
    formData.append('file', this.myForm.get('fileSource').value);
	
	

    this.GeneralService.productSave(formData)
          .then((data: any) => {
            if (data) {
            }
            //for refresh
          })
          .catch((err) => {});
        //this.router.navigate(['/home']);
  }
  
   fileChangeEvent(fileInput: any) {
	
	if (fileInput.target.files[0]) {
      const file = fileInput.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
	console.log(this.myForm);
    if (fileInput.target.files && fileInput.target.files[0]) {


      this.myfilename = '';
      Array.from(fileInput.target.files).forEach((file: File) => {
        //console.log(file);
		
        this.myfilename += file.name + ',';
      });

      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {

          // Return Base64 Data URL
          const imgBase64Path = e.target.result;

        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);

      // Reset File Input to Selct Same file again
      this.uploadFileInput.nativeElement.value = "";
    } else {
      this.myfilename = 'Select File';
    }
  }
}
