import Heading from "@/components/ui/Heading";
import dayjs from "dayjs";
import Image from "next/image";
import React from "react";

const AllEventsDetails = ({ data }) => {
  return (
    <div className="p-5 ">
      <p className="mb-2">
        <span className="font-[500]"> Date : </span>
        {dayjs(data?.date).format("DD MMM YYYY")}
      </p>
      <p>
        <span className="font-[500]">Time : </span>({" "}
        {dayjs(data?.start_time).format("HH:mm A")} -{" "}
        {dayjs(data?.end_time).format("HH:mm A")} )
      </p>
      <Heading>{data?.title}</Heading>
      <div dangerouslySetInnerHTML={{ __html: data?.description }} />

      {data?.image && (
        <Image
          width={1000}
          height={1000}
          alt=""
          src={data?.image}
          className="  object-cover my-3 rounded-lg"
        />
      )}
    </div>
  );
};

export default AllEventsDetails;
