import w_dev from './assets/img/Services/Web Development1.jpg';
import app_design from './assets/img/Services/App design.webp';
import ux_ui from './assets/img/Services/ux_ui_design.webp';
import consulting from './assets/img/Services/Consulting-768x384.png';
function Services() {
  const styles = {
    main: {
      marginTop: '80px',
      textAlign: 'center',
        overflowX: 'hidden',
        color: '#fff',
    },
  };
  return (
    <>
      <main style={styles.main}>
    <div className="services">
      <h2>Services</h2>
      <p>I offer a range of services to help you achieve your goals:</p>
      <div className="container bx-sdw">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="img-size">
              <img src={w_dev} alt=""/>
            </div>
            <h3>Web Development</h3>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="img-size">
              <img src={app_design} alt=""/>
            </div>
            <h3>App Design</h3>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="img-size">
              <img src={ux_ui} alt=""/>
            </div>
            <h3>UI/UX Design</h3>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="img-size">
              <img src={consulting} alt=""/>
            </div>
            <h3>Consulting</h3>
          </div>
        </div>
      </div>
      <p>If you're interested in any of these services, feel free to reach out!</p>
    </div>
    <div className="contact-info">
      <h2>Contact Information</h2>
      <p>Email: <a href="mailto:instinctak07@gamil.com">instinctak07@gamil.com</a>
      </p>
      <p>Phone: <a href="tel:+918287045234">+91 82870 45234</a></p>
    </div>

  </main>
    </>
  )
}
export default Services;