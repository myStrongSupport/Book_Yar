import Hero from "@/components/Home/Hero/Hero";

export default async function Home() {
  return (
    <>
      <section className="md:h-[87dvh]">
        <div className="container relative m-auto h-auto px-8 md:h-full">
          <Hero />
        </div>
      </section>
      {/* Book is being Read */}
      <section className="overflow-hidden py-10">
        <div className="m-auto px-1 xl:container"></div>
      </section>
    </>
  );
}
