"use client";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import { useState } from "react";
import loadingGif from "@/assets/images/loading.gif";
import Image from "next/image";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { refresh } from "@/app/api/force_refresher";

const ChallangeAction = ({ book }) => {
  const [loading, setLoading] = useState(false);

  const addToChallangeBookHandler = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/booksChallange`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...book, isInChallange: true }),
      });

      if (!res.ok) {
        throw new Error("Failed to add the book to the challenge");
      }

      const result = await res.json();
      toast.success("کتاب با موفقیت به چالش اضافه شد.");
    } catch (err) {
      console.error(err.message);
      toast.error("اضافه کردن کتاب به چالش انجام نشد.");
    } finally {
      setLoading(false);
    }
    refresh();
  };

  return (
    <div className="-mr-10 mt-5">
      <button
        className="flex items-center"
        onClick={addToChallangeBookHandler}
        disabled={loading}
      >
        {!loading && <LiaLongArrowAltLeftSolid size={30} />}
        {loading && (
          <Image
            src={loadingGif}
            alt="loading"
            priority
            width="10px"
            height="10px"
            className="h-8 w-8"
          />
        )}
        <span className="mr-3 text-sm"> اضافه به چالش </span>
      </button>
    </div>
  );
};

export default ChallangeAction;
