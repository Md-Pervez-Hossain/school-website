"use client";
import React, { useRef } from "react";
import PrimaryButton from "../Share/Button/PrimaryButton";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Container from "../ui/Container";

const HeroBanner = ({ heroSection }) => {
  console.log(heroSection);
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
        src={heroSection?.image && heroSection?.image}
        className="w-full object-cover h-[590px] lg:h-auto"
      />
      <Container>
        <motion.div
          ref={ref}
          variants={contentVarient}
          initial="hidden"
          animate={inView ? "visiable" : "hidden"}
          className="absolute inset-0 flex items-center justify-center text-center w-full h-full lg:px-[300px] px-2 py-3"
        >
          <div>
            <motion.h2 className="lg:text-[40px] text-[24px] font-[600] text-white mb-3">
              {heroSection?.title}
            </motion.h2>
            <motion.p className="text-white leading-[28px]">
              {heroSection?.description}
            </motion.p>
            <motion.div>
              <Link href={heroSection?.btn_link ? heroSection?.btn_link : "/"}>
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
