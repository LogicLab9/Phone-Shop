import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Item} from "../../entities/Item";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, message: string,itmData:Item }
  ) {}

  onNoClick(): void {
    console.log(this.data.itmData)
    this.dialogRef.close(false);
  }

  onYesClick(): void {

    this.dialogRef.close(true);
  }
}
