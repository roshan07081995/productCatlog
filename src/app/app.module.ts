import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './SharedModule/layout/layout.component';
import { HomeComponent } from './CoreModule/home/home.component';
import { ProductComponent } from './CoreModule/product/product.component';
import { ContactComponent } from './CoreModule/contact/contact.component';
import { CartComponent } from './CoreModule/cart/cart.component';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LayoutComponent,
    HomeComponent,
    ProductComponent,
    ContactComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RecaptchaModule,  //this is the recaptcha main module
    RecaptchaFormsModule, //this is the module for form incase form validation
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
