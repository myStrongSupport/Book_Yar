import Image from "next/image";
import pagesImage from "@/assets/images/pages.png";
import Actions from "./Actions/Actions";
import ShowBookState from "../BookState/ShowBookState";

const BookCard = ({ book, page }) => {
  return (
    <div className="flex select-none">
      {/* Image of Book */}
      <div className="shadow-book relative h-[180px] w-[130px]">
        <Image src={book.image} alt="image title" fill sizes="100%" priority />
        <Image
          src={pagesImage}
          alt="pages"
          fill
          sizes="100%"
          priority
          className="absolute left-0 h-full w-full"
        />
      </div>
      {/* Detail of Books */}

      <div className="mr-10 w-[40%]">
        <ShowBookState book={book} />
        <h4 className="font-iransans line-clamp-1 text-base font-bold">
          {book.title}
        </h4>
        <p className="text-sm">{book.author}</p>
        {/* Actions */}
        <Actions page={page} book={book} />
      </div>
    </div>
  );
};

export default BookCard;
