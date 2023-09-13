import React, { memo } from "react";

const appearances = {
  primary:
    "flex flex-row active:scale-95 cursor-pointer transition ease-in-out duration-300 justify-center items-center rounded-[8px] not-italic font-bold text-white text-center relative",
  white:
    "flex flex-row active:scale-95 cursor-pointer transition ease-in-out duration-300 justify-center items-center border-solid border-2 border-[#EEEEEE] rounded-[8px] not-italic font-bold text-gray-900 text-center relative",
  dark: "flex flex-row active:scale-95 cursor-pointer transition ease-in-out duration-300 justify-center items-center rounded-[8px] not-italic font-bold text-white text-center relative",
  ghost:
    "flex flex-row active:scale-95 cursor-pointer hover:bg-gray-50 transition ease-in-out duration-300 justify-center items-center border-solid border-[1px] border-[#dbd9d9] rounded-[8px] not-italic font-bold text-[#dbd9d9] hover:text-neutral-900 text-center relative",
};

const colors = {
  primary: "#5359EA",
  white: "#FFFFFF",
  dark: "#111827",
  ghost: "",
};

const sizes = {
  sm: "gap-2 min-w-[79px] h-10 text-sm px-4 py-2.5",
  md: "gap-2.5 min-w-[102px] h-12 text-base px-6 py-3",
  lg: "gap-2.5 min-w-[118px] h-14 text-base px-8 py-4",
};

const ButtonComponent = ({
  appearance,
  type,
  size,
  leftIcon,
  rightIcon,
  children,
  onClick,
}) => {
  return (
    <button
      className={`${appearances[appearance]} ${sizes[size]}`}
      style={{ backgroundColor: colors[appearance] }}
      type={type === "button" ? "button" : "submit"}
      onClick={onClick}
    >
      <div className="group flex items-center justify-evenly gap-2">
        {leftIcon}
        <div className="">{children}</div>
        {rightIcon}
      </div>
    </button>
  );
};

export default memo(ButtonComponent);
