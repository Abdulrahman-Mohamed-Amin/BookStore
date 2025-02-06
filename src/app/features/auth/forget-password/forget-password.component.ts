import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forget-password',
  imports: [
    ReactiveFormsModule,
    MatInputModule
  ],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {

  constructor(private toaster:ToastrService , private route: Router , private _authService:AuthService){}

    forget:FormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    })

    send(){
      this._authService.forgetPassword(this.forget.value).subscribe({
        next: (res) =>{
          this.toaster.success('' , res.message)
        },
        error:(err) =>{
          this.toaster.error('' , err.error.message)
        },
        complete: () =>{
          this.route.navigateByUrl("/reset")
        }
      })
      
    }

    goToReset(){
      this.route.navigateByUrl('/reset')
    }
}
