import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
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
        console.log(result)
      }
    )
  }

}
