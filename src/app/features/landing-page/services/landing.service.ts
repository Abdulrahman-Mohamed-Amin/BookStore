import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  local:string ="https://upskilling-egypt.com:3007"
  private cartCount = new BehaviorSubject<number>(this.getCartCountFromStorage()); 
  cartCount$ = this.cartCount.asObservable(); 

  addToCart(num:number) {
    const newCount = num;
    this.cartCount.next(newCount);
    this.saveCartCountToStorage(newCount); // حفظ التحديث
  }

  private saveCartCountToStorage(count: number) {
    localStorage.setItem('cartCount', count.toString());
  }

  private getCartCountFromStorage(): number {
    return Number(localStorage.getItem('cartCount')) || 0; // استرجاع العدد المحفوظ
  }

  private syncWithStorage() {
    window.addEventListener('storage', () => {
      const storedCount = this.getCartCountFromStorage();
      this.cartCount.next(storedCount);
    });
  }

  constructor(private http:HttpClient) {
    this.syncWithStorage();
   }

  getCategories(): Observable<any>{
    return this.http.get(this.local + '/api/category')
  }
  getBooks(): Observable<any>{
    return this.http.get(this.local + '/api/book')
  }
  addBook(book:Object) : Observable<any>{
    return this.http.post(this.local + '/api/basket/item' , book)
  }
  deleteBook(book:any) : Observable<any>{
    return this.http.delete(this.local + `/api/basket/item/${book}`)
  }
  update(book:any , cartId:string) : Observable<any>{
    return this.http.put(this.local + `/api/basket/${cartId}` , book)
  }
  getMyBasket() : Observable<any>{
    return this.http.get(this.local + '/api/basket')
  }

  order(payment:any , orderid:string): Observable<any>{
    return this.http.post(this.local + `/api/order/${orderid}` , payment)
  }
}
