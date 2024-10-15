import Image from "next/image";
const HeroCard = ({ title, author, collection, numberOfBooks, image, bg }) => {
  return (
    <div className="z-10 flex">
      {/* side title */}
      <div className="vertical-text px-3 pt-5 text-end text-sm">{title}</div>
      {/* Card */}
      <div
        className="shadow-card !bg-full flex h-[320px] w-full flex-col items-center overflow-hidden rounded-3xl bg-primary-200 !bg-no-repeat pt-5 sm:h-auto sm:w-[169px] sm:!bg-center"
        style={{
          background: `${bg ? `url(${bg})` : ""}`,
        }}
      >
        {/* As collection */}
        <h3 className="font-ir text-xl font-black">{author}</h3>
        <p className="mt-1 text-xl font-black">{collection}</p>
        <p className="my-2">{numberOfBooks}</p>
        <div className="h-[200px] sm:w-[120%]">
          {image && (
            <Image
              src={image}
              alt={`Author of week ${title} ${bg}`}
              className="h-full w-full"
              priority
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
