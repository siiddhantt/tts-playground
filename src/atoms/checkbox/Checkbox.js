import React from "react";
import { HiCheck } from "react-icons/hi";

const Checkbox = ({ active, title, size = "base", showBg, onClick }) => {
  const sizeArray = ["xs", "sm", "base", "lg", "xl"];

  return (
    <div onClick={onClick} role="presentation" className="w-full">
      {showBg && (
        <div
          className={
            active
              ? "mr-2 flex items-center justify-between w-max py-1.5 transition duration-300 text-white bg-[#5359EA] rounded-lg hover:cursor-pointer"
              : "mr-2 flex items-center justify-between w-max py-1.5 transition duration-300 text-neutral-900 bg-gray-100 rounded-lg hover:cursor-pointer hover:bg-gray-200"
          }
          style={{ fontFamily: "Source Code Pro" }}
        >
          <div
            className={
              active
                ? "border border-[#5359EA] mr-1.5 rounded"
                : " rounded border border-gray-400 mr-2"
            }
          >
            <HiCheck
              className={
                active
                  ? `text-white text-${sizeArray[sizeArray.indexOf(size) + 1]}`
                  : "opacity-0"
              }
            />
          </div>
          <span className={`text-${size} select-none`}>{title}</span>
        </div>
      )}
      {!showBg && (
        <div
          className={
            active
              ? "mr-2 w-full flex items-center justify-between py-1 transition duration-300 text-[#dbd9d9] rounded-lg hover:cursor-pointer"
              : "mr-2 w-full flex items-center justify-between py-1 transition duration-300 text-[#dbd9d9] rounded-lg hover:cursor-pointer"
          }
          style={{ fontFamily: "Source Code Pro" }}
        >
          <div
            className={
              active
                ? "border border-[#5359EA] bg-[#5359EA] mr-2 rounded"
                : " rounded border border-gray-300 mr-2"
            }
            style={{ fontFamily: "Source Code Pro" }}
          >
            <HiCheck
              className={`${active ? "text-white" : "opacity-0"} text-${size}`}
            />
          </div>
          <span
            className={`text-${size} select-none w-full overflow-hidden whitespace-nowrap text-ellipsis`}
          >
            {title}
          </span>
        </div>
      )}
    </div>
  );
};

export default Checkbox;
