// App will hold the overall layout & manage the state for the app.
  // Additional Component Ideas at the bottom (below export) 

  import './styles.css'  
  import React, { useState, useEffect } from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import NavBar from './components/NavBar';
  import Search from './components/Search';
  import BookCard from './components/BookCard';
  import ShelvesDisplay from './components/ShelvesDisplay';
  
  function App() {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
      fetch('http://localhost:3001/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.log('Error fetching books:', error));
  }, []);
  
  const updateBookShelf = (bookId, shelf) => {
      const updatedBooks = books.map(book => {
      if (book.id === bookId) {
          book.readStatus = shelf; // Update readStatus
      }
      return book;
      });
      setBooks(updatedBooks);
  
      // Also update book's shelf on the server.
          // This utilizes the PATCH method. 
      fetch(`http://localhost:3001/books/${bookId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ readStatus: shelf })
      })
      .then(response => {
          if (!response.ok) {
          throw new Error('Could not update book shelf!');
          }
          return response.json();
      })
      .catch(error => console.error('Error updating book shelf:', error));
  };
  
  return (
      <Router>
      <NavBar />
      <Routes>
          <Route path="/" element={<Search books={books} updateBookShelf={updateBookShelf} />} />
          <Route path="/book/:id" element={<BookCard books={books} />} />
          <Route path="/library" element={<ShelvesDisplay books={books} updateBookShelf={updateBookShelf} />} />
      </Routes>
      </Router>
  );
  }
  
  export default App;
  
  


// Book Detail Component:
// Functionality: Displays detailed information about a specific book, including synopsis, reviews, ratings, and recommendations.
  // Sub-components:
  // Quote Display: Show a random quote from the book or allow users to add their own.
  // Reading Progress Tracker: If the book is currently being read, track pages or chapters completed and display a progress bar.
  // Notes Section: Allow users to take notes and record thoughts about the book.

// Add Book Component:
// Functionality: Add new books to the user's reading list.
  // Sub-components:
  // Search Bar: Search for books by title, author, ISBN, etc.
  // Book Information Form: Input title, author, genre, publication date, and other details.
  // Import Books: Allow users to import books from Goodreads or other platforms.




    // const getBooks = async () => {
  //   const response = await fetch('/books');
  //   const data = await response.json();
  //   // Use the data to populate Library page
  // };
  
  // useEffect(() => {
  //   getBooks();
  // }, []);