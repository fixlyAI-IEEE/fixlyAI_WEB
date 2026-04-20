import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule, DatePipe }                          from '@angular/common';
import { DomSanitizer, SafeHtml }                         from '@angular/platform-browser';
import { ChatMessage, SuggestedButton }                   from '../../models/chat.models';

@Component({
  selector   : 'app-chat-bubble',
  standalone : true,
  imports    : [CommonModule, DatePipe],
  templateUrl: './chat-bubble.html',
  styleUrl   : './chat-bubble.css',
})
export class ChatBubble implements OnInit {
  @Input()  message!: ChatMessage;
  @Output() buttonClicked = new EventEmitter<SuggestedButton>();

  formattedText: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.formattedText = this.sanitizer.bypassSecurityTrustHtml(
      this.parseMarkdown(this.message.text)
    );
  }

  private parseMarkdown(text: string): string {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g,     '<em>$1</em>')
      .replace(/\n/g,             '<br/>')
      .replace(/^\d+\.\s+(.+)/gm,'<li>$1</li>')
      .replace(/(<li>.*<\/li>)/s, '<ol>$1</ol>');
  }
}