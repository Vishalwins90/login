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
  getdata: any = []
  payload: any = []
  loading: any = false
  Phide = true
  hide:boolean = true

  toggleVisibility(): void {
    this.hide = !this.hide;
  }

  showPassword:any
   showPasswordOnPress:any= false
  login: FormGroup = this.formbuilder.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  constructor(public notifyService: LoginService, public alluserdata: LoginPageService, public router: Router, private formbuilder: FormBuilder) {
    
  }
  ngOnInit() {

  }

  Submit() {
    debugger
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
        let matchdata: any = this.payload.find((data: any) => data.username === userdata.username && data.password === userdata.password);
        if (matchdata) {
          this.notifyService.showSuccess("User login Successful");
          sessionStorage.setItem('token', matchdata.id);
          sessionStorage.setItem('oldpassword',matchdata.password)
          this.router.navigate(['/home']);
          this.login.reset();
        } else {
          this.notifyService.showError("User not found");
        }
      },
     
    );
  }

}



}
