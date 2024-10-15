import React from "react";
import BookSlider from "./BooksSlider/BookSlider";

const BookState = ({ state, books, page = null }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <h2 className="md:vertical-text py-8 text-lg font-bold md:ml-8 md:mr-10 md:py-0 md:text-left">
        {state}
      </h2>
      <BookSlider books={books} className="bookShelfSwiper" page={page} />
    </div>
  );
};

export default BookState;
