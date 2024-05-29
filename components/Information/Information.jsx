"use client";

import React, { useRef, useState } from "react";

import PrimaryButton from "../Share/Button/PrimaryButton";
import Title from "../ui/Title";
import Heading from "../ui/Heading";

import Modal from "../Share/Modal/Modal";
import InformationDetails from "./InformationDetails";
import Link from "next/link";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const Information = ({ information }) => {
  const [detailsModalId, setDetailsModalId] = useState(null);
  const ref = useRef();

  const inView = useInView(ref);

  const parentVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.25,
        delayChildren: 0.2,
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
    <div className="lg:my-16 my-5">
      <Title className="text-center">Information</Title>
      <motion.div
        ref={ref}
        variants={parentVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 py-8 "
      >
        {information?.data?.length > 0 &&
          information?.data?.map((info) => (
            <motion.div
              variants={childVariant}
              key={info?.id}
              className="rounded-md text-center py-8 border-2 border-gray-200 "
            >
              <Heading>{info?.title}</Heading>
              <PrimaryButton
                onClick={() => setDetailsModalId(info)}
                className="border-2 border-white"
              >
                Details
              </PrimaryButton>
            </motion.div>
          ))}
      </motion.div>
      <div className="flex items-center justify-center mt-8">
        <Link href="/all-information">
          <button className="border border-gray-200 px-4 py-2 rounded text-[#999]">
            View All
          </button>
        </Link>
      </div>

      {detailsModalId && (
        <Modal
          isOpen={detailsModalId !== null}
          closeModal={() => setDetailsModalId(null)}
          title="Information Details"
        >
          <InformationDetails
            data={detailsModalId}
            closeModal={() => setDetailsModalId(null)}
          />
        </Modal>
      )}
    </div>
  );
};

export default Information;
