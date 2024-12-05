import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css'],
})
export class ApiDataComponent {
  movies: any[] = [];
  favourites: any[] = [];
  selectedCategory: string = 'popular'; 

  private apiKey = 'f562d6b0b60474e50219ee4accb700ed';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchMoviesByCategory(this.selectedCategory);
  }

  fetchMoviesByCategory(category: string): void {
    this.selectedCategory = category;
    this.http
      .get(
        `https://api.themoviedb.org/3/movie/${category}?api_key=${this.apiKey}`
      )
      .subscribe((data: any) => {
        this.movies = data.results;
      });
  }

  addToFavourites(movie: any): void {
    if (!this.favourites.some((fav) => fav.id === movie.id)) {
      this.favourites.push(movie);
      alert(`${movie.title} added to favourites!`);
    } else {
      alert(`${movie.title} is already in favourites.`);
    }
  }
}
