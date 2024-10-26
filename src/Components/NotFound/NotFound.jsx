import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="flex items-center flex-wrap max-h-full  text-center">
        <div className="w-full lg:w-1/2">
          <h2 className="mb-8 font-extrabold text-9xl text-gray-400">
            <img
              src="https://img.freepik.com/free-psd/close-up-woman-with-donut_23-2149144459.jpg?t=st=1729909122~exp=1729912722~hmac=e7246e721a2184be60a5abd12b16959cb1f7f66d8440b3d4d9f8d2e40879a0f7&w=740"
              alt=""
            />
          </h2>
        </div>
        <div className="w-full lg:w-1/2">
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 text-gray-600">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            to={"/"}
            rel="noopener noreferrer"
            className="px-8 py-3 font-semibold rounded bg-[#629584] text-gray-50"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </>
  );
}
