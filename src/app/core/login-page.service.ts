import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {
public url='https://dummyjson.com/auth/login'

constructor(public http: HttpClient) {}


  senduserdata(data:any){
return this.http.post(this.url,data)
  }
  
}
