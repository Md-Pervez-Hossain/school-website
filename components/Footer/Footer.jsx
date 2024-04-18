import React from "react";
import Gallery from "../Gallery/Gallery";
import About from "./About";
import Contact from "./Contact";
import SocialAccount from "./SocialAccount";
import OtherPages from "./OtherPages";
import Container from "../ui/Container";
import {
  fetchAboutInfo,
  fetchFooterContactInfo,
  fetchSocialMediaInfo,
} from "@/lib/fetchData";

const Footer = async () => {
  const aboutInfo = await fetchAboutInfo();
  const contactInfo = await fetchFooterContactInfo();
  const socialInfo = await fetchSocialMediaInfo();
  return (
    <div className=" bg-primary">
      <Container>
        <div className=" text-white lg:py-16 py-8 grid md:grid-cols-2 lg:grid-cols-4 lg:gap-10 gap-5">
          <About aboutInfo={aboutInfo} />
          <Contact contactInfo={contactInfo} />
          <Gallery />
          <div>
            <SocialAccount socialInfo={socialInfo} />
            <OtherPages />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
