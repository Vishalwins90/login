import { Element } from '@angular/compiler';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LoginPageService } from 'src/app/core/login-page.service';
import { LoginService } from 'src/app/core/login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  selectedRole=''
  hide: boolean = true
  CreatedBy:any="Self"
  status:any='active'

  constructor(private formBulider: FormBuilder, public senduser: LoginPageService, public pop: LoginService, public dialogRef: MatDialogRef<SignUpComponent>,
    ) {
  }
  sign: FormGroup = this.formBulider.group({
    fullname: ['', [Validators.required]],
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{4,}'), Validators.minLength(6), Validators.maxLength(20)]],
    Phonenumber: ['', [Validators.required, Validators.maxLength(10)]],
    dropdown:['',[Validators.required]]
  })

  ngOnInit() {
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
  CreatedBy:this.CreatedBy,
  Status:this.status
}
console.log(signUpdata)
      this.pop.showSuccess("Your account is created")
      this.senduser.senduserdata(signUpdata).subscribe((Element: any) =>
        console.log(Element)
      )
      this.sign.reset()
    }
  }
  onSelected(value:any){
    this.selectedRole = value;
    // this.sign.reset()
    console.log(value)
  }
  numbers(event: any) {
    let num = event.keycode ? event.keycode : event.keyCode;
    if (num > 31 && (num < 48 || num > 57)) {
      return false;
    }
    return true;
  }

  toggleVisibility(): void {
    this.hide = !this.hide;
  }
}
