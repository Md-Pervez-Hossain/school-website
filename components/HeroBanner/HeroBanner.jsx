"use client";
import React from "react";
import "./HeroBanner.css";
import PrimaryButton from "../Share/Button/PrimaryButton";
import Link from "next/link";
import Image from "next/image";
import Title from "../ui/Title";
import Paragraph from "../ui/Paragraph";
import Container from "../ui/Container";
const HeroBanner = ({ heroSection }) => {
  console.log(heroSection);
  // className="banner lg:min-h-[calc(100vh-130px)] min-h-[calc(500px-130px)] flex justify-center items-center py-5 text-center"
  return (
    <>
      <div className="relative">
        <Image
          width={1000}
          height={1000}
          alt=""
          src={heroSection?.image}
          className="w-full object-cover h-[270px] lg:h-auto "
        />
        <div className="text-white absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <Container className="w-1/2">
              {" "}
              <Title className="lg:text-[40px] text-[24px] font-[600]">
                {heroSection?.title}
              </Title>
              <Paragraph className="text-white">
                {heroSection?.description}
              </Paragraph>
              <Link href={heroSection?.btn_link}>
                <PrimaryButton className="mt-5 border-2 border-white">
                  {heroSection?.btn_title}
                </PrimaryButton>
              </Link>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
