"use client";
import Image from "next/image";
import React from "react";
import ChairmanPic from "../../../assets/chairman.png";
import Title from "@/components/ui/Title";
import Paragraph from "@/components/ui/Paragraph";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";

const ChairmanMessage = ({ chairmanData }) => {
  console.log(chairmanData);
  return (
    <Container>
      <div className=" lg:mt-16 mt-5 grid lg:grid-cols-2 lg:gap-10 gap-5 items-center ">
        <div className="text-center">
          <div className="overflow-hidden rounded-lg group">
            <Image
              sizes="(max-width: 768px) 100vw, 33vw"
              alt=""
              src={ChairmanPic}
              className="imageHover"
            />
          </div>
        </div>
        <div>
          <Title>Message From Chairman</Title>
          <Paragraph>
            {" "}
            Mosharraf Hossain School and College is an all-girls educational
            institute in Baily Road, Dhaka, Bangladesh. It has 4 campuses and
            around 25,000 students. Mosharraf Hossain School and College is one
            of the renowned educational institutes in Bangladesh. We consider
            every child as unique and so we maintain inclusive learning-teaching
            environment at every step in our great set-up. It is a fact now that
            our results are getting better in the public examinations every
            time.
          </Paragraph>
          <div className="mt-5">
            <Heading>Md. Mosharraf Hossain</Heading>
            <Paragraph>Chairman & Founder</Paragraph>
            <Paragraph>Mosharraf Hossain School and College</Paragraph>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ChairmanMessage;
