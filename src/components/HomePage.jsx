import React, { useEffect, useRef, useState } from "react";
import "./HomePage.scss";
import * as FaIcons from "react-icons/fa";
import * as GrIcons from "react-icons/gr";
import * as MdIcons from "react-icons/md";
import testData from "../data/mockGithubJobs";
import Spinner from "./Spinner";
import JobListings from "./JobListings";

/*
  TODO 
 * iii) Handle empty data returned 
 * iv) Handle Page number for search terms 
 * iii) Craete Page for job description
 * iv) Remove Form Validation => Not Neccesary
 * 
 */
export default function HomePage() {
  const searchObject = {
    keyword: "",
    location: "",
    jobtype: "",
  };

  const termsObject = {
    keyword: "",
    location: "",
    jobtype: "",
  };

  // Default Page State
  const isMounted = useRef(false);
  const [jobListings, setJobListings] = useState(testData);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  // Form State
  const [searchJobListings, setSearchJobListings] = useState(null);
  const [searchLoading, setSearchLoading] = useState(true);
  const [searchError, setSearchError] = useState(null);
  const [searchTerms, setSearchTerms] = useState(searchObject);
  const [selectedTerms, setSelectedTerms] = useState(termsObject);

  useEffect(() => {
    isMounted.current = true;
    async function getJobListings() {
      try {
        const response = await fetch(
          `https://github-api-next.vercel.app/api/positions?page=${pageNumber}`
        );

        if (response.ok) {
          const data = await response.json();
          if (isMounted.current) setJobListings(data.data);
        } else {
          throw response;
        }
      } catch (error) {
        console.error("There Was An Error => ", error);
        if (isMounted.current) setError(error);
      } finally {
        if (isMounted.current) setLoading(false);
      }
    }
    getJobListings();
    window.scrollTo(0, 0);

    return () => {
      isMounted.current = false;
    };
  }, [pageNumber]);

  const handleChange = (event) => {
    setSearchTerms((currentTerm) => {
      return { ...currentTerm, [event.target.id]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSearchTerms(() => {
      return { ...searchTerms, [event.target.id]: event.target.value };
    });

    findSearchJobs();
  };

  const handleTerms = (event) => {
    setSelectedTerms(() => {
      return { ...selectedTerms, [event.target.id]: event.target.value };
    });
  };

  const removeTag = (event) => {
    setSelectedTerms(() => {
      return {
        ...selectedTerms,
        [event.target.parentNode.id]: "",
      };
    });

    findSearchJobs();
  };

  const findSearchJobs = () => {
    const { keyword, location, jobtype } = selectedTerms;

    return fetch(
      `https://github-api-next.vercel.app/api/positions${
        keyword ? "?description=" + keyword : "?search=code"
      }${
        jobtype
          ? jobtype === "FullTime"
            ? "&full_time=true"
            : "&part_time=true"
          : ""
      }${location ? "&location=" + location : ""}`
    )
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((jobs) => {
        setSearchJobListings(jobs.data);
      })
      .catch((error) => {
        console.error("There was an error => ", error);
        setSearchError(error);
      })
      .finally(() => {
        setSearchLoading(false);
      });
  };

  useEffect(findSearchJobs, [selectedTerms]);

  if (error) throw error;
  if (loading) return <Spinner />;
  if (searchError) throw searchError;

  return (
    <main>
      <header className="header">
        <div className="project-logo">
          <h1 className="logo-text">H I R E D!</h1>
        </div>
        <div className="nav-bar">
          <div className="remote-button">
            <p>remote jobs</p>
          </div>
          <div className="darkmode-toggle">
            <FaIcons.FaMoon />
          </div>
        </div>
        <div className="slogan">
          <h2>JOB BOARD FOR DEVELOPERS AND CREATIVE PROS</h2>
        </div>
      </header>

      <section className="search-form">
        <form className="search-bar" onSubmit={handleSubmit}>
          <input
            type="input"
            id="keyword"
            placeholder="Keyword e.g java"
            value={searchTerms.keyword}
            onChange={handleChange}
            onBlur={handleTerms}
          />
          <input
            type="input"
            placeholder="Location"
            id="location"
            value={searchTerms.location}
            onChange={handleChange}
            onBlur={handleTerms}
          />
          <select
            name="type"
            id="jobtype"
            onChange={handleChange}
            onBlur={handleTerms}
          >
            <option value="">Choose Job Type</option>
            <option value="FullTime">FullTime</option>
            <option value="PartTime">PartTime</option>
          </select>

          <input type="submit" value="Search Jobs" />
        </form>
        <div className="term-tags">
          {selectedTerms.keyword ? (
            <div className="tag">
              {selectedTerms.keyword}{" "}
              <span onClick={removeTag} id="keyword">
                <MdIcons.MdCancel />
              </span>
            </div>
          ) : (
            ""
          )}

          {selectedTerms.location ? (
            <div className="tag">
              {selectedTerms.location}{" "}
              <span onClick={removeTag} id="location">
                <MdIcons.MdCancel />
              </span>
            </div>
          ) : (
            ""
          )}

          {selectedTerms.jobtype ? (
            <div className="tag">
              {selectedTerms.jobtype}{" "}
              <span onClick={removeTag} id="jobtype">
                <MdIcons.MdCancel />
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
      </section>

      {searchJobListings ? (
        <>
          <JobListings jobListings={searchJobListings} />
          <div>
            <button
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Back To Top
            </button>
          </div>
        </>
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
      )}
    </main>
  );
}
