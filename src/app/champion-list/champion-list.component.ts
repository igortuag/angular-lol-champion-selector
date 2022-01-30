import { ChampionService } from './champion.service';
import { Component, OnInit } from '@angular/core';
import { Champion } from './champion';

@Component({
  selector: 'app-champion-list',
  templateUrl: './champion-list.component.html',
  styleUrls: ['./champion-list.component.scss']
})
export class ChampionListComponent implements OnInit {

  champions: Champion[];

  constructor(private championService: ChampionService) { }

  ngOnInit() {
    this.championService.getChampions().then(champions => this.champions = champions);
  }

}
