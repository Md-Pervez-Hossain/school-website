"use client";
import React, { useRef } from "react";
import ContactForm from "./ContactForm";
import Title from "../ui/Title";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import { motion, useInView } from "framer-motion";

const ContactUs = () => {
  const ref = useRef();
  const inView = useInView(ref);

  const childVarient = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <div className="lg:my-16 my-5 overflow-hidden ">
      <div className="flex items-center justify-center">
        <Title>Contact us</Title>
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 300 }}
        animate={
          inView
            ? {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1,
                },
              }
            : { opacity: 0, x: 300 }
        }
      >
        <div className="grid  xl:grid-cols-3 gap-5">
          <motion.div
            variants={childVarient}
            className="hover:bg-primary hover:text-grayText transition-all duration-300 ease-in-out cursor-pointer border border-gray-300 rounded-md lg:p-8 p-4   text-center"
          >
            <div className="lg:mb-3 flex items-center justify-center hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="101"
                height="100"
                viewBox="0 0 101 100"
                fill="none"
                className="w-[70px] lg:w-[120px]"
              >
                <circle
                  cx="50.6699"
                  cy="50"
                  r="49"
                  stroke="#A65132"
                  stroke-width="2"
                />
                <path
                  d="M70.6699 44V56C70.6699 61 69.6699 64.5 67.4299 66.76L54.6699 54L70.1299 38.54C70.4899 40.12 70.6699 41.92 70.6699 44Z"
                  stroke="#A65132"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M70.1299 38.54L39.2099 69.46C33.1899 68.08 30.6699 63.92 30.6699 56V44C30.6699 34 34.6699 30 44.6699 30H56.6699C64.5899 30 68.7499 32.52 70.1299 38.54Z"
                  stroke="#A65132"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M67.43 66.76C65.17 69 61.67 70 56.67 70H44.67C42.59 70 40.79 69.82 39.21 69.46L54.67 54L67.43 66.76Z"
                  stroke="#A65132"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M39.1495 41.9599C40.5095 36.0999 49.3095 36.0999 50.6695 41.9599C51.4495 45.3999 49.2895 49.3199 47.3895 51.1199C46.0095 52.4399 43.8295 52.4399 42.4295 51.1199C40.5295 49.3199 38.3495 45.3999 39.1495 41.9599Z"
                  stroke="#A65132"
                  stroke-width="3"
                />
                <path
                  d="M44.8591 43.4H44.8771"
                  stroke="#A65132"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <Heading className="hover:text-grayText">School Address</Heading>
            <Paragraph className="hover:text-grayText">
              Lakeside, Road-104, Gulshan-2, Dhaka Bangladesh
            </Paragraph>
          </motion.div>
          <motion.div
            variants={childVarient}
            className="hover:bg-primary hover:text-grayText transition-all duration-300 ease-in-out cursor-pointer border border-gray-300 rounded-md lg:p-8 p-4  text-center"
          >
            <div className="lg:mb-3 flex items-center justify-center">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="101"
                height="100"
                viewBox="0 0 101 100"
                fill="none"
                className="w-[70px] lg:w-[120px]"
              >
                <circle
                  cx="50.6699"
                  cy="50"
                  r="49"
                  stroke="#A65132"
                  stroke-width="2"
                />
                <path
                  d="M70.6699 44V56C70.6699 61 69.6699 64.5 67.4299 66.76L54.6699 54L70.1299 38.54C70.4899 40.12 70.6699 41.92 70.6699 44Z"
                  stroke="#A65132"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M70.1299 38.54L39.2099 69.46C33.1899 68.08 30.6699 63.92 30.6699 56V44C30.6699 34 34.6699 30 44.6699 30H56.6699C64.5899 30 68.7499 32.52 70.1299 38.54Z"
                  stroke="#A65132"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M67.43 66.76C65.17 69 61.67 70 56.67 70H44.67C42.59 70 40.79 69.82 39.21 69.46L54.67 54L67.43 66.76Z"
                  stroke="#A65132"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M39.1495 41.9599C40.5095 36.0999 49.3095 36.0999 50.6695 41.9599C51.4495 45.3999 49.2895 49.3199 47.3895 51.1199C46.0095 52.4399 43.8295 52.4399 42.4295 51.1199C40.5295 49.3199 38.3495 45.3999 39.1495 41.9599Z"
                  stroke="#A65132"
                  stroke-width="3"
                />
                <path
                  d="M44.8591 43.4H44.8771"
                  stroke="#A65132"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <Heading className="hover:text-grayText">Email Address</Heading>
            <Paragraph className="hover:text-grayText">
              Customer Service: mhsc926@gmail.com
            </Paragraph>
          </motion.div>
          <motion.div
            variants={childVarient}
            className="hover:bg-primary hover:text-grayText transition-all duration-300 ease-in-out cursor-pointer border border-gray-300 rounded-md lg:p-8 p-4 text-center "
          >
            <div className="lg:mb-3 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="101"
                height="100"
                viewBox="0 0 101 100"
                fill="none"
                className="w-[70px] lg:w-[120px]"
              >
                <circle
                  cx="50.6699"
                  cy="50"
                  r="49"
                  stroke="#A65132"
                  stroke-width="2"
                />
                <path
                  d="M70.6699 44V56C70.6699 61 69.6699 64.5 67.4299 66.76L54.6699 54L70.1299 38.54C70.4899 40.12 70.6699 41.92 70.6699 44Z"
                  stroke="#A65132"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M70.1299 38.54L39.2099 69.46C33.1899 68.08 30.6699 63.92 30.6699 56V44C30.6699 34 34.6699 30 44.6699 30H56.6699C64.5899 30 68.7499 32.52 70.1299 38.54Z"
                  stroke="#A65132"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M67.43 66.76C65.17 69 61.67 70 56.67 70H44.67C42.59 70 40.79 69.82 39.21 69.46L54.67 54L67.43 66.76Z"
                  stroke="#A65132"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M39.1495 41.9599C40.5095 36.0999 49.3095 36.0999 50.6695 41.9599C51.4495 45.3999 49.2895 49.3199 47.3895 51.1199C46.0095 52.4399 43.8295 52.4399 42.4295 51.1199C40.5295 49.3199 38.3495 45.3999 39.1495 41.9599Z"
                  stroke="#A65132"
                  stroke-width="3"
                />
                <path
                  d="M44.8591 43.4H44.8771"
                  stroke="#A65132"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <Heading className="hover:text-grayText">Contact Number</Heading>
            <Paragraph className="hover:text-grayText">
              Customer Service: 01583036920 01603628419
            </Paragraph>
          </motion.div>
        </div>
        <div className="lg:my-16 my-5">
          <ContactForm />
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
