import React from "react";
import { createPopper } from "@popperjs/core";
import Link from 'next/link'


const Dropdown = ({ color }) => {

  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  let bgColor;
  color === "white"
    ? (bgColor = "bg-transparent")
    : (bgColor = "bg-" + color + "-500");
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                "text-white rounded-md font-bold uppercase text-sm px-6 py-3 border-4 border-white shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " +
                bgColor
              }
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              {color === "white" ? "Settings" : color + " Settings"}
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              <Link href="/profile" passHref>
                <div
                  className={
                    "text-sm py-2 cursor-pointer px-4 font-bold block w-full whitespace-nowrap bg-transparent " +
                    (color === "white" ? " text-black" : "text-white")
                  }
                 
                >
                  Profile
                </div>
              </Link>
              <Link href="/profile" passHref>
              <div
                className={
                  "text-sm py-2 px-4 cursor-pointer font-bold block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-black" : "text-white")
                }
              >
                My likes
              </div>
              </Link>
              <Link href="/profile" passHref>
              <div
                className={
                  "text-sm py-2 px-4 cursor-pointer font-bold block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-black" : "text-white")
                }
              >
                My Playlists
              </div>
              </Link>

              <div className="h-0 my-2 border border-solid border-t-0 border-slate-800 opacity-25" />
              <Link href="/auth/login" passHref>
              <div
                className={
                  "text-sm py-2 px-4 cursor-pointer font-bold block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-black" : "text-white")
                }
              >
                Logout
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function DropdownRender() {
  return (
    <>
      <Dropdown color="white" />
    </>
  );
}
