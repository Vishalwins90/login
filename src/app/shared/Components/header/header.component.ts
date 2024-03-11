import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { UserResetPasswordComponent } from 'src/app/auth/user-reset-password/user-reset-password.component';
import { LoginPageService } from 'src/app/core/login-page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
allData:any=[]

constructor(public router:Router,public userdata:LoginPageService,public dialog: MatDialog){

}
ngOnInit(){
this.loadData
let token = sessionStorage.getItem('token');
this.userdata.getdatabyId(token).subscribe((data:any)=>
this.allData=data
)
console.log(this.allData)
}

logOut(){
debugger
    sessionStorage.removeItem('token');
    this.router.navigateByUrl('/login')
  
}
loadData(){
  let token = sessionStorage.getItem('token');
this.userdata.getdatabyId(token).subscribe((data:any)=>
this.allData=data
// console.log()

)
}
resetPassword() {
  debugger
  let dialogRef = this.dialog.open(UserResetPasswordComponent, {
    width: '408px',
    height: '435px',
    panelClass: 'icon-outside',

  });
  dialogRef.afterClosed().subscribe((result: any) => {
    if (result) {
      this.loadData();
    }
  });

}


}
