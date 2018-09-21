import { Injectable }from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

import { _throw } from 'rxjs/observable/throw';
import { Hero }        from './hero';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const cudOptions = { headers: new Headers({ 'Content-Type': 'application/json' })};

@Injectable()
export class HttpHeroService {
  heroesUrl = 'api/heroes';  // URL to web api
  constructor (private http: Http) {
  }

  getHeroes (): Observable<Hero[]> {
    return this.http.get(this.heroesUrl).pipe(
      map((res:Response) => res.json()),
      catchError(this.handleError)
    );
  }

  // This get-by-id will 404 when id not found
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url).pipe(
      map((r: Response) => r.json() as Hero),
      catchError(this.handleError)
    );
  }
  addHero (name: string): Observable<Hero> {
    const hero = { name };

    return this.http.post(this.heroesUrl, hero, cudOptions).pipe(
      map((res:Response) => res.json()),
      catchError(this.handleError)
    );
  }

  deleteHero (hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete(url, cudOptions).pipe(
      map(_ => (_ as any as Hero)),
      catchError(this.handleError)
    );
  }


  searchHeroes(term: string): Observable<Hero[]> {
    term = term.trim();
    const search = term ? '/?name=' + term : '';
    return this.http.get(this.heroesUrl + search).pipe(
      map((res:Response) => res.json()),
      catchError(this.handleError)
    );
  }

  updateHero (hero: Hero): Observable<null | Hero> {
    return this.http.put(this.heroesUrl, hero, cudOptions).pipe(
      map((res:Response) => res.json()),
      catchError(this.handleError)
    );
  }

  private handleError (error: any) {
    return _throw(error);
  }
}
