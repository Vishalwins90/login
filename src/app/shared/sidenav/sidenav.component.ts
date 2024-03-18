import { publishFacade } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPageService } from 'src/app/core/login-page.service';
import { LoginService } from 'src/app/core/login.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  isAdminOrSuperAdmin: boolean = false;
logindatabyid:any=[]
constructor(public router:Router,public logindata:LoginPageService){

}
ngOnInit(){
this.checkUserRole()
}
naviagte(){
  debugger
  this.router.navigate(['/home']);
}
codenavigate(){
  debugger
  this.router.navigate(['/editor']);
}

// rolebasedataShow(){
// let id:any=sessionStorage.getItem('token')
// this.logindata.getEmployeeById(id).subscribe((data:any)=>
// this.logindatabyid.push(data.Role)
// )
// if(this.logindatabyid==='user'){
//   this.role=false
// }
// else {
//   this.role=true
// }




// }
checkUserRole() {
  let id:any = sessionStorage.getItem('token');
  this.logindata.getEmployeeById(id).subscribe((data: any) => {
    const userRole = data.Role;
    if (userRole === 'admin' || userRole === 'Superadmin') {
      this.isAdminOrSuperAdmin = true;
    }
  });
}
}
