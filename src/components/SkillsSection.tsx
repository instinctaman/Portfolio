import { SKILLS, PERSONAL_INFO } from "../data/portfolioData";

export default function SkillsSection() {
  return (
    <section className="section-two interactive" id="skills">
      <div className="two-grid interactive">
        <div>
          <div className="mono-label reveal">
            [ 02 — Skills &amp; Engineering Identity ]
          </div>
          <h2 className="section-heading reveal" style={{ transitionDelay: "0.1s" }}>
            Technical Expertise
            <br />
            &amp; Core Stack.
          </h2>
          <p className="body-copy reveal" style={{ transitionDelay: "0.2s" }}>
            {PERSONAL_INFO.bio[1]}
          </p>

          {/* Code Dossier Terminal Card */}
          <div className="terminal-card reveal" style={{ transitionDelay: "0.25s" }}>
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="terminal-dot red" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green" />
              </div>
              <span className="terminal-file-name">aman_profile.ts</span>
              <span className="terminal-tag">TypeScript</span>
            </div>

            <div className="terminal-body">
              <div>
                <span className="kw-pink">const</span>{" "}
                <span className="kw-blue">developer</span> = &#123;
              </div>
              <div className="code-indent">
                <span className="code-key">name:</span>{" "}
                <span className="code-str">&quot;{PERSONAL_INFO.name}&quot;</span>,
              </div>
              <div className="code-indent">
                <span className="code-key">role:</span>{" "}
                <span className="code-str">&quot;Web Developer &amp; UI/UX Specialist&quot;</span>,
              </div>
              <div className="code-indent">
                <span className="code-key">location:</span>{" "}
                <span className="code-str">&quot;{PERSONAL_INFO.location.label}&quot;</span>,
              </div>
              <div className="code-indent">
                <span className="code-key">education:</span> [
                <span className="code-str">&quot;B.Tech CSE&quot;</span>,{" "}
                <span className="code-str">&quot;BCA&quot;</span>],
              </div>
              <div className="code-indent">
                <span className="code-key">coreTech:</span> [
                <span className="code-str">&quot;HTML&quot;</span>,{" "}
                <span className="code-str">&quot;CSS&quot;</span>,{" "}
                <span className="code-str">&quot;JavaScript&quot;</span>,{" "}
                <span className="code-str">&quot;C/C++&quot;</span>,{" "}
                <span className="code-str">&quot;React&quot;</span>,{" "}
                <span className="code-str">&quot;PHP&quot;</span>,{" "}
                <span className="code-str">&quot;MySQL&quot;</span>],
              </div>
              <div className="code-indent">
                <span className="code-key">status:</span>{" "}
                <span className="code-status">&quot;{PERSONAL_INFO.status}&quot;</span>
              </div>
              <div>&#125;;</div>
            </div>
          </div>

          <div className="skills-container reveal" style={{ transitionDelay: "0.3s" }}>
            {SKILLS.map((s) => (
              <div key={s.name} className="skill-pill-card">
                <div className="skill-header">
                  <span className="skill-title">{s.name}</span>
                  <span className="skill-pct">{s.percentage}%</span>
                </div>
                <div className="skill-bar-track">
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${s.percentage}%` }}
                  />
                </div>
                <div className="skill-highlight">{s.highlight}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="stats reveal" style={{ transitionDelay: "0.25s" }}>
          <div className="stat-card">
            <div className="stat-inner">
              <div className="stat-meta">
                <span className="index">01</span>
                <span>Specialization</span>
                <i className="dot" />
              </div>
              <div className="stat-value">Full-Stack Web Development</div>
              <div className="stat-desc">
                Dynamic, responsive websites &amp; interactive web architecture
              </div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-inner">
              <div className="stat-meta">
                <span className="index">02</span>
                <span>Work Experience</span>
                <i className="dot" />
              </div>
              <div className="stat-value">Innoweb Solution &amp; EliteTech</div>
              <div className="stat-desc">
                Completed offline &amp; online internships delivering real-world code
              </div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-inner">
              <div className="stat-meta">
                <span className="index">03</span>
                <span>Academic Foundation</span>
                <i className="dot" />
              </div>
              <div className="stat-value">B.Tech (CSE) &amp; BCA Graduate</div>
              <div className="stat-desc">
                Choudhary Charan Singh University &amp; GIIT Greater Noida
              </div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-inner">
              <div className="stat-meta">
                <span className="index">04</span>
                <span>Problem Solving</span>
                <i className="dot" />
              </div>
              <div className="stat-value">Algorithms, Data Structures &amp; SQL</div>
              <div className="stat-desc">
                Strong fundamentals in C/C++, database schemas &amp; OOP concepts
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
