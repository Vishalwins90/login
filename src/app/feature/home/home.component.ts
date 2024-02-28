import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SignUpComponent } from 'src/app/auth/sign-up/sign-up.component';
import { LoginPageService } from 'src/app/core/login-page.service';
import { EditdetailsComponent } from '../editdetails/editdetails.component';
import { LoginService } from 'src/app/core/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  id: any
  inlineForm: any
  displayedColumns: string[] = ['fullname', 'username', 'password', 'Action',]
  alldata: any[] = [];
  dataSource = this.alldata;
  updatdataoneData: any = [] = []
  editingIndex: number = -1; // Index of the row currently being edited
  editedData: any = {};
  constructor(public getdata: LoginPageService, public router: Router, public dialog: MatDialog,public message:LoginService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.getdata.get().subscribe(
      (data: any) => {
        this.alldata = data;
         this.dataSource = [...this.alldata];
       console.log('this.alldata', this.alldata)
      },
  
    );
  

  }

  delete(index: number) {
    const dataToDelete = this.alldata[index];
    this.getdata.delete(dataToDelete.id).subscribe(
      () => {
        this.alldata.splice(index, 1);
        this.dataSource = this.alldata;
        this.alldata = [...this.alldata]
        console.log(dataToDelete.id);
      },
    );
this.message.showSuccess('User deleted Successfull')
  }
  logout() {
    localStorage.removeItem('token')
    this.router.navigateByUrl('/login')
  }

  edit(index:any) {
 debugger
    if (this.editingIndex === index) {
      this.editingIndex = -1; 
    } else {
      this.editingIndex = index; 
      this.editedData = { ...this.alldata[index] };
    }
  }

addnewuser(){
  let dialogRef = this.dialog.open(EditdetailsComponent, {
    height: '600px',
    width: '400px',
    panelClass:'icon-outside',

  });
  dialogRef.afterClosed().subscribe((result: any) => {
    if (result) {
      this.loadData();
      this.message.showSuccess("your Data is updated Successful")
    }

  });
}


saveEdit(index: number) {
  this.alldata[index] = {...this.editedData};
  this.editingIndex = -1;
  this.getdata.patchdata(this.alldata[index].id, this.editedData).subscribe((data: any) => {
    console.log(data);

  });
}



}