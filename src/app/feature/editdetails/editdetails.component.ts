import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginPageService } from 'src/app/core/login-page.service';

@Component({
  selector: 'app-editdetails',
  templateUrl: './editdetails.component.html',
  styleUrls: ['./editdetails.component.css']
})
export class EditdetailsComponent {
  id: any;
  employee:any=[]


  constructor( 
    public formBulider:FormBuilder,
    public userdata:LoginPageService,
    public route:Router,
    private router: ActivatedRoute,
    public dialogRef: MatDialogRef<EditdetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }
 
  sign: FormGroup = this.formBulider.group({
    fullname: ['', [Validators.required]],
    username: ['', [Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{4,}'),Validators.minLength(6), Validators.maxLength(20)]]
})


  ngOnInit() {
      this.sign.patchValue({
        fullname: this.data.alluserdata.fullname,
       username: this.data.alluserdata.username,
     password: this.data.alluserdata.password,
       });
  }
  
  
  
  update(){
    debugger
    let id=this.data.alluserdata.id
    this.userdata.patchdata(id,this.sign.value).subscribe((data:any)=>
    console.log(data)
     
    )
    this.dialogRef.close(true);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
