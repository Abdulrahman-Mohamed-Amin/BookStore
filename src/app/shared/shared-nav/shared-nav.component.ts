import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shared-nav',
  imports: [NgStyle],
  templateUrl: './shared-nav.component.html',
  styleUrl: './shared-nav.component.css'
})
export class SharedNavComponent {
    show:boolean = false
    constructor(private route:Router){}
  
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
