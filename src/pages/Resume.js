import React from 'react';
// import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

// import Education from '../components/Resume/Education';
// import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
// import Courses from '../components/Resume/Courses';
// import References from '../components/Resume/References';
//
// import courses from '../data/resume/courses';
// import degrees from '../data/resume/degrees';
// import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

// const sections = ['Education', 'Experience', 'Skills'];
const Resume = () => (
  /* <Main title="Resume" description="Dawei Yin's Resume.">
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="resume">Resume</Link>
          </h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />
      <Skills skills={skills} categories={categories} />
      <Courses data={courses} />
      <References />
    </article>
  </Main> */

  <Main title="Resume" description="Dawei Yin's Resume.">
    <article className="post" id="resume">
      <section>
        <header>
          <div className="title">
            <h3>Resume</h3>
          </div>
        </header>

        <iframe
          title="ResumePdf"
          src={`${PUBLIC_URL}/pdfs/DaweiYin_resume.pdf`}
          width="100%"
          height="1200"
        />
      </section>
      <section>
        <Skills skills={skills} categories={categories} />
      </section>
    </article>
  </Main>
);

export default Resume;
