import React from "react";

const NoticeDetails = ({ data }) => {
  return (
    <div className="p-5">
      <p className="text-[24px] font-[500] py-3 "> {data.title}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${data.description}`,
        }}
      />
    </div>
  );
};

export default NoticeDetails;
