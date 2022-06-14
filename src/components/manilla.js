import { ChevronRightIcon, StarIcon } from "@heroicons/react/solid";
import MaImg from "../assets/Screenshot.png";
import "../styles/manilla.css";
import Visa from "../assets/visaMas.png";

export default function Manilla() {
  return (
    <div className="bg-white pb-8 sm:pb-12 lg:pb-12 bground">
      <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
          <div>
            <div className="mt-20">
              <div className="mt-6 sm:max-w-xl">
                <h1 className="text-4xl font-light text-white tracking-tight sm:text-5xl">
                  Manilla
                </h1>
                <p className="mt-6 text-xl text-white">
                  The Manila city government has launched its online system for
                  a hassle-free payment of taxes, bills and documents.
                </p>
              </div>
              <form action="#" className="mt-12 sm:max-w-lg sm:w-full sm:flex">
                <div className="mt-4 sm:mt-0">
                  <a
                    type="submit"
                    className="block py-3  font-bold text-white"
                  >
                    Getting Started
                  </a>
                </div>
              </form>
              <div className="mt-6">
                <div className="inline-flex items-center divide-x divide-gray-300">
                  <div className="flex-shrink-0 flex pr-5">
                    <img src={Visa} className="" aria-hidden="true" />
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="hidden sm:block">
              {/* <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" /> */}
            </div>
            <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
              <img
                className="w-full rounded-md ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                src={MaImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
