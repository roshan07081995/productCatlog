import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './CoreModule/home/home.component';
import { ProductComponent } from './CoreModule/product/product.component';
import { ContactComponent } from './CoreModule/contact/contact.component';
const routes: Routes = [
  {path:'', component:LoginComponent},
  { path:'register',component:RegisterComponent },
  { path:'login',component:LoginComponent },
  { path:'home',component:HomeComponent },
  { path:'product',component:ProductComponent },
  { path:'contact',component:ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
