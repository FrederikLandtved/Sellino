import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { HomeComponent } from './pages/main/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { InsightsComponent } from './pages/main/insights/insights.component';
import { ProfileComponent } from './pages/main/profile/profile.component';
import { UiKitComponent } from './pages/ui-kit/ui-kit.component';
import { AddProductComponent } from './pages/main/product/add-product/add-product.component';
import { CategoriesComponent } from './pages/main/categories/categories.component';
import { AuthGuard } from './services/auth/auth.guard';
import { JwtModule } from '@auth0/angular-jwt';
export function tokenGetter() {
  return localStorage.getItem("jwt");
}

const appRoutes: Routes = [
  { path: '', component: MainComponent, 
      children: [
        { path: '', component: HomeComponent, canActivate: [AuthGuard] },
        { path: 'insights', component: InsightsComponent },
        { path: 'profile', component: ProfileComponent },
        { path: 'add-product', component: AddProductComponent },
        { path: 'categories', component: CategoriesComponent },
      ]
  },
  { path: 'auth', component: AuthComponent, 
      children: [
        { path: '', component: LoginComponent },
      ]
  },
  { path: 'ui-kit', component: UiKitComponent
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:7240"],
        disallowedRoutes: []
      }
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
