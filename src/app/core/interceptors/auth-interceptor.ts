import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Auth } from '../../features/Auth/services/auth';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(Auth);
  const router = inject(Router);

  const token = auth.getToken();

  let newReq = req;

  if (token) {
    newReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(newReq).pipe(
    catchError((err) => {

      if (err.status === 401) {
        auth.logout();
        router.navigate(['/auth/login']);
      }

      return throwError(() => err);
    })
  );
};