import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  fetchMovies() {
    const url = 'https://www.omdbapi.com/?apikey=a567cf6c&s=love&type=movie';

    return this.http.get(url);
  }
}
