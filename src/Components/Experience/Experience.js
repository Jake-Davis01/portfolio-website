import "./Experience.css";

export default function Experience() {
  return (
    <div id="experience" className="work-experiences">
      <h2>Experience</h2>
      <div className="experience">
        <span className="company">Thales UK, 2020 - 2025</span>
        <div className="experience-description">
          <span className="role">Technical Author</span>
          <ul>
            <li className="description">Created operator and maintainer manuals for Thales’ customers.</li>
            <li className="description">Worked with engineers to create technical documentation for the end user.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
