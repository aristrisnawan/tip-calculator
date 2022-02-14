import React from "react";
import logo from "../images/logo.svg";
import person from "../images/icon-person.svg";

export default function Layout() {
  return (
    <div className=" bg-blue-200 w-full tablet:px-24 tablet:pb-5 laptop:px-80">
      {/* Logo */}
      <div className="flex flex-row">
        <img src={logo} alt="" className="mx-auto mobile:py-3 mobile:my-5" />
      </div>

      <div className="mobile:w-full mobile:mb-5 bg-white mobile:rounded-t-3xl tablet:rounded-2xl tablet:pb-8 mobile:px-4">
        <form action="">
          <div className="tablet:flex tablet:flex-row tablet:justify-between tablet:pt-6">
            <div className="tablet:w-72 tablet:my-auto laptop:w-96">
              <h1 className="mobile:pt-6 tablet:pt-0 font-bold text-gray-600">
                Bill
              </h1>
              {/* Bill */}
              <div className="flex relative mobile:w-full mt-2">
                <input
                  type="number"
                  className="mobile:w-full rounded bg-blue-100 py-2 text-right px-2"
                />
                <div className="absolute left-0 bottom-0 top-0 flex flex-col justify-center items-center px-2 text-gray-600">
                  <span> $</span>
                </div>
              </div>

              {/* Select Tip */}
              <h1 className="mobile:pt-6 font-bold text-gray-600">
                Select Tip %
              </h1>
              <div className="grid mobile:grid-cols-2 tablet:grid-cols-3 mobile:gap-x-3 mobile:gap-y-2">
                <button className=" bg-[#0c3136] text-white py-2 rounded">
                  5%
                </button>
                <button className=" bg-[#0c3136] text-white py-2 rounded">
                  10%
                </button>
                <button className=" bg-[#0c3136] text-white py-2 rounded">
                  15%
                </button>
                <button className=" bg-[#0c3136] text-white py-2 rounded">
                  25%
                </button>
                <button className=" bg-[#0c3136] text-white py-2 rounded">
                  50%
                </button>
                <input
                  type="number"
                  placeholder="Custom"
                  className="rounded bg-blue-100 py-2 text-right px-2 placeholder:text-center"
                />
              </div>

              {/* Number of people  */}
              <h1 className="mobile:pt-6 font-bold text-gray-600">
                Number of People
              </h1>
              <div className="flex relative mobile:w-full mt-2">
                <input
                  type="number"
                  className="mobile:w-full rounded bg-blue-100 py-2 text-right px-2"
                />
                <div className="absolute left-0 bottom-0 top-0 flex flex-col justify-center items-center px-2 text-gray-600">
                  <img src={person} alt="" />
                </div>
              </div>
            </div>

            {/* result */}
            <div className="tablet:w-72 tablet:flex">
              <div className="mobile:w-full rounded-xl bg-[#0c3136] mobile:mt-7 tablet:my-auto mobile:px-5 tablet:h-full">
                <div className="flex flex-row mobile:pt-9 justify-between">
                  <div>
                    <p className="text-white font-bold text-sm">Tip Amount</p>
                    <p className="text-gray-600 font-bold text-sm">/ person</p>
                  </div>
                  <div className="my-auto">
                    <p className="text-[#0ead8b] font-extrabold text-2xl">
                      $4.27
                    </p>
                  </div>
                </div>
                <div className="flex flex-row mobile:py-4 justify-between">
                  <div>
                    <p className="text-white font-bold text-sm">Total</p>
                    <p className="text-gray-600 font-bold text-sm">/ person</p>
                  </div>
                  <div className="my-auto">
                    <p className="text-[#0ead8b] font-extrabold text-2xl">
                      $32.79
                    </p>
                  </div>
                </div>
                <button className="bg-[#0ead8b] w-full mobile:py-1 tablet:mt-24 tablet:mb-0 rounded mobile:mb-9 text-[#0c3136] font-bold text-xl">
                  RESET
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
