import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();


  return (
    <div>
      <div className=" bg-white gap-4  w-[min(1280px,94%)] min-h-full flex  justify-center align-center mx-auto py-9 pb-14 bg-linear-to-br from-gray-900 via-gray-800 to-black rounded-lg max-[680px]:w-[min(1280px,96%)] max-[680px]:py-6 max-[680px]:pb-10 max-[480px]:w-full max-[480px]:py-4 max-[480px]:px-0 items-center  px-4 text-center">
        <div>
          <div className="relative w-full h-48 flex  items-center justify-center mb-8">
            <div className="relative z-10 bg-gray-50 rounded-lg w-24 h-28 flex flex-col items-center justify-center shadow-sm border border-gray-100 -mt-4">
              <div className="absolute top-0 right-0 w-5 h-5 bg-gray-200 rounded-bl-md rounded-tr-lg" />
              <span className="text-2xl font-bold text-indigo-900">404</span>
              <div className="mt-2 w-14 h-1 rounded bg-gray-200" />
              <div className="mt-1.5 w-10 h-1 rounded bg-gray-200" />
            </div>
            <div className="absolute bottom-10 right-16 z-20">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <circle
                  cx="18"
                  cy="18"
                  r="12"
                  stroke="#9ca3af"
                  strokeWidth="3.5"
                  fill="white"
                />
                <line
                  x1="27"
                  y1="27"
                  x2="40"
                  y2="40"
                  stroke="#9ca3af"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-white-700 mb-3">
            Page Not Found
          </h1>
          <p className="text-sm sm:text-base text-gray-400 max-w-xs leading-relaxed mb-8">
            We're sorry, the page you requested could not be found. Please go
            back to the homepage.
          </p>
          <button
            onClick={() => navigate("/home")}
            className="bg-indigo-950 hover:bg-indigo-800 active:scale-95 text-white text-sm font-bold tracking-widest uppercase px-10 py-3.5 rounded-full transition-all duration-200"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
