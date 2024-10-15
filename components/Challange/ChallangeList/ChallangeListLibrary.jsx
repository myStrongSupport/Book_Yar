"use client";
import BookCard from "@/components/Card/BookCard";

const ChallangeListLibrary = ({ books }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </>
  );
};

export default ChallangeListLibrary;
