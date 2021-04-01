import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { MainContainer } from "./styles";
import styled from "styled-components";
import defaultIcon from "../../styles/defaultIcon.png";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export default function JobListings({ jobListings }) {
  const formatName = (name) =>
    name
      .match(/[ a-z ]/gi)
      .join("")
      .split(" ")[0];

  return (
    <>
      {jobListings.map((job) => (
        <StyledLink to={`/${job.id}`}>
          <MainContainer key={job.id}>
            <div className="logo">
              <img
                src={job.company_logo ? job.company_logo : defaultIcon}
                alt="Company Logo"
                className="company-logo"
              />
            </div>
            <div class="job-info">
              <p className="company-name">{formatName(job.company)}</p>
              <p className="job-title">{job.title}</p>
              <div className="job-tags">
                <div className="cat">
                  <p>{job.type}</p>
                </div>
                <div className="cat">
                  <p>{job.location}</p>
                </div>
              </div>
            </div>
            <p className="job-date">
              {format(new Date(job.created_at), "E, MMM io")}
            </p>
          </MainContainer>   
        </StyledLink>
      ))}
    </>
  );
}
