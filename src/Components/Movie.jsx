import React, { useState } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

const Movie = ({ id, title, image, synopsis, rating, reviews }) => {
  // State to manage user rating in the component
  const [userRating, setUserRating] = useState(0);

  // Function to handle user rating changes
  const handleRatingChange = (newRating) => {
    setUserRating(newRating);
  };

  return (
    <div className="movie">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{synopsis}</p>
      <p>Rating: {rating}</p>

      {/* Stars component for user rating */}
      <Stars rating={userRating} onRatingChange={handleRatingChange} />

      {/* ReviewList component for displaying reviews */}
      <ReviewList reviews={reviews} />

      {/* ReviewForm component for adding new reviews */}
      <ReviewForm />
    </div>
  );
};

export default Movie;
