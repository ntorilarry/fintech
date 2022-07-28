import React, { Component } from "react";
import Carousel from "react-elastic-carousel";

import "../styles/testimonial.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
class Testimonials extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "Bob Jacobson",
        text: "Technology and innovation are changing the marketplace, and our firm and our clients need to be informed and agile to seize these new opportunities.",
      },
      {
        id: 2,
        title: "Margaret Keane",
        text: "We are excited to tap into Plug and Play's network of entrepreneurs and startups in the FinTech arena. The collaboration will help us continue to deliver engaging technology solutions for our partners and their customers",
      },
      {
        id: 3,
        title: "Dan Flanigan",
        text: "Bremer Bank is committed to supporting visionary entrepreneurs who are developing digital solutions that can drive efficiency and enhance business growth for our clients. ",
      },
      {
        id: 4,
        title: "James Liu",
        text: "As an early-stage startup, Plug and Play truly accelerated our business and made us part of a global network. In only three months, we met dozens of corporate partners, VC’s, and members of the fintech community across the U.S. and internationally. ",
      },
      {
        id: 5,
        title: "Nikhita Iyar",
        text: "Plug and Play has been an invaluable partner and accelerator to Verrency. The robust ecosystem of corporate partners and sheer number of high value deal flow opportunities just doesn’t exist elsewhere. ",
      },
    ],
  };

  render() {
    const { items } = this.state;
    return (
      <div className="bgroundred" id="testimonials">
        <div className="max-w-7xl  py-10 mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-white py-8 text-3xl">Testimonials</h1>
          <Carousel breakPoints={breakPoints} itemPadding={[0, 20]}>
            {items.map((item) => (
              <div
                className="block h-[24rem] p-6 max-w-sm border text-center py-12 duration-300 transform rounded-xl shadow "
                key={item.id}
              >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
                  {item.title}
                </h5>
                <p class="font-normal text-white">{item.text}</p>
                {/* <p className="text-center"> {item.title}</p> */}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    );
  }
}
export default Testimonials;
