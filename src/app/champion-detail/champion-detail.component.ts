import { ChampionService } from './../champion-list/champion.service';
import { Component, OnInit } from '@angular/core';
import { Champion } from '../champion-list/champion';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-champion-detail',
  templateUrl: './champion-detail.component.html',
  styleUrls: ['./champion-detail.component.scss']
})
export class ChampionDetailComponent implements OnInit {

  subscription: Subscription

  champion: Champion;

  constructor(
    private ChampionService: ChampionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      const id = params['id'];
      this.ChampionService.getChampion(id).then(champion => this.champion = champion);
    })
  }

}
