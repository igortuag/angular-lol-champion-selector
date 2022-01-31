import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChampionDetailComponent } from './champion-detail/champion-detail.component';
import { ChampionListComponent } from './champion-list/champion-list.component';

const appRoutes = [
  { path: '', component: ChampionListComponent },
  { path: ':id', component: ChampionDetailComponent }
]

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
