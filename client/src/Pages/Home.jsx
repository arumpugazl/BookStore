import React, { useEffect, useState } from "react";
import Navigation from "../Components/TopNavigation/Navigation";
import CardBanner from "../Components/CardBanner/CardBanner";
import BookCard from "../Components/BookCard/BookCard";
import CategoriesCard from "../Components/BookCard/CategoriesCard";
import space from "../assets/space.png";
import rocket from "../assets/rocket.png";
import mortarboard from "../assets/mortarboard.png";
import ink from "../assets/ink.png";
import history from "../assets/history.png";

const Home = () => {
  const [books, setBooks] = useState([]);

  // Fetch book data from an API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        const data = await response.json();
        console.log("Fetched Books:", data); // Debugging log
        setBooks(data); // Assuming the response is a list of books
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      <Navigation />
      <section className="main mt-20">
        <div className="Home">
          <div className="mt-10">
            <CardBanner />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-10 font-poppins">
              Categories
            </h2>
            <div className="flex">
              <CategoriesCard
                Category={"Scientific"}
                image={rocket}
                categoryColor={"bg-blue-300"}
                imageColor={"bg-blue-600"}
              />
              <CategoriesCard
                Category={"Education"}
                image={mortarboard}
                categoryColor={"bg-yellow-300"}
                imageColor={"bg-amber-400"}
              />
              <CategoriesCard
                Category={"Fictional"}
                image={space}
                categoryColor={"bg-pink-300"}
                imageColor={"bg-pink-400"}
              />
              <CategoriesCard
                Category={"Novel"}
                image={history}
                categoryColor={"bg-green-300"}
                imageColor={"bg-green-400"}
              />
              <CategoriesCard
                Category={"Poetry"}
                image={ink}
                categoryColor={"bg-purple-300"}
                imageColor={"bg-purple-400"}
              />
            </div>
          </div>

          <div className="prodGrid mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {books.map((book) => (
              <BookCard
                key={book._id}
                BookTitle={book.title}
                Author={book.author}
                Price={book.price}
                BookImage={book.image}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
