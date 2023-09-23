import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { HomeComponent } from './pages/main/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { InsightsComponent } from './pages/main/insights/insights.component';
import { ProfileComponent } from './pages/main/profile/profile.component';
import { TabRoundedComponent } from './components/tab-rounded/tab-rounded.component';
import { CreateSectionButtonComponent } from './components/profile/create-section-button/create-section-button.component';
import { InputComponent } from './components/ui-kit/input/input.component';
import { ButtonComponent } from './components/ui-kit/button/button.component';
import { DropdownComponent } from './components/ui-kit/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    AuthComponent,
    LoginComponent,
    InsightsComponent,
    ProfileComponent,
    TabRoundedComponent,
    CreateSectionButtonComponent,
    InputComponent,
    ButtonComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
