import { reqHandler } from './../../../../server';
import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  let token: string | null = null;

  if (typeof window !== 'undefined' && localStorage) {
    token = localStorage.getItem('token');
  }

  if (token) {
    const clonedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(clonedReq);
  }
  return next(req);
}


