import AllInformation from '@/components/AllInformation/AllInformation';
import { fetchInformation } from '@/lib/fetchData';
import React from 'react';

const AllInformationPage = async () => {
  const information = await fetchInformation()
  return (
    <div>
      <AllInformation information={information} />
    </div>
  );
};

export default AllInformationPage;