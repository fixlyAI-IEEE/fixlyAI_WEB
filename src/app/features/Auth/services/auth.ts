import { Injectable } from '@angular/core';
import { loginrequest, loginresponse, registerRequest, registerResponse, register_as_workerRequest, RegisterAsWorkerResponse, SendOtpRequest, VerifyOtpRequest, ResetPasswordRequest,ResetPasswordResponse, VerifyOtpResponse, SendOtpResponse, VerifyAccRequest, VerifyAccResponse } from '../../../core/models/model';
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
       sessionStorage.setItem('token', res.data.token);
        sessionStorage.setItem('user', JSON.stringify(res.data.user));
      })
    );
  }

  registerUser(data: registerRequest): Observable<registerResponse> {
    return this.http.post<registerResponse>(apiEndpoints.register_as_user, data);
  }

  registerWorker(data: register_as_workerRequest): Observable<RegisterAsWorkerResponse> {
    return this.http.post<RegisterAsWorkerResponse>(apiEndpoints.register_as_worker, data);
  }

  verifyAcc(body: VerifyAccRequest): Observable<VerifyAccResponse> {
    return this.http.post<VerifyAccResponse>(apiEndpoints.verify_acc, body);
  }

   sendOtp(body: SendOtpRequest): Observable<SendOtpResponse> {
    return this.http.post<SendOtpResponse>(apiEndpoints.send_otp, body);
  }

  verifyOtp(body: VerifyOtpRequest): Observable<VerifyOtpResponse> {
    return this.http.post<VerifyOtpResponse>(apiEndpoints.verify_otp, body);
  }

  resetPassword(body: ResetPasswordRequest): Observable<ResetPasswordResponse> {
    return this.http.post<ResetPasswordResponse>(apiEndpoints.reset_password, body);
  }


logout() {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
  this.router.navigate(['/landing']);
}

  getToken() {
    return sessionStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return !!token;
  }
}


