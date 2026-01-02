
import logo from './assets/img/image-modified.png';
import { useEffect } from 'react';
import { progressScript } from './assets/js/progress_bar.js';
import './assets/css/style.css';
function About() {
  useEffect(() => {
    const cleanup = progressScript();
    return cleanup;
  }, []);
  return (
    <>
      <main>
        <div className="top">
          <div className="border_back">
            <div className="border">
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
        <div className="attach">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="about-me">
                  <h2>About Me</h2>
                  <p>Hello! I'm Aman Kumar Gautam, a passionate web developer with a knack for creating dynamic and
                    responsive
                    websites. I love coding and enjoy the challenge of solving complex problems.</p>
                  <p>With a background in computer science, I have honed my skills in HTML, CSS, JavaScript, and various
                    frameworks. I am always eager to learn new technologies and improve my craft.</p>
                  <p>In my free time, I enjoy exploring new programming languages, contributing to open-source projects, and
                    sharing my knowledge with others.</p>
                </div>
              </div>
              <div className="col-lg-12 p-3">
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                    <div className="parent-skill">
                      <div className="skill">
                        <div className="progress" data-progress="90">
                          <span className="progress-number">0%</span>
                        </div>
                      </div>
                      <span className="title">HTML</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                    <div className="parent-skill">
                      <div className="skill">
                        <div className="progress" data-progress="80">
                          <span className="progress-number">0%</span>
                        </div>
                      </div>
                      <span className="title">CSS</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                    <div className="parent-skill">
                      <div className="skill">
                        <div className="progress" data-progress="65">
                          <span className="progress-number">0%</span>
                        </div>
                      </div>
                      <span className="title">Javascript</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                    <div className="parent-skill">
                      <div className="skill">
                        <div className="progress" data-progress="50">
                          <span className="progress-number">0%</span>
                        </div>
                      </div>
                      <span className="title">React</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                    <div className="parent-skill">
                      <div className="skill">
                        <div className="progress" data-progress="65">
                          <span className="progress-number">0%</span>
                        </div>
                      </div>
                      <span className="title">MySQL</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                    <div className="parent-skill">
                      <div className="skill">
                        <div className="progress" data-progress="50">
                          <span className="progress-number">0%</span>
                        </div>
                      </div>
                      <span className="title">Pyhton</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                    <div className="parent-skill">
                      <div className="skill">
                        <div className="progress" data-progress="80">
                          <span className="progress-number">0%</span>
                        </div>
                      </div>
                      <span className="title">C/C++</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="education">
                  <h2>Education</h2>
                  <p>Bachelor of Technology in Computer Science, Choudhary Charan Singh University, 2022-25</p>
                </div>
              </div>
            </div>
          </div>




        </div>

      </main>
    </>
  )
}
export default About;