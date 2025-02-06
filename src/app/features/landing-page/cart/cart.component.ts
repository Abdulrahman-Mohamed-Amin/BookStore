import { Component, OnInit } from '@angular/core';
import { SocialsComponent } from '../../../shared/socials/socials.component';
import { SharedNavComponent } from '../../../shared/shared-nav/shared-nav.component';
import { BarComponent } from '../bar/bar.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { LandingService } from '../services/landing.service';
import { CheckOutComponent } from '../check-out/check-out.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  imports: [
    SocialsComponent,
    SharedNavComponent,
    BarComponent,
    FooterComponent,
    FormsModule,
    CheckOutComponent
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  productsInBasket: any[] = [];
  filterdBook: any[] = [];
  allProduct: any[] = [];
  filteredProduct: any[] = [];
  basket:number = 0;
  idOfBasket: string = '';
  constructor(private _landingService: LandingService , private toast:ToastrService) {}

  ngOnInit(): void {
    this.getProductInBasket()
  }


  getProductInBasket(){
    this._landingService.getMyBasket().subscribe({
      next: (res) => {
        this.basket = res.total
        this.productsInBasket = res.items;
        this.idOfBasket = res._id;

        this._landingService.getBooks().subscribe({
          next:(all) =>{
            
            for(let i = 0 ; i < all.data.length ; i++) {
              for(let j = 0 ; j < this.productsInBasket.length ; j++){
                if(this.productsInBasket[j].book == all.data[i]._id){

                  this.filterdBook.push(all.data[j])
                }
              }
            }
            console.log(this.filterdBook);
            
          }
        })
      },
    });
  }
  delete(id: string) {
    console.log(id);
    
    this._landingService.deleteBook(id).subscribe({
      next: (res) => {
        this.getProductInBasket()
        console.log(res);
      },
    });
  }

  update(book:any) {
    
    let cartId = '67a0a71ddf3257cc8e03e65c'
    const UpdatedBook = { items:[
         {book: book._id,quantity: book.quantity},
      ]}
    
    console.log(UpdatedBook , cartId);
    this._landingService.update(UpdatedBook , cartId).subscribe({
      next: (res) =>{
        this.toast.success('' , res.message)
      }
    })
  }
  increment(i: number) {
    this.productsInBasket[i].quantity++;
  }
  decrement(i: number) {
    if (this.productsInBasket[i].quantity == 1) {
      this.productsInBasket[i].quantity = 1;
    } else {
      this.productsInBasket[i].quantity--;
    }
  }

}


        // for (let i = 0; i < this.productsInBasket.length; i++) {
        //   for (let j = 0; j < this.allProduct.length; j++) {
        //     if (this.productsInBasket[i].book == this.allProduct[j]._id) {
        //       this.filteredProduct.push({
        //         book: this.allProduct[j],
        //         quantity: this.productsInBasket[i].quantity,
        //         _id: this.productsInBasket[i]._id,
        //       });
        //     }
        //   }
        // }