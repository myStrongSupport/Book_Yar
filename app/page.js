import Hero from "@/components/Home/Hero/Hero";
import BookState from "@/components/BookState/BookState";
async function getBooks() {
  const res = await fetch(`${process.env.VERCEL_URL}/api/booksBeingRead`, {
    cache: "no-store",
  });

  return await res.json();
}

export default async function Home() {
  const readingBooks = await getBooks();

  return (
    <>
      <section className="md:h-[87dvh]">
        <div className="container relative m-auto h-auto px-8 md:h-full">
          <Hero />
        </div>
      </section>
      {/* Book is being Read */}
      <section className="overflow-hidden py-10">
        <div className="m-auto px-1 xl:container">
          <BookState state="کتاب های درحال مطالعه" books={readingBooks} />
        </div>
      </section>
    </>
  );
}
