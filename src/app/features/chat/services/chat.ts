// services/chat.service.ts
import { Injectable }               from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { Observable }               from 'rxjs';
import { ChatRequest, ChatResponse } from '../models/chat.models';
import { environment } from '../../../../environments/environment';
@Injectable({ providedIn: 'root' })
export class Chat {
  private readonly endpoint = `${environment.baseUrl}/chat`;

  constructor(private http: HttpClient) {}

  sendMessage(body: ChatRequest): Observable<ChatResponse> {
    return this.http.post<ChatResponse>(this.endpoint, body, {
      headers: this.authHeaders()
    });
  }

  getWorkersByJobType(jobTypeId: number): Observable<{ data: any[] }> {
    return this.http.get<{ data: any[] }>(
      `${this.endpoint}/workers/${jobTypeId}`,
      { headers: this.authHeaders() }
    );
  }

  private authHeaders(): HttpHeaders {
    const token = localStorage.getItem('auth_token'); // adjust key to match your login flow
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }
}