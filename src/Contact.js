
import { initInputFocus } from "./assets/js/call";
import { useEffect } from "react";
function Contact() {
  useEffect(() => {
    const cleanup = initInputFocus();
    return cleanup;
  }, []);
  const styles = {
    main: {
        marginTop: '120px',
        overflowX: 'hidden',
        color: '#fff',
    },
  };
  return(
     <div style={styles.main} className="containers">
    <span className="big-circle"></span>
    {/* <!-- <span className="big-circle1"></span> -->
    <!-- <img src="img/shape.png" className="square" alt="" /> --> */}
    <div className="form">
      <div className="contact-info">
        <h3 className="titles">Let's get in touch</h3>
        {/* <!-- <p className="text">
          I can ask me anything.
        </p> --> */}
        <div className="info">
          <a href="https://goo.gl/maps/u7vvVRmi2yTysDEM9?g_st=aw" target="_blank" rel="noreferrer">
            <div className="information">
              <i className="fas fa-map-marker-alt"></i> &nbsp; &nbsp;

              <p className="m-0">Sirsa, Greater Noida</p>
            </div>
          </a>
          <a href="mailto:instinctak07@gmail.com">
            <div className="information">
              <i className="fas fa-envelope"></i> &nbsp; &nbsp;
              <p className="m-0">instinctak07@gmail.com</p>
            </div>
          </a>
          <a href="tel:+91 8287045234" title="Give me a call">
            <div className="information">
              <i className="fas fa-phone"></i>&nbsp; &nbsp;
              <p className="m-0">+91 8287045234</p>
            </div>
          </a>
        </div>

        <div className="social-media">
          <p>Connect with us :</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/1AsajG6rNx/">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/https://x.com/AmanKumar262665">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/aman_is_tough_07?igsh=M2N0ZTNvb3pobnli">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/https://www.linkedin.com/in/aman-kumar-38aa882b8/">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="contact-forms">
        <span className="circle one"></span>
        <span className="circle two"></span>

        <form className="Contactform mailform" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field"
          autocomplete="off">
          <input type="hidden" name="form-name" value="contact"/>
          <p hidden>
            <label>Don’t fill this out: <input name="bot-field" /></label>
          </p>

          <h3 className="titles">Contact us</h3>

          <div className="input-container">
            <input type="text" name="name" className="input" required />
            <label>Username</label>
            <span>Username</span>
          </div>

          <div className="input-container">
            <input type="email" name="email" className="input" required />
            <label>Email</label>
            <span>Email</span>
          </div>

          <div className="input-container">
            <input type="tel" name="phone" className="input" required />
            <label>Phone</label>
            <span>Phone</span>
          </div>

          <div className="input-container textarea">
            <textarea name="message" className="input" required></textarea>
            <label>Message</label>
            <span>Message</span>
          </div>

          <input type="submit" value="Send" className="btn btnc" />
        </form>

      </div>
    </div>
  </div>
)
}
export default Contact;