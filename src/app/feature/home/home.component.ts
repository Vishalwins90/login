import { Component } from '@angular/core';
import { LoginPageService } from 'src/app/core/login-page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  alldata:any=[]
  dataSource = this.alldata
  constructor( public getdata:LoginPageService){

  }
  ngOnInit(){

    this.getdata.get().subscribe(
      (data: any) => {
        this.alldata = data
  console.log(this.alldata)
      },
  
    );
  }
}