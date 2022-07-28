import React from "react";
import Cloud from "../assets/Rectangle 1852.png";
import "../styles/api.css";
import Telcos from "../assets/telcos.png";

function Api() {
  return (
    <div>
      <div className="relative pt-16 overflow-hidden api-bg" id="apis">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 " />
        <div className="relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div className="mt-6">
                  <h2
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="50"
                    data-aos-once="true"
                    className="text-4xl font-light tracking-tight text-white"
                  >
                    Mobile Money Api's
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="100"
                    data-aos-once="true"
                    className="mt-4 text-lg font-light text-white"
                  >
                    Fast, secure, & easy online payment processing. Easy
                    integration with your website or mobile app with shopping
                    cart plugins.
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="150"
                    data-aos-once="true"
                    className="mt-6"
                  >
                    <a
                      href="#"
                      className="inline-flex bg-gradient-to-r  px-4 py-2  text-base font-bold  text-white "
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-full lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src={Cloud}
                  alt="Inbox user interface"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
              <div>
                <div className="mt-6">
                  <h2
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="50"
                    data-aos-once="true"
                    className="text-4xl font-light tracking-tight text-white"
                  >
                    Integrate with your app
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="100"
                    data-aos-once="true"
                    className="mt-4 text-lg text-white font-light"
                  >
                    APIs from Stripe and PayPal are among the most common tools
                    for integrating payments into web and mobile applications.
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="150"
                    data-aos-once="true"
                    className="mt-6"
                  >
                    <a
                      href="#"
                      className="inline-flex  bg-origin-border px-4 py-2 text-base font-bold  text-white "
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
                  className="w-full lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src={Telcos}
                  alt="Customer profile user interface"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:mx-auto mt-7 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense ">
          <div className="bg-[#E62332] px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2 ">
            <div className="p-7">
              <div className="mt-6">
                <p
                  data-aos-once="true"
                  className="mt-4 text-lg text-white font-light"
                >
                  We can get clients set up in minutes and we know that’s it —
                  our payments come in on time and are automatically reconciled.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex  bg-origin-border px-4 py-2 text-base font-bold  text-white "
                  >
                    Frederick Amey, Head of Finance, Nsano
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Api;
