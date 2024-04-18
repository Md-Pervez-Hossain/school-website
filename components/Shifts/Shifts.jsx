"use client";
import React from "react";
import MorningShift from "./MorningShift";
import EveningShift from "./EveningShift";
import Title from "../ui/Title";
import Paragraph from "../ui/Paragraph";
import PrimaryButton from "../Share/Button/PrimaryButton";
import Link from "next/link";

const Shifts = ({ shiftsInfo }) => {
  return (
    <div className=" grid md:grid-cols-2 gap-5 lg:my-16  ">
      {/* <MorningShift />
      <EveningShift /> */}

      {shiftsInfo?.data?.length &&
        shiftsInfo?.data?.map((shift) => {
          return (
            <div
              key={shift?.id}
              className="flex flex-col items-center text-center justify-center border border-gray-200 lg:py-16 py-4 lg:px-8 px-2 rounded-lg "
            >
              <Title>{shift?.title}</Title>
              <Paragraph className="mb-5">{`${shift?.description.slice(
                0,
                150
              )}...`}</Paragraph>
              <Link href="/academic">
                <PrimaryButton>View Details</PrimaryButton>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Shifts;

{
  /*  */
}
