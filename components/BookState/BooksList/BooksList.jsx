import BookCard from "@/components/Card/BookCard";

const BooksList = ({ books }) => {
  return (
    <div className="grid grid-cols-1 gap-8 py-20 sm:grid-cols-2 md:grid-cols-3">
      {books.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
};

export default BooksList;
