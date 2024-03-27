import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GruposChatComponent } from './grupos-chat/grupos-chat.component';
import { PostWithAudioComponent } from './post-with-audio/post-with-audio.component';



@NgModule({
  declarations: [

    GruposChatComponent,
    PostWithAudioComponent,

  ],
  imports: [
    CommonModule
  ],
  exports:[

    GruposChatComponent,
    PostWithAudioComponent,


  ]
})
export class ComponentsModule { }
