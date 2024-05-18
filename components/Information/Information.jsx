"use client";
import Image from "next/image";
import React, { useState } from "react";
import AcademicInfo from "../../assets/academic-info.png";
import AdmissionInfo from "../../assets/admission-info.png";
import Rules from "../../assets/rules.png";
import ClassSixSyllabusPic from "../../assets/teacher.svg";
import PrimaryButton from "../Share/Button/PrimaryButton";
import Title from "../ui/Title";
import Heading from "../ui/Heading";
import { useModal } from "@/hooks/useModal";
import Modal from "../Share/Modal/Modal";
import InformationDetails from "./InformationDetails";
import Link from "next/link";

const Information = ({ information }) => {
  const [detailsModalId, setDetailsModalId] = useState(null);

  return (
    <div className="lg:my-16 my-5 ">
      <Title className="text-center">Information</Title>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {information?.data?.length > 0 &&
          information?.data?.map((info) => {
            return (
              <div
                key={info?.id}
                className=" rounded-md text-center py-8 border-2 border-gray-200"
              >
                <Heading>{info?.title}</Heading>
                <PrimaryButton
                  onClick={() => setDetailsModalId(info)}
                  className="border-2 border-white"
                >
                  Details
                </PrimaryButton>
              </div>
            );
          })}
      </div>
      <div className="flex  items-center justify-center mt-8">
        <Link href="/all-information">
          <button className="border border-gray-200 px-4 py-2 rounded text-[#999]">
            View All
          </button>
        </Link>
      </div>

      {detailsModalId && (
        <Modal
          isOpen={detailsModalId !== null}
          closeModal={() => setDetailsModalId(null)}
          title="Information Details"
        >
          <InformationDetails
            data={detailsModalId}
            closeModal={() => setDetailsModalId(null)}
          />
        </Modal>
      )}
    </div>
  );
};

export default Information;
