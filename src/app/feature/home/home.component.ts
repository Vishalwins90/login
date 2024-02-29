import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginPageService } from 'src/app/core/login-page.service';
import { LoginService } from 'src/app/core/login.service';
import { EditdetailsComponent } from '../editdetails/editdetails.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  id: any
  inlineForm: any
  displayedColumns: string[] = ['fullname', 'username', 'password', 'action',]
  alldata: any;
  // dataSource = this.alldata;
  updatdataoneData: any = [] = []
  // editingIndex: number = -1; 
  editingIndex: any; 
  editedData: any = {};
  constructor(public getdata: LoginPageService, public router: Router, public dialog: MatDialog,public message:LoginService) { }
  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.getdata.get().subscribe(
      (data: any) => {
        this.alldata = new MatTableDataSource(data);
        //  this.dataSource = [...this.alldata];
       console.log('this.alldata', this.alldata)
      },
    );

  }

  delete(index: number) {
    const dataToDelete = this.alldata.data[index];
    this.getdata.delete(dataToDelete.id).subscribe(
      () => {
        this.alldata.data.splice(index, 1);
        // this.dataSource = this.alldata;
       this.alldata = [...this.alldata.data]
        this.alldata =   new MatTableDataSource(...this.alldata.data)
        console.log(dataToDelete.id);
      },
    );
this.message.showSuccess('User deleted Successfull')
  }
  logout() {
    sessionStorage.removeItem('token')
    this.router.navigateByUrl('/login')
  }

  edit(index:any) {
    debugger
    if (this.editingIndex === index) {
      // this.editingIndex = -1; 
    } else {
      this.editingIndex = index; 
      this.editedData = { ...this.alldata.data[index] };
    }
  }

addnewuser(){
  let dialogRef = this.dialog.open(EditdetailsComponent, {
    width: '408px',
    height: '435px',
    panelClass:'icon-outside',

  });
  dialogRef.afterClosed().subscribe((result: any) => {
    if (result) {
      this.loadData();
      this.message.showSuccess("New user Add Successfull")
    }

  });
}

saveEdit(index: number) {
debugger
  this.alldata.data[index] = { ...this.editedData };
  this.getdata.patchdata(this.alldata.data[index].id, this.editedData).subscribe(
    (data: any) => {
      this.alldata =   new MatTableDataSource(this.alldata.data)
      console.log('Data updated successfully:', data);    
      this.message.showSuccess('User data updated successfully');
    },
  );
 this.editingIndex = -1;
}

cancel(index:any){
  this.alldata.data[index] = { ...this.editedData };
  this.editingIndex = -1;
}
}