import Image from "next/image";
import shelfImg from "@/assets/images/shelf.png";
import bookImg from "@/assets/images/book.png";
import Link from "next/link";
import HeroCard from "./HeroCard";
import authorImage from "@/assets/images/author.png";

HeroCard;
const Hero = () => {
  return (
    <div className="relative flex h-full w-full flex-col md:h-[90%] md:flex-row md:items-end">
      {/* Hero Title */}
      <div className="z-50 flex-1 pb-20 pt-12 md:pt-0">
        <h1 className="font-ir-bold mx-auto mb-12 max-w-xs text-center text-3xl leading-relaxed sm:text-5xl sm:leading-loose md:text-right">
          سفری به <span className="block">دنیای کتاب ها</span>
        </h1>
        <p className="mx-auto mb-12 max-w-xs text-center text-sm md:text-right">
          آیا آماده‌اید خودتان را به چالش بکشید و در یک ماه تغییرات بزرگی در
          زندگی‌تان ایجاد کنید؟
        </p>
        <Link
          href="challange"
          className="z-10 mx-auto block w-full rounded-full bg-white py-2 text-center shadow-lg duration-100 hover:bg-primary-200 hover:text-white sm:w-2/4 md:w-3/4"
        >
          شرکت در چالش
        </Link>
      </div>
      {/* Hero Book */}
      <div className="z-50 hidden w-96 sm:hidden sm:p-0 md:hidden xl:block">
        <Image src={bookImg} alt="book hero" className="w-full" priority />
      </div>
      {/* Hero introduce Author */}
      <div className="flex flex-col space-y-10 sm:flex-row sm:gap-x-14 sm:space-y-0 md:self-center">
        <HeroCard
          title="نویسنده منتخب هفته"
          author="علی عظیمی"
          collection="کالکشن"
          numberOfBooks="13 کتاب"
          image={authorImage}
        />
        <HeroCard
          title="کتاب منتخب هفته"
          bg="https://img.ketabrah.ir/img/l/6674537983770161.jpg"
        />
      </div>
      {/* Shelf Image */}
      <Image
        src={shelfImg}
        priority
        alt="my shelf image is amazing lab lab lab"
        className="absolute bottom-0 z-0 hidden w-full translate-y-[76%] sm:block md:translate-y-[49%]"
      />
    </div>
  );
};

export default Hero;
