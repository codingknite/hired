import React, { useState } from "react";
import { useFormik } from "formik";
import "./HomePage.scss";
import * as GrIcons from "react-icons/gr";
import Spinner from "./Spinner";
import Header from "./Header";
import JobListings from "./JobListings";
import useFetch from "../services/useFetch";

// form validation
const validate = (values) => {
  const errors = {};
  if (!values.keyword) {
    errors.keyword = "Keyword is Required";
  }
  return errors;
};

export default function HomePage() {
  const initUrl = `https://github-api-next.vercel.app/api/positions?description=none`;

  const [pageNumber, setPageNumber] = useState(1);
  const [searchUrl, setSearchUrl] = useState(initUrl);

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
    const { keyword, location, jobtype } = values;
    const baseUrl = `https://github-api-next.vercel.app/api/positions?description=${keyword}`;
    let url;

    if (location && jobtype) {
      const _jobtype =
        jobtype === "FullTime" ? "&full_time=true" : "&part_time=true";
      url = baseUrl + _jobtype + `&location=${location}`;
    } else if (location) {
      url = baseUrl + `&location=${location}`;
    } else if (jobtype) {
      const _jobtype =
        jobtype === "FullTime" ? "&full_time=true" : "&part_time=true";
      url = baseUrl + _jobtype;
    } else {
      url = baseUrl;
    }
    setSearchUrl(url);
  };

  const {
    data: jobListings,
    loading: listingsLoading,
    error: listingsError,
  } = useFetch(
    `https://github-api-next.vercel.app/api/positions?page=${pageNumber}`
  );

  let {
    data: searchJobListings,
    loading: searchLoading,
    error: searchError,
  } = useFetch(searchUrl);

  const SearchedJobs = () => {
    return searchLoading ? (
      <Spinner />
    ) : (
      <>
        <JobListings jobListings={searchJobListings} />
        <div>
          <button
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Back To Search
          </button>

          <button
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Go Back Home
          </button>
        </div>
      </>
    );
  };

  const DefaultJobListings = () => {
    return listingsLoading ? (
      <Spinner />
    ) : (
      <>
        <JobListings jobListings={jobListings} />
        <section className="nav-buttons">
          <div>
            <GrIcons.GrPrevious />
            <button
              disabled={pageNumber > 1 ? false : true}
              onClick={() => {
                setPageNumber((pageNumber) => pageNumber - 1);
              }}
            >
              Prev
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setPageNumber((pageNumber) => pageNumber + 1);
              }}
            >
              Next
            </button>
            <GrIcons.GrNext />
          </div>
        </section>
      </>
    );
  };

  if (listingsError) throw listingsError;
  if (searchError) throw searchError;

  return (
    <main>
      <Header />
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
          {formik.errors.keyword ? <div>{formik.errors.keyword}</div> : null}

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

          <input type="submit" value="Search Jobs" />
        </form>
      </section>
      {/* TODO => Think of condition to check whether searchedJobs have been populated */}
      {searchJobListings ? <SearchedJobs /> : <DefaultJobListings />}
    </main>
  );
}
