"use client";
import React, { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Modal from "@/components/Share/Modal/Modal";
import NoticeDetails from "./NoticeDetails";

const Slider = ({ notice }) => {
  const [detailsModalId, setDetailsModalId] = useState(null);

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
        {notice?.length > 0 &&
          notice?.map((slide) => (
            <SplideSlide key={slide?.id}>
              <div className="text-center lg:px-16 flex flex-col justify-center items-center bg-white rounded-lg shadow-md lg:py-24 py-5">
                <h2 className="bg-[#40282C] rounded-md lg:w-36 lg:h-36 w-24 h-16 text-white flex items-center justify-center ">
                  <span className=" flex items-center justify-center  lg:w-32 lg:h-32 w-24 h-16 rounded border-2 border-dashed text-[#FBC531]">
                    {slide.date}
                  </span>
                </h2>
                <p className="text-[24px] font-[500] pt-3"> {slide.title}</p>
                {slide.description && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${slide.description.slice(0, 150)}...`,
                    }}
                    className="px-5 mt-5"
                  />
                )}

                <button
                  onClick={() => setDetailsModalId(slide)}
                  className="  mt-3 px-4 py-2 border-2 border-primary rounded-md"
                >
                  Details
                </button>
              </div>
            </SplideSlide>
          ))}
      </Splide>
      {detailsModalId && (
        <Modal
          isOpen={detailsModalId !== null}
          closeModal={() => setDetailsModalId(null)}
          title="Notice Details"
        >
          <NoticeDetails
            data={detailsModalId}
            closeModal={() => setDetailsModalId(null)}
          />
        </Modal>
      )}
    </div>
  );
};

export default Slider;
