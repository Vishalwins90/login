import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  
  loginform() {
    
    let configs = [
      { dataKey: 'email', label: 'Firstname', type: 'text', validations: { required: true } },
      { dataKey: 'password', label: 'Lastname', type: 'password', validations: { required: true } },
    
     
    ]
   
    return configs;
   


    

  }
  data(){
 
  

}
}
