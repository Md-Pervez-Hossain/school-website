import AllEvents from '@/components/Academic/AllEvents/AllEvents';
import { fetchEventsSection } from '@/lib/fetchData';
import React from 'react';

const AllEventPage = async () => {
  const eventsInfo = await fetchEventsSection();
  return (
    <div>
      <AllEvents eventsInfo={eventsInfo} />
    </div>
  );
};

export default AllEventPage;