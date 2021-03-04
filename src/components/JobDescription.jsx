import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../services/useFetch";
import * as MdIcons from "react-icons/md";
import Spinner from "./Spinner";

export default function JobDescription() {
  const { jobId } = useParams();

  const {
    data: jobListing,
    loading: listingLoading,
    error: listingError,
  } = useFetch(
    `https://github-api-next.vercel.app/api/positions/${jobId}.json`
  );

  if (listingError) throw listingError;
  if (listingLoading) return <Spinner />;
  return (
    <>
      <main>
        <div className="project-logo">
          <h1 className="logo-text">h i r e d!</h1>
        </div>

        <div>
          <button>
            <MdIcons.MdArrowBack />
            Back To Jobs
          </button>
        </div>

        <section>
          <h1>{jobListing.title}</h1>
          <div>
            <p>{jobListing.location}</p>
            <p>{jobListing.type}</p>
          </div>
          <div>
            <img src={jobListing.company_logo} alt="Company Logo" />
            <p>{jobListing.company}</p>
          </div>
        </section>

        <section>
          <div>{jobListing.description}</div>
        </section>

        <section>
          <h2>How to Apply</h2>
          {jobListing.how_to_apply}
        </section>
      </main>

      <footer>Made by Jowel</footer>
    </>
  );
}
