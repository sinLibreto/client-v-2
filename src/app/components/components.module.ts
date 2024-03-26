import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNewPostComponent } from './create-new-post/create-new-post.component';
import { RecientStoriesComponent } from './recient-stories/recient-stories.component';
import { SuggestedListComponent } from './suggested-list/suggested-list.component';
import { GruposChatComponent } from './grupos-chat/grupos-chat.component';
import { PostWithAudioComponent } from './post-with-audio/post-with-audio.component';
import { PostListWithVideosComponent } from './post-list-with-videos/post-list-with-videos.component';
import { PostListWithImagesComponent } from './post-list-with-images/post-list-with-images.component';



@NgModule({
  declarations: [
    CreateNewPostComponent,
    RecientStoriesComponent,
    SuggestedListComponent,
    GruposChatComponent,
    PostWithAudioComponent,
    PostListWithVideosComponent,
    PostListWithImagesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CreateNewPostComponent,
    RecientStoriesComponent,
    SuggestedListComponent,
    GruposChatComponent,
    PostWithAudioComponent,
    PostListWithVideosComponent,
    PostListWithImagesComponent

  ]
})
export class ComponentsModule { }
