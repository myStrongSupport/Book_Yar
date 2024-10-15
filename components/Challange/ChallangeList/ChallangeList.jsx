"use client";
import { useState, useEffect } from "react";
import ChallangeListDefault from "./ChallangeListDefault";
import ChallangeListLibrary from "./ChallangeListLibrary";
import { FaArrowRight } from "react-icons/fa";

const ChallangeList = ({ libraryBooks }) => {
  const [defaultLib, setDefaultLib] = useState(true);
  const [challangeBooks, setChallangeBooks] = useState([]);

  useEffect(() => {
    setDefaultLib(true);
  }, [challangeBooks]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://book-yar-shar.vercel.app/api");
      if (!data.ok) {
        throw new Error("Failed to fetch the book challange");
      }
      const books = await data.json();
      setChallangeBooks(books);
    };
    fetchData();
  }, [challangeBooks, defaultLib]);

  return (
    <div className="relative w-full pt-16 md:w-1/2">
      {defaultLib ? (
        <ChallangeListDefault
          books={challangeBooks}
          setDefaultLib={setDefaultLib}
        />
      ) : (
        <>
          <FaArrowRight
            size="2rem"
            className="absolute right-0 top-3 cursor-pointer"
            onClick={() => {
              setDefaultLib(true);
            }}
          />
          <ChallangeListLibrary books={libraryBooks} />
        </>
      )}
    </div>
  );
};

export default ChallangeList;
