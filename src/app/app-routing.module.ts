import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TripsListComponent } from './components/trips-list/trips-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TripsDetailsComponent } from './components/trips-details/trips-details.component';
import { CartComponent } from './components/cart/cart.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full'},
  { path: 'list', component: TripsListComponent},
  { path: 'details/:id', component: TripsDetailsComponent},
  { path: 'cart', component: CartComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
