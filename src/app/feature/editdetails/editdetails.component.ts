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
// employee:any = []
sign:any

  constructor( 
    public formBulider:FormBuilder,
    public userdata:LoginPageService,
    public route:Router,
    private router: ActivatedRoute,
    public dialogRef: MatDialogRef<EditdetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}



  ngOnInit() {
    this.sign = this.formBulider.group({
      fullname: ['', [Validators.required]],
      username: ['', [Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{4,}'),Validators.minLength(6), Validators.maxLength(20)]]
  })
  }
  
  Submit(){

    if(this.sign.invalid){
    
      this.sign.markAllAsTouched();
    }
    else{
  this.userdata.senduserdata(this.sign.value).subscribe((Element:any)=>
  console.log(Element)
  )
  this.dialogRef.close(true);
  this.sign.reset()
    }
}
}