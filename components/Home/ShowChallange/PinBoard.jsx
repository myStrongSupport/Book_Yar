"use client";
import Progress from "./Progress/Progress";
import PinCard from "@/components/Card/PinCard";
import { useState, useEffect, useCallback } from "react";
const PinBoard = ({ books }) => {
  // States
  const [bookList, setBookList] = useState([]);
  const [percentage, setPercentage] = useState(0);

  // Get Percentage
  const calculatePercentage = useCallback(() => {
    const readBooks = bookList.filter(
      (book) => book.isRead && book.isInChallange
    );

    const totalChallengeBooks = bookList.filter(
      (book) => book.isInChallange
    ).length;
    const progressPercentage =
      totalChallengeBooks > 0
        ? (readBooks.length / totalChallengeBooks) * 100
        : 0;

    setPercentage(Math.floor(progressPercentage.toFixed(2)));
  }, [bookList]);

  // Useffct
  useEffect(() => {
    calculatePercentage();
  }, [calculatePercentage]);

  useEffect(() => {
    setBookList(books);
  }, []);

  const updatedBooks = useCallback((updatedBook) => {
    setBookList((prevBooks) =>
      prevBooks.map((book) =>
        book._id === updatedBook._id ? updatedBook : book
      )
    );
  }, []);
  return (
    <div className="flex justify-center w-full flex-col border-2 md:flex-row">
      {/* Box1 */}
      <Progress percentage={percentage} />
      <div className="flex flex-wrap gap-5 pr-8">
        {bookList.map((book) => (
          <PinCard book={book} key={book._id} updatedBooks={updatedBooks} />
        ))}
      </div>
    </div>
  );
};

export default PinBoard;
