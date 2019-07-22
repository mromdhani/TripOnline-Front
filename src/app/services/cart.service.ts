import { Injectable } from '@angular/core';
import { Trip } from '../domain/trip';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartData: Trip[] = [];

   private messageSource = new BehaviorSubject(0);
   currentCartLengthChanged = this.messageSource.asObservable();

  constructor() {}

  addToCart(trip: Trip): void {
    // Test if the product is already in the cart
    if (this.cartData.indexOf(trip) === -1) {
      this.cartData.push(trip);
      this.messageSource.next(this.cartData.length);
    }
  }
  getCartTrips(): Trip[] {
    return this.cartData;
  }
  getCartLength(): number {
    return this.cartData.length;
  }
  getCartTotalAmount(): number {
    let total = 0;
    this.cartData.forEach(record => (total += record.price));
    return total;
  }
  resetCart(): void {
    this.cartData = [];
  }
}
