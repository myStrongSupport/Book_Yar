const ShowBookState = ({ book }) => {
  const renderState = () => {
    if (book.isRead) {
      return (
        <p className="font-ka text-sm font-extrabold text-green-600">
          کتاب خوانده شده
        </p>
      );
    }
    if (book.isReading) {
      return (
        <p className="font-ka text-sm font-extrabold text-blue-600">
          در حال خواندن
        </p>
      );
    }

    if (book.isFavorite) {
      return (
        <p className="font-ka text-sm font-extrabold text-red-600">
          مورد علاقه
        </p>
      );
    }

    return null;
  };

  return renderState();
};

export default ShowBookState;
