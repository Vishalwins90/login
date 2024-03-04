import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LoginPageService } from 'src/app/core/login-page.service';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {
constructor(  public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,public alldata: LoginPageService){

}
reset(){
debugger
  this.dialogRef.close(true);

}
notReset(){
  debugger
  this.dialogRef.close(false);
}
}