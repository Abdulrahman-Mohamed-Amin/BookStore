import { Component, model  } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    FormsModule  
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private _authService:AuthService , private route : Router , private toaster:ToastrService){}

  login:FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required ])
  })
  passwordControl = new FormControl('', [Validators.required] )

  loginForm(){
    this._authService.getLogin(this.login.value).subscribe({
      next: (res) =>{
        this.toaster.success('Login' , 'Success')
        localStorage.setItem('token' , res.data.accessToken)
        this._authService.saveUserData()
      },
      error: (err) =>{
        this.toaster.error(err.error.message  , "login")
      },
      complete: () => this.route.navigateByUrl('/landing')
      
    })
    
  }

  goReg(){
    this.route.navigateByUrl('/register')
  }
  goforget(){
    this.route.navigateByUrl('/forget')
  }
}
