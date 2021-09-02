import { SnackbarService } from './services/snackbar.service';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {
  constructor(private zone: NgZone,
    private snackbarService: SnackbarService) {
    super();
  }

  handleError(errorResponse: any) {
    super.handleError(errorResponse);

    if (errorResponse instanceof HttpErrorResponse) {
      const message = !!errorResponse.error ? errorResponse.error.message : null; //message pode variar de projeto para projeto
      const errorDescription = errorResponse.error ? errorResponse.error.error_description : null;
      this.zone.run(() => {
        switch (errorResponse.status) {
          case 400:
            this._handle400(errorDescription, message);
            break;
          case 401:
            this._handle401(errorDescription);
            break;
          case 403:
            this.snackbarService.openError(
              message || 'Você não possui permissão para executar esta ação'
            );
            break;
          case 404:
            this.snackbarService.openError(message || 'O recurso não foi encontrado');
            break;
          case 500:
            this._handle500(message || 'Ocorreu um erro!');
            break;
          default:
            this.snackbarService.openError(message || 'Ocorreu um erro!');
        }
      });
    }
  }

  private _handle500(message: string): void {
    this.snackbarService.openError(message);
  }

  private _handle400(errorDescription400: string, message: string): void {
    if (
      !!errorDescription400 &&
      errorDescription400.includes('Usu&aacute;rio inexistente ou senha inv&aacute;lida')
    ) {
      this.snackbarService.openError('Usuário e/ou senha inválida');
    } else {
      this.snackbarService.openError(message || 'Ocorreu um erro!');
    }
  }

  private _handle401(errorDescription401: string): void {
    if (!!errorDescription401 && errorDescription401.includes('Invalid refresh token (expired)')) {
      // this.tokenService.clearAccessToken();
      // this.navService.navigateTo(['login']);
    }
  }
}
