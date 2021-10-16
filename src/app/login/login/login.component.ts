import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged: boolean = false;
  errorResponse;
  signupForm: FormGroup;

  constructor(private _builder:FormBuilder,private service:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.signupForm =  this._builder.group({
      email:['',Validators.compose([Validators.required, Validators.email])],
      password:['',Validators.compose([Validators.required])]
    })
  }

  submitForm(form){
    this.service.loginUser(form).subscribe(res =>{
      if(res){
        localStorage.setItem('token',res.token);
        this.isLogged = true;
        this.auth()
      }
    },err => this.errorResponse=err.error.error);
  }

  auth(){
    if(this.isLogged){
      return this.router.navigate(['/home'])
    }
  }

  
}
