import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private formBulider: FormBuilder) {

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
  
}
}
