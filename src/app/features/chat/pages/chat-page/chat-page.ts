import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatMessage, SuggestedButton } from '../../models/chat.models';
import { Chat } from '../../services/chat';
import { ChatInput } from "../../component/chat-input/chat-input";
import { ChatBubble } from "../../component/chat-bubble/chat-bubble";

@Component({
  selector: 'app-chat-page',
  imports: [CommonModule, ChatInput, ChatBubble],
  templateUrl: './chat-page.html',
  styleUrl: './chat-page.css',
})
export class ChatPage {
 @ViewChild('messagesEnd') messagesEnd!: ElementRef;

  messages: ChatMessage[] = [
    {
      sender: 'bot',
      text: 'أهلاً! أنا مساعد Fixly الذكي 👋 أصف مشكلتك، وأنا هساعدك توصل للحل بسرعة',
      suggested_buttons: [
        { label: 'تسريب مياه',     action: 'new_question' },
        { label: 'كهرباء معطلة',   action: 'new_question' },
        { label: 'تكييف لا يبرد',  action: 'new_question' },
        { label: 'صيانة عامة',     action: 'new_question' },
      ],
      timestamp: new Date()
    }
  ];

  isTyping = false;

  constructor(private Chat: Chat) {}

  onSend(text: string): void {
    if (!text.trim()) return;

    this.messages.push({ sender: 'user', text, timestamp: new Date() });
    this.scrollToBottom();

    this.isTyping = true;

    this.Chat.sendMessage({ message: text }).subscribe({
      next: (res) => {
        this.isTyping = false;
        this.messages.push({
          sender: 'bot',
          text: res.message,
          suggested_buttons: res.suggested_buttons ?? [],
          timestamp: new Date()
        });
        this.scrollToBottom();
      },
      error: () => {
        this.isTyping = false;
        this.messages.push({
          sender: 'bot',
          text: 'حدث خطأ، حاول مرة تانية',
          timestamp: new Date()
        });
        this.scrollToBottom();
      }
    });
  }

  onButtonClick(btn: SuggestedButton): void {
    this.onSend(btn.label);
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      this.messagesEnd?.nativeElement?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }
}
