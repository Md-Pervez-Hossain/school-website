"use client";
import Image from "next/image";
import React, { useRef } from "react";

import Title from "../ui/Title";
import Paragraph from "../ui/Paragraph";
import { motion, useInView } from "framer-motion";

const Chairman = ({ chairmanData }) => {
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
    hidden: { opacity: 0, y: -200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, y: -100, scale: 0.5 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div className="grid grid-cols-3 items-center  gap-10 lg:my-16 my-5">
      <motion.div
        variants={imageVariant}
        ref={imageRef}
        initial="hidden"
        animate={imageInView ? "visible" : "hidden"}
        className="overflow-hidden group rounded-md"
      >
        <Image
          width={2000}
          height={1000}
          alt=""
          src={chairmanData?.image}
          className="imageHover w-full col-span-1"
        />
      </motion.div>
      <motion.div
        variants={parentVariant}
        ref={textRef}
        initial="hidden"
        animate={textInView ? "visible" : "hidden"}
        className="col-span-2"
      >
        <motion.div
          variants={childVariant}
          className="flex items-center justify-center md:justify-start"
        >
          <Title>{chairmanData?.message_title}</Title>
        </motion.div>
        <motion.div variants={childVariant}>
          <Paragraph>{chairmanData?.description}</Paragraph>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Chairman;
