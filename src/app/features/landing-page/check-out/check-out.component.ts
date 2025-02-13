import { Component, inject, Input, ViewChild } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, Validators } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';

import {
  injectStripe,
  StripeElementsDirective,
  StripeCardComponent,
} from 'ngx-stripe';
import {
  StripeElementsOptions,
  StripeCardElementOptions
} from '@stripe/stripe-js';
import { LandingService } from '../services/landing.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-check-out',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    StripeElementsDirective,
    StripeCardComponent
    ],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.css'
})
export class CheckOutComponent {
  @Input() basketId:string = ''

  @ViewChild(StripeCardComponent) cardElement!: StripeCardComponent;
  private readonly fb = inject(UntypedFormBuilder);

  constructor(private _landingService:LandingService , private toaster:ToastrService) {}
  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0',
        },
      },
    },
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'es',
  };

  checkoutForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]]
  });
  stripePublicKey = 'pk_test_51OTjURBQWp069pqTmqhKZHNNd3kMf9TTynJtLJQIJDOSYcGM7xz3DabzCzE7bTxvuYMY0IX96OHBjsysHEKIrwCK006Mu7mKw8';
  // Replace with your own public key
  stripe = injectStripe(this.stripePublicKey);

  createToken() {

    const name = this.checkoutForm.get('name')?.value;
    this.stripe
      .createToken(this.cardElement.element, { name })
      .subscribe((result) => {
        if (result.token) {
          let payMent = {
            "token":result.token.id,
            "delivery_address":{
                "country":"Egypt",
                "city":"Giza",
                "state":"Giza",
                "building":25,
                "street":"ayhaga",
                "floor":3,
                "appartment":21,
                "mobile":"01004444444",
                "additional_info":"ayhaga",
                "location":{
                    "type":"Point",
                    "coordinates": [30.0444,31.2357]
                }
            }
        }
        console.log(this.basketId);
        
        this._landingService.order(payMent , this.basketId).subscribe({
          next:(res) =>{
            this.toaster.success('' , res.message)
          }
        })
        } else if (result.error) {
         
          console.log(result.error.message);
        }
      });
  }
}
