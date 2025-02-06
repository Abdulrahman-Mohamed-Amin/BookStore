import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  imports: [NgStyle],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  show:boolean = false
  constructor(private route:Router , private _authService:AuthService , private toaster:ToastrService){}

  goLogin(){
    this.route.navigateByUrl('/login')
  }
  logOut(){
    this._authService.logOut().subscribe({
      next:(res) =>{
        this.toaster.success("" , "Logout Success")
      },
      error:(err) =>{
        this.toaster.error("" , "Logout Failed")
        
      },
      complete: () =>{
        this.route.navigateByUrl("/login")
        localStorage.removeItem('token')
      }
    })
  }
  open(){
    this.show = true
  }
  close(){
    this.show = false
  }
}
