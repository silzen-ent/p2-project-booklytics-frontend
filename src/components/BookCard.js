// BookCard will be a reusable component for each book item in the list, displaying title, author, image, allow user to give a 1-5 star rating, etc.

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles.css'
import './BookShelf'

const BookCard = ({ book }) => {
  const [detailedBook, setDetailedBook] = useState(book);
  const { id } = useParams(); // Exist when used in route /book/:id
  const navigate = useNavigate();

  useEffect(() => {
    if (!book && id) {
      // In a detailed book page but 'book' prop not provided, fetch based on 'id'
      fetch(`http://localhost:3001/books/${id}`)
        .then(response => response.json())
        .then(data => {
          setDetailedBook(data);
        })
        .catch(error => {
          console.error('Error fetching book:', error);
        });
    }
  }, [book, id]);

  if (!detailedBook) {
    return <p>Loading book details...</p>;
  }

  // Navigate to detailed view if only brief info is being shown
  const handleViewDetails = () => {
    if (!id) { // Prevent navigation if we're already in the detail view
      navigate(`/book/${detailedBook.id}`);
    }
  };

  return (
    <div className="book-card" onClick={handleViewDetails}>
      <img src={detailedBook.imageUrl} alt={detailedBook.title} className="book-image" />
      <div className="book-details">
        <h3 className="book-title">{detailedBook.title}</h3>
        <p className="book-author">{detailedBook.author}</p>
        <p className="book-genre">{detailedBook.genre}</p>
        {id && <p className="book-bio">{detailedBook.bio}</p>} {/* Show bio in detail view */}
      </div>
    </div>
  );
};

export default BookCard;



