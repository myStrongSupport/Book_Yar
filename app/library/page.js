import { Suspense } from "react";
import Loading from "@/components/Loading/loading";
import SearchLibrary from "@/components/SearchLibrary/SearchLibrary";

const BOOkS = async () => {
  const data = await fetch("http://localhost:3000/api", {
    cache: "no-store",
  });
  const books = await data.json();
  return <SearchLibrary bookLibrary={books} />;
};
const LibraryPage = async () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-7 py-12">
        <Suspense fallback={<Loading />}>
          <BOOkS />
        </Suspense>
      </div>
    </section>
  );
};

export default LibraryPage;
