import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductDetailsComponent } from './pages/product/product.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

const routes: Routes = 
[
  { path: '', component: HomeComponent },
  { path: 'profile/:token', component: ProfileComponent },
  { path: 'product/:productToken', component: ProductDetailsComponent },
  { path: 'checkout/:productToken/:amount', component: CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
