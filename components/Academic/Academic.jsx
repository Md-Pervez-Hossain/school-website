import React from "react";

import UpComingEvents from "./UpComingEvents/UpComingEvents";
import Calender from "./Calender/Calender";
import Container from "../ui/Container";
import { fetchEventsSection, fetchShiftSection } from "@/lib/fetchData";
import Title from "../ui/Title";
import Paragraph from "../ui/Paragraph";
import Image from "next/image";
import SchoolSfifts from "./SchoolSifts/SchoolSfifts";

const Academic = async () => {
  const shiftsInfo = await fetchShiftSection();

  const eventsInfo = await fetchEventsSection();
  return (
    <>
      <Container>
        <div className="lg:my-16 my-5">
          <SchoolSfifts shiftsInfo={shiftsInfo} />
        </div>
        <Calender />
        <UpComingEvents eventsInfo={eventsInfo} />
      </Container>
    </>
  );
};

export default Academic;
