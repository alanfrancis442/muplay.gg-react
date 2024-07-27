import { useState } from "react";
// interface ButtonProps {
//     label: string;
//   }
function Button({ label, url }: any) {
  const [ishover, setishover] = useState(false);
  const handleClick = () => {
    window.open(url, "_blank");
  };
  return (
    <button onClick={handleClick} className="relative transition-all">
      {/* <img src={'button_bg.png'} alt="" /> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="303"
        height="65"
        viewBox="0 0 303 65"
        fill="none"
      >
        <path
          d="M277 0.475098H0V43.4118L26.5 64.4751H170.753H303V23.1586L277 0.475098Z"
          fill={ishover ? "rgba(226, 13, 74, 1)" : "#1C1C1C"}
          onMouseOver={() => setishover(true)}
          onMouseLeave={() => setishover(false)}
          fill-opacity="0.6"
        />
      </svg>
      <p className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
        {label}
      </p>
    </button>
  );
}

export default Button;
