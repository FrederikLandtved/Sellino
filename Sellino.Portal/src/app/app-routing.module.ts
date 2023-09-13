import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { HomeComponent } from './pages/main/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { InsightsComponent } from './pages/main/insights/insights.component';
import { ProfileComponent } from './pages/main/profile/profile.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent, 
      children: [
        { path: '', component: HomeComponent },
        { path: 'insights', component: InsightsComponent },
        { path: 'profile', component: ProfileComponent }
      ]
  },
  { path: 'auth', component: AuthComponent, 
      children: [
        { path: '', component: LoginComponent },
      ]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
