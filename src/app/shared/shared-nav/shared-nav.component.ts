import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LandingService } from '../../features/landing-page/services/landing.service';

@Component({
  selector: 'app-shared-nav',
  imports: [NgStyle , RouterModule ],
  templateUrl: './shared-nav.component.html',
  styleUrl: './shared-nav.component.css'
})
export class SharedNavComponent implements OnInit{
    show:boolean = false
    num:number = 0
    constructor(private route:Router , private _landService:LandingService){}

    ngOnInit(): void {
      this.getNmOfBooks()
    }
    getNmOfBooks(){
      this._landService.getMyBasket().subscribe(res =>{
        this.num = res.items.length
      })
    }
  
    goLogin(){
      this.route.navigateByUrl('/login')
    }
    open(){
      this.show = true
    }
    close(){
      this.show = false
    }
}
