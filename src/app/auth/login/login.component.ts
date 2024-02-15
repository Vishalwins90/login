import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPageService } from 'src/app/core/login-page.service';

@Component({

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {
  isNextDisabled=true
  login: FormGroup = this.formbuilder.group({
    email:   ['', [Validators.required, Validators.email]],
    password: ['',[Validators.required]],
  });
  constructor(public alluserdata: LoginPageService,public router:Router,private formbuilder:FormBuilder) {

  }
  ngOnInit() {
 
  
  }

  Submit() {
    debugger
    let payload=this.login.value
    // let payload = {
    //   username: 'kminchelle',
    //   password: '0lelplR',
    // }
    this.alluserdata.senduserdata(payload).subscribe((res: any) => {
    
       localStorage.setItem('token', res.token)
       this.router.navigate(['/Home'])


      console.log(res)
    });
  }



}




