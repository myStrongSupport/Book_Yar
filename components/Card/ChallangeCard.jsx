import { refresh } from "@/app/api/force_refresher";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChallangeCard = ({ book, children }) => {
  const [loading, setLoading] = useState(false);

  const deleteFromChallangeListHandler = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/booksChallange`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id: book._id }),
      });

      if (!res.ok) {
        throw new Error("Failed to delete the book from the challenge list");
      }

      const result = await res.json();
      toast.success("کتاب با موفقیت از چالش حذف شد.");
    } catch (err) {
      console.error(err.message);
      toast.error("حذف کتاب از چالش انجام نشد.");
    } finally {
      setLoading(false);
    }
    refresh();
  };

  return (
    <div className="mb-10 flex select-none sm:mb-0">
      <div className="vertical-text px-3 pt-5 text-end">
        <h3 className="text-lg font-semibold">{book.title}</h3>
        <p className="text-sm">{book.author}</p>
      </div>
      <div
        className="!bg-full shadow-card relative flex !h-[260px] w-[169px] flex-col items-center overflow-hidden rounded-3xl bg-primary-200 !bg-no-repeat pt-5 sm:h-auto sm:!bg-center"
        style={{ backgroundImage: `url(${book.image})` }}
      >
        {/* show bottom that delete form list */}
        {!children && (
          <div
            className="absolute -bottom-5 grid h-1/3 w-full cursor-pointer place-content-center rounded-tl-[100px] rounded-tr-[100px] bg-primary-200 text-primary-500"
            onClick={deleteFromChallangeListHandler}
          >
            {loading ? "در حال بارگذاری ...." : "حذف از چالش"}
          </div>
        )}
        {/* Children */}
        {children}
      </div>
    </div>
  );
};

export default ChallangeCard;
