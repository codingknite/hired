import React, { useState } from "react";
import { useFormik } from "formik";
import Spinner from "../Spinner";
import Header from "../Header/Header";
import JobListings from "../JobListings/JobListings";
import useFetch from "../../services/useFetch";
import urlConstructor from "../../services/urLConstructor";
import {
  MainContainer,
  JobsSection,
  DefaultJobs,
  SearchResults,
} from "./styles";

// form validation
const validate = (values) => {
  const errors = {};
  if (!values.keyword) {
    errors.keyword = "Keyword is Required";
  }
  return errors;
};

export default function HomePage() {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchUrl, setSearchUrl] = useState(null);

  const formik = useFormik({
    initialValues: {
      keyword: "",
      location: "",
      jobtype: "",
    },
    validate,
    onSubmit: (values) => {
      fetchSearchJobs(values);
      formik.values.keyword = "";
      formik.values.location = "";
    },
  });

  const fetchSearchJobs = (values) => {
    const url = urlConstructor(values);
    setSearchUrl(url);
  };

  const {
    data: jobListings,
    loading: listingsLoading,
    error: listingsError,
  } = useFetch(
    `https://github-api-next.vercel.app/api/positions?page=${pageNumber}`
  );

  const { data: searchJobListings, error: searchError } = useFetch(searchUrl);

  function refreshPage() {
    window.location.reload();
  }

  const SearchedJobs = () => {
    return searchJobListings.length ? (
      <>
        <JobListings jobListings={searchJobListings} />
        <SearchResults>
          <button
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Back To Search
          </button>

          <button onClick={refreshPage}>Go Back Home</button>
        </SearchResults>
      </>
    ) : (
      <SearchResults>
        <div className="jobs-not-found">
          <h2>Looks like we found nothing from this query</h2>
          <p>Try another search </p>
        </div>
        <button onClick={refreshPage}>Go back home</button>
      </SearchResults>
    );
  };

  const DefaultJobListings = () => {
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
  };

  if (listingsError) throw listingsError;
  if (searchError) throw searchError;

  return (
    <MainContainer>
      <Header />
      <JobsSection>
        <section className="search-form">
          <form className="search-bar" onSubmit={formik.handleSubmit}>
            <input
              type="text"
              name="keyword"
              id="keyword"
              placeholder="Keyword e.g java"
              value={formik.values.keyword}
              onChange={formik.handleChange}
            />
            {formik.errors.keyword && <div>{formik.errors.keyword}</div>}

            <input
              type="text"
              name="location"
              placeholder="Location"
              id="location"
              value={formik.values.location}
              onChange={formik.handleChange}
            />

            <select
              name="jobtype"
              id="jobtype"
              value={formik.values.jobtype}
              onChange={formik.handleChange}
            >
              <option value="">Choose Job Type</option>
              <option value="FullTime">FullTime</option>
              <option value="PartTime">PartTime</option>
            </select>

            <input type="submit" value="Search Jobs" id="search" />
          </form>
        </section>
        {searchJobListings ? <SearchedJobs /> : <DefaultJobListings />}
      </JobsSection>
    </MainContainer>
  );
}
