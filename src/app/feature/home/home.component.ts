import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginPageService } from 'src/app/core/login-page.service';
import { LoginService } from 'src/app/core/login.service';
import { EditdetailsComponent } from '../editdetails/editdetails.component';
import { MatTableDataSource } from '@angular/material/table';
import { ResetPasswordComponent } from 'src/app/auth/reset-password/reset-password.component';
import { UserResetPasswordComponent } from 'src/app/auth/user-reset-password/user-reset-password.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  id: any
  inlineForm: any
  displayedColumns: string[] = ['fullname', 'username', 'password', 'action',]
  allData: any;
  updatdataoneData: any = [] = []
  editingIndex:number = -1; 
  editedData: any = {};
  userName:any=[]
  constructor(public getdata: LoginPageService, public router: Router, public dialog: MatDialog,public message:LoginService,public activateroute:ActivatedRoute) { }
  ngOnInit() {
    this.loadData();
  }

  loadData() {
    let user=sessionStorage.getItem('username')
this.userName.push(user)
console.log(this.userName)
    this.getdata.get().subscribe(
      (data: any) => {
        this.allData = new MatTableDataSource(data);
       console.log('this.alldata', this.allData)
      },
    );
  }

  delete(index: number) {
    debugger
    const dataToDelete = this.allData.data[index];
    this.getdata.delete(dataToDelete.id).subscribe(
      () => {
        this.allData.data.splice(index, 1);
        this.allData = new MatTableDataSource(...this.allData.data)
      },
    );
this.message.showSuccess('User deleted Successfull')
  }
  logOut() {
    sessionStorage.removeItem('token');
    this.router.navigateByUrl('/login')
  }

  edit(index:any) {
    debugger
    if (this.editingIndex === index) {
       this.editingIndex = -1; 
       console.log(this.editingIndex-1,"dfddf")
    } else {
      this.editingIndex = index; 
      this.editedData = { ...this.allData.data[index] };
    }
  }

addnewUser(){
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
  this.allData.data[index] = { ...this.editedData };
  this.getdata.patchdata(this.allData.data[index].id, this.editedData).subscribe(
    (data: any) => {
       this.allData = new MatTableDataSource(this.allData.data)
      console.log('Data updated successfully:', data);    
      this.message.showSuccess('User data updated successfully');
    },
  );
 this.editingIndex = -1;
}

cancel(index:any){
  debugger
  this.allData.data[index] = { ...this.editedData };
  this.editingIndex = -1;
  
}

resetPassword(){
  let dialogRef = this.dialog.open(UserResetPasswordComponent, {
    width: '408px',
    height: '435px',
    panelClass:'icon-outside',

  });
  dialogRef.afterClosed().subscribe((result: any) => {
    if (result) {
      this.loadData();
    }
  });
}
  dragDrop(){
    this.router.navigateByUrl('/drop')
  }

}

