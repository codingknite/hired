import React, { useEffect, useRef, useState } from "react";
import "./HomePage.scss";
import * as FaIcons from "react-icons/fa";
import * as GrIcons from "react-icons/gr";
import testData from "../data/mockGithubJobs";
import Spinner from "./Spinner";
import axios from "axios";

export default function HomePage() {
  const isMounted = useRef(false);
  const [jobListings, setJobListings] = useState(testData);
  const [test, setTest] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    isMounted.current = true;
    async function getJobListings() {
      try {
        const response = await axios("https://jobs.github.com/positions.json");

        if (response) {
          // const data = await response.json();
          if (isMounted.current) setTest(response.data);
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
    return () => {
      isMounted.current = false;
    };
  }, []);

  console.log(test);
  const generateDate = (date) => {
    const splitDate = date.split(" ");
    return `${splitDate[0]}, ${splitDate[1]} ${splitDate[2]}`;
  };

  // if (error) throw error;
  // if (loading) return <Spinner />;
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

      <section className="search-bar">
        <div>
          <input type="input" placeholder="Keywords e.g java" />
        </div>
        <div>
          <input type="input" placeholder="Location" />
        </div>
        <div>
          <select name="type" id="job-type">
            <option value="Job Type">Job Type</option>
            <option value="FullTime">FullTime</option>
            <option value="PartTime">PartTime</option>
          </select>
        </div>
        <div>
          <button type="submit">Search Jobs</button>
        </div>
        <div></div>
      </section>

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

      <footer>
        <div>
          <GrIcons.GrPrevious />
          <button type="submit">Prev</button>
        </div>
        <p>Made By Jowel</p>
        <div>
          <button type="submit">Next</button>
          <GrIcons.GrNext />
        </div>
      </footer>
    </main>
  );
}
