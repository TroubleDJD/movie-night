// src/components/Stars.jsx
import React from 'react';

const Stars = ({ rating }) => {
  const starIcons = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < rating ? 'star-filled' : 'star-empty'}>
      ★
    </span>
  ));

  return <div className="stars">{starIcons}</div>;
};

export default Stars;
