"use client";
import React from "react";
import "./HeroBanner.css";
import PrimaryButton from "../Share/Button/PrimaryButton";
import Link from "next/link";
import Image from "next/image";
import Title from "../ui/Title";
import Paragraph from "../ui/Paragraph";
import Container from "../ui/Container";
import { motion } from "framer-motion";

const HeroBanner = ({ heroSection }) => {
  const obj = { a: 1 };
  const obj2 = { a: 1 };
  const result = Object.is(obj === obj2);
  console.log(result);

  const contentVarient = {
    hidden: { opacity: 0 },
    visiable: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };
  return (
    <div className="relative">
      <Image
        width={1000}
        height={1000}
        alt=""
        src={heroSection?.image}
        className="w-full object-cover h-[270px] lg:h-auto "
      />

      <motion.div
        variants={contentVarient}
        initial="hidden"
        animate="visiable"
        className="text-white absolute inset-0 flex items-center justify-center text-center"
      >
        <div>
          <motion.h2 className="lg:text-[40px] text-[24px] font-[600]">
            {heroSection?.title}
          </motion.h2>
          <motion.Paragraph className="text-white">
            {heroSection?.description}
          </motion.Paragraph>
          <motion.div>
            <Link href={heroSection?.btn_link}>
              <PrimaryButton className="mt-5 border-2 border-white">
                {heroSection?.btn_title}
              </PrimaryButton>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroBanner;
