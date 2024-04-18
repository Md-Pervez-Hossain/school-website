import React from "react";
import NoticeBoard from "./NoticeBoard/NoticeBoard";
const Notice = ({ notice }) => {
  return (
    <div>
      <NoticeBoard notice={notice} />
    </div>
  );
};

export default Notice;
