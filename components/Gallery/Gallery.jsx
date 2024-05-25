"use client";
import React from "react";

import Image from "next/image";

//
const Gallery = ({ photos }) => {
  console.log(photos);
  return (
    <div>
      <h2 className="text-[18px] font-[600] mb-3 text-center lg:flex ">
        Photo Gallery
      </h2>
      <div className="grid grid-cols-3 gap-5 lg:gap-4">
        {photos?.data?.length > 0 &&
          photos?.data?.map((img) => {
            return (
              <>
                <div className=" overflow-hidden rounded-md group">
                  <Image
                    sizes="(max-width: 768px) 100vw, 33vw"
                    alt=""
                    src={img.photo}
                    width="300"
                    height="300"
                    className="imageHover w-full"
                  />
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Gallery;
