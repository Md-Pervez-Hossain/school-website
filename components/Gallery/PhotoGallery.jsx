"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Title from "../ui/Title";
import ReactPaginate from "react-paginate";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { fetchPhotosData } from "@/lib/fetchData";
import Pagination from "../Share/Pagination/Pagination";
import { motion, useInView } from "framer-motion";
const PhotoGallery = () => {
  const globalVar = "i am global var";
  function test() {
    const a = "i am test fnction";
    console.log(a);
    console.log(globalVar);
    function testTwo() {
      const b = " i am test two function variable";
      console.log(a);
      console.log(b);
      console.log(globalVar);
    }
    testTwo();
  }
  console.log(test);

  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState({});
  const ref = useRef(null);
  const isInView = useInView(ref);
  const parentVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.25,
        delayChildren: 0.3,
      },
    },
  };

  const childVariant = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };
  const [pageCount, setPageCount] = useState(0);
  const query = `page=${page}&limit=10`;
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const photos = await fetchPhotosData(query);
        setPhotos(photos);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPhotos();
  }, [page, query]);
  return (
    <div id="PhotoGallary" className=" lg:my-16 my-5">
      {photos?.data?.length > 0 && (
        <Title className="text-center">Photo Gallery</Title>
      )}
      <motion.div
        ref={ref}
        variants={parentVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="16px">
            {photos?.data?.length > 0 &&
              photos?.data?.map((photo) => {
                return (
                  <motion.div
                    variants={childVariant}
                    key={photo?.id}
                    className="overflow-hidden  rounded-lg group  "
                  >
                    <Image
                      src={photo?.photo}
                      alt=""
                      width={500}
                      height={500}
                      objectFit="cover"
                      className="imageHover "
                    />
                  </motion.div>
                );
              })}
          </Masonry>
        </ResponsiveMasonry>
        <Pagination
          paginationData={photos}
          setPage={setPage}
          pageCount={pageCount}
          setPageCount={setPageCount}
        />
      </motion.div>
    </div>
  );
};

export default PhotoGallery;
