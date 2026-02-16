import avatar from "../icons/avatar.png";

import "./About.css";

export default function About() {
  return (
    <div id="about" className="about">
      <h1>Hi, I’m Jake. Nice to meet you!</h1>
      <p>
        Aspiring software engineer. Joining La Fosse Academy to learn the skills required to make an impact in the software industry.
      </p>
      <img src={avatar} alt="Jake's avatar" />
    </div>
  );
}
