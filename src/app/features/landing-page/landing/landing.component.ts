import { Component } from '@angular/core';
import { SocialsComponent } from '../../../shared/socials/socials.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from "../home/home.component";
import { CategoriesComponent } from '../categories/categories.component';
import { BooksComponent } from '../books/books.component';
import { FeaturedbookComponent } from '../featuredbook/featuredbook.component';
import { OfferComponent } from "../offer/offer.component";
import { SubscribeComponent } from "../subscribe/subscribe.component";
import { ArticlsComponent } from "../articls/articls.component";
import { FooterComponent } from '../../../shared/footer/footer.component';

@Component({
  selector: 'app-landing',
  imports: [
    SocialsComponent,
    NavbarComponent,
    HomeComponent,
    CategoriesComponent,
    BooksComponent,
    FeaturedbookComponent,
    OfferComponent,
    SubscribeComponent,
    ArticlsComponent,
    FooterComponent
],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
