import { Component, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { LandingService } from '../services/landing.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-books',
  imports: [CarouselModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
  schemas:[]
})
export class BooksComponent implements OnInit{

  customOptions: any = {
    margin:20,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    dotsEach: 2,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
  }

  books:any[] = []
  constructor(private _service:LandingService ,private route:Router , private toaster:ToastrService){}
  
  ngOnInit(): void {
    this.getAllBooks()
  }

  getAllBooks(){
    this._service.getBooks().subscribe({
      next: (res) =>{
        this.books = res.data        
      }
    })
  }

  goToAllBooks(){
    this.route.navigateByUrl('/all-books')
  }

  addToCart(id:string){
    this._service.addBook({'book':id , 'quantity': 1}).subscribe({
      next:(res) =>{
        console.log(res);
        this.toaster.success('' , 'Book Has been Added to Cart')
      },
      error: (err) =>{
        this.toaster.error('' , err.message)        
      }
    })
  }
}


