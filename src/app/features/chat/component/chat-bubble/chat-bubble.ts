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
  @Input() message!: ChatMessage;
  @Output() buttonClicked = new EventEmitter<SuggestedButton>();
  getButtonLabel(action: string, label: string): string {
    const map: Record<string, string> = {
      'show_workers': 'عرض الفنيين المتاحين',
      'send_request': 'إرسال طلب',
      'new_question': 'سؤال جديد',
    };
    return map[action] ?? label;
  }
}
