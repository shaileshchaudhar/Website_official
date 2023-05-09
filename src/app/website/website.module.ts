import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { DialogAnimationsExampleDialog, RegisterComponent } from './register/register.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { HeaderComponent } from './header/header.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { OfferComponent } from './offer/offer.component';
import { FootComponent } from './foot/foot.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { Offer1Component } from './offer1/offer1.component';






@NgModule({
  declarations: [
    NavbarComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SidenavbarComponent,
    HeaderComponent,
    OfferComponent,
    FootComponent,
    DialogAnimationsExampleDialog,
    Offer1Component,
  
    
  
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatButtonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatMenuModule,
    MatListModule,
    ScrollingModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
  ],
  exports:[NavbarComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SidenavbarComponent,HeaderComponent,OfferComponent,FootComponent,DialogAnimationsExampleDialog,Offer1Component]
})
export class WebsiteModule {}
    


   
  
  
