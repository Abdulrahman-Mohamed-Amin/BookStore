import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  local:string ="https://upskilling-egypt.com:3007"

  constructor(private http:HttpClient) { }

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
    return this.http.delete(this.local + `/api/basket/item/${book.book}`)
  }
  update(book:any ) : Observable<any>{
    return this.http.put(this.local + `api/basket/${book.idk}` , book)
  }
  getMyBasket() : Observable<any>{
    return this.http.get(this.local + '/api/basket')
  }

  order(payment:any , orderid:string): Observable<any>{
    return this.http.post(this.local + `/api/order/${orderid}` , payment)
  }
}
// https://upskilling-egypt.com:3007/api/basket/6798fb111c75bf9184d78472