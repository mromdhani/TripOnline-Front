import { Component, OnInit } from '@angular/core';
import { TripsService } from 'src/app/services/trips.service';
import { Trip } from 'src/app/domain/trip';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.scss']
})
export class TripsListComponent implements OnInit {

  data: Trip[];

  constructor(private service: TripsService) { }

  ngOnInit() {
     this.service.getAllTrips().subscribe(
       reponse => this.data = reponse,
       erreur => console.log('Attention, il y a l\'erreur: '+erreur)
     );
  //   this.data = [
  //     {
  //         id: 2,
  //         destination: 'Grece',
  //         pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/NAMA_Sphinx_archa%C3%AFque.jpg',
  //         price: 900
  //     },
  //     {
  //         id: 3,
  //         destination: 'Egypte',
  //         pictureUrl: 'https://cdn.pixabay.com/photo/2018/06/18/23/59/travel-3483588_960_720.jpg',
  //         price: 800
  //     },
  //     {
  //         id: 1,
  //         destination: 'Egypte',
  //         pictureUrl: 'https://cdn.pixabay.com/photo/2018/06/18/23/59/travel-3483588_960_720.jpg',
  //         price: 800
  //     },
  //     {
  //         id: 4,
  //         destination: 'Grece',
  //         pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/NAMA_Sphinx_archa%C3%AFque.jpg',
  //         price: 900
  //     }
  // ];
  }

}
