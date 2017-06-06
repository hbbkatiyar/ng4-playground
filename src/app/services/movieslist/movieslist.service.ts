import { Injectable } from '@angular/core';

@Injectable()
export class MovieslistService {
  private url = 'movies.json';
  listItems: any[] = ['Movie One', 'Movie Two', 'Movie Three', 'Movie Four'];
  constructor() {

  }

  getMovies() {
    return this.listItems;
  }
 }
