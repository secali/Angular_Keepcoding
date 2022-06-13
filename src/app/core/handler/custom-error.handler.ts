import { ErrorHandler } from '@angular/core';
import { ControlatedError } from '@core/models/controlated-error.model';

export class CustomErrorHandler implements ErrorHandler {
  /*
   *
  handleError(error: any): void {
    let notification: Notification;
    //Si el error es el que creamos sino será de JS
    if (error instanceof ControlatedError) {
      notification = new Notification({
        msg: error.message,
        title: error.title,
        output: error.output,
      });
    } else {
      error=error.rejection??error;
      notification = new Notification({
        msg: error.message, // TODO poner un mensaje genérico y mandar a un log de errores.
        title: "Error inesperado",
        output: "modal",
      });
    }
    notification.type = "error";
    this.zone.run(() => this.notificationService.show(notification));
  }
   *
   */
  handleError(error: ControlatedError): void {
    // TODO servicio de notificaciones/modales/alerts...

    console.log(error.title, error.message, error.output);
  }
}
