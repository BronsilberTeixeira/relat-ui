import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
//snackbar para uso global
export class SnackbarService {
  constructor(private snackbar: MatSnackBar) {}

  openError(message: string): void {
    this.snackbar.open(message, 'X', { duration: 4000 });
  }

  openSuccess(message: string): void {
    this.snackbar.open(message, 'X', { duration: 4000 });
  }

  openDefault(message: string): void {
    this.snackbar.open(message, 'X', { duration: 4000 });
  }
}
