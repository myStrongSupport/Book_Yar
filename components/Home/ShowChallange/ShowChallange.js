import Image from "next/image";
import shelfImg from "@/assets/images/shelf.png";
import PinBoard from "./PinBoard";
const ShowChallange = ({ books }) => {
  return (
    <div className="relative h-full w-full md:h-[90%]">
      <h1 className="font-ka my-20 text-center text-4xl font-bold md:text-5xl">
        مدیریت کتابخانه خود با کتاب یار
      </h1>
      <PinBoard books={books} />
      <Image
        src={shelfImg}
        alt="my shelf image ha ha ha"
        className="absolute bottom-0 z-0 hidden w-full translate-y-[76%] sm:block md:translate-y-[26%]"
      />
    </div>
  );
};

export default ShowChallange;
