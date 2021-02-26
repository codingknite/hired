import React from "react";

export default function JobListings({ jobListings }) {
  const generateDate = (date) => {
    const splitDate = date.split(" ");
    return `${splitDate[0]}, ${splitDate[1]} ${splitDate[2]}`;
  };

  return (
    <>
      {jobListings.map((job) => (
        <section className="job-listing" key={job.id}>
          <div className="ad-info">
            <div className="logo">
              <img
                src={job.company_logo}
                alt="Company Logo"
                className="company-logo"
              />
            </div>
            <h2>{job.company}</h2>
            <a href={job.company_url ? `${job.company_url}` : "#"}>
              Visit Company Website
            </a>
          </div>
          <div className="job-title">
            <h1>{job.title}</h1>
            <p>{generateDate(job.created_at)}</p>
          </div>
          <div className="tags">
            <div className="cat">
              <p>software dev</p>
            </div>
            <div className="cat">
              <p>{job.type}</p>
            </div>
            <div className="cat">
              <p>{job.location}</p>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
