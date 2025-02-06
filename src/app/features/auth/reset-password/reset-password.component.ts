import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  imports: [
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {

    constructor(private _authService:AuthService , private route : Router , private toaster:ToastrService){}
  

    reset:FormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      otp: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required ])
    })

    sendData(){
      this._authService.resetPassword(this.reset.value).subscribe({
        next: (res) =>{
          this.toaster.success("" , res.message)
        },
        error: (err) =>{
          this.toaster.error("", err.error.message)
        },
        complete: () =>{
        this.route.navigateByUrl('/login')
        }
      })
      console.log(this.reset.value);
      
    }
    goLogin(){
      this.route.navigateByUrl('/login')
    }
}
