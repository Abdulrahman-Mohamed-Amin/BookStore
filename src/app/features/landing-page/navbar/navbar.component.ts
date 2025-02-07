import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { LandingService } from '../services/landing.service';

@Component({
  selector: 'app-navbar',
  imports: [NgStyle, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  show:boolean = false
  constructor(private route:Router , private _authService:AuthService , private toaster:ToastrService , private _landService:LandingService){}
  num:number = 0
  cartCount = 0

    ngOnInit(): void {
      this.getNmOfBooks()
      this._landService.cartCount$.subscribe(count => {
        this.cartCount = count;
      });
    }
    getNmOfBooks(){
      this._landService.getMyBasket().subscribe(res =>{
        this.num = res.items.length
      })
    }
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
