import "./Navbar.css";
import githubLogo from "../icons/github-logo.svg";
import linkedinLogo from "../icons/LinkedIn-logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="page-links">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
        </ul>
      </div>
      <div className="social-links">
        <a
          className="social-link"
          href="https://github.com/Jake-Davis01"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubLogo} alt="GitHub" />
        </a>
        <a
          className="social-link"
          href="https://www.linkedin.com/in/jake-d-b78820151"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinLogo} alt="LinkedIn" />
        </a>
      </div>
    </nav>
  );
}
