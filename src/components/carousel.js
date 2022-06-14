import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <div class="bg-[#ED6E2D] p-6 rounded-lg">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10"></div>
          <p class="leading-relaxed text-base">
            Charge per transaction for first $100,000 is $1
          </p>
        </div>
      </div>
      <div>
        <div class="bg-white p-6 rounded-lg border">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10"></div>
          <p class="leading-relaxed text-base">
            Charge per transaction for first $100,000 is $1
          </p>
        </div>
      </div>
      <div>
        <div class="bg-[#ED6E2D] p-6 rounded-lg">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10"></div>
          <p class="leading-relaxed text-base">
            Charge per transaction for first $100,000 is $1
          </p>
        </div>
      </div>
      <div>
        <div class="bg-white p-6 rounded-lg border">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10"></div>
          <p class="leading-relaxed text-base">
            Charge per transaction for first $100,000 is $1
          </p>
        </div>
      </div>
      <div>
        <div class="bg-[#ED6E2D] p-6 rounded-lg">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10"></div>
          <p class="leading-relaxed text-base">
            Charge per transaction for first $100,000 is $1
          </p>
        </div>
      </div>
      <div>
        <div class="bg-white p-6 rounded-lg border">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10"></div>
          <p class="leading-relaxed text-base">
            Charge per transaction for first $100,000 is $1
          </p>
        </div>
      </div>
    </Slider>
  );
}
