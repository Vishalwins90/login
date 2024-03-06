import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { LoginInterceptor } from 'src/app/core/interceptor/login.interceptor';
import { LoginPageService } from 'src/app/core/login-page.service';
import { LoginService } from 'src/app/core/login.service';
const phoneEmailRegex = /^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  config = {
    allowNumbersOnly: false,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    inputStyles: {
      'width': '50px',
      'height': '50px'
    }
  }
  payLoad: any = []
  loading: any = false
  hide: boolean = true
  validOtp!: number;
  otp: any
  matchData: any
  showloginpage: Boolean = true
  timer: any;
  toggleVisibility(): void {
    this.hide = !this.hide;
  }
  showPassword: any
  showPasswordOnPress: any = false
  login: FormGroup = this.formbuilder.group({
    username: ['', [Validators.required,Validators.pattern(phoneEmailRegex)]],
    password: ['', [Validators.required]],
  });
  constructor(public notifyService: LoginService, public alluserdata: LoginPageService, public router: Router, private formbuilder: FormBuilder) {
  }
  ngOnInit() {
  }

  Submit() {
    if (this.timer) {
      clearInterval(this.timer)
    }
    if (this.login.invalid) {
      this.login.markAllAsTouched();
    } else {
      let userdata = {
        username: this.login.value.username,
        password: this.login.value.password
      };
      this.alluserdata.get().subscribe(
        (data: any) => {
          this.payLoad = data;
          this.matchData = this.payLoad.find((data: any) => data.username === userdata.username || data.Phonenumber && data.password === userdata.password);
          if (this.matchData) {
            this.notifyService.showSuccess("Otp Send Successful");
            this.login.reset();
            setTimeout(() => {
              this.validOtp = Math.floor(Math.random() * 1000000);
            }, 5000);
            this.showloginpage = false
            console.log(this.validOtp)
          }
          else {
            this.timer = setTimeout(() => {
              this.notifyService.showError("User not found");
            }, 1000)
          }
        },

      );
    }
  }
  otpVerfication() {
    if (this.timer) {
      clearInterval(this.timer)
    }
    if (this.validOtp == this.otp) {
      sessionStorage.setItem('token', this.matchData.id);
      sessionStorage.setItem('username', this.matchData.username)
      this.router.navigate(['/home']);
    }
    else {
      this.timer = setTimeout(() => {
        this.notifyService.showError("Please enter a Valid otp")
      }, 1000);
    }
  }
  onOtpChange(otp: any) {
    this.otp = otp;
  }
}
