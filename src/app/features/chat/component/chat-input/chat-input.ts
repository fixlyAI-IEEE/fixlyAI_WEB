import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule }                                              from '@angular/forms';

@Component({
  selector   : 'app-chat-input',
  standalone : true,
  imports    : [FormsModule],
  templateUrl: './chat-input.html',
  styleUrl   : './chat-input.css',
})
export class ChatInput {
  @Output() messageSent = new EventEmitter<string>();
  @ViewChild('inputRef') inputRef!: ElementRef<HTMLTextAreaElement>;

  text = '';

  send(): void {
    const trimmed = this.text.trim();
    if (!trimmed) return;
    this.messageSent.emit(trimmed);
    this.text = '';
    setTimeout(() => this.resetHeight(), 0);
  }

  onEnter(event: KeyboardEvent): void {
    if (!event.shiftKey) {
      event.preventDefault();
      this.send();
    }
  }

  autoResize(): void {
    const el = this.inputRef?.nativeElement;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 120) + 'px';
  }

  private resetHeight(): void {
    const el = this.inputRef?.nativeElement;
    if (el) el.style.height = 'auto';
  }
}