import { Component, OnInit } from '@angular/core';
import { MoviesService } from './shared/movies/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies:any;
  constructor(private moviesService: MoviesService) {}

  getMovies() {
    this.moviesService.fetchMovies().subscribe(data => {
      this.movies = data['Search'];
    });
  }

  ngOnInit() {
    this.getMovies();
  }
}
