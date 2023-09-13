import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dropdown = ({
  items,
  placeholder,
  overlay,
  disabled,
  selectedValue,
  setSelected,
  onClick,
}) => {
  const [key, setKey] = useState(selectedValue);
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className={`${
            disabled ? "cursor-not-allowed opacity-60" : ""
          } inline-flex h-[48px] w-[22rem] max-w-[50vw] items-center justify-between gap-x-1.5 rounded-[8px] bg-transparent px-4 py-2 text-sm font-['Source Code Pro'] font-medium text-[#dbd9d9] text-base hover:bg-[#2d2d43] border border-solid border-[#dbd9d953]`}
          disabled={disabled}
        >
          {key >= 0 && key < items.length ? (
            <div className="group flex items-start gap-3">
              {items[key].optionName}
            </div>
          ) : (
            placeholder
          )}
          <div className="mt-[1px]">
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 1.25L5 4.75L8.5 1.25"
                stroke="#5359EA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`${
            overlay ? "absolute" : ""
          } inset-x-auto z-10 mt-2 w-[22rem] max-w-[50vw] origin-top-right rounded-[8px] bg-white border-[1px] border-solid border-[#EEEEEE] shadow-[0px_10px_10px_rgba(16,10,85,0.1)]`}
        >
          <div className="py-2">
            {items.map((item, i) => {
              return (
                <Menu.Item key={item.optionName}>
                  {({ active }) => (
                    <div
                      onClick={(e) => {
                        setSelected(i);
                        setKey(i);
                        onClick(e);
                      }}
                    >
                      <div
                        className={classNames(
                          active
                            ? "bg-[#5359EA] text-[#FFFFFF] cursor-pointer"
                            : i === selectedValue
                            ? "bg-[#D8D6F5] text-[#5359EA]"
                            : "text-[#000929]",
                          "block pr-1.5 pl-4 py-3 rounded-[8px] mx-2 text-sm font-['Source Code Pro'] font-medium group flex items-start gap-3"
                        )}
                      >
                        {item.optionName}
                      </div>
                    </div>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
