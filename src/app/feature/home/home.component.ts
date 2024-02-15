import { Component } from '@angular/core';
import { LoginPageService } from 'src/app/core/login-page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor( public getdata:LoginPageService){

  }
  ngOnInit(){
// this.getdata.get().subscribe((res:any)=> 
// console.log(res)
// )


this.getdata.get().subscribe()
  }

}
