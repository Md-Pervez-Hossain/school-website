import React from "react";

import UpComingEvents from "./UpComingEvents/UpComingEvents";
import Container from "../ui/Container";
import { fetchEventsSection, fetchShiftSection } from "@/lib/fetchData";
import SchoolSfifts from "./SchoolSifts/SchoolSfifts";

const Academic = async () => {
  const shiftsInfo = await fetchShiftSection();
  const eventsInfo = await fetchEventsSection();
  return (
    <>
      <Container>
        <div className="lg:my-10 my-5">
          <SchoolSfifts shiftsInfo={shiftsInfo} />
        </div>
        <UpComingEvents eventsInfo={eventsInfo} />
      </Container>
    </>
  );
};

export default Academic;
