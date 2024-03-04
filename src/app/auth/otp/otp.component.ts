import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/login.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent {
  showOtpComponent = true;
  otp: any;

constructor(public message:LoginService,public router:Router ){

}

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

onConfigChange() {
  this.showOtpComponent = false;
  this.otp = null;
  setTimeout(() => {
    this.showOtpComponent = true;
  }, 0);
}
onOtpChange(otp:any) {
  this.otp = otp;

}
otpVerfication(){
let validOtp=sessionStorage.getItem('otp')
if(validOtp == this.otp){
  sessionStorage.setItem('otpVerfied','true')
  this.router.navigate(['/home']);
  this.message.showSuccess("user login succucesfull")
  sessionStorage.removeItem('otp')
}
else{
this.message.showError("Please enter a  valid otp")
}

}

}