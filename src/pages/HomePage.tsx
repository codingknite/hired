import { Link } from 'react-router-dom';
import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';
import * as ImIcons from 'react-icons/im';
import { CgMenuGridO } from 'react-icons/cg';
import { IoLocationSharp } from 'react-icons/io5';

const HomePage = () => {
  return (
    <main>
      <nav>
        <ul>
          <li>
            Arrity <span>Jobs</span>
          </li>
        </ul>

        <ul>
          <li>Home</li>
          <li>Find a Job</li>
        </ul>

        <ul>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>

      <section>
        <div>
          <p>Your Career Choice</p>
          <p>Easiest Way To Get Your Next Remote Developer Job</p>
          <Link to="/login">Get Started</Link>
        </div>
        <div>
          {/* <img src="/assets/home1.webp" alt="Image One" />
          <img src="../assets/home2.webp" alt="Image Two" />
          <img src="../assets/home3.webp" alt="Image Three" />
          <img src="../assets/home4.webp" alt="Image Four" />
          <img src="../assets/home5.webp" alt="Image Five" />
          <img src="../assets/home6.webp" alt="Image Six" /> */}
        </div>
      </section>

      <section>
        <div>
          <BsIcons.BsSearch />
          <input
            type="text"
            placeholder="e.g frontend developer, designer etc."
          />
        </div>
        <div>
          <CgMenuGridO />
          <input
            type="text"
            placeholder="e.g software development, design etc."
          />
        </div>
        <button>Search</button>
      </section>

      {/* <section>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </section> */}

      <section>
        <p>Steps</p>
        <p>How It Works</p>

        <div>
          <BsIcons.BsPersonFill />
          <p>Build Your Profile</p>
          <p>
            Get started by signing up for free. Build your profile by adding
            your skills and experience to impress potential employers.
          </p>
        </div>
        <div>
          <BsIcons.BsSearch />
          <p>Find a Job</p>
          <p>
            Browse through our highly curated list of remote jobs all over the
            world to find your dream job.
          </p>
        </div>
        <div>
          <FaIcons.FaCheckCircle />
          <p>Apply to Jobs</p>
          <p>
            This is where the magic happens. Apply to your dream job. Remember
            to update your resume to highlight your best skills and projects.
          </p>
        </div>
      </section>

      <section>
        <p>Recent Jobs</p>
        <p>Find a Job That You Love</p>

        <div>
          <div>
            <p>Product Designer</p>
            <p>3 days ago</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            quibusdam, doloremque recusandae deserunt blanditiis quasi tempore
            eius suscipit cumque molestiae architecto totam, provident impedit
            vero?
          </p>

          <div>
            <p>Full Time</p>
            <p>Ux Design</p>
            <p>Product Design</p>
          </div>

          <div>
            <div>
              <img src="#" alt="company logo" />
              <p>Amazon</p>
            </div>
            <div>
              <IoLocationSharp />
              <p>Remote, USA</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <p>Browse Jobs</p>
        <div>
          <p>Browse Jobs By Category</p>
          <Link to="/remote-jobs/category/ux-design">
            <img src="#" alt="icon" />
            <p>UX Design</p>
            <p>2200+ Jobs Available</p>
          </Link>
        </div>
        <div>
          <p>Browse Jobs By Tech Stack</p>
          <Link to="/remote-jobs/tech/react-native">
            <img src="" alt="tech-icon" />
            <p>React Native</p>
          </Link>
        </div>
      </section>

      <section>
        <p>Testimonials</p>
        <p>
          What <span>Developers</span> Say About Arrity
        </p>

        <div>
          <FaIcons.FaQuoteRight />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, vero
          voluptas. Error vitae quas dolorum aspernatur sed aut! Eos distinctio
          sequi aperiam autem, sit quaerat.
          <div>
            <img src="#" alt="testimonial" />
            <div>
              <p>Olivia</p>
              <p>React Developer</p>
            </div>
          </div>
        </div>

        <div>
          <ImIcons.ImArrowLeft2 />
          <ImIcons.ImArrowRight2 />
        </div>

        <div>
          <p>
            <span>2000+ Job Holders</span> got their Dream Jobs
          </p>
          {/* <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" /> */}
          <BsIcons.BsFillPlusCircleFill />
        </div>
      </section>

      <footer>
        <p>
          Arrity <span>Jobs</span>
        </p>

        <div>
          <div>
            <p>UseFul Links</p>
            <ul>
              <li>Home</li>
              <li>Find a Job</li>
            </ul>
          </div>

          <div>
            <p>For Developers</p>
            <ul>
              <li>Log In</li>
              <li>Sign Up</li>
            </ul>
          </div>
        </div>

        <br />

        <div>
          <div>
            <p>2021 All Rights reserved by Arrity Jobs</p>
            <p>
              Created by <span>Joel P. Mugalu</span>
            </p>
          </div>

          <div>
            <a href="https://github.com/codingknite" target="_blank">
              <ImIcons.ImGithub />
            </a>
            <a href="https://linkedin.com/in/joelmugalu">
              <ImIcons.ImLinkedin />
            </a>
            <a href="https://twitter.com/codingknite">
              <ImIcons.ImTwitter />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;
