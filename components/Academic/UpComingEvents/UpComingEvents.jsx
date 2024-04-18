"use client";
import Image from "next/image";
import React from "react";
import Title from "@/components/ui/Title";
import dayjs from "dayjs";
const UpComingEvents = ({ eventsInfo }) => {
  return (
    <div id="UpComingEvents" className="lg:my-16 my-5 ">
      <div className="flex items-center justify-center lg:mt-24 mt-12">
        <Title>Upcomming Events</Title>
      </div>

      <div className="lg:border lg:border-gray-200 lg:p-8  rounded-lg">
        {eventsInfo?.data?.length &&
          eventsInfo?.data?.map((event) => {
            return (
              <div
                key={event?.id}
                className=" flex items-center justify-between my-8"
              >
                <div>
                  <Title>{event?.title}</Title>
                  <p>
                    <span className="font-[500]"> Date : </span>
                    {dayjs(event?.date).format("DD MMM YYYY")}
                  </p>
                  <p>
                    <span className="font-[500]">Time : </span>({" "}
                    {dayjs(event?.start_time).format("HH:mm A")} -{" "}
                    {dayjs(event?.end_time).format("HH:mm A")} )
                  </p>
                  <div
                    dangerouslySetInnerHTML={{ __html: event?.description }}
                  />
                </div>
                <div>
                  <Image
                    width={1000}
                    height={1000}
                    alt=""
                    src={event?.image}
                    className="imageHover object-cover w-[250px] h-[250px] "
                  />
                </div>
              </div>
            );
          })}

        <div className="flex  items-center justify-center mt-8">
          <button className="border border-gray-200 px-4 py-2 rounded text-[#999]">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpComingEvents;
