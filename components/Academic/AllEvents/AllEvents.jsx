"use client";
import PrimaryButton from "@/components/Share/Button/PrimaryButton";
import Modal from "@/components/Share/Modal/Modal";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Title from "@/components/ui/Title";
import Image from "next/image";
import React, { useState } from "react";
import AllEventsDetails from "./AllEventsDetails";
import dayjs from "dayjs";

const AllEvents = ({ eventsInfo }) => {
  const [detailsModalId, setDetailsModalId] = useState(null);
  return (
    <Container>
      <div id="UpComingEvents" className="lg:my-16 my-5 ">
        <div className="flex items-center justify-center lg:mt-24 mb-5 ">
          <Title>Upcomming Events</Title>
        </div>

        <div className="  rounded-lg grid md:grid-cols-2  lg:grid-cols-4 gap-10 ">
          {eventsInfo?.data?.length &&
            eventsInfo?.data?.map((event) => {
              return (
                <div key={event?.id} className=" ">
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
                    <p className="mb-2">
                      <span className="font-[500]"> Date : </span>
                      {dayjs(event?.date).format("DD MMM YYYY")}
                    </p>
                    <PrimaryButton
                      onClick={() => setDetailsModalId(event)}
                      className="border-2 border-white"
                    >
                      Details
                    </PrimaryButton>
                  </div>
                </div>
              );
            })}
        </div>

        {detailsModalId && (
          <Modal
            isOpen={detailsModalId !== null}
            closeModal={() => setDetailsModalId(null)}
            title="Information Details"
          >
            <AllEventsDetails
              data={detailsModalId}
              closeModal={() => setDetailsModalId(null)}
            />
          </Modal>
        )}
      </div>
    </Container>
  );
};

export default AllEvents;
