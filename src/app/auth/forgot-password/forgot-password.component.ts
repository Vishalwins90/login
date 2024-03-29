import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { LoginPageService } from 'src/app/core/login-page.service';
import { LoginService } from 'src/app/core/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
logindata: any = [] = []
timer:any

  forgot: FormGroup = this.formbuilder.group({
  username: ['', [Validators.required, Validators.email]],
  });
  constructor(public login: LoginPageService, public formbuilder: FormBuilder, public router: Router, public message: LoginService) {

  }
  forgotPassword() {
if(this.timer){
  clearTimeout(this.timer)
}
    let alluseremail: any = {
      username: this.forgot.value.username,
    }
    this.login.get().subscribe(
      (data: any) => {
        this.logindata = data;
        let matchdata: any = this.logindata.find((data: any) => data.username === alluseremail.username);
        if (matchdata) {
          this.router.navigate([`reset/${matchdata.id}`]);
          this.message.showSuccess("User found succesfull")
          this.forgot.reset();
        } else {
        this.timer=setTimeout(() => {
          this.message.showError("User not found");
        }, 1000);
        }
      },
    );
  }
}




