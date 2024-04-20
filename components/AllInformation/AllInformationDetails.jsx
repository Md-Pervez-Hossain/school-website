import React from "react";
import Title from "../ui/Title";

const AllInformationDetails = ({ data }) => {
  return (
    <div className="p-5">
      <Title>{data?.title}</Title>
      <div dangerouslySetInnerHTML={{ __html: data?.description }} />
      <a
        href={data?.attachment}
        download
        className="bg-primary text-white p-4 py-2 rounded-md inline-block mt-3"
      >
        Download
      </a>
    </div>
  );
};

export default AllInformationDetails;
