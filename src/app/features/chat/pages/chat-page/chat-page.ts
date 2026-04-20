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
  switch (btn.action) {

    case 'quick_message':
      // Send the predefined message directly
      this.onSend(btn.message ?? btn.label);
      break;

    case 'new_question':
      // Just focus the input, let user type
      break;

    case 'show_workers':
      // Fetch workers and show them as a bot message
      if (btn.job_type_id) {
        this.isTyping = true;
        this.Chat.getWorkersByJobType(btn.job_type_id).subscribe({
          next: (res) => {
            this.isTyping = false;
            const workerList = res.data.length
              ? res.data.map(w =>
                  `• ${w.name} — تقييم: ${w.rating ?? 'غير متاح'} — ${w.city ?? ''}`
                ).join('\n')
              : 'لا يوجد عمال متاحين الآن.';

            this.messages.push({
              sender   : 'bot',
              text     : `العمال المتاحين:\n${workerList}`,
              timestamp: new Date()
            });
            this.scrollToBottom();
          },
          error: () => {
            this.isTyping = false;
            this.messages.push({
              sender   : 'bot',
              text     : 'تعذر تحميل العمال، حاول مرة تانية.',
              timestamp: new Date()
            });
            this.scrollToBottom();
          }
        });
      }
      break;

    case 'send_request':
      // Navigate to the create request page with job_type_id
      // this.router.navigate(['/requests/new'], { queryParams: { job_type_id: btn.job_type_id } });
      break;
  }
}
  private scrollToBottom(): void {
    setTimeout(() => {
      this.messagesEnd?.nativeElement?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }
}
