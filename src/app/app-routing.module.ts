import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { CreateRaceComponent } from './create-race/create-race.component';
import { UnicoinsComponent } from './unicoins/unicoins.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';



const routes: Routes = [
  { path: '', redirectTo: '/Upcoming Events', pathMatch: 'full'},
  { path: 'Sign-In', component: SigninComponent},
  { path: 'Sign-Up', component: SignupComponent},
  { path: 'Create Race', component: CreateRaceComponent},
  { path: 'Unicoins', component: UnicoinsComponent },
  { path: 'Upcoming Events', component: UpcomingEventsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
