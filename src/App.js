// src/App.js
import React from 'react';
import MovieList from './Components/MovieList';

const App = () => {
  // Dummy movie data
  const movies = [
    {
      id: 1,
      title: 'Inception',
      image: 'inception.jpg',
      synopsis: 'A thief who enters the dreams of others to steal their secrets.',
      rating: 4.5,
      reviews: [
        { id: 1, userRating: 4, userReview: 'Mind-bending and visually stunning!' },
        { id: 2, userRating: 5, userReview: 'One of the best movies ever.' },
      ],
    },
    {
      id: 2,
      title: 'The Shawshank Redemption',
      image: 'shawshank.jpeg',
      synopsis: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      rating: 4.8,
      reviews: [
        { id: 3, userRating: 5, userReview: 'An absolute masterpiece!' },
        { id: 4, userRating: 4.5, userReview: 'Emotional and powerful storytelling.' },
      ],
    },
    // Add more movie objects as needed
  ];

  return (
    <div className="App">
      <h1>Movie Review App</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
