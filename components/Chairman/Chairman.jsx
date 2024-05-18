"use client";
import Image from "next/image";
import React from "react";

import Title from "../ui/Title";
import Paragraph from "../ui/Paragraph";

const Chairman = ({ chairmanData }) => {
  return (
    <div className=" flex items-center flex-wrap lg:flex-nowrap  gap-10 lg:my-16 my-5 ">
      <div className=" overflow-hidden group rounded-md">
        <Image
          width={2000}
          height={1000}
          alt=""
          src={chairmanData?.image}
          className="imageHover  "
        />
      </div>
      <div className="grow">
        <div className="flex items-center justify-center md:justify-start">
          <Title>{chairmanData?.message_title}</Title>
        </div>
        <Paragraph>{chairmanData?.description}</Paragraph>
      </div>
    </div>
  );
};

export default Chairman;
