import React from "react";
import "../styles/hero.css";
import Logo from "../assets/Artboard 28.png";
import Himg from "../assets/Group 222.png";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import AOS from "aos";
import "aos/dist/aos.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Hero() {
  AOS.init();

  // You can also pass an optional settings object
  // below listed default settings
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
  return (
    <div className="relative  bground">
      <Popover className="relative  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center  md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img className="" src={Logo} alt="" />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <a
                href="/#home"
                className="text-base font-medium text-white hover:text-gray-500"
              >
                Home
              </a>
              <a
                href="/#partners"
                className="text-base font-medium text-white hover:text-gray-500"
              >
                Partners
              </a>

              <a
                href="/#manilla"
                className="text-base font-medium text-white hover:text-gray-500"
              >
                Manilla
              </a>
              <a
                href="/#churches"
                className="text-base font-medium text-white hover:text-gray-500"
              >
                Churches
              </a>
              <a
                href="/#apis"
                className="text-base font-medium text-white hover:text-gray-500"
              >
                Api's
              </a>
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href="#"
                className="whitespace-nowrap text-base font-medium text-white hover:text-gray-500"
              >
                Sign in
              </a>
              <a
                href="#"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  {/* <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="Workflow"
                    />
                  </div> */}
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a
                    href="/#home"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Home
                  </a>
                  <a
                    href="/#partners"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Partners
                  </a>
                  <a
                    href="/#manilla"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Manilla
                  </a>
                  <a
                    href="/#churches"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Churches
                  </a>
                  <a
                    href="/#apis"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Api's
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Sign up
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <main className="lg:relative" id="home">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay="50"
              data-aos-once="true"
              className="text-3xl tracking-tight font-semibold text-white sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl"
            >
              <span className="block xl:inline">Grow your revenue</span>{" "}
              <span className="block  xl:inline font-light">
                with our digital payment services
              </span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              data-aos-delay="100"
              data-aos-once="true"
              className="mt-3 max-w-md mx-auto text-lg text-white sm:text-xl md:mt-5 md:max-w-3xl"
            >
              Accept payments, protect revenue, and control your finances with a
              single platform.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-easing="ease-in-out"
                data-aos-delay="150"
                data-aos-once="true"
                className="rounded-md shadow"
              >
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#E62332] hover:bg-[#981822] md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-80 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0  object-cover H-img"
            src={Himg}
            alt=""
          />
        </div>
        <div className="bg-[#1b1464]" id="partners">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                  alt="Tuple"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                  alt="Mirage"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                  alt="StaticKit"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                  alt="Transistor"
                />
              </div>
              <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                  alt="Workcation"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
