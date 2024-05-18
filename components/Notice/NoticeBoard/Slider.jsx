"use client";
import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Slider = ({ notice }) => {
  const sliderArray = [
    {
      id: 1,
      title: "Eid ul - Adha",
      date: "11 / 16 / 2023",
      description:
        "In Bangladesh, Eid ul-Adha is a public holiday, commemorating the test of faith passed by Ibrahim according to the Koran.",
    },
    {
      id: 2,
      title: "Eid ul - Fitor",
      date: " 12 / 20 / 2023",
      description:
        "In Bangladesh, Eid ul-Adha is a public holiday, commemorating the test of faith passed by Ibrahim according to the Koran.",
    },
    {
      id: 2,
      title: "Summer 2024",
      date: "9 / 25 / 2024",
      description:
        "In Bangladesh, Eid ul-Adha is a public holiday, commemorating the test of faith passed by Ibrahim according to the Koran.",
    },
  ];

  return (
    <div className=" z-0">
      <Splide
        className="sidebarSlider"
        options={{
          type: "loop",
          arrows: true,
          autoplay: true,
          pagination: false,
          perPage: 1,
          gap: 50,
          perMove: 1,
          breakpoints: {
            640: {
              perPage: 1,
            },
          },
        }}
        aria-label="My Favorite Images"
      >
        {notice?.length &&
          notice?.map((slide) => (
            <SplideSlide key={slide?.id}>
              <div className="text-center lg:px-16 flex flex-col justify-center items-center bg-white rounded-lg shadow-md lg:py-24 py-5">
                <h2 className="bg-[#40282C] rounded-md lg:w-36 lg:h-36 w-24 h-16 text-white flex items-center justify-center ">
                  <span className=" flex items-center justify-center  lg:w-32 lg:h-32 w-24 h-16 rounded border-2 border-dashed text-[#FBC531]">
                    {slide.date}
                  </span>
                </h2>
                <p className="text-[24px] font-[500] py-3"> {slide.title}</p>
                <div dangerouslySetInnerHTML={{ __html: slide.description }} />
              </div>
            </SplideSlide>
          ))}
      </Splide>
    </div>
  );
};

export default Slider;
