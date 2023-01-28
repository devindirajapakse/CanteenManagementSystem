import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { LogoutComponent } from './logout/logout.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AddItemComponent } from './admin/add-item/add-item.component';
import { ViewCustomersComponent } from './admin/view-customers/view-customers.component';
import { ViewOrderhistoryComponent } from './admin/view-orderhistory/view-orderhistory.component';
import { ViewFeedbacksComponent } from './admin/view-feedbacks/view-feedbacks.component';
import { EditItemComponent } from './admin/edit-item/edit-item.component';
import { AddFoodqtyComponent } from './admin/add-foodqty/add-foodqty.component';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { CustomerNavbarComponent } from './customer-navbar/customer-navbar.component';
import {MatTableModule} from '@angular/material/table';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddcartComponent } from './addcart/addcart.component';
import { HttpClientModule} from '@angular/common/http';
import { AdminloginComponent } from './adminlogin/adminlogin.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    OrdersComponent,
    LogoutComponent,
    FeedbackComponent,
    UserNavbarComponent,
    AdminNavbarComponent,
    AdminHomeComponent,
    AddItemComponent,
    ViewCustomersComponent,
    ViewOrderhistoryComponent,
    ViewFeedbacksComponent,
    EditItemComponent,
    AddFoodqtyComponent,
    SignupComponent,
    CustomerNavbarComponent,
    CustomerHomeComponent,
    DashboardComponent,
    AddcartComponent,
    AdminloginComponent,
   
   
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatTableModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
