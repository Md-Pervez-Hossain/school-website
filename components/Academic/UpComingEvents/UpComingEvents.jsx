"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Title from "@/components/ui/Title";
import dayjs from "dayjs";
import PrimaryButton from "@/components/Share/Button/PrimaryButton";
import Modal from "@/components/Share/Modal/Modal";
import EventsDetails from "./EventsDetails";
import Heading from "@/components/ui/Heading";
import Link from "next/link";
import Paragraph from "@/components/ui/Paragraph";
import { motion, useInView } from "framer-motion";
const UpComingEvents = ({ eventsInfo }) => {
  const [detailsModalId, setDetailsModalId] = useState(null);
  const ref = useRef();
  const inView = useInView(ref);

  const parentVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
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
      },
    },
  };
  return (
    <div id="UpComingEvents" className="lg:my-16 my-5 ">
      <div className="flex items-center justify-center lg:mt-24 mt-12">
        <Title>Upcomming Events</Title>
      </div>

      <motion.div
        ref={ref}
        variants={parentVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="lg:border lg:border-gray-200 lg:p-8  rounded-lg grid md:grid-cols-2  lg:grid-cols-4 gap-10"
      >
        {eventsInfo?.data?.length &&
          eventsInfo?.data?.map((event) => {
            return (
              <motion.div variants={childVariant} key={event?.id} className=" ">
                <div className="overflow-hidden group rounded-lg">
                  <Image
                    width={1000}
                    height={1000}
                    alt=""
                    src={event?.image}
                    className="imageHover object-cover w-full h-[250px] mb-3 "
                  />
                </div>
                <div>
                  <Heading>{event?.title}</Heading>
                  <Paragraph>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${event?.description.slice(0, 100)} ...`,
                      }}
                    />
                  </Paragraph>
                  <p className="mb-2">
                    <span className="font-[500]"> Date : </span>
                    {dayjs(event?.date).format("DD MMM YYYY")}
                  </p>
                  <PrimaryButton
                    onClick={() => setDetailsModalId(event)}
                    className="border-2 border-white mt-2"
                  >
                    Details
                  </PrimaryButton>
                </div>
              </motion.div>
            );
          })}
      </motion.div>
      <div className="flex  items-center justify-center mt-8">
        <Link href="/all-events">
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
          <EventsDetails
            data={detailsModalId}
            closeModal={() => setDetailsModalId(null)}
          />
        </Modal>
      )}
    </div>
  );
};

export default UpComingEvents;
