import Image from "next/image";
import loader from "@/assets/images/loaderdata.gif";
const Loading = () => {
  return (
    <div className="flex h-full w-full items-center justify-center pb-10">
      <Image src={loader} priority />
    </div>
  );
};

export default Loading;
