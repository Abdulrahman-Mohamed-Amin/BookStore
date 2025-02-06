import { Component, OnInit } from '@angular/core';
import { SocialsComponent } from '../../../shared/socials/socials.component';
import { SharedNavComponent } from '../../../shared/shared-nav/shared-nav.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { LandingService } from '../services/landing.service';
import { Router } from '@angular/router';
import { BarComponent } from "../bar/bar.component";
import { NgStyle } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { first, last } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-books',
  imports: [
    SocialsComponent,
    SharedNavComponent,
    FooterComponent,
    BarComponent,
    NgStyle,
    ReactiveFormsModule,
    FormsModule
],
  templateUrl: './all-books.component.html',
  styleUrl: './all-books.component.css'
})
export class AllBooksComponent implements OnInit{
  books:any[] =[]
  books2:any[] = []
  message:boolean = false
  noBook:boolean = false
  sortByName:string = 'Sort by'
  price:FormGroup = new FormGroup({
    first: new FormControl(null),
    last:new FormControl(null)
  })
  constructor(private _landingserv:LandingService , private route:Router , private toaster:ToastrService){}

  ngOnInit(): void {
    this.getBooks()
     
  }

  getBooks(){
    this._landingserv.getBooks().subscribe({
      next: (res) =>{
        this.books = res.data
        this.books2 = [...this.books]      
            
      }
    })
  }
  showBooksByPrice(){
    if(this.price.value.last == null || this.price.value.first == null){
      this.message = true
      setTimeout(() => {
        this.message = false
      }, 1000);
    }else{      
      this.books2 = this.books
      this.books2 = this.books2.filter((book) =>{
        return book.price >= this.price.value.first && book.price <= this.price.value.last
      })
      if(this.books2.length == 0){
        this.noBook = true
      }else{
        this.noBook = false
      }
      
      this.message =false
    }
    
  }

  sortByNameFun(e:Event){
    let target = e.target as HTMLSelectElement
    console.log(target.value);
    if(target.value == 'a-z'){
      this.books2.sort()
    }else{
      this.books2.reverse()
    }
  }

  addToCart(id:string){
    this._landingserv.addBook({'book':id , 'quantity': 1}).subscribe({
      next:(res) =>{
        this.toaster.success('' , 'Book Has been Added to Cart')
      },
      error: (err) =>{
        this.toaster.error('' , err.message)        
      }
    })
  }
  show:boolean = false
  open(){
    this.show = true
  }
  close(){
    this.show = false
  }

}
