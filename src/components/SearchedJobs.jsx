import React from "react";
import JobListings from "./JobListings/JobListings";
import { SearchResults } from "./HomePage/styles";

export default function SearchedJobs({ joblisting, refresh }) {
  return joblisting.length ? (
    <>
      <JobListings jobListings={joblisting} />
      <SearchResults>
        <button
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          Back To Search
        </button>

        <button onClick={refresh}>Go Back Home</button>
      </SearchResults>
    </>
  ) : (
    <SearchResults>
      <div className="jobs-not-found">
        <h2>Looks like we found nothing from this query</h2>
        <p>Try another search </p>
      </div>
      <button onClick={refresh}>Go back home</button>
    </SearchResults>
  );
}
