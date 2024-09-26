import React, { useEffect } from "react";
import { CgClose } from "react-icons/cg";
import { CiLock, CiMail, CiUser } from "react-icons/ci";

export default function Signup({ open, handleClose }) {
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!open || keyCode !== 27) return;

      handleClose();
    };

    document.addEventListener("keydown", keyHandler);

    return () => document.removeEventListener("keydown", keyHandler);
  });
  return (
    <div
      className={`fixed left-0 top-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 ${
        open ? "block" : "hidden"
      }`}
    >
      <div className="w-full max-w-125 rounded-lg bg-white dark:bg-boxdark md:py-8 px-8 py-12">
        <div className="w-full">
          <div className="w-full p-4">
            <div>
              <div className="flex flex-row justify-between mb-1.5">
                <span className="block text-sm font-medium">
                  Experience Home away from home
                </span>

                <button onClick={handleClose}>
                  <CgClose size={20} />
                </button>
              </div>

              <h2 className="mb-9 text-xl font-bold text-black dark:text-white">
                Sign up to Homeaway
              </h2>
            </div>

            <form action="">
              <div className="mb-4">
                <label
                  htmlFor=""
                  className="mb-2.5 block text-sm font-medium text-black dark:text-white"
                >
                  Name
                </label>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-lg placeholder:text-sm border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />

                  <span className="absolute right-4 top-4">
                    <CiUser size={24} />
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor=""
                  className="mb-2.5 block text-sm font-medium text-black dark:text-white"
                >
                  Email
                </label>

                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border placeholder:text-sm border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />

                  <span className="absolute right-4 top-4">
                    <CiMail size={24} />
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor=""
                  className="mb-2.5 block font-medium text-black text-sm dark:text-white"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    type="password"
                    placeholder="6+ characters, 1 Capital Letter"
                    className="w-full rounded-lg placeholder:text-sm border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />

                  <span className="absolute right-4 top-4">
                    <CiLock size={24} />
                  </span>
                </div>
              </div>

              <div className="mb-5">
                <input
                  type="submit"
                  value="Sign Up"
                  className="w-full text-sm cursor-pointer border border-primary bg-primary p-4 rounded-lg text-white transition hover:bg-opacity-90"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
