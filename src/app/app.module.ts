import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//import { firebaseConfig } from '../environments/environment';
import { environment } from '../environments/environment';
import { HammerModule } from '@angular/platform-browser';
import { IgxTimePickerModule } from 'igniteui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateRaceComponent } from './create-race/create-race.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { UnicoinsComponent } from './unicoins/unicoins.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from "@angular/fire/auth";
import { getDatabase, provideDatabase } from '@angular/fire/database';
@NgModule({
  declarations: [
    AppComponent,
    CreateRaceComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    UnicoinsComponent,
    UpcomingEventsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() =>  getAuth()),
    provideDatabase(() => getDatabase()),
    HammerModule,
    IgxTimePickerModule,
    NgxMatTimepickerModule,
    NgxMatDatetimePickerModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


