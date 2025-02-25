import React from 'react';

const BookCard = ({ image, name, genre, author }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', width: '250px', textAlign: 'center' }}>
      <img src={image} alt={name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
      <h3>{name}</h3>
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>Author:</strong> {author}</p>
    </div>
  );
};

export default BookCard;