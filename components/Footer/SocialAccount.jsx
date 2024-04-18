"use client";
import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";

const SocialAccount = ({ socialInfo }) => {
  return (
    <div>
      <h2 className="text-[18px] font-[600] mb-3 text-center lg:flex ">
        Contact info
      </h2>

      {socialInfo?.data?.length &&
        socialInfo?.data?.map((socialInfo) => {
          return (
            <div key={socialInfo?.id}>
              <a
                href={socialInfo.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="overflow-hidden group rounded-md">
                  <Image
                    width={1000}
                    height={1000}
                    alt=""
                    src={socialInfo?.image}
                    className="imageHover object-cover w-[30px] h-[30px]"
                  />
                </div>
              </a>
            </div>
          );
        })}
    </div>
  );
};

export default SocialAccount;
