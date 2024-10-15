import ProgressBar from "./ProgressBar";
import Link from "next/link";
const Progress = ({ percentage }) => {
  return (
    <div className="m-auto mb-10 flex flex-col md:m-0 md:mb-0 sm:flex-row">
      <h2 className="sm:vertical-text sm:ml-4 sm:my-0 my-10 text-center font-bold">
        چالش کتابخوانی ماهانه
      </h2>
      {/* Show Progress Bar */}
      <div className="flex flex-col justify-center mb-8 sm:mb-0">
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
