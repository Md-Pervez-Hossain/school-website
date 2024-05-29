"use client";
import React, { useRef } from "react";
import Title from "../ui/Title";
import Paragraph from "../ui/Paragraph";
import PrimaryButton from "../Share/Button/PrimaryButton";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const Shifts = ({ shiftsInfo }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const parentVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.25,
        delayChildren: 0.3,
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
        type: "spring",
        bounch: 0.5,
      },
    },
  };

  const childButtonVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "linear",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={parentVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="grid md:grid-cols-2 gap-5 lg:my-16"
    >
      {shiftsInfo?.data?.length &&
        shiftsInfo?.data?.map((shift) => (
          <motion.div
            key={shift?.id}
            variants={childVariant}
            className="flex flex-col items-center text-center justify-center border border-gray-200 lg:py-16 py-4 lg:px-8 px-2 rounded-lg"
          >
            <Title>{shift?.title}</Title>
            <Paragraph className="mb-5">{`${shift?.description.slice(
              0,
              150
            )}...`}</Paragraph>
            <motion.div variants={childButtonVariant}>
              {" "}
              <Link href="/academic">
                <PrimaryButton>View Details</PrimaryButton>
              </Link>
            </motion.div>
          </motion.div>
        ))}
    </motion.div>
  );
};

export default Shifts;
