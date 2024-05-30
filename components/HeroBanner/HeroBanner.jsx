"use client";
import React, { useRef } from "react";
import "./HeroBanner.css";
import PrimaryButton from "../Share/Button/PrimaryButton";
import Link from "next/link";
import Image from "next/image";

import { motion, useInView } from "framer-motion";
import Container from "../ui/Container";

const HeroBanner = ({ heroSection }) => {
  const ref = useRef();
  const inView = useInView(ref);
  const contentVarient = {
    hidden: { opacity: 0, y: -100, scale: 0.8 },
    visiable: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
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
      <Container className="lg:w-1/2">
        <motion.div
          ref={ref}
          variants={contentVarient}
          initial="hidden"
          animate={inView ? "visiable" : "hidden"}
          className="text-white absolute inset-0 flex items-center justify-center text-center"
        >
          <div>
            <motion.h2 className="lg:text-[40px] text-[24px] font-[600]">
              {heroSection?.title}
            </motion.h2>
            <motion.Paragraph className="text-white ">
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
      </Container>
    </div>
  );
};

export default HeroBanner;
