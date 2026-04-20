import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChatRequest, ChatResponse } from '../models/chat.models';
import { Observable } from 'rxjs';
import { apiEndpoints } from '../../../core/api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class Chat {
  constructor(private http: HttpClient) {}

  sendMessage(body: ChatRequest): Observable<ChatResponse> {
    return this.http.post<ChatResponse>(apiEndpoints.chat, body);
  }
}
