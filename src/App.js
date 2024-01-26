// App will hold the overall layout & manage the state for the app.
  // Additional Component Ideas at the bottom (below export) 

  import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
  import { useState, useEffect } from 'react';
  import LibraryList from './components/LibraryList';
  import Search from './components/Search';
  import BookCard from './components/BookCard';
  import NavBar from './components/NavBar';
  
  function App() {
      const [books, setBooks] = useState([]);
      const [search, setSearch] = useState("");
  
      useEffect(() => {
          fetch("http://localhost:3001/books")
          .then((response) => response.json())
          .then(setBooks)
      }, [])
  
      const Book = () => {
          const { id } = useParams();
          const book = books.find(book => book.id === id);
          return book ? <BookCard book={book} /> : <div>Book not found</div>;
      }

      return (
          <Router>
              <NavBar />
              <Routes>
                  <Route path="/library" element={<LibraryList />}>
                      {/* <LibraryList books={books} /> */}
                  </Route>
                  <Route path="/search" element={<Search />}>
                      {/* <Search books={books} setSearch={setSearch} search={search} /> */}
                  </Route>
                  <Route path="/book/:id" element={<BookCard />}>
                      {/* <Book /> */}
                  </Route>
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