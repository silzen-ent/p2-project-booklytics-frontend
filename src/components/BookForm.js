// BookForm will be a component for adding new books to the API w/ controlled inputs & error handling.

import React, { useState } from 'react';
import '../styles.css'

const BookForm = () => {
  const [bookData, setBookData] = useState({
    title: '',
    // Include other book properties as needed
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3001/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    })
    .then(response => response.json())
    .then(() => {
      setBookData({ title: '' }); // Clear form on success
      // Optionally, update the UI to reflect the new book
    })
    .catch(error => console.error('Error posting new book:', error));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBookData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={bookData.title}
        onChange={handleChange}
        placeholder="Title"
      />
      {/* Include other inputs here */}
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;







