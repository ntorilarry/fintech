import React from "react";
import Circle from "../assets/circle.png";

function Churches() {
  return (
    <div>
      <div className="relative pt-16 pb-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
        />
        <div className="relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"></div>
        </div>
        <div className="mt-24">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
              <div>
                <div className="mt-6">
                  <h2 className="text-4xl font-light tracking-tight text-[#1B1464]">
                    Church Management System
                  </h2>
                  <p className="mt-4 text-lg text-[#1B1464]">
                    Your all-in-one church management software. A reliable
                    church management software is essential for any growing
                    church.
                  </p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-flex   py-2  text-base font-medium rounded-md shadow-sm text-[#1B1464]"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
              <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-full   lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src={Circle}
                  alt="Customer profile user interface"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Churches;
