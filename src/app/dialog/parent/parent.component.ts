import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-custom-dialog',
  standalone: true,
   imports: [CommonModule ,MatButtonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  userResponse: string | null = null;
    constructor(
    private dialog: MatDialog
  ){}

  openDialog(){
    const dialogRef = this.dialog.open(
      ConfirmationDialogComponent,
      {
        data: 'Do you want to delete this item'
      }
    )

    dialogRef.afterClosed().subscribe(
      (result)=>{
              if (result === true) {
        this.userResponse = 'You chose YES.';
      } else if (result === false) {
        this.userResponse = 'You chose NO.';
      } else {
        this.userResponse = 'Dialog closed without a response.';
      }
      }
    )
  }

}




