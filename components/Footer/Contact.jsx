"use client";
import React from "react";
import Paragraph from "../ui/Paragraph";

const Contact = ({ contactInfo }) => {
  return (
    <div>
      <h2 className="text-[18px] font-[600] mb-3 text-center lg:flex ">
        Contact info
      </h2>
      <div className="flex flex-col lg:flex-row items-center lg:gap-5 gap-3 lg:mb-5 mb-3 text-center justify-center lg:justify-start lg:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M6.3353 2.83815C6.13282 2.33193 5.64254 2 5.09733 2H3.26316C2.56554 2 2 2.56556 2 3.26318C2 9.19298 6.80719 14 12.737 14C13.4346 14 14 13.4345 14 12.7369L13.9999 10.9027C13.9999 10.3575 13.6679 9.86724 13.1617 9.66476L11.4048 8.96192C10.95 8.78003 10.4324 8.86201 10.0561 9.17554L9.60205 9.55382C9.07228 9.99529 8.29332 9.95999 7.8057 9.47236L6.52758 8.19434C6.03995 7.70671 6.00482 6.92769 6.44629 6.39792L6.82454 5.94398C7.13807 5.56775 7.22001 5.04995 7.03813 4.59524L6.3353 2.83815Z"
            stroke="#F5F5F5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div>
          {contactInfo?.phone_numbers?.map((phone, index) => {
            return (
              <Paragraph
                key={index}
                className="text-center lg:text-start text-grayText"
              >
                {phone?.phone}
              </Paragraph>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:gap-5 gap-3  lg:mb-5  mb-3 justify-center lg:justify-start  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M11.3333 13.6668H4.66659C2.66659 13.6668 1.33325 12.6668 1.33325 10.3335V5.66683C1.33325 3.3335 2.66659 2.3335 4.66659 2.3335H11.3333C13.3333 2.3335 14.6666 3.3335 14.6666 5.66683V10.3335C14.6666 12.6668 13.3333 13.6668 11.3333 13.6668Z"
            stroke="#F5F5F5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.3334 6L9.24674 7.66667C8.56008 8.21333 7.43341 8.21333 6.74674 7.66667L4.66675 6"
            stroke="#F5F5F5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div>
          {contactInfo?.emails?.map((email, index) => {
            return (
              <Paragraph
                key={index}
                className="text-center lg:text-start text-grayText"
              >
                {email?.email}
              </Paragraph>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center  lg:gap-5 gap-3 lg:mb-5  justify-center lg:justify-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M7.99992 9.44679C6.57992 9.44679 5.41992 8.29346 5.41992 6.86679C5.41992 5.44012 6.57992 4.29346 7.99992 4.29346C9.41992 4.29346 10.5799 5.44679 10.5799 6.87346C10.5799 8.30012 9.41992 9.44679 7.99992 9.44679ZM7.99992 5.29346C7.13326 5.29346 6.41992 6.00012 6.41992 6.87346C6.41992 7.74679 7.12659 8.45346 7.99992 8.45346C8.87326 8.45346 9.57992 7.74679 9.57992 6.87346C9.57992 6.00012 8.86659 5.29346 7.99992 5.29346Z"
            fill="white"
          />
          <path
            d="M7.99987 15.1735C7.01321 15.1735 6.01987 14.8002 5.24654 14.0602C3.27987 12.1668 1.10654 9.14683 1.92654 5.5535C2.66654 2.2935 5.51321 0.833496 7.99987 0.833496C7.99987 0.833496 7.99987 0.833496 8.00654 0.833496C10.4932 0.833496 13.3399 2.2935 14.0799 5.56016C14.8932 9.1535 12.7199 12.1668 10.7532 14.0602C9.97987 14.8002 8.98654 15.1735 7.99987 15.1735ZM7.99987 1.8335C6.05987 1.8335 3.56654 2.86683 2.90654 5.7735C2.18654 8.9135 4.15987 11.6202 5.94654 13.3335C7.09987 14.4468 8.90654 14.4468 10.0599 13.3335C11.8399 11.6202 13.8132 8.9135 13.1065 5.7735C12.4399 2.86683 9.93987 1.8335 7.99987 1.8335Z"
            fill="white"
          />
        </svg>
        <div>
          <Paragraph className="text-center lg:text-start text-grayText">
            {contactInfo?.location}
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default Contact;
