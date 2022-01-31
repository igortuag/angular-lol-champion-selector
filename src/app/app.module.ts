import { AppRoutingModule } from './app.routing';
import { ChampionService } from './champion-list/champion.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChampionListComponent } from './champion-list/champion-list.component';
import { ChampionDetailComponent } from './champion-detail/champion-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampionListComponent,
    ChampionDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ChampionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
