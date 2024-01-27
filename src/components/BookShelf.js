// BookShelf - this handles the state changes 

import React from 'react';
import BookCard from './BookCard';
import '../styles.css'

const BookShelf = ({ shelfName, books, updateBookShelf }) => {
  return (
    <section className="bookshelf">
      <h2 className="shelf-title">{shelfName}</h2>
      <div className="shelf-books">
        {books.map(book => (
          <BookCard
            key={book.id}
            book={book}
            updateBookShelf={updateBookShelf}
          />
        ))}
      </div>
    </section>
  );
};

export default BookShelf;













