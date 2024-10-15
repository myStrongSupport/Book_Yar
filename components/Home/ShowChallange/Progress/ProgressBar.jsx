"use client";
const ProgressBar = ({ percentage, circleWidth }) => {
  const radius = 85;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;
  return (
    <div className="mr-5 sm:scale-125 translate-x-3 sm:translate-x-0 tr pb-5">
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="10%" stopColor="#daaa63" />
            <stop offset="50%" stopColor="#967349" />
            <stop offset="100%" stopColor="#7a4f37" />
          </linearGradient>
        </defs>
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="fill-none stroke-[#ddd]"
        />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
          className="circle-progress"
          stroke="url(#gradient)"
        />
        <text
          x="50%"
          y="50%"
          dy=".3rem"
          textAnchor="middle"
          className="text-xl text-white"
          stroke="url(#gradient)"
        >
          میزان پیشرفت
        </text>
        <text
          x="50%"
          y="70%"
          dy=".3rem"
          textAnchor="middle"
          className="text-xl text-white"
          stroke="url(#gradient)"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default ProgressBar;
