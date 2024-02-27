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
  login: FormGroup = this.formbuilder.group({
    //  email:   ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],

  });
  constructor(public notifyService: LoginService, public alluserdata: LoginPageService, public router: Router, private formbuilder: FormBuilder) {
  }
  ngOnInit() {
  }

  Submit() {
    if (this.login.invalid) {
      this.login.markAllAsTouched()
    }
    else {
      this.alluserdata.get().subscribe(
        (data: any) => {
          this.payload = data
        },
      );
      let userdata = {
        username: this.login.value.username,
        password: this.login.value.password
      }
      let matchdata: any = this.payload.find((data: any) => data.username === userdata.username && data.password === userdata.password)
      if (this.payload && matchdata) {
        this.loading = true
        this.notifyService.showSuccess("User login Successful")
        localStorage.setItem('token', matchdata.id)
        this.router.navigate(['/home'])
        this.login.reset()
      }
      else {
        this.notifyService.showError("User doesn't found")
      }
    }
  }
}




