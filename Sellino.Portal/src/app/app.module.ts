import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
import { UiKitComponent } from './pages/ui-kit/ui-kit.component';
import { AddProductComponent } from './pages/main/product/add-product/add-product.component';
import { ButtonSelectorComponent } from './components/ui-kit/button-selector/button-selector.component';
import { CategoriesComponent } from './pages/main/categories/categories.component';
import { LoadingIndicatorComponent } from './components/ui-kit/loading-indicator/loading-indicator.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { CheckboxComponent } from './components/ui-kit/checkbox/checkbox.component';
import { MarginComponent } from './components/ui-kit/margin/margin.component';

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
    DropdownComponent,
    UiKitComponent,
    AddProductComponent,
    ButtonSelectorComponent,
    CategoriesComponent,
    LoadingIndicatorComponent,
    RegisterComponent,
    CheckboxComponent,
    MarginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
