"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FramerMotion = () => {
  const ref = useRef();
  const inView = useInView(ref, { triggerOnce: false });

  return (
    <div>
      <div className="flex items-center justify-center my-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -300 }}
          animate={
            inView
              ? {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 1,
                  },
                }
              : { opacity: 0, x: -300 }
          }
          className="w-[170px] h-[170px] bg-red-500 flex flex-wrap items-center justify-center gap-5"
        ></motion.div>
      </div>
    </div>
  );
};

export default FramerMotion;
