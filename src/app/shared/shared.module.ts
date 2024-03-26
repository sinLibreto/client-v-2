import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { DropdownNoticationsComponent } from './dropdown-notications/dropdown-notications.component';
import { DropdownMessagesComponent } from './dropdown-messages/dropdown-messages.component';
import { DropdownChatLiveComponent } from './dropdown-chat-live/dropdown-chat-live.component';
import { DropdownPostNewPopupComponent } from './dropdown-post-new-popup/dropdown-post-new-popup.component';
import { SideSlideComponent } from './side-slide/side-slide.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateNewPostComponent } from './create-new-post/create-new-post.component';
import { RecientStoriesComponent } from './recient-stories/recient-stories.component';
import { ChatRoomsComponent } from './chat-rooms/chat-rooms.component';
import { SuggestedListComponent } from './suggested-list/suggested-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListFriendComponent } from './post-list-friend/post-list-friend.component';
import { PostListWithImagesComponent } from './post-list-with-images/post-list-with-images.component';
import { PostListWithVideosComponent } from './post-list-with-videos/post-list-with-videos.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DropdownNoticationsComponent,
    DropdownMessagesComponent,
    DropdownChatLiveComponent,
    DropdownPostNewPopupComponent,
    SideSlideComponent,
    SendMessageComponent,
    CreateNewPostComponent,
    RecientStoriesComponent,
    ChatRoomsComponent,
    SuggestedListComponent,
    PostListComponent,
    PostListFriendComponent,
    PostListWithImagesComponent,
    PostListWithVideosComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DropdownNoticationsComponent,
    DropdownMessagesComponent,
    DropdownChatLiveComponent,
    DropdownPostNewPopupComponent,
    SideSlideComponent,
    SendMessageComponent,
    CreateNewPostComponent,
    RecientStoriesComponent,
    ChatRoomsComponent,
    SuggestedListComponent,
    PostListComponent,
    PostListFriendComponent,
    PostListWithImagesComponent,
    PostListWithVideosComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
