import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SignUpComponent } from 'src/app/auth/sign-up/sign-up.component';
import { LoginPageService } from 'src/app/core/login-page.service';
import { EditdetailsComponent } from '../editdetails/editdetails.component';
import { LoginService } from 'src/app/core/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  id: any
  displayedColumns: string[] = ['position', 'name', 'weight', 'actionsColumn', 'edit'];
  alldata: any[] = [];
  dataSource = this.alldata;
  updatdataoneData: any = [] = []
  constructor(public getdata: LoginPageService, public router: Router, public dialog: MatDialog,public message:LoginService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.getdata.get().subscribe(
      (data: any) => {
        this.alldata = data;
        // this.dataSource = [...this.alldata];
        // console.log('this.alldata', this.alldata);d
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
this.message.showError('User deleted Successfull')
  }
  logout() {
    localStorage.removeItem('token')
    this.router.navigateByUrl('/login')
  }

  edit(index: any) {
    const updatdata = this.alldata[index];
    this.getdata.getEmployeeById(updatdata.id).subscribe(
      () => {
        this.updatdataoneData = updatdata
        console.log(this.updatdataoneData.fullname)
      },
    );
    let dialogRef = this.dialog.open(EditdetailsComponent, {
      height: '600px',
      width: '400px',
      data: {
        alluserdata: updatdata
      },
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.loadData();
      }
      this.message.showSuccess("your Data is updated Successful")
    });

  }

}
