import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";

export default function ProfileDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);

  const handleToggleLogin = () => {
    setLogin((prev) => !prev);
  }
  const handleToggleSignup = () => {
    setSignup((prev) => !prev);
  }

  const trigger = useRef(null);
  const dropdown = useRef(null);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;

      if (
        !dropdown ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      ) {
        return;
      }

      setDropdownOpen(false);
    };

    document.addEventListener("click", clickHandler);

    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;

      setDropdownOpen(false);
    };

    document.addEventListener("keydown", keyHandler);

    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative flex">
      <button
        className="text-[#98A6AD] hover:text-body"
        ref={trigger}
        onClick={() => setDropdownOpen((prev) => !prev)}
      >
        <div
          className="p-2 rounded-full border border-stroke flex flex-row items-center space-x-2"
        >
          <RxHamburgerMenu size={20} />
          <FaUserCircle size={24} />
        </div>
      </button>

      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 top-full z-40 w-40 space-y-1 rounded-lg border border-stroke bg-white p-1.5 shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <button onClick={handleToggleLogin} className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4">
          Login
        </button>
        <button onClick={handleToggleSignup} className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4">
          Signup
        </button>
      </div>

      {login && <Login open={login} handleClose={handleToggleLogin} />}
      {signup && <Signup open={signup} handleClose={handleToggleSignup} />}
    </div>
  );
}
