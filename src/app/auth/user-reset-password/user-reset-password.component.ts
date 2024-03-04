import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginPageService } from 'src/app/core/login-page.service';
import { LoginService } from 'src/app/core/login.service';
import { ConfirmationDialogComponent } from 'src/app/feature/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-user-reset-password',
  templateUrl: './user-reset-password.component.html',
  styleUrls: ['./user-reset-password.component.css']
})
export class UserResetPasswordComponent {
  reset: any;
  hide = true;
   hidedata=true
userDatapassword:any=[]
    constructor(private formBuilder: FormBuilder, public router: Router, private route: ActivatedRoute, public alldata: LoginPageService,public message:LoginService, public dialogRef: MatDialogRef<UserResetPasswordComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) { }

    ngOnInit() {
      let token=sessionStorage.getItem('token')
      this.alldata.getdatabyId(token).subscribe((data:any)=> 
      // this.userData.push(data)
      this.userDatapassword.push(data.password)
   
      )
    console.log(this.userDatapassword)

      this.reset = this.formBuilder.group({
      oldPassword:['',[Validators.required]],
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
    sessionStorage.removeItem('oldpassword')
    }
    
    toggleVisibility(): void {
      this.hide = !this.hide;
    }
    nextbutton(): void {
      this.hidedata = !this.hidedata;
    }
    resetPassword() {
debugger
      if (this.reset.invalid) {
        this.reset.markAllAsTouched()
      }
      else {
        let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
          width: '250px'
      
        });
        dialogRef.afterClosed().subscribe((result: any) => {
          if (result) {
          
     let password={
      oldPassword: this.reset.value.oldPassword,
     }
        let data:any={
       
          password:this.reset.value.password
        }
        if(this.userDatapassword==password.oldPassword){
        debugger
          let token=sessionStorage.getItem('token')
          this.alldata.patchdata(token ,data).subscribe((data: any) =>
          console.log(data,"dfsdfds")
          );
          
         this.dialogRef.close(true);

          this.reset.reset()
          this.message.showSuccess("Password Reset Succesfull")
        }
        else{
          this.message.showError("old password doesn't match")
        }
        }
          
      
        });
   
      }
    }
    
}
