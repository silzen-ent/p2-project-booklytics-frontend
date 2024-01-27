import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
import '../styles.css';

const Search = ({ books, updateBookShelf }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [randomBooks, setRandomBooks] = useState([]);

  useEffect(() => {
    // Shuffle the books array
    const shuffledBooks = [...books].sort(() => Math.random() - 0.5);
    setRandomBooks(shuffledBooks);
  }, [books]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = searchTerm
    ? randomBooks.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : randomBooks;

  return (
    <div className="search-page">
      <input
        type="text"
        placeholder="Search by book title..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <div className="search-results">
        {filteredBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            updateBookShelf={updateBookShelf}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;




