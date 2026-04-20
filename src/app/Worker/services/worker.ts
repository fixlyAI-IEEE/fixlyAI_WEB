import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiEndpoints } from '../../core/api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class Worker {
  constructor(private http: HttpClient) { }

  getRequests() {
    return this.http.get(`${apiEndpoints.worker_requests}`);
  }

  sendOffer(id: number) {
    return this.http.patch(
      apiEndpoints.worker_offer.replace('{request_id}', id.toString()),
      {}
    );
  }
}
