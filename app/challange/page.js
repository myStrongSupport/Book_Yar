import FormChallange from "@/components/Challange/FormChallange";
import ChallangeList from "@/components/Challange/ChallangeList/ChallangeList";
import { Suspense } from "react";

const Challange = async () => {
  const data = await fetch("https://book-yar-shar.vercel.app/api", {
    cache: "no-store",
  });

  const dataChallange = await fetch(
    `https://book-yar-shar.vercel.app/api/booksChallange`,
    {
      cache: "no-store",
    }
  );
  const libraryBooks = await data.json();
  const challangeBooks = await dataChallange.json();

  return (
    <ChallangeList books={challangeBooks} libraryBooks={libraryBooks || []} />
  );
};

const AddChallangePage = () => {
  return (
    <section className="bg-primary-200">
      <div className="mx-auto flex flex-col px-8 xl:container md:flex-row">
        {/* Form Challange */}
        <FormChallange />

        <Suspense
          fallback={
            <div className="m-auto flex h-80 w-52 items-center justify-center">
              در حال بارگذاری کتاب‌ها...
            </div>
          }
        >
          <Challange />
        </Suspense>
      </div>
    </section>
  );
};

export default AddChallangePage;
