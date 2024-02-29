import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {
  private apiUrl = 'http://localhost:3000/users';
  users:any= []
  httpClient: any;
  baseURL: any;
constructor(public http: HttpClient) {}

  senduserdata(data:any){
return this.http.post(this.apiUrl,data)
  }
  get() {
    return this.http.get(this.apiUrl);
  }

  delete(id: any): Observable<any> {
    const deleteUrl = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(deleteUrl);
  }
  getEmployeeById(id: number): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  
  patchdata(id:any,data:any){

    console.log(data)
    return this.http.patch(this.apiUrl+"/"+id, data);
}
}
