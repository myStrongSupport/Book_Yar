"use client ";
import Image from "next/image";
import loadinging from "@/assets/images/loadingm.gif";
const loading = () => {
  return (
    <div
      style={{
        height: "96dvh",
        display: "grid",
        placeContent: "center",
      }}
    >
      <Image src={loadinging} width={0} height={0} sizes="100%" alt="loading" />
    </div>
  );
};

export default loading;
