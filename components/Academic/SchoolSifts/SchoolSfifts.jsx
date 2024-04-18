"use client";
import Paragraph from "@/components/ui/Paragraph";
import Title from "@/components/ui/Title";
import Image from "next/image";
import React from "react";

const SchoolSfifts = ({ shiftsInfo }) => {
  return (
    <div>
      {shiftsInfo?.data?.length &&
        shiftsInfo?.data?.map((shift, index) => {
          const isLeftAligned = index % 2 === 0;

          return (
            <div
              key={shift?.id}
              className=" grid lg:grid-cols-2 gap-10 items-center justify-between  lg:py-16 py-4 lg:px-8 px-2 rounded-lg "
            >
              <div className={`${isLeftAligned ? "lg:order-1" : "lg:order-2"}`}>
                <Title>{shift?.title}</Title>
                <Paragraph className="mb-5">{`${shift?.description}`}</Paragraph>
              </div>
              <div
                className={`${
                  isLeftAligned ? "lg:order-2" : "lg:order-1"
                } overflow-hidden group rounded-md`}
              >
                <Image
                  width={1000}
                  height={1000}
                  alt=""
                  src={shift?.image}
                  className="imageHover object-cover w-full "
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SchoolSfifts;
