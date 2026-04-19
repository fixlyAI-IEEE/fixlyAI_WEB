import { Injectable } from '@angular/core';
import { loginrequest, loginresponse, registerRequest, registerResponse, register_as_workerRequest, RegisterAsWorkerResponse } from '../../../core/models/model';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { apiEndpoints } from '../../../core/api-endpoints';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';


@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }


  login(data: loginrequest): Observable<loginresponse> {
    return this.http.post<loginresponse>(
      apiEndpoints.login,
      data
    ).pipe(
      tap((res: loginresponse) => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
      })
    );
  }

  registerUser(data: registerRequest): Observable<registerResponse> {
    return this.http.post<registerResponse>(apiEndpoints.register_as_user, data);
  }

  registerWorker(data: register_as_workerRequest): Observable<RegisterAsWorkerResponse> {
    return this.http.post<RegisterAsWorkerResponse>(apiEndpoints.register_as_worker, data);
  }



  logout() {
    localStorage.clear();
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return !!token;
  }
}


