import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { MdFormatListBulletedAdd } from "react-icons/md";
import ChallangeCard from "@/components/Card/ChallangeCard";
import { useState, useEffect } from "react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const ChallangeListDefault = ({ books, setDefaultLib }) => {
  const [challangebooks, setChallangeBook] = useState([]);

  // همیشه از useEffect و هوک‌ها در ابتدای کامپوننت استفاده کنید
  useEffect(() => {
    const getChallageBook = () => {
      const chaBooks = [...books];
      chaBooks.push({
        title: "کتابخانه",
        author: "اضافه کردن کتاب از کتابخانه",
        _id: "add",
        children: (
          <div
            className="add"
            onClick={() => {
              setDefaultLib(false);
            }}
          >
            <MdFormatListBulletedAdd fontSize="4rem" color="#fff" />
          </div>
        ),
      });
      setChallangeBook(chaBooks);
    };

    getChallageBook();
  }, [books]);

  // حالا از شرط books.length === 0 برای نمایش محتوا استفاده می‌کنیم
  if (books.length === 0) {
    return (
      <div className="flex h-full items-center">
        <ChallangeCard
          book={{
            title: "کتاب خانه",
            author: "اضافه کردن کتاب از کتابخانه",
            _id: "add",
          }}
        >
          <div
            className="add"
            onClick={() => {
              setDefaultLib(false);
            }}
          >
            <MdFormatListBulletedAdd fontSize="4rem" color="#fff" />
          </div>
        </ChallangeCard>
      </div>
    );
  }

  // اگر کتاب‌ها وجود داشتند، Swiper را نمایش دهید
  return (
    <div className="flex h-full items-center justify-center pt-10">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        style={{
          height: "70%",
        }}
        className="myswiper"
        breakpoints={{
          540: {
            slidesPerView: 2,
            freeMode: true,
          },
          655: {
            slidesPerView: 1,
            freeMode: true,
          },
          1000: {
            slidesPerView: 2,
            freeMode: true,
          },
        }}
      >
        {challangebooks.map((book) => {
          return (
            <SwiperSlide key={book._id}>
              <ChallangeCard key={book._id} book={book}>
                {book.children}
              </ChallangeCard>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ChallangeListDefault;
