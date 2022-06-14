import React from "react";
import "../styles/payments.css";
import  Payimg from "../assets/Group 236.png";
import Carousel from "./carousel";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Payments() {
  return (
    <div className="relative bgroundred">
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-3xl tracking-tight font-semibold text-white sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
              <span className="block xl:inline font-light">
                Because payments
              </span>{" "}
              <span className="block  xl:inline font-light">
                should be easy
              </span>
            </h1>
            <p className="mt-3 mb-4 max-w-md mx-auto text-lg text-white sm:text-xl md:mt-5 md:max-w-3xl">
              we offer you a wide range of options
            </p>
            <div class="relative text-gray-600 mb-10">
              <input
                type="search"
                name="serch"
                placeholder="Search"
                class="bg-white h-10 px-5 pr-10  text-sm focus:outline-none"
              />
              <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
                <svg
                  class="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  style={{
                    enableBackground: "new 0 0 56.966 56.966",
                    xmlSpace: "preserve",
                    width: "685Px",
                  }}
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
            <Carousel/>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full Pay-cont">
          <img
            className="absolute inset-0  mt-20 object-cover Pay-img"
            src={Payimg}
            alt=""
          />
        </div>
      </main>
    </div>
  );
}
