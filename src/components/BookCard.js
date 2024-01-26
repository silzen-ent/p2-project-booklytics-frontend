// BookCard will be a reusable component for each book item in the list, displaying title, author, image, allow user to give a 1-5 star rating, etc.

import React from 'react';

function BookCard({ book }) {
    return (
        <li>
            {/* <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Published: {book.published}</p>
            <p>Status: {book.status}</p> */}
        </li>
    );
}

export default BookCard;