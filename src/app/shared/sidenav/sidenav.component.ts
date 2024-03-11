import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

constructor(public router:Router){

}

naviagte(){
  debugger
  this.router.navigate(['/home']);
}
}
