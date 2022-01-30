import { ChampionService } from './champion-list/champion.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChampionListComponent } from './champion-list/champion-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampionListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ChampionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
