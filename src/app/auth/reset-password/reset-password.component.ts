import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginPageService } from 'src/app/core/login-page.service';
import { LoginService } from 'src/app/core/login.service';
// import { MustMatch } from 'src/app/core/Validators/Validators';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
reset: any;
hide = true;
 hidedata=true
  constructor(private formBuilder: FormBuilder, public router: Router, private route: ActivatedRoute, public alldata: LoginPageService,public message:LoginService, public dialogRef: MatDialogRef<ResetPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  resetPassword() {
    debugger
    if (this.reset.invalid) {
      this.reset.markAllAsTouched()
    }
    else {
      let id = this.route.snapshot.paramMap.get('id');
      console.log(id)
          let data:any={
          oldPassword: this.reset.value.oldPassword,
        }
      this.alldata.patchdata(id, this.reset.value).subscribe((data: any) =>
        console.log(data)
      );
      this.reset.reset()
      this.message.showSuccess("Password Reset Succesfull")
    }
  

   
  }

  ngOnInit() {

    this.reset = this.formBuilder.group({
    
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{4,}'),
          Validators.minLength(6),
          Validators.maxLength(20)
        ]
      ],
      confirmPassword: [
        '',
        [
          Validators.required
        ]
      ],
    }, 
    {
      validator: this.passwordMatchValidator
      
    })
 
  }
  passwordMatchValidator(group: any) {
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;
    return password === confirmPassword ? null : { mismatch: true };
  }
  logout(){
  sessionStorage.removeItem('token')
  }
  
  toggleVisibility(): void {
    this.hide = !this.hide;
  }
  nextbutton(): void {
    this.hidedata = !this.hidedata;
  }

}


