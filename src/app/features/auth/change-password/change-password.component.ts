import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-change-password',
  imports: [
        MatInputModule,
        ReactiveFormsModule,
        FormsModule  
  ],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {

    constructor(private _authService:AuthService , private route : Router , private toaster:ToastrService){}
  

    change:FormGroup = new FormGroup({
      password: new FormControl('', [Validators.required]),
      password_new: new FormControl('', [Validators.required ])
    })

    sendData(){
      this._authService.ChangePass(this.change.value).subscribe({
        next: (res) =>{
          this.toaster.success("" , res.message)
        },
        error: (err) =>{
          this.toaster.error("", err.error.message)
        },
        complete: () =>{
          this.route.navigateByUrl('/login')
          localStorage.removeItem('token')
        }
      })
    }
}
