"use client";
import React, { useRef } from "react";
import noticePic from "../../../assets/noticePic.png";
import Image from "next/image";
import Slider from "./Slider";
import Title from "@/components/ui/Title";
import { motion, useInView, useScroll } from "framer-motion";
const NoticeBoard = ({ notice }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const parentVariant = {
    hidden: { opacity: 0, y: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        // staggerChildren: 0.25,
        // delayChildren: 0.5,
      },
    },
  };
  return (
    <motion.div
      ref={ref}
      variants={parentVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
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
    </motion.div>
  );
};

export default NoticeBoard;
