import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { CreatePostUserComponent } from './pages/create-post-user/create-post-user.component';
import { GetPostUserComponent } from './pages/get-post-user/get-post-user.component';
import { GetPostUserImagesComponent } from './pages/get-post-user-images/get-post-user-images.component';
import { GetPostUserVideosComponent } from './pages/get-post-user-videos/get-post-user-videos.component';
import { CompletedProfileComponent } from './pages/completed-profile/completed-profile.component';
import { PicturesComponent } from './pages/pictures/pictures.component';
import { VideosComponent } from './pages/videos/videos.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { SobreMeComponent } from './pages/sobre-me/sobre-me.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';


@NgModule({
  declarations: [
    UserComponent,
    ProfileComponent,
    AboutMeComponent,
    CreatePostUserComponent,
    GetPostUserComponent,
    GetPostUserImagesComponent,
    GetPostUserVideosComponent,
    CompletedProfileComponent,
    PicturesComponent,
    VideosComponent,
    FriendsComponent,
    SobreMeComponent,
    UserProfileComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
  ]
})
export class UserModule { }
