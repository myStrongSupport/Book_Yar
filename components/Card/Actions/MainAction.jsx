"use client";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import { useState } from "react";
import loadingGif from "@/assets/images/loading.gif";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainAction = ({ book }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loadingFav, setLoadingFav] = useState(false);

  const addToShelfHandler = async () => {
    setLoading(true);

    try {
      const res = await fetch(`/api`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...book, isReading: true }),
      });

      if (!res.ok) {
        const detail = await res.json();
        throw new Error(detail.message || "Faild to add book to shelf.");
      }

      const result = await res.json();
      toast.success("کتاب با موفقیت اضافه شد.");
      setTimeout(() => router.push("/bookshelf"), 1500);
    } catch (err) {
      toast.error(err.message || "اضافه کردن کتاب به قفسه انجام نشد.");
    } finally {
      setLoading(false);
    }
  };

  const addToFavoriteShelf = async () => {
    setLoadingFav(true);

    try {
      const res = await fetch(`/api`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...book, isFavorite: true }),
      });

      if (!res.ok) {
        const detail = await res.json();
        throw new Error(detail.message || "Faild to add book to shelf.");
      }

      const result = await res.json();
      toast.success("کتاب با موفقیت علاقمندی اضافه شد.");
    } catch (err) {
      toast.error(err.message || "اضافه کردن کتاب به قفسه انجام نشد.");
    } finally {
      setLoadingFav(false);
    }
  };

  return (
    <div className="-mr-10 mt-5">
      <button className="btn" onClick={addToShelfHandler} disabled={loading}>
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
        <span className="mr-3 text-sm">اضافه به قفسه</span>
      </button>

      <button
        className="btn mt-2"
        onClick={addToFavoriteShelf}
        disabled={loadingFav}
      >
        {!loadingFav && <LiaLongArrowAltLeftSolid size={30} />}
        {loadingFav && (
          <Image
            src={loadingGif}
            alt="loading"
            priority
            width="10px"
            height="10px"
            className="h-8 w-8"
          />
        )}{" "}
        <span className="mr-3 text-sm"> علاقمندی</span>
      </button>
    </div>
  );
};

export default MainAction;
