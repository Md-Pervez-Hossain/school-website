"use client";
import React, { useState } from "react";
import Title from "../ui/Title";
import Heading from "../ui/Heading";
import PrimaryButton from "../Share/Button/PrimaryButton";
import Modal from "../Share/Modal/Modal";
import AllInformationDetails from "./AllInformationDetails";
import Container from "../ui/Container";

const AllInformation = ({ information }) => {
  const [detailsModalId, setDetailsModalId] = useState(null);

  return (
    <Container className="lg:my-16 my-5 ">
      <Title className="text-center">Information</Title>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {information?.data?.length &&
          information?.data?.map((info) => {
            return (
              <div
                key={info?.id}
                className="shadow-md rounded-md text-center py-8"
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

      {detailsModalId && (
        <Modal
          isOpen={detailsModalId !== null}
          closeModal={() => setDetailsModalId(null)}
          title="Information Details"
        >
          <AllInformationDetails
            data={detailsModalId}
            closeModal={() => setDetailsModalId(null)}
          />
        </Modal>
      )}
    </Container>
  );
};

export default AllInformation;
