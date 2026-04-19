import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ContactRequest, ContactResponse, OffersResponse, RequestServiceRequest, RequestServiceResponse } from '../models/model';
import { Observable } from 'rxjs';
import { apiEndpoints } from '../api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class User {
    private http = inject(HttpClient)
    sendMessage(data: ContactRequest): Observable<ContactResponse> {
    return this.http.post<ContactResponse>(`${apiEndpoints.messagesContact}`, data);
  }

  createRequest(data: RequestServiceRequest): Observable<RequestServiceResponse> {
  return this.http.post<RequestServiceResponse>(`${apiEndpoints.createRequest}`, data);

}
getOffers(requestId: number): Observable<OffersResponse> {
  return this.http.get<OffersResponse>(`${apiEndpoints.getOffers(requestId)}`);
}

// rateWorker(requestId: number, data: RatingRequest): Observable<RatingResponse> {
//   return this.http.post<RatingResponse>(apiEndpoints.rateWorker(requestId), data);
// }
}
