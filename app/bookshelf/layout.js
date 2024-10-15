const BookShelfLayout = ({ bookisread, bookshelf }) => {
  return (
    <div className="sm:h-[87dvh] sm:overflow-hidden">
      {bookshelf}
      {bookisread}
    </div>
  );
};

export default BookShelfLayout;
