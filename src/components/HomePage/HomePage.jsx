import React, { useState } from "react";
import { Formik, Form, useField } from "formik";
import Header from "../Header/Header";
import useFetch from "../../services/useFetch";
import urlConstructor from "../../services/urLConstructor";
import { MainContainer, JobsSection } from "./styles";

import SearchedJobs from "../SearchedJobs";
import DefaultJobListings from "../DefaultJobListings";

// form validation
const validate = (values) => {
  const errors = {};
  if (!values.keyword) {
    errors.keyword = "Keyword is Required";
  }
  return errors;
};

export default function HomePage() {
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

  const { data: searchJobListings, error: searchError } = useFetch(searchUrl);

  function refreshPage() {
    window.location.reload();
  }

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
                Search Jobs
              </button>
            </Form>
          </section>
        </Formik>
        {searchJobListings ? (
          <SearchedJobs joblisting={searchJobListings} refresh={refreshPage} />
        ) : (
          <DefaultJobListings />
        )}
      </JobsSection>
    </MainContainer>
  );
}
