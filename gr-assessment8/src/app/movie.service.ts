import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Movie[] = [
    {
      title: "Titanic",
      releaseYear: 1998
    },
    {
      title: "Forrest Gump",
      releaseYear: 1994
    },
    {
      title: "Beavis and Butthead do America",
      releaseYear: 1998
    },
    {
      title: "2001: A Space Odissey",
      releaseYear: 1968
    },
  ]

  constructor() { }

  getMovies(): Movie[] {
    return this.movies
  }
}
