"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Title from "@/components/ui/Title";
import ReactPaginate from "react-paginate";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { fetchTeachersPhotos } from "@/lib/fetchData";
import Pagination from "@/components/Share/Pagination/Pagination";
import Container from "@/components/ui/Container";
const TeachersPhoto = () => {
  const [page, setPage] = useState(1);
  const [teachePhotos, setTeachePhotos] = useState({});
  const [pageCount, setPageCount] = useState(0);

  const query = `page=${page}&limit=10`;
  useEffect(() => {
    const fetPhotos = async () => {
      try {
        const photos = await fetchTeachersPhotos(query);
        setTeachePhotos(photos);
        setPageCount(Math.ceil(photos?.meta?.total / photos?.meta?.limit));
      } catch (error) {
        console.log(error);
      }
    };
    fetPhotos();
  }, [page, query]);
  return (
    <>
      <div id="PhotoGallary" className=" lg:my-16 my-5">
        {teachePhotos?.data?.length > 0 && (
          <Title className="text-center">Teachers Photo Gallery</Title>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-4  gap-5">
          {teachePhotos?.data?.length > 0 &&
            teachePhotos?.data?.map((photo) => {
              return (
                <div
                  key={photo?.id}
                  className="overflow-hidden  rounded-lg group  "
                >
                  <Image
                    src={photo?.profile_img}
                    alt="image"
                    width={300}
                    height={300}
                    objectFit="cover"
                    className="imageHover w-full "
                  />
                </div>
              );
            })}
        </div>
        <Pagination
          paginationData={teachePhotos}
          setPage={setPage}
          pageCount={pageCount}
          setPageCount={setPageCount}
        />
      </div>
    </>
  );
};

export default TeachersPhoto;
