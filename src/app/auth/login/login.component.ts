import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginInterceptor } from 'src/app/core/interceptor/login.interceptor';
import { LoginPageService } from 'src/app/core/login-page.service';
import { LoginService } from 'src/app/core/login.service';

@Component({

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {
getdata:any=[]
loading:any=false
  login: FormGroup = this.formbuilder.group({
  //  email:   ['', [Validators.required, Validators.email]],
    username:['',[Validators.required]],
    password: ['',[Validators.required]],

  });
  constructor( public notifyService :LoginService,public alluserdata: LoginPageService,public router:Router,private formbuilder:FormBuilder) {

  }
  ngOnInit() {
    debugger
   
  }

  Submit() {
     let payload:any = [
     {
      username: 'kminchelle',
      password: '0lelplR',
     } 
     ]                
    let userdata = {
username:this.login.value.username,
password:this.login.value.password
    }
payload.forEach((element:any) => {
  let matchdata:any = payload.find((data:any)=>data.username === userdata.username && data.password === userdata.password)
if (element && matchdata){
  this.loading=true
  this.notifyService.showSuccess("User login Successful")
  this.alluserdata.senduserdata(matchdata).subscribe((res: any) => {
    localStorage.setItem('token', res.token)
    this.router.navigate(['/home'])
 });
}
  else{
     this.notifyService.showError("User doesn't found")
  } 
});
 
  }



}




