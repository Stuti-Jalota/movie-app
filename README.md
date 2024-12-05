# Movie Explorer App

## Overview
Movie Explorer is a single-page web application built using Angular that allows users to explore popular movies, browse by categories, and save their favorite movies. It consumes the TMDb (The Movie Database) API to fetch movie data and dynamically display it on the web page.

## Features
- **Navigation Bar**: Navigate between Home, Movies, and Feedback pages.
- **Dropdown Menu**: Movie categories (`Popular`, `Now Playing`, `Upcoming`, `Top Rated`) can be accessed directly from the navigation bar.
- **Movie Display**: Fetches movies dynamically from the TMDb API and displays them in a grid.
- **Add to Favorites**: Save your favorite movies in a dedicated section.
- **Feedback Form**: Submit user feedback using a reactive form with validation.

---

# API Integration
This project uses the TMDb API to fetch movie data.

Base URL: https://api.themoviedb.org/3/
API Key: API key in the ApiDataComponent file.
- **Endpoints used**:

/movie/popular
/movie/now_playing
/movie/upcoming
/movie/top_rated

----

# Technologies Used
Frontend: Angular, TypeScript
Styling: CSS (custom styles)
Backend API: TMDb (The Movie Database API)

# Credits
API: The Movie Database (TMDb)
Framework: Angular
