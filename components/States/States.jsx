"use client";
import Image from "next/image";
import "./States.css";
import teacherImage from "../../assets/teacher.svg";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const States = () => {
  const [counterStage, setCounterStage] = useState(false);
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
    >
      <ScrollTrigger
        onEnter={() => setCounterStage(true)}
        onExit={() => setCounterStage(false)}
      >
        <div className=" statesBanner h-[500px] flex items-center justify-center rounded-md ">
          <div className=" grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-36 p-5">
            <div className=" flex flex-col items-center justify-center text-center  text-white">
              <div className="border-2 border-[#999] p-5 rounded-full mb-3 overflow-hidden group">
                <Image
                  src={teacherImage}
                  alt=""
                  className="imageHover lg:w-[60px] lg:h-[60px] w-[30px] h-[30px]"
                />
              </div>
              <div>
                <h2 className="lg:text-[32px] text-[24px] font-[400] ">
                  {counterStage && <CountUp duration={2} start={0} end={50} />}{" "}
                  +
                </h2>
                <p className="lg:text-base text-[14px] ">Teachers</p>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center text-center  text-white">
              <div className="border-2 border-[#999] p-5 rounded-full mb-3">
                <Image
                  src={teacherImage}
                  alt=""
                  className="imageHover lg:w-[60px] lg:h-[60px] w-[30px] h-[30px]"
                />
              </div>
              <div>
                <h2 className="lg:text-[32px] text-[24px] font-[400]">
                  {counterStage && (
                    <CountUp duration={2} start={0} end={1500} />
                  )}
                  +
                </h2>
                <p className="lg:text-base text-[14px] ">Students</p>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center text-center  text-white">
              <div className="border-2 border-[#999] p-5 rounded-full mb-3">
                <Image
                  src={teacherImage}
                  alt=""
                  className="imageHover lg:w-[60px] lg:h-[60px] w-[30px] h-[30px]"
                />
              </div>
              <div>
                <h2 className="lg:text-[32px] text-[24px] font-[400]">
                  {counterStage && <CountUp duration={2} start={0} end={94} />}{" "}
                  %
                </h2>
                <p className="lg:text-base text-[14px] ">Success</p>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center text-center  text-white">
              <div className="border-2 border-[#999] p-5 rounded-full mb-3">
                <Image
                  src={teacherImage}
                  alt=""
                  className="imageHover lg:w-[60px] lg:h-[60px] w-[30px] h-[30px]"
                />
              </div>
              <div>
                <h2 className="lg:text-[32px] text-[24px] font-[400]">
                  {" "}
                  {counterStage && (
                    <CountUp duration={2} start={0} end={2019} />
                  )}{" "}
                </h2>
                <p className="lg:text-base text-[14px] ">The Year Founded</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </motion.div>
  );
};

export default States;
