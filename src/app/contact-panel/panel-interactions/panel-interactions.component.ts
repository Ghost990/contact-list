import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewContactComponent} from '../new-contact/new-contact.component';


@Component({
  selector: 'app-panel-interactions',
  templateUrl: './panel-interactions.component.html',
  styleUrls: ['./panel-interactions.component.scss']
})
export class PanelInteractionsComponent implements OnInit {
  dialogResult = "";


  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(NewContactComponent, {
      width: '600px',
      data: 'This texts is passedinto the dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    });
  }


}
