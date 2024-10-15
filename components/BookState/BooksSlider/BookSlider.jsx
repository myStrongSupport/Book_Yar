"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";
// import BookCard from "@/components/Card/BookCard";
const BookSlider = ({ books, className = "mySwiper", page }) => {
  return (
    <div className="w-full md:w-[95%]">
      <Swiper
        slidesPerView={1}
        grid={{
          fill: "row",
          rows: 1,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className={className}
        breakpoints={{
          540: {
            slidesPerView: 2,
          },
          958: {
            slidesPerView: 3,
          },
        }}
      >
        {books.map((book) => (
          <SwiperSlide key={book._id}>
            {/* <BookCard book={book} page={page} /> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BookSlider;
