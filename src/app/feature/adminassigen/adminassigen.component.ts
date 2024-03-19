import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LoginPageService } from 'src/app/core/login-page.service';

@Component({
  selector: 'app-adminassigen',
  templateUrl: './adminassigen.component.html',
  styleUrls: ['./adminassigen.component.css']
})
export class AdminassigenComponent {
admindata:any=[]=[]
selected: any;
Status:any='active'
form:any
  constructor(  public dialogRef: MatDialogRef<AdminassigenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,public alldata: LoginPageService,public formBulider:FormBuilder){
  
  }
  ngOnInit(){
    console.log(this.data.id,"ddd")
    this.alldata.get().subscribe((data: any) => {
      this.admindata = data.filter((element: any) => {
        return element.Role === 'admin';
      });
    });
  }

Save(select:any,index:any){
  debugger
let data:any={
Status:this.Status,
Assignadmin:select.fullname
}
this.alldata.patchdata(this.data.id,data).subscribe((data:any)=>{
console.log(data)
this.dialogRef.close(true)
})



}

cancel(){
  this.dialogRef.close()
}
 
  }

