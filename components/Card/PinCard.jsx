"use client";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoCheckbox } from "react-icons/io5";
import { useState } from "react";
const PinCard = ({ book, updatedBooks }) => {
  const [checkBox, setCheckBox] = useState(book.isRead);

  const onReadOnChallange = async () => {
    setCheckBox((prev) => !prev);
    // Send Request is Read
    try {
      const response = await fetch(`/api/booksChallange`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _id: book._id,
          isRead: true,
          state: "updated",
        }),
      });
      if (!response.ok) {
        console.log("could not updating pinboard");
      } else {
        const updatedBook = await response.json();
        updatedBooks(updatedBook.data);
      }
    } catch (err) {
      console.error("error :", err);
    }
  };

  const onUnReadOnChallange = async () => {
    setCheckBox((prev) => !prev);

    try {
      const response = await fetch(`/api/booksChallange`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _id: book._id,
          isRead: false,
          state: "updated",
        }),
      });
      if (!response.ok) {
        console.log("Could not updating , pinboard");
      } else {
        const updatedBook = await response.json();
        updatedBooks(updatedBook.data);
      }
    } catch (err) {
      console.error("error :", err);
    }
  };
  return (
    <div className="relative h-[140px] md:min-w-[180px] w-full select-none rounded-3xl bg-primary-200 p-5 shadow-2xl">
      <h3 className="font-bold">{book.title}</h3>
      <p className="text-sm">{book.author}</p>
      <div className="absolute bottom-3 left-3 cursor-pointer">
        {!checkBox ? (
          <MdCheckBoxOutlineBlank onClick={onReadOnChallange} />
        ) : (
          <IoCheckbox onClick={onUnReadOnChallange} />
        )}
      </div>
    </div>
  );
};

export default PinCard;
