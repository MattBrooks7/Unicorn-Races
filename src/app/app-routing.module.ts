import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { CreateRaceComponent } from './create-race/create-race.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'create race', component: CreateRaceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

