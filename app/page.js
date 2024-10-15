import BookState from "@/components/BookState/BookState";
import Hero from "@/components/Home/Hero/Hero";
import ShowChallange from "@/components/Home/ShowChallange/ShowChallange";
import Loading from "@/components/Loading/loading";
import { Suspense } from "react";

export default async function Home() {
  const dataReadingBooks = await fetch(
    "https://book-yar-shar.vercel.app/api/booksBeingRead"
  );
  const dataChallangeBooks = await fetch(
    "https://book-yar-shar.vercel.app/api/booksBeingRead"
  );
  const challangeBooks = await dataChallangeBooks.json();
  const readingBooks = await dataReadingBooks.json();
  const filteredReadingBooks = readingBooks.filter(
    (book) => book.isReading === true
  );
  return (
    <>
      <section className="md:h-[87dvh]">
        <div className="container relative m-auto h-auto px-8 md:h-full">
          <Suspense fallback={<Loading />}>
            {challangeBooks.length === 0 ? (
              <Hero />
            ) : (
              <ShowChallange books={challangeBooks} />
            )}
          </Suspense>
        </div>
      </section>
      {/* Book is being Read */}
      <section className="overflow-hidden py-10">
        <div className="m-auto px-1 xl:container">
          <Suspense fallback={<Loading />}>
            <BookState
              state="کتاب های درحال مطالعه"
              books={filteredReadingBooks}
            />
          </Suspense>
        </div>
      </section>
    </>
  );
}
