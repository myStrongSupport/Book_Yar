import BookState from "@/components/BookState/BookState";
import shelfImage from "@/assets/images/shelf.png";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "@/components/Loading/loading";

const BookShelfPage = async () => {
  const data = await fetch(
    "https://book-yar-shar.vercel.app/api/booksBeingRead",
    {
      cache: "no-store",
    }
  );
  const books = await data.json();
  return (
    <section className="h-[42dvh]">
      <div className="relative h-full px-8 xl:container md:pt-24">
        <Suspense fallback={<Loading />}>
          <BookState state="قفسه من" books={books} />;
        </Suspense>
        <Image
          src={shelfImage}
          alt="shelf"
          priority
          className="absolute bottom-0 z-0 hidden w-full translate-y-[81%] sm:block md:translate-y-[44%]"
        />
      </div>
    </section>
  );
};

export default BookShelfPage;
