"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import Image from "next/image";
import loadingGif from "@/assets/images/loading.gif";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReadAction = ({ book }) => {
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const router = useRouter();

  const deleteFromReadListHandler = async () => {
    setIsDeleteLoading(true);
    try {
      const response = await fetch(`/api/readBooks`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          _id: book._id,
        }),
      });

      if (!response.ok) {
        console.log(response);
        throw new Error("Failed to delete the book from the shelf");
      }

      const data = await response.json();
      toast.success("کتاب با موفقیت حذف شد.");
    } catch (err) {
      console.error("Error:", err);
      toast.error("حذف کتاب از قفسه انجام نشد.");
    } finally {
      setIsDeleteLoading(false);
      router.push("/bookshelf");
      router.refresh();
    }
  };

  return (
    <div className="-mr-10 mt-5">
      <button
        className="btn"
        onClick={deleteFromReadListHandler}
        disabled={isDeleteLoading}
      >
        {!isDeleteLoading && <LiaLongArrowAltLeftSolid size={30} />}
        {isDeleteLoading && (
          <Image
            src={loadingGif}
            alt="loading"
            priority
            width="10px"
            height="10px"
            className="h-8 w-8"
          />
        )}
        <span className="mr-3 text-sm"> حذف </span>
      </button>
    </div>
  );
};

export default ReadAction;
