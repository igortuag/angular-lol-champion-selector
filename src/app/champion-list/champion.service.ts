import { Champion } from './champion';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class ChampionService {

  private uri = 'http://ddragon.leagueoflegends.com/cdn/12.2.1/data/en_US';


  constructor(
    private http: Http
  ) { }

  getChampions() {
    return this.http.get(`${this.uri}/champion.json`).toPromise().then(response => {
      const data = response.json().data;
      return Object.keys(data).map(key => data[key]) as Champion[];
    }).catch(this.handleError);
  }

  getChampion(id: string) {
    return this.http.get(`${this.uri}/champion/${id}.json`).toPromise().then(response => {
      const data = response.json().data;
      return data[id] as Champion;
    }).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
