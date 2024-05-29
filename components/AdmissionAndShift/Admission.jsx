"use client";
import Link from "next/link";
import React, { useRef } from "react";
import PrimaryButton from "../Share/Button/PrimaryButton";
import Title from "../ui/Title";
import Paragraph from "../ui/Paragraph";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
const Admission = () => {
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

  const childVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <motion.div
      ref={ref}
      variants={parentVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-[#40282C] rounded-lg lg:my-16 my-5"
    >
      <div className="text-center lg:p-16 px-5 py-10 text-white">
        <Title>Admission</Title>
        <Paragraph className="mb-5 text-grayText">
          Time to register for school is now! complete online registration for
          new and returning students. Our office is open to assist you with the
          admission process.
        </Paragraph>
        <Link href="/admission">
          <PrimaryButton className="bg-white border-2 border-white px-6 py-2 rounded  text-white">
            Apply Now
          </PrimaryButton>
        </Link>
      </div>
    </motion.div>
  );
};

export default Admission;
