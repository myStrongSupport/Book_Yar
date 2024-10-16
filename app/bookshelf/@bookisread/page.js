import BookState from "@/components/BookState/BookState";
import shelfImage from "@/assets/images/shelf.png";
import Loading from "@/components/Loading/loading";
import Image from "next/image";
import { Suspense } from "react";

const BOOKS = async () => {
  const data = await fetch("https://book-yar-shar.vercel.app/api/readBooks", {
    cache: "no-store",
  });
  const books = await data.json();
  return <BookState state="خوانده شده" books={books} page="/bookisread" />;
};
const BookIsRead = () => {
  return (
    <section className="h-[43dvh]">
      <div className="relative h-full px-8 xl:container md:pt-24">
        <Suspense fallback={<Loading />}>
          <BOOKS />
        </Suspense>
        <Image
          src={shelfImage}
          alt="shelf is"
          priority
          className="absolute bottom-0 z-0 hidden w-full translate-y-[76%] sm:block md:translate-y-[41%]"
        />
      </div>
    </section>
  );
};

export default BookIsRead;
