import React from 'react';
import LanguageTools from '../LanguageTools';

function Resume() {
  return (
    <section className="resume-section">
      <LanguageTools />
      <div className="resume-download">
        <h3 className="title-3">Download My Resume.</h3>
        <p>If you would like to know more,  download my resume!</p>
        <a className="downloadButton" href='https://drive.google.com/file/d/1Q7GFZmRId8z_83jE_V0rh_unw1v2V64e/view?usp=sharing'>Download PDF</a>
      </div>
    </section>
  )
}

export default Resume;