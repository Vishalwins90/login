import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginPageService } from 'src/app/core/login-page.service';
import { LoginService } from 'src/app/core/login.service';

@Component({
  selector: 'app-editdetails',
  templateUrl: './editdetails.component.html',
  styleUrls: ['./editdetails.component.css']
})
export class EditdetailsComponent {
  id: any;
  sign: any
CreatedBy:any
  constructor(
    public formBulider: FormBuilder,
    public userdata: LoginPageService,
    public message:LoginService,
    public route: Router,
    private router: ActivatedRoute,
    public dialogRef: MatDialogRef<EditdetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
let id:any=sessionStorage.getItem('token')
this.userdata.getEmployeeById(id).subscribe((data:any)=>{
  this.CreatedBy=data
  console.log(this.CreatedBy.fullname)
}


)



    this.sign = this.formBulider.group({
      fullname: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{4,}'), Validators.minLength(6), Validators.maxLength(20)]],
      Phonenumber: ['', [Validators.required, Validators.maxLength(10)]],
      dropdown: ['', [Validators.required]],
    })

    console.log(this.sign.value)
  }
  Submit() {
    if (this.sign.invalid) {
      this.sign.markAllAsTouched();
    }
    else {
      let signUpdata:any={
        fullname:this.sign.value.fullname,
        username:this.sign.value.username,
        password:this.sign.value.password,
        Phonenumber:this.sign.value.Phonenumber,
        Role:this.sign.value.dropdown,
        CreatedBy:this.CreatedBy.fullname
      }

      this.userdata.senduserdata(signUpdata).subscribe((Element: any) =>
        console.log(Element)
      )
      // this.dialogRef.close(true);
      this.message.showSuccess("New user Add Successfull")
      this.sign.reset()
    }
  }
  numbers(event: any) {
    let num = event.keycode ? event.keycode : event.keyCode;
    if (num > 31 && (num < 48 || num > 57)) {
      return false;
    }
    return true;
  }


}