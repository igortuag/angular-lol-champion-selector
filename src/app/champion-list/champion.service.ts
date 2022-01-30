import { Champion } from './champion';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class ChampionService {

  private uri = 'http://ddragon.leagueoflegends.com/cdn/12.2.1/data/en_US/champion.json';


  constructor(
    private http: Http
  ) { }

  getChampions() {
    return this.http.get(this.uri).toPromise().then(response => {
      const data = response.json().data;
      return Object.keys(data).map(key => data[key]) as Champion[];
    }).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
