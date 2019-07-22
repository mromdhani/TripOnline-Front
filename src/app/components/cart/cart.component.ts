import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/domain/trip';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  data: Trip[] ;
  totalAmount:number;

constructor(private service: CartService) { }

ngOnInit() {
   this.data = this.service.getCartTrips();
   this.totalAmount = this.service.getCartTotalAmount();
   console.log ('##### Dans Cart Component - Taille de la Cart : '+this.totalAmount);
}

order() {
  console.log('Your order has been processed .... ');
}

}
