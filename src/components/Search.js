import React from 'react';
import BookCard from './BookCard';

function Search({ books, search, setSearch }) {
    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <input type="text" value={search} onChange={handleInputChange} placeholder="Search for a book" />
            <ul className="books">
                {filteredBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </ul>
        </div>
    );
}

export default Search;