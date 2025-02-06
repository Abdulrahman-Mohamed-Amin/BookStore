import { Component, OnInit, output } from '@angular/core';
import { SocialsComponent } from '../../../shared/socials/socials.component';
import { SharedNavComponent } from '../../../shared/shared-nav/shared-nav.component';
import { BarComponent } from '../bar/bar.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { LandingService } from '../services/landing.service';
import { CheckOutComponent } from '../check-out/check-out.component';

@Component({
  selector: 'app-cart',
  imports: [
    SocialsComponent,
    SharedNavComponent,
    BarComponent,
    FooterComponent,
    FormsModule,
    CheckOutComponent,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  productsInBasket: any[] = [];
  allProduct: any[] = [];
  filteredProduct: any[] = [];
  basket:any;
  idOfBasket: string = '';
  constructor(private _landingService: LandingService) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.getProductInBasket()
  }

  getAllProducts() {
    this._landingService.getBooks().subscribe({
      next: (res) => {
        this.allProduct = res.data;
      },
    });
  }

  getProductInBasket(){
    this._landingService.getMyBasket().subscribe({
      next: (res) => {
        this.basket = res
        this.productsInBasket = res.items;
        this.idOfBasket = res._id;
        console.log(this.productsInBasket);
        
      },
    });
  }
  delete(id: string) {
    const payLoad = { book: id };

    this._landingService.deleteBook(payLoad).subscribe({
      next: (res) => {
        this.getProductInBasket()
        console.log(res);
      },
    });
  }

  update(i: number) {
    const payLoad = {
      items: [
        {
          book: this.filteredProduct[i].id,
          quantity: this.filteredProduct[i].qun,
        },
      ],
    };

    this._landingService.update(payLoad).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  increment(i: number) {
    this.filteredProduct[i].qun++;
  }
  decrement(i: number) {
    if (this.filteredProduct[i].qun == 1) {
      this.filteredProduct[i].qun = 1;
    } else {
      this.filteredProduct[i].qun--;
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