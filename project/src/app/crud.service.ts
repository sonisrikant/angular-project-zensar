import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from './register/register';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  showTasks(showTasks: any) {
    throw new Error('Method not implemented.');
  }
  private url:string="http://localhost:8080/user/createUser"
  constructor(private http: HttpClient ) { }
   
   
  showUser() {
    return this.http.get(`${this.url}`);
  }
  createUser(user:Register){​​
     alert('success')
      return  this.http.post<Register>(this.url,user);
   
   
  }
}
