import BookState from "@/components/BookState/BookState";
import Hero from "@/components/Home/Hero/Hero";
import ShowChallange from "@/components/Home/ShowChallange/ShowChallange";
import Loading from "@/components/Loading/loading";
import { Suspense } from "react";

const CHALLANGE = async () => {
  const dataChallangeBooks = await fetch(
    "https://book-yar-shar.vercel.app/api/booksChallange",
    {
      cache: "no-store",
    }
  );
  const challangeBooks = await dataChallangeBooks.json();

  if (challangeBooks.length === 0) {
    return <Hero />;
  } else {
    return <ShowChallange books={challangeBooks} />;
  }
};

const BOOKREADING = async () => {
  const dataReadingBooks = await fetch(
    "https://book-yar-shar.vercel.app/api/booksBeingRead",
    {
      cache: "no-store",
    }
  );

  const readingBooks = await dataReadingBooks.json();
  const filteredReadingBooks = readingBooks.filter(
    (book) => book.isReading === true
  );

  return (
    <BookState state="کتاب های درحال مطالعه" books={filteredReadingBooks} />
  );
};

export default function Home() {
  return (
    <>
      <section className="md:h-[87dvh]">
        <div className="container relative m-auto h-auto px-8 md:h-full">
          <Suspense fallback={<Loading />}>
            <CHALLANGE />
          </Suspense>
        </div>
      </section>
      {/* Book is being Read */}
      <section className="overflow-hidden py-10">
        <div className="m-auto px-1 xl:container">
          <Suspense fallback={<Loading />}>
            <BOOKREADING />
          </Suspense>
        </div>
      </section>
    </>
  );
}
