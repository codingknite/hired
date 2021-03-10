import React, { useState } from "react";
import { Formik, Form, useField } from "formik";
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

  const Input = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };

  const Select = ({ label, ...props }) => {
    const [field] = useField(props);
    return (
      <>
        <select {...field} {...props} />
      </>
    );
  };

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
        <Formik
          initialValues={{
            keyword: "",
            location: "",
            jobtype: "",
          }}
          validate={validate}
          onSubmit={(values, { resetForm }) => {
            fetchSearchJobs(values);
            resetForm({ values: "" });
          }}
        >
          <section className="search-form">
            <Form className="form">
              <Input
                type="text"
                name="keyword"
                id="keyword"
                placeholder="Keyword e.g java"
              />

              <Input
                type="text"
                name="location"
                placeholder="Location"
                id="location"
              />

              <Select name="jobtype" id="jobtype">
                <option value="">Choose Job Type</option>
                <option value="FullTime">FullTime</option>
                <option value="PartTime">PartTime</option>
              </Select>

              <button type="submit" id="search">
                Submit
              </button>
            </Form>
          </section>
        </Formik>
        {searchJobListings ? <SearchedJobs /> : <DefaultJobListings />}
      </JobsSection>
    </MainContainer>
  );
}
