"use client";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import { useState } from "react";
import { useRouter } from "next/navigation";
import loadingGif from "@/assets/images/loading.gif";
import Image from "next/image";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BeingReadAction = ({ book }) => {
  const [isReadLoading, setIsReadLoading] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const router = useRouter();

  const deleteFromShelfHandler = async () => {
    setIsDeleteLoading(true);
    try {
      const response = await fetch(`/api/booksBeingRead`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          _id: book._id,
        }),
      });

      if (!response.ok) {
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

  const addToReadListHandler = async () => {
    setIsReadLoading(true);
    try {
      const response = await fetch(`/api/booksBeingRead`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          ...book,
          isRead: true,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add the book to the shelf");
      }

      const data = await response.json();
      toast.success("کتاب خوانده شد");
    } catch (err) {
      console.error("Error:", err);
      toast.error("اضافه کردن کتاب به قفسه خوانده شده انجام نشد.");
    } finally {
      setIsReadLoading(false);
      router.push("/bookshelf");
      router.refresh();
    }
  };

  return (
    <div className="-mr-10 mt-5">
      <button
        className="btn"
        onClick={addToReadListHandler}
        disabled={isReadLoading}
      >
        {!isReadLoading && <LiaLongArrowAltLeftSolid size={30} />}
        {isReadLoading && (
          <Image
            src={loadingGif}
            alt="loading"
            priority
            width="10px"
            height="10px"
            className="h-8 w-8"
          />
        )}
        <span className="mr-3 text-sm"> خوانده شده </span>
      </button>
      <button
        className="btn mt-2"
        onClick={deleteFromShelfHandler}
        disabled={isReadLoading}
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
        )}{" "}
        <span className="mr-3 text-sm">حذف</span>
      </button>
    </div>
  );
};

export default BeingReadAction;
