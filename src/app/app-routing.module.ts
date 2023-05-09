import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardNameGuard } from './guard-name.guard';
import { HeaderComponent } from './website/header/header.component';
import { HomeComponent } from './website/home/home.component';
import { LoginComponent } from './website/login/login.component';
import { OfferComponent } from './website/offer/offer.component';
import { Offer1Component } from './website/offer1/offer1.component';
import { RegisterComponent } from './website/register/register.component';
import { SidenavbarComponent } from './website/sidenavbar/sidenavbar.component';

const routes: Routes = [
  {path:'',component:HeaderComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'offer',component:OfferComponent},
  {path:'offer1',component:Offer1Component},
  {path:'home', canActivate:[GuardNameGuard],component:HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
