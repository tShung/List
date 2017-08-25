import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Player }     from './player';

@Injectable()
export class PlayerSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Player[]> {
    return this.http
               .get(`api/players/?name=${term}`)
               .map(response => response.json().data as Player[]);
  }
}