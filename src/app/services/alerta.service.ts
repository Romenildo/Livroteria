import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  constructor(private snackBar: MatSnackBar) { }

  mostrarAlerta(mensagem: string, isError: boolean = false): void {
    this.snackBar.open(mensagem, "X", {
      duration: 2000,
      panelClass: isError ? ["msg-error"] : ["msg-successo"],
    });
  }
}