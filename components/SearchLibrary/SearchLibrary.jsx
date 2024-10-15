"use client";
import { useState, useEffect } from "react";
import BooksList from "@/components/BookState/BooksList/BooksList";

const SearchLibrary = ({ bookLibrary }) => {
  const [books, setBooks] = useState([]);

  const [search, setSearch] = useState("");

  const searchInputChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  const filteredBooks = books.filter((book) => {
    return (
      book.title.trim().includes(search.trim()) ||
      book.author.trim().includes(search.trim())
    );
  });

  useEffect(() => {
    setBooks(bookLibrary);
  }, [books]);

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <h1 className="ml-4 text-5xl font-bold">کتابخانه</h1>
        {/* Input */}
        <div className="w-full border-b-2 border-primary-600 py-3">
          <input
            type="text"
            className="font-ka w-full bg-transparent font-bold pr-4 text-primary-600 mt-4 md:m-0 outline-none placeholder:text-gray-800"
            placeholder="جستجو با نام کتاب و نام نویسنده"
            onChange={searchInputChangeHandler}
          />
        </div>
      </div>
      <BooksList books={filteredBooks} />
    </>
  );
};

export default SearchLibrary;
