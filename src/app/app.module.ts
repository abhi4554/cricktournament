import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './MyComponents/countries/countries.component';
import { TeamsComponent } from './MyComponents/teams/teams.component';
import { PlayersComponent } from './MyComponents/players/players.component';
import { VenueComponent } from './MyComponents/venue/venue.component';
import { MatchesComponent } from './MyComponents/matches/matches.component';
import { ResultsComponent } from './MyComponents/results/results.component';
import { TournamentscoretableComponent } from './MyComponents/tournamentscoretable/tournamentscoretable.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    TeamsComponent,
    PlayersComponent,
    VenueComponent,
    MatchesComponent,
    ResultsComponent,
    TournamentscoretableComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
