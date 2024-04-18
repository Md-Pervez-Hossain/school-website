"use client";
import React from "react";
import Title from "../ui/Title";
import Paragraph from "../ui/Paragraph";
import Heading from "../ui/Heading";

const About = ({ aboutInfo }) => {
  return (
    <div>
      <Heading>{aboutInfo?.title}</Heading>
      <Paragraph className="text-center lg:text-start text-grayText">
        {aboutInfo?.description}
      </Paragraph>
      {/* <div className="mt-5">
        <h2 className="text-[18px] font-[600] mb-3  text-center lg:text-start">
          Mosharraf Hossain
        </h2>
        <Paragraph className="text-center lg:text-start text-grayText">
          Chairman & Founder Mosharraf Hossain School and College
        </Paragraph>
      </div> */}
    </div>
  );
};

export default About;
