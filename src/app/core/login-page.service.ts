import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {
public url='https://dummyjson.com/auth/login'
public geturl='https://dummyjson.com/auth/me'
constructor(public http: HttpClient) {}


  senduserdata(data:any){
return this.http.post(this.url,data)
  }
  get() {
    return this.http.get(this.geturl);
  }
}
