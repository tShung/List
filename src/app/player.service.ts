import { Injectable } from '@angular/core';
import { Player } from './player';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PlayerService{
    private playersUrl = 'api/players';
    private headers = new Headers({'Content-Type':'application/json'});

    constructor(private http: Http) { }

    getPlayers(): Promise<Player[]> {
        return this.http.get(this.playersUrl)
                   .toPromise()
                   .then(response => response.json().data as Player[])
                   .catch(this.handleError);
      }
    
    
      getPlayer(id: number): Promise<Player> {
        const url = `${this.playersUrl}/${id}`;
        return this.http.get(url)
          .toPromise()
          .then(response => response.json().data as Player)
          .catch(this.handleError);
      }
    
      delete(id: number): Promise<void> {
        const url = `${this.playersUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
          .toPromise()
          .then(() => null)
          .catch(this.handleError);
      }
    
      create(name: string): Promise<Player> {
        return this.http
          .post(this.playersUrl, JSON.stringify({name: name}), {headers: this.headers})
          .toPromise()
          .then(res => res.json().data as Player)
          .catch(this.handleError);
      }
    
      update(hero: Player): Promise<Player> {
        const url = `${this.playersUrl}/${hero.id}`;
        return this.http
          .put(url, JSON.stringify(hero), {headers: this.headers})
          .toPromise()
          .then(() => hero)
          .catch(this.handleError);
      }
    
      private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }
}