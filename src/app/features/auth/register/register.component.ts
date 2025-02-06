import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  imports: [
        MatInputModule,
        ReactiveFormsModule,
        MatSelectModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private _authSservice:AuthService , private route:Router , private toaster:ToastrService){}
  register:FormGroup = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      role: new FormControl('', [Validators.required ])
    })
    passwordControl = new FormControl('', [Validators.required] );

    disableSelect = new FormControl(false);

    getRegister(){
      this._authSservice.register(this.register.value).subscribe({
        next: (res) =>{
          this.toaster.success("" , res.message)
        },
        error: (err) =>{
          this.toaster.error('' , err.error.message)
          console.log();
          
        },
        complete: () =>{
          this.route.navigateByUrl('/login')
        }
      })

      console.log(this.register.value);
      
    }
    goLogin(){
      this.route.navigateByUrl('login')
    }

}
