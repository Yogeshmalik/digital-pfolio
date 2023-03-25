import React from "react";

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
      return (
        <div className="edu" key={education.school}>
          <h3 className="edu">{education.school}</h3>
          <p className="info">
            {education.degree} {/* <span>&bull;</span>*/}
            {/* <em className="date">{education.graduated}</em> */}
          </p>
          <p className="edu-description">{education.description}</p>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div className="work" key={work.company}>
          <h3 className="coy">{work.company}</h3>
          <p className="info">
            {work.title}
            {/* <span>&bull;</span> <em className="date">{work.years}</em>  */}
          </p>
          <p>{work.description}</p>
        </div>
      );
    });
    var skills = data.skills.map(function (skills) {
      // var className = "bar-expand" + skills.name.toLowerCase();
      return (
        <div className="skillsList">
          <li key={skills.name}>
            {/* <span style={{ width: skills.level }} className={className}></span> */}
            <em>{skills.name}</em>
          </li>
        </div>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1 className="eduHero">
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1 className="workHero">
            <span>Work</span>
          </h1>
        </div>
        <div className="nine columns main-col">{work}</div>
      </div>
      <div className="row skill">
        <div className="three columns header-col">
          <h1 className="skillsHero">
            <span>Skills And Tools</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
