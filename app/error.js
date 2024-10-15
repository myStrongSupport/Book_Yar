"use client";
const Error = ({ error, rest }) => {
  return (
    <div className="flex h-[86dvh] w-full items-center justify-center">
      <div className="rounded-2xl bg-primary-600 px-20 py-10">
        <h1 className="mb-3 text-3xl font-bold text-red-600">
          خطا رخ داده است{" "}
        </h1>
        <p className="mb-3 text-white">پیام خطا :</p>
        <p className="text-red-600">{error.message}</p>
      </div>
    </div>
  );
};

export default Error;
