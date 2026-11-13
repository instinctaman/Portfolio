import { SERVICES } from "../data/portfolioData";

export default function ServicesSection() {
  return (
    <section className="services-section interactive" id="services">
      <div className="mono-label reveal">[ 04 — Capabilities &amp; Services ]</div>
      <h2 className="section-heading reveal" style={{ transitionDelay: "0.1s" }}>
        Services &amp;
        <br />
        Solutions.
      </h2>
      <p
        className="body-copy reveal"
        style={{ transitionDelay: "0.2s", maxWidth: "600px", marginTop: "24px" }}
      >
        Delivering end-to-end digital solutions from UI/UX design wireframes
        to responsive full-stack implementation and technical consulting.
      </p>

      <div className="services-grid interactive">
        {SERVICES.map((srv, idx) => (
          <div
            key={srv.id}
            className="service-card reveal interactive"
            style={{ transitionDelay: `${0.12 + idx * 0.1}s` }}
          >
            <div className="service-header">
              <span className="service-subtitle">{srv.subtitle}</span>
              <h3 className="service-title">{srv.title}</h3>
            </div>
            <p className="service-desc">{srv.description}</p>
            <ul className="service-features">
              {srv.features.map((feat) => (
                <li key={feat} className="service-feature">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
