import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { LoginInterceptor } from 'src/app/core/interceptor/login.interceptor';
import { LoginPageService } from 'src/app/core/login-page.service';
import { LoginService } from 'src/app/core/login.service';

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
  getdata: any = []
  payload: any = []
  loading: any = false
  Phide = true
  hide:boolean = true
  validOtp!: number ;
  otp:any
  matchdata:any
   showloginpage:Boolean=true

  toggleVisibility(): void {
    this.hide = !this.hide;
  }

  showPassword:any
  showPasswordOnPress:any= false
  login: FormGroup = this.formbuilder.group({
    // username: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  constructor(public notifyService: LoginService, public alluserdata: LoginPageService, public router: Router, private formbuilder: FormBuilder) {
    
  }
  ngOnInit() {
   
  }


  Submit() {
  if (this.login.invalid) {
    this.login.markAllAsTouched();
  } else {
    let userdata = {
      username: this.login.value.username,
      password: this.login.value.password
    };
    this.alluserdata.get().subscribe(
      (data: any) => {
  
        this.payload = data;
        this.matchdata= this.payload.find((data: any) => data.username === userdata.username || data.Phonenumber && data.password === userdata.password);
        if (this.matchdata) {
          // this.notifyService.showSuccess("User login Successful");
          // sessionStorage.setItem('token', matchdata.id);
          // sessionStorage.setItem('username',matchdata.username)
          // this.router.navigate(['/home']);
          //  this.router.navigate(['/otp']);

          this.login.reset();

          setTimeout(()=>{
            this.validOtp = Math.floor(Math.random()*1000000);
          },5000);
          this.showloginpage=false
          console.log(this.validOtp)

      
        }
        else{
          this.notifyService.showError("User not found");
        }
      },
     
    );
  }

}
otpVerfication(){
  if(this.validOtp == this.otp){
          // this.notifyService.showSuccess("User login Successful");
        sessionStorage.setItem('token', this.matchdata.id);
          sessionStorage.setItem('username',this.matchdata.username)
          this.router.navigate(['/home']);

  }
  else{
  this.notifyService.showError("Please enter a Valid otp")
  }
  setTimeout(()=>{
    this.showloginpage=true
    this.notifyService.showError('otp is Expiry')
  },1000);
  

}


onOtpChange(otp:any) {
  this.otp = otp;

}

}
