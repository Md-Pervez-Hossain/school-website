"use client";
import React from "react";
import noticePic from "../../../assets/noticePic.png";
import Image from "next/image";
import Slider from "./Slider";
import Title from "@/components/ui/Title";

const NoticeBoard = ({ notice }) => {
  console.log(notice);
  return (
    <div
      id="NoticeBoard"
      className=" lg:py-5 bg-[#FBC531] rounded-lg lg:p-5 p-3  grid grid-cols-3  gap-5 items-center"
    >
      <div className=" col-span-3 lg:col-span-1 p-3 flex items-center justify-center lg:justify-start">
        <div>
          <Title>Our Notice Board</Title>
          <Image
            style={{ objectFit: "contain" }}
            src={noticePic}
            alt=""
            className="w-[150px] lg:w-[250px]"
          />
        </div>
      </div>
      <div className=" col-span-3 lg:col-span-2 ">
        <Slider notice={notice?.data} />
      </div>
    </div>
  );
};

export default NoticeBoard;
