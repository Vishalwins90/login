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
getdata:any=[]
  login: FormGroup<any> = this.formbuilder.group({
    // email:   ['', [Validators.required, Validators.email]],
    username:['',[Validators.required]],
    password: ['',[Validators.required]],
  });
  constructor(public alluserdata: LoginPageService,public router:Router,private formbuilder:FormBuilder) {

  }
  ngOnInit() {
 
  
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
  this.alluserdata.senduserdata(matchdata).subscribe((res: any) => {
    localStorage.setItem('token', res.token)
    this.router.navigate(['/Home'])

 });
}
  else{
    console.log("user not found")
  } 

});
 
  }



}




