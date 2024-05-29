"use client";
import React, { useRef, useTransition } from "react";
import { useForm } from "react-hook-form";
import PrimaryButton from "../Share/Button/PrimaryButton";
import { postContact } from "@/lib/fetchData";
import toast from "react-hot-toast";
import { motion, useInView } from "framer-motion";

const ContactForm = () => {
  const [isLoading, startTransition] = useTransition();
  const ref = useRef();
  const inView = useInView(ref, { triggerOnce: false });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});
  const handleContact = (values) => {
    startTransition(async () => {
      const res = await postContact(values);
      if (res?.message) {
        reset();
        toast.success(res?.message);
      }
    });
  };
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -300 }}
      animate={
        inView
          ? {
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
                delay: 0.5,
              },
            }
          : { opacity: 0, x: -300 }
      }
      className="border border-gray-300 lg:p-8 p-4 rounded-lg"
    >
      <form onSubmit={handleSubmit(handleContact)}>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label className="lg:text-[18px] text-[14px] font-[500] mb-2">
              Your Name
            </label>
            <input
              {...register("name", { required: true })}
              placeholder="Enter Your Name"
              className="border border-gray-300 px-4 py-3 rounded-lg"
            />
            {errors.name && (
              <p className="text-[#40282C]">This Field is Required</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="lg:text-[18px] text-[14px] font-[500] mb-2">
              Phone Number
            </label>
            <input
              {...register("phone", { required: true })}
              placeholder="Enter Phone Number"
              className="border border-gray-300 px-4 py-3 rounded-lg"
            />
            {errors.phone && (
              <p className="text-[#40282C]">This Field is Required</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="lg:text-[18px] text-[14px] font-[500] mb-2">
              Subject
            </label>
            <input
              {...register("subject", { required: true })}
              placeholder="Enter Subject"
              className="border border-gray-300 px-4 py-3 rounded-lg"
            />
            {errors.subject && (
              <p className="text-[#40282C]">This Field is Required</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="lg:text-[18px] text-[14px] font-[500] mb-2">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              placeholder="Enter Subject"
              type="email"
              className="border border-gray-300 px-4 py-3 rounded-lg"
            />
            {errors.email && (
              <p className="text-[#40282C]">This Field is Required</p>
            )}
          </div>
        </div>
        <div className="flex flex-col my-5">
          <label className="lg:text-[18px] text-[14px] font-[500] mb-2">
            Message
          </label>
          <textarea
            {...register("message", { required: true })}
            placeholder="Type Your Message"
            type="text"
            className="border border-gray-300 px-4 py-3 rounded-lg"
          />
          {errors.message && (
            <p className="text-[#40282C]">This Field is Required</p>
          )}
        </div>
        <div className="flex items-center justify-center">
          <PrimaryButton>
            {isLoading ? <p>Processing</p> : <p>Submit Message</p>}{" "}
          </PrimaryButton>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
