import { Element } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginPageService } from 'src/app/core/login-page.service';
import { LoginService } from 'src/app/core/login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private formBulider: FormBuilder,public  senduser:LoginPageService,public pop:LoginService) {

  }
  sign: FormGroup = this.formBulider.group({
    fullname: ['', [Validators.required]],
    username: ['', [Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{4,}'),Validators.minLength(6), Validators.maxLength(20)]]
})

  ngOnInit() {
debugger
  }
Submit(){
  if(this.sign.invalid){
    this.sign.markAllAsTouched();
  }
  else{
 
    this.pop.showSuccess("Your account is created")
this.senduser.senduserdata(this.sign.value).subscribe((Element:any)=>
console.log(Element)
)
this.sign.reset()
  }
}
}
