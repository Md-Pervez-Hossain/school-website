"use client";

import PrimaryButton from "@/components/Share/Button/PrimaryButton";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen container flex flex-col items-center justify-center gap-4">
      <h3 className="text-lg text-gray-500 text-center flex items-center justify-center flex-wrap gap-3">
        {error.message}
      </h3>
      <PrimaryButton
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Refresh
      </PrimaryButton>
    </div>
  );
}
