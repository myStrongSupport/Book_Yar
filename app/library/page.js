import { Suspense } from "react";
import Loading from "@/components/Loading/loading";
import SearchLibrary from "@/components/SearchLibrary/SearchLibrary";

const LibraryPage = async () => {
  const data = await fetch("https://book-yar-shar.vercel.app/api");
  const books = await data.json();
  return (
    <section>
      <div className="mx-auto max-w-7xl px-7 py-12">
        <Suspense fallback={<Loading />}>
          <SearchLibrary bookLibrary={books} />
        </Suspense>
      </div>
    </section>
  );
};

export default LibraryPage;
