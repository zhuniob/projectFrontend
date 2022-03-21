import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Comic } from './comic';
import { COMICS } from './comics.json';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  constructor() { }

  getComics(): Observable<Comic[]> {
    return of(COMICS);
  }


}
