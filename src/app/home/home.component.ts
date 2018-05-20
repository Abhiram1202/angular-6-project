import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {LoginComponent} from "../login/login.component"
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username:string;
  password:string;

  constructor(private router:Router, private dialog:MatDialog) { }

  ngOnInit() {
    this.openDialog();
  }

   openDialog(): void {
    let dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',
      data: { username: this.username, password: this.password }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }


}
