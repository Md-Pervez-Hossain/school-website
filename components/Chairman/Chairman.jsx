"use client";
import Image from "next/image";
import React from "react";

import Title from "../ui/Title";
import Paragraph from "../ui/Paragraph";

const Chairman = ({ chairmanData }) => {
  return (
    <div className=" grid lg:grid-cols-2 gap-10 lg:my-16 my-5 items-center">
      <div className=" overflow-hidden group rounded-md">
        <Image
          width={1000}
          height={1000}
          alt=""
          src={chairmanData?.image}
          className="imageHover object-cover "
        />
      </div>
      <div>
        <div className="flex items-center justify-center md:justify-start">
          <Title>{chairmanData?.message_title}</Title>
        </div>
        <Paragraph>{chairmanData?.description}</Paragraph>
      </div>
    </div>
  );
};

export default Chairman;
