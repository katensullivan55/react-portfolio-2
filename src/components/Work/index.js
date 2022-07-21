import React from 'react';

function Work() {

  const works = [
    {
      projectLink: 'https://katensullivan55.github.io/weather-dashboard/',
      title: 'Weather Dashboard',
      description: 'HTML, CSS, & Javascript',
      bgImage: require(`/Users/katherinesullivan/Desktop/react-portfolio/src/assets/images/projects/weather-dashboard.jpg`).default,
      github: 'https://github.com/katensullivan55/weather-dashboard'
    },
    /* {
      projectLink: 'https://budget-tracker-ksully.herokuapp.com/',
      title: 'Budget Tracker PWA',
      description: 'Javascript, Node, Express, MongoDB & Mongoose',
      bgImage: require(`../../images/projects/budget-tracker.jpg`).default,
      github: 'https://github.com/katensullivan55/budget-tracker'
    }, 
    {
      projectLink: 'https://katensullivan55.github.io/taskinator/',
      title: 'Taskinator',
      description: 'HTML, CSS, & Javascript',
      bgImage: require(`../../images/projects/taskinator.JPG`).default,
      github: 'https://github.com/katensullivan55/taskinator'
    }, */
    {
        projectLink: 'http://note-taker-kate.herokuapp.com/',
        title: 'Note Taker',
        description: 'HTML, CSS, Javascript, Node, Express',
        bgImage: require(`/Users/katherinesullivan/Desktop/react-portfolio/src/assets/images/projects/note-taker.jpg`).default,
        github: 'https://github.com/katensullivan55/note-taker'
    },
    /* {
        projectLink: 'https://katensullivan55.github.io/team-profile-generator/',
        title: 'Team Profile Generator CLI',
        description: 'HTML, CSS, Javascript & Node',
        bgImage: require(`../../images/projects/team-profile.jpg`).default,
        github: 'https://github.com/katensullivan55/team-profile-generator'
    }, */
  ]

  function linkClick (link) {
    window.open(link, '_blank');
  }

  return (
    <section id="works">
    <h1 className="title-2">Recent Projects.</h1>  
    <div className="works">
      {works.map((work, i) => (
        <div className="work" key={i} style={{backgroundImage: `url(${work.bgImage})`}}>
          <a href={work.projectLink} target="_blank" rel="noreferrer" className="work-container">
              <div className="work-info" >
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                  <div className="work-info-icons">
                    <span onClick={() => linkClick(work.github)} className="wii-link"><i className="fab fa-github"></i></span>
                    <span onClick={() => linkClick(work.projectLink)} className="wii-link"><i className="fas fa-globe"></i></span>
                </div>
              </div>
          </a>
        </div>
      ))}
    </div>  
    </section>
  )
}

export default Work;