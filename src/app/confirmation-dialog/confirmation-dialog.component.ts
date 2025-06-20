import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [],
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss'
})
export class ConfirmationDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:string,
    private dialogRef: MatDialogRef<ConfirmationDialogComponent>
  ){}

  onYes(){
    this.dialogRef.close(true)
  }

  onNo(){
    this.dialogRef.close(false)
  }
}
