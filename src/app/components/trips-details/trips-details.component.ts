import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/domain/trip';
import { ActivatedRoute, Router } from '@angular/router';
import { TripsService } from 'src/app/services/trips.service';

@Component({
  selector: 'app-trips-details',
  templateUrl: './trips-details.component.html',
  styleUrls: ['./trips-details.component.scss']
})
export class TripsDetailsComponent implements OnInit {

  pageTitle: string = 'Trip Details';
  trip?: Trip;
  errorMessage: string;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private tripsService: TripsService) {
  }

  ngOnInit(): void {
     this.route.params.subscribe(
          params => {
              let id = +params['id'];
            //  console.log('Récupéré le id suivant: '+id);
              // The following call will run synchronously
              this.getTrip(id);
      });
  }
  getTrip(id: number) {
       this.tripsService.getTripById(id)
         .subscribe(
           arg => {
                    this.trip = arg;
                  //  console.log('>>>>> Récupéré le Trip: '+this.trip.destination);
                  },
           err => console.log('ATTENTION, il y a eu l\'erreur : ' + err)
        ) ;

  }
  onBack(): void {
      this.router.navigate(['/list']);
  }

}
