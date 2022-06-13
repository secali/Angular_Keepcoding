import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ControlatedError } from '@core/models/controlated-error.model';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const controlatedError = new ControlatedError();

        switch (error.status) {
          case 401:
            controlatedError.message = 'No autenticado';
            controlatedError.title = 'Unauthorized';
            break;
          case 403:
            controlatedError.message = 'No autorizado';
            controlatedError.title = 'Forbbiden';
            break;
          default:
            controlatedError.title = 'Error inesperado';
            break;
        }

        return throwError(() => controlatedError);
      })
    );
  }
}
