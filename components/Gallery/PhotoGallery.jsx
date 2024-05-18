"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Title from "../ui/Title";
import ReactPaginate from "react-paginate";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { fetchPhotosData } from "@/lib/fetchData";
import Pagination from "../Share/Pagination/Pagination";
const PhotoGallery = () => {
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState({});
  console.log(photos);
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
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="16px">
          {photos?.data?.length > 0 &&
            photos?.data?.map((photo) => {
              return (
                <div
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
                </div>
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
    </div>
  );
};

export default PhotoGallery;
