import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {
  private apiUrl = 'http://localhost:3000/users';
constructor(public http: HttpClient) {}


  senduserdata(data:any){
return this.http.post(this.apiUrl,data)
  }
  get() {
    return this.http.get(this.apiUrl);
  }
}
