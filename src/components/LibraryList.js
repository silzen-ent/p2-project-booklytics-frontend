// BookLists will render subcomponents like Library (all books), Book Shelf (Want to Read), Reading Now, FinishedList, & Favorites

// Filters: allow users to filter books by read/unread status, currently reading, favorites, etc. 

// Sorting: Enable users to sort books by title, author, pageCount, price, genre, etc.

// This could also render LibraryList, a sub-component which would be a list of all books in the library.

import React from "react";
import BookCard from "./BookCard";

function LibraryList({ books }) {
    const wantToRead = books.filter(book => book.status === "Want to Read");
    const completed = books.filter(book => book.status === "Completed");
    const favorite = books.filter(book => book.status === "Favorite");

    const renderBooks = (books) => books.map((book) => (
        <BookCard key={book.id} book={book} />
    ));

    return (
        <main>
            <h1>Navigation Bar</h1>
            <h2>Want to Read</h2>
            <ul className="books">{renderBooks(wantToRead)}</ul>
            <h2>Completed</h2>
            <ul className="books">{renderBooks(completed)}</ul>
            <h2>Favorite</h2>
            <ul className="books">{renderBooks(favorite)}</ul>
        </main>
    );
}

export default LibraryList;
