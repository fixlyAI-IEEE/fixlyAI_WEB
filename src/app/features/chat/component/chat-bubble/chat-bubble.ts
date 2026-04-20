import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatMessage, SuggestedButton } from '../../models/chat.models';

@Component({
  selector: 'app-chat-bubble',
  imports: [CommonModule],
  templateUrl: './chat-bubble.html',
  styleUrl: './chat-bubble.css',
})
export class ChatBubble {
 @Input()  message!: ChatMessage;
  @Output() buttonClicked = new EventEmitter<SuggestedButton>();
}
