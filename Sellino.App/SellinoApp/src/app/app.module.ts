import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileListItemComponent } from './components/profile/profile-list-item/profile-list-item.component';
import { MediaPipe } from './pipes/media.pipe';
import { ProfileComponent } from './pages/profile/profile.component';
import { StoryListComponent } from './components/story-list/story-list.component';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileListItemComponent,
    MediaPipe,
    ProfileComponent,
    StoryListComponent,
    ImageCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
