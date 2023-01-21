import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AddItemComponent } from './admin/add-item/add-item.component';
import { ViewCustomersComponent } from './admin/view-customers/view-customers.component';
import { ViewOrderhistoryComponent } from './admin/view-orderhistory/view-orderhistory.component';
import { ViewFeedbacksComponent } from './admin/view-feedbacks/view-feedbacks.component';
import { EditItemComponent } from './admin/edit-item/edit-item.component';
import { AddFoodqtyComponent } from './admin/add-foodqty/add-foodqty.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'logout', component:LogoutComponent},
  {path:'feedback', component:FeedbackComponent},
  {path:'orders', component:OrdersComponent},
  {path:'profile', component:ProfileComponent},
  {path:'signup', component:SignupComponent},
  {path:'customerhome', component:CustomerHomeComponent},
  {path:'admin/home',component:AdminHomeComponent},
  {path:'admin/additem', component:AddItemComponent},
  {path:'admin/viewcustomer', component:ViewCustomersComponent},
  {path:'admin/orderhistory', component:ViewOrderhistoryComponent},
  {path:'admin/viewfeedbacks', component:ViewFeedbacksComponent},
  {path:'admin/edititem', component:EditItemComponent},
  {path:'admin/addfoodqty', component:AddFoodqtyComponent},
  {path:'dashboard', component:DashboardComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
