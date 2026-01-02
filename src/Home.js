import college from './assets/img/Experience/College.avif';
import { initLegacyScripts } from "./assets/js/script.js";
import confrence_iimt from './assets/img/Experience/Confrence_IIMT.jpeg';
import conference_trinity from './assets/img/Experience/Conference_Trinity.jpeg';
import online_inter from './assets/img/Experience/Online_inter.png';
import copy from './assets/img/bg-slider-1-copy.jpg';
import copy1 from './assets/img/bg-slider-1-copy.jpg';
import './assets/css/popup.css';
import copy3 from './assets/img/bg-slider-3-copy.jpg';
import myimage from './assets/img/MyImage.jpeg'
import { useEffect } from "react";
import { popupscript } from './assets/js/popup.js';
import TypedText from "./TypedText";
import resume from './assets/pdf/Aman CV.pdf';

function Home() {
    useEffect(() => {
        initLegacyScripts();
    }, []);
    useEffect(() => {
        popupscript();
    }, []);
    const styles = {
        main: {
            overflowX: 'hidden',
            color: '#fff',
        },
    };
    return (
        <>
            <main style={styles.main}>
                <section className="firstSection">
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={copy} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={copy1} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={copy3} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="container thodaniche">
                        <div className="row">
                            <div className="col-lg-8 col-sm-12">
                                <div className="leftSection">
                                    Hi, my name is <nav className="purple">Aman Kumar Guatam</nav>
                                    <div>And I am a passonate</div>
                                    <TypedText />
                                    <div className="button">
                                        <a href={resume} target="_blank" rel="noopener noreferrer">
                                            <button className="btn">See Resume</button>
                                        </a>
                                        <a href="https://github.com/instinctaman">
                                            <button className="btn">Visit Github</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
                                <div className="rightSection">
                                    <img src={myimage} alt="Coder" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <hr />
                <div className="title1">
                    <h2 style={{ fontSize: '44px' }}>Experience</h2>
                    <h3 className="fnt-14">What have I done so far..</h3>
                </div>
                {/* popUp--> */}
                {/* Modal --> */}
                <div id="modal" className="modal modal__bg" role="dialog" aria-hidden="true">
                    <div className="modal__dialog">
                        <div className="modal__content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <img src={college} alt="college"
                                            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="modal-body1">
                                            <h3 className="Sajao">My college Experience</h3>
                                            <p className="sajao-P">During my Bachelor of Computer Applications (BCA) at Global
                                                Institute of Information Technology, I built a strong foundation in programming,
                                                web development, and database management. The academic journey was not just
                                                about theory—it involved hands-on projects, practical labs, and continuous
                                                learning. My college experience helped me develop a problem-solving mindset,
                                                collaborate effectively in teams, and gain confidence in applying technical
                                                knowledge to real-world scenarios.</p>
                                            {/* <p className="ps">**I know the SASS is a bit messy, I did this on the fly and for fun <br /> and w.e. I DO WHAT I WANT!!</p> -->*/}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* modal close button --> */}
                            <a href="javascript;" className="modal__close demo-close">
                                <svg className="" viewBox="0 0 24 24">
                                    <path
                                        d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
                                    <path d="M0 0h24v24h-24z" fill="none" />
                                </svg>
                            </a>

                        </div>
                    </div>
                </div>

                <div id="modal2" className="modal modal--align-top modal__bg" role="dialog" aria-hidden="true">
                    <div className="modal__dialog">
                        <div className="modal__content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 d-ruby">
                                        <div className="setSize d-flex" style={{ height: '300px' }}>
                                            <div className="setSize m-auto" style={{ width: '360px', height: '258px' }}>
                                                <img src={confrence_iimt} alt="" className="responsive-lg" />
                                            </div>
                                        </div>
                                        <p id="popupText" className="manage_gap">I actively participated as a volunteer in the
                                            International Conference Meeting on Recent Developments in the Architecture of Smart
                                            Cities using Internet of Things (ICM-2023) held at Global Institute of Information
                                            Technology, Greater Noida, on 29th–30th October 2023.</p>
                                    </div>
                                    <div className="col-lg-6 d-ruby">
                                        <div className="setSize d-flex" style={{ height: '300px' }}>
                                            <div className="setSize m-auto" style={{ width: '360px', height: '242px' }}>
                                                <img src={conference_trinity} alt="" className="responsive-lg" />
                                            </div>
                                        </div>
                                        <p id="popupText" className="manage_gap">I attended a seminar at Trinity Institute of
                                            Innovations in Professional Studies (TIIPS) on "Impact of AI, Machine Learning, and Big
                                            Data in the Financial Ecosystem" held on 28th February 2025, which enhanced my
                                            understanding of emerging technologies and their real-world applications in the
                                            financial domain.</p>
                                    </div>
                                </div>
                            </div>
                            {/* modal close button --> */}
                            <a href="javascript;" className="modal__close demo-close">
                                <svg className="" viewBox="0 0 24 24">
                                    <path
                                        d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
                                    <path d="M0 0h24v24h-24z" fill="none" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div id="modal3" className="modal modal__bg" role="dialog" aria-hidden="true">
                    <div className="modal__dialog">
                        <div className="modal__content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <img className="responsive-lg" src={online_inter} alt="" />
                                    </div>
                                    <div className="col-lg-6">
                                        <h2 id="popupTitle" className="Sajao">Online Internship</h2>
                                        <p id="popupText" className="manage_gap">Successfully completed a 4-week Web Development
                                            internship at ELiteTech
                                            Intern from March 31 to April 30, 2025. Gained hands-on experience in front-end and
                                            back-end development, working with technologies like HTML, CSS, JavaScript, and PHP.
                                            Earned outstanding remarks for dedication, problem-solving skills, and contribution to
                                            real-time projects under professional mentorship.</p>
                                    </div>
                                </div>
                            </div>

                            {/* modal close button --> */}
                            <a href="javascript;" className="modal__close demo-close">
                                <svg className="" viewBox="0 0 24 24">
                                    <path
                                        d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
                                    <path d="M0 0h24v24h-24z" fill="none" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div id="modal4" className="modal modal__bg" role="dialog" aria-hidden="true">
                    <div className="modal__dialog">
                        <div className="modal__content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <img className="responsive-lg" src={online_inter} alt="" />
                                    </div>
                                    <div className="col-lg-6">
                                        <h2 id="popupTitle" className="Sajao">Offline Internship</h2>
                                        <p id="popupText" className="manage_gap">Completed a 3-month offline internship in Web Development at
                                            Innoweb
                                            Solution, where I gained hands-on experience in designing responsive websites, developing dynamic web
                                            applications using HTML, CSS, JavaScript, PHP, and MySQL, and collaborating in a professional
                                            development environment to deliver real-world projects.</p>
                                    </div>
                                </div>
                            </div>

                            {/* modal close button --> */}
                            <a href="javascript;" className="modal__close demo-close">
                                <svg className="" viewBox="0 0 24 24">
                                    <path
                                        d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
                                    <path d="M0 0h24v24h-24z" fill="none" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                {/* popUp end--> */}

                <section className="page-content">
                    <div className="card">
                        <div className="content">
                            <h2 className="title">Collge</h2>
                            <p className="copy">I have successfully completed my Bachelor of Computer Applications (BCA) from Global
                                Institute of Information Technology</p>
                            <button href="" data-modal="#modal" className="modal__trigger btn">MORE INFO.</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                            <h2 className="title">Conference</h2>
                            <p className="copy">Attended tech conferences to explore emerging trends, gain insights, and enhance my
                                practical knowledge beyond academics.</p>
                            {/* <button className="btn" id="openMyPopup" data-popup="myPopup" onClick="openPopup('#myPopup')" 
                                        aria-controls="myPopup" aria-label="Open popup">View Certificate</button> -->*/}
                            <button href="" data-modal="#modal2" className="modal__trigger btn">View Certificates</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                            <h2 className="title">Online Internship</h2>
                            <p className="copy">I have successfully completed a 1-month online internship</p>
                            <button href="" data-modal="#modal3" className="modal__trigger btn">View Certificate</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                            <h2 className="title">Offline Internship</h2>
                            <p className="copy">I have successfully completed a 3-month offline internship</p>
                            <button href="" data-modal="#modal4" className="modal__trigger btn">View Certificate</button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Home;