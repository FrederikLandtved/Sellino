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
import { TabRoundedComponent } from './components/ui-kit/tab-rounded/tab-rounded.component';
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
import { ColorPickerModule } from 'ngx-color-picker';
import { ColorPickerComponent } from './components/ui-kit/color-picker/color-picker.component';
import { ProfilePreviewComponent } from './components/profile/profile-preview/profile-preview.component';
import { MediaPickerComponent } from './components/ui-kit/media-picker/media-picker.component';
import { ButtonRoundComponent } from './components/ui-kit/button-round/button-round.component';
import { PagesComponent } from './pages/main/profile/pages/pages.component';
import { ProductGroupHorizontalComponent } from './components/ui-kit/product/product-group-horizontal/product-group-horizontal.component';
import { MediaPipe } from './pipes/media.pipe';
import { ProductGroupListComponent } from './components/product/product-group-list/product-group-list.component';
import { ProductGroupGridComponent } from './components/ui-kit/product/product-group-grid/product-group-grid.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { CreateProfilePageComponent } from './components/modal-templates/profile-page/create-profile-page/create-profile-page.component';
import { CreateProfilePageSectionComponent } from './components/modal-templates/profile-page-section/create-profile-page-section/create-profile-page-section.component';
import { DeleteProfilePageComponent } from './components/modal-templates/profile-page/delete-profile-page/delete-profile-page.component';
import { EditProfilePageComponent } from './components/modal-templates/profile-page/edit-profile-page/edit-profile-page.component';
import { OrdersComponent } from './pages/main/orders/orders.component';
import { QuillConfigModule, QuillModule } from 'ngx-quill'

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
    MarginComponent,
    ColorPickerComponent,
    ProfilePreviewComponent,
    MediaPickerComponent,
    ButtonRoundComponent,
    PagesComponent,
    ProductGroupHorizontalComponent,
    MediaPipe,
    ProductGroupListComponent,
    ProductGroupGridComponent,
    CreateProfilePageComponent,
    CreateProfilePageSectionComponent,
    DeleteProfilePageComponent,
    EditProfilePageComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ColorPickerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      timeOut: 2000
    }),
    MatDialogModule,
    QuillModule.forRoot(),
    QuillConfigModule.forRoot({
      modules: {
        syntax: false,
        toolbar: [
          ['bold', 'italic', 'underline'],
          // ['blockquote', 'code-block'],
      
          [{ 'header': 1 }, { 'header': 2 }],
          [{ 'align': [] }],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          [{ 'indent': '-1'}, { 'indent': '+1' }],
          // [{ 'direction': 'rtl' }],
      
          [{ 'size': [false, 'large', 'huge'] }],
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      
          // [{ 'color': [] }, { 'background': [] }],
          // [{ 'font': [] }],
      
          // ['clean'],
      
          // ['link', 'image', 'video']     
        ]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
