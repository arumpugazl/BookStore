import React, { useEffect, useState } from 'react';
import Topnav from '../Components/TopNavigation/Topnav';
import CardBanner from '../Components/CardBanner/CardBanner';
import BookCard from '../Components/BookCard/BookCard';

const Home = () => {
  const [books, setBooks] = useState([]);

  // Fetch book data from an API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/books');
        const data = await response.json();
        console.log('Fetched Books:', data); // Debugging log
        setBooks(data); // Assuming the response is a list of books
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      <Topnav />
      <section className="main">
        <div className="Home">
          <CardBanner />
          <div className="prodGrid mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {books.map((book) => (
              <BookCard
                key={book._id}
                BookTitle={book.title}
                Author={book.author}
                Price={book.price}
                BookImage={book.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
