import React, { useState } from "react";
import Spinner from "./Spinner";
import JobListings from "./JobListings/JobListings";
import { DefaultJobs } from "./HomePage/styles";
import useFetch from "../services/useFetch";

export default function DefaultJobListings() {
  const [pageNumber, setPageNumber] = useState(1);

  const {
    data: jobListings,
    loading: listingsLoading,
    error: listingsError,
  } = useFetch(
    `https://github-api-next.vercel.app/api/positions?page=${pageNumber}`
  );

  if (listingsError) throw listingsError;

  return listingsLoading ? (
    <Spinner />
  ) : (
    <>
      <JobListings jobListings={jobListings} />
      <DefaultJobs>
        <button
          onClick={() => {
            setPageNumber(pageNumber > 1 ? pageNumber - 1 : pageNumber);
          }}
          disabled={pageNumber < 2}
        >
          Prev
        </button>
        <button
          onClick={() => {
            setPageNumber(pageNumber + 1);
          }}
        >
          Next
        </button>
      </DefaultJobs>
    </>
  );
}
