"use client";
import { useState, useEffect } from "react";
import ChallangeListDefault from "./ChallangeListDefault";
import ChallangeListLibrary from "./ChallangeListLibrary";
import { FaArrowRight } from "react-icons/fa";

const ChallangeList = ({ books, libraryBooks }) => {
  const [defaultLib, setDefaultLib] = useState(true);

  useEffect(() => {
    setDefaultLib(true);
  }, [books]);

  return (
    <div className="relative w-full pt-16 md:w-1/2">
      {defaultLib ? (
        <ChallangeListDefault books={books} setDefaultLib={setDefaultLib} />
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
