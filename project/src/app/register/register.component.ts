import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CrudService } from '../crud.service';
import{Register} from './register'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:Register=new Register()
  constructor(private crudService: CrudService){}  

  ngOnInit(): void {
    console.log(this.crudService.showUser());
  }
  saveForm(custForm:NgForm):void{
    console.log(`customer Data saved : ${JSON.stringify(custForm.value)}`)
    console.log(custForm.form)
    console.log('Saved:' 
    +JSON.stringify(custForm.value))



}}
