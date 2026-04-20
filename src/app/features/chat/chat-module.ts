import { input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatInput } from './component/chat-input/chat-input';
import { ChatBubble } from './component/chat-bubble/chat-bubble';
import { ChatPage } from './pages/chat-page/chat-page';
import { ChatRoutingModule } from './chat-routing.module';


@NgModule({
  declarations: [
  ],
  imports: [
  FormsModule,
    CommonModule,
    ChatRoutingModule,
    ChatInput,
    ChatBubble
  ]
})
export class ChatModule { }
