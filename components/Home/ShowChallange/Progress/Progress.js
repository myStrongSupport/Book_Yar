import ProgressBar from "./ProgressBar";
import Link from "next/link";
const Progress = ({ percentage }) => {
  return (
    <div className="m-auto mb-10 flex md:m-0 md:mb-0">
      <h2 className="vertical-text ml-4 text-center font-bold">
        چالش کتابخوانی ماهانه
      </h2>
      {/* Show Progress Bar */}
      <div className="flex flex-col justify-center">
        <ProgressBar percentage={percentage} circleWidth="200" />
        <Link
          href="challange"
          className="z-50 m-auto mt-3 w-9/12 rounded-xl bg-white p-2 text-center shadow-xl duration-100 hover:bg-primary-200 hover:text-white"
        >
          {" "}
          پنل چالش
        </Link>
      </div>
    </div>
  );
};

export default Progress;
