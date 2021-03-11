import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../services/useFetch";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io5";
import * as GiIcons from "react-icons/gi";
import Spinner from "../Spinner";
import { Main, TitleSection, Description } from "./styles";
import defaultIcon from "../../styles/defaultIcon.png";

export default function JobDescription() {
  const navigate = useNavigate();
  const { jobId } = useParams();

  const {
    data: jobListing,
    loading: listingLoading,
    error: listingError,
  } = useFetch(
    `https://github-api-next.vercel.app/api/positions/${jobId}.json`
  );

  const navigateHome = () => navigate("/");

  if (listingError) throw listingError;
  if (listingLoading) return <Spinner />;
  return (
    <>
      <Main>
        <header onClick={navigateHome}>
          <h1 className="logo-text">Hire</h1>
        </header>

        <div className="back-button" onClick={navigateHome}>
          <button>
            <MdIcons.MdArrowBack className="back-arrow" />
            Back To Jobs
          </button>
        </div>

        <TitleSection>
          <div className="title-info">
            <h1>{jobListing.title}</h1>
            <div className="tags">
              <p>
                <IoIcons.IoLocation size="20" /> {jobListing.location}
              </p>
              <p>
                <GiIcons.GiSuitcase size="20" />
                {jobListing.type}
              </p>
            </div>
          </div>
        </TitleSection>

        <Description>
          <div className="container">
            <div className="company-info">
              <img
                src={
                  jobListing.company_logo
                    ? jobListing.company_logo
                    : defaultIcon
                }
                alt="Company Logo"
                className="company-logo"
              />
              <p>{jobListing.company}</p>
            </div>
            <div className="job-info">
              <div
                dangerouslySetInnerHTML={{ __html: jobListing.description }}
                className="description"
              ></div>

              <h1>How to Apply</h1>
              <div
                dangerouslySetInnerHTML={{ __html: jobListing.how_to_apply }}
              >
                {}
              </div>
            </div>
          </div>
        </Description>
      </Main>
    </>
  );
}
