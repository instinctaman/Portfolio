import port from "./assets/img/Projects/Screenshot 2025-06-30 174517.png";
import gnim from "./assets/img/Projects/Screenshot 2025-06-30 174647.png";
import vsiet from "./assets/img/Projects/Screenshot 2025-06-30 185649.png";
import landing from "./assets/img/Projects/Screenshot 2025-06-30 185954.png";
function Projects() {
  const styles = {
    main: {
        marginTop: '120px',
        textAlign: 'center',
        overflowX: 'hidden',
        color: '#fff',
    },
  };
  return (
  <>
  <main style={styles.main}>
    <div className="container bx-sdw">
      <div className="row">
        <div className="col-lg-6 bx-sdw">
          <div className="project-item">
            <h3>Project 1: Portfolio Website</h3>
            <p>A personal portfolio website to showcase my skills and projects.</p>
            <a href="https://amankiportfolio.netlify.app/" target="_blank" rel="noreferrer"><img
                src={port} alt=""/></a>
          </div>
        </div>
        <div className="col-lg-6 bx-sdw">
          <h3>Project 2: GNIM Landing_page</h3>
          <p>The Project from my internship</p>
          <a href="https://gnim.netlify.app/" target="_blank" rel="noreferrer"><img
              src={gnim} alt=""/></a>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 bx-sdw">
          <h3>Project 3: VSIET Landing_page</h3>
          <p>The Project from my internship</p>
          <a href="https://vsiet-landing.netlify.app/" target="_blank" rel="noreferrer"><img
              src={vsiet} alt=""/></a>
        </div>
        <div className="col-lg-6 bx-sdw">
          <h3>Project 4: Landing Page</h3>
          <p>A modern landing page design for businesses and startups.</p>
          <a href="https://amanlanding.netlify.app/" target="_blank" rel="noreferrer"><img
              src={landing} alt=""/></a>
        </div>
      </div>
    </div>

  </main>
  </>
  )
}
export default Projects;