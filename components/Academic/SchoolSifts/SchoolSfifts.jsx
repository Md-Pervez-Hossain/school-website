"use client";
import Paragraph from "@/components/ui/Paragraph";
import Title from "@/components/ui/Title";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const SchoolSfifts = ({ shiftsInfo }) => {
  const imageRef = useRef();
  const textRef = useRef();
  const imageInView = useInView(imageRef);
  const textInView = useInView(textRef);

  const parentVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.25,
        delayChildren: 0.5,
      },
    },
  };

  const childVariant = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div>
      {shiftsInfo?.data?.length &&
        shiftsInfo?.data?.map((shift, index) => {
          const isLeftAligned = index % 2 === 0;
          return (
            <div
              key={shift?.id}
              className=" grid lg:grid-cols-2 gap-10 items-center justify-between  lg:py-16 py-4  px-2 rounded-lg "
            >
              <motion.div
                variants={parentVariant}
                ref={imageRef}
                initial="hidden"
                animate={imageInView ? "visible" : "hidden"}
                className={`${isLeftAligned ? "lg:order-1" : "lg:order-2"}`}
              >
                <motion.div variants={childVariant}>
                  <Title>{shift?.title}</Title>
                </motion.div>
                <motion.div variants={childVariant}>
                  <Paragraph className="mb-5">{`${shift?.description}`}</Paragraph>
                </motion.div>
              </motion.div>
              <motion.div
                variants={imageVariant}
                ref={imageRef}
                initial="hidden"
                animate={imageInView ? "visible" : "hidden"}
                className={`${
                  isLeftAligned ? "lg:order-2" : "lg:order-1"
                } overflow-hidden group rounded-md`}
              >
                <Image
                  width={1000}
                  height={1000}
                  alt=""
                  src={shift?.image}
                  className="imageHover object-cover w-full "
                />
              </motion.div>
            </div>
          );
        })}
    </div>
  );
};

export default SchoolSfifts;
