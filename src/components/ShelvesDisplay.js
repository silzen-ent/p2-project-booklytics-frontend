// BookLists will render subcomponents like Library (all books), Book Shelf (Want to Read), Reading Now, FinishedList, & Favorites
// Filters: allow users to filter books by read/unread status, currently reading, favorites, etc. 
// Sorting: Enable users to sort books by title, author, pageCount, price, genre, etc.
// This could also render LibraryList/ShelevsDisplay, a component which would be a list of all books in the library.

import React from 'react';
import BookShelf from './BookShelf'; // Represents a single shelf with a category of books
import '../styles.css'

const ShelvesDisplay = ({ books, updateBookShelf }) => {
  // Organize books into their respective shelves
  const shelves = {
    'Want to Read': books.filter(book => book.readStatus === 'Want to Read'),
    'Currently Reading': books.filter(book => book.readStatus === 'Currently Reading'),
    'Read': books.filter(book => book.readStatus === 'Read'),
    'Favorites': books.filter(book => book.favorite)
  };
  // Above is reading what the current status of the entire list of Books are. And them categorizing them into the shelves it fits. If the book status is changed to completed, it'll put it in the completed shelf, etc. 

  
  return (
    <div className="shelves-display">
      {Object.entries(shelves).map(([shelfName, booksOnShelf]) => (
        <BookShelf
          key={shelfName}
          shelfName={shelfName}
          books={booksOnShelf}
          updateBookShelf={updateBookShelf}
        />
      ))}
    </div>
  );
};

export default ShelvesDisplay;










// import React from "react";
// import BookCard from "./BookCard";

// function LibraryList({ books }) {
//     const wantToRead = books.filter(book => book.status === "Want to Read");
//     const completed = books.filter(book => book.status === "Completed");
//     const favorite = books.filter(book => book.status === "Favorite");

//     const renderBooks = (books) => books.map((book) => (
//         <BookCard key={book.id} book={book} />
//     ));

//     return (
//         <main>
//             <h1>Navigation Bar</h1>
//             <h2>Want to Read</h2>
//             <ul className="books">{renderBooks(wantToRead)}</ul>
//             <h2>Completed</h2>
//             <ul className="books">{renderBooks(completed)}</ul>
//             <h2>Favorite</h2>
//             <ul className="books">{renderBooks(favorite)}</ul>
//         </main>
//     );
// }

// export default LibraryList;
