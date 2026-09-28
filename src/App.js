import "./App.css";

function App() {
  return (
    <div className="college-site">

      {/* TOP NOTICE BAR */}
      <div className="notice-bar">
        <div>
          <strong>ADMISSIONS OPEN 2027</strong>
          <span>
            Applications are now open for Undergraduate & Postgraduate
            Programs
          </span>
        </div>

        <a href="#admissions">Apply Now →</a>
      </div>

      {/* HEADER */}
      <header className="main-header">

        <div className="header-top">

          <div className="college-brand">
            <div className="college-crest">
              <div className="crest-inner">
                N
              </div>
            </div>

            <div className="brand-text">
              <h1>NEXORA</h1>
              <h2>INSTITUTE OF TECHNOLOGY</h2>
              <p>Learn • Innovate • Lead</p>
            </div>
          </div>

          <div className="header-info">

            <div>
              <span>📍</span>
              <div>
                <small>LOCATION</small>
                <strong>Chhatrapati Sambhajinagar</strong>
              </div>
            </div>

            <div>
              <span>☎</span>
              <div>
                <small>ADMISSIONS</small>
                <strong>+91 87937 07291</strong>
              </div>
            </div>

            <button className="header-apply">
              Apply Online
            </button>

          </div>

        </div>

        {/* NAVIGATION */}
        <nav className="main-nav">

          <div className="mobile-menu-label">
            MENU
          </div>

          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#academics">Academics</a>
          <a href="#campus">Campus Life</a>
          <a href="#placements">Placements</a>
          <a href="#news">News & Events</a>
          <a href="#contact">Contact</a>

        </nav>

      </header>

      {/* HERO */}
      <section className="college-hero" id="home">

        <div className="hero-image"></div>

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <div className="hero-label">
            WELCOME TO NEXORA
          </div>

          <h2>
            Shaping Minds.
            <br />
            <span>Building Futures.</span>
          </h2>

          <p>
            A forward-thinking institute dedicated to academic excellence,
            innovation, research and the development of future leaders.
          </p>

          <div className="hero-actions">
            <a href="#academics" className="gold-button">
              Explore Programs
            </a>

            <a href="#admissions" className="outline-button">
              Admission 2027
            </a>
          </div>

        </div>

        <div className="hero-bottom">

          <div>
            <strong>25+</strong>
            <span>Academic Programs</span>
          </div>

          <div>
            <strong>50+</strong>
            <span>Industry Partners</span>
          </div>

          <div>
            <strong>95%</strong>
            <span>Placement Assistance</span>
          </div>

          <div>
            <strong>5000+</strong>
            <span>Alumni Community</span>
          </div>

        </div>

      </section>

      {/* QUICK LINKS */}
      <section className="quick-links">

        <a href="#admissions">
          <span>🎓</span>
          <div>
            <strong>Admissions</strong>
            <small>Apply for 2027</small>
          </div>
        </a>

        <a href="#academics">
          <span>📚</span>
          <div>
            <strong>Programs</strong>
            <small>Explore academics</small>
          </div>
        </a>

        <a href="#campus">
          <span>🏛️</span>
          <div>
            <strong>Campus Life</strong>
            <small>Discover NEXORA</small>
          </div>
        </a>

        <a href="#placements">
          <span>💼</span>
          <div>
            <strong>Placements</strong>
            <small>Career opportunities</small>
          </div>
        </a>

      </section>

      {/* ABOUT */}
      <section className="about-section section" id="about">

        <div className="section-heading">

          <div>
            <span className="eyebrow">ABOUT THE INSTITUTE</span>

            <h2>
              Education with a
              <br />
              <span>purpose.</span>
            </h2>
          </div>

          <p>
            NEXORA Institute of Technology is a fictional demonstration
            institution created by SPVANTA DIGITAL to showcase a modern
            college website experience.
          </p>

        </div>

        <div className="about-grid">

          <div className="about-photo">
            <div className="photo-caption">
              <strong>NEXORA CAMPUS</strong>
              <span>Chhatrapati Sambhajinagar, Maharashtra</span>
            </div>
          </div>

          <div className="about-content">

            <h3>
              Preparing students for the
              <span> world of tomorrow.</span>
            </h3>

            <p>
              At NEXORA, education goes beyond classrooms. Our academic
              environment combines strong fundamentals, practical learning,
              technology, research and industry exposure.
            </p>

            <p>
              Students are encouraged to question, experiment, collaborate
              and develop the confidence required to make a meaningful
              contribution to society.
            </p>

            <a href="#contact" className="dark-button">
              Discover NEXORA →
            </a>

          </div>

        </div>

      </section>

      {/* PRINCIPAL MESSAGE */}
      <section className="principal-section">

        <div className="principal-image">
          <div className="principal-placeholder">
            <span>NI</span>
          </div>
        </div>

        <div className="principal-content">

          <span className="eyebrow">
            FROM THE PRINCIPAL'S DESK
          </span>

          <h2>
            "Education is not just about
            <span> earning a degree.</span>"
          </h2>

          <p>
            Our mission is to create an environment where every student is
            encouraged to discover their strengths, develop their skills and
            contribute positively to the world around them.
          </p>

          <p>
            We believe in combining academic discipline with creativity,
            innovation, ethics and practical experience.
          </p>

          <div className="principal-signature">
            <strong>Dr. Aarav Mehta</strong>
            <span>Principal & Director</span>
          </div>

        </div>

      </section>

      {/* ACADEMICS */}
      <section className="academics-section section" id="academics">

        <div className="section-heading centered">

          <span className="eyebrow">ACADEMICS</span>

          <h2>
            Explore our
            <span> programs.</span>
          </h2>

          <p>
            Industry-relevant academic programs designed to build knowledge,
            skills and leadership.
          </p>

        </div>

        <div className="course-grid">

          <article className="course-card">

            <div className="course-top">
              <span>01</span>
              <strong>B.TECH</strong>
            </div>

            <div className="course-icon">
              AI
            </div>

            <h3>Artificial Intelligence</h3>

            <p>
              Machine learning, intelligent systems, robotics and emerging
              technologies.
            </p>

            <a href="#contact">View Program →</a>

          </article>

          <article className="course-card">

            <div className="course-top">
              <span>02</span>
              <strong>B.TECH</strong>
            </div>

            <div className="course-icon">
              CS
            </div>

            <h3>Computer Science</h3>

            <p>
              Software engineering, cloud computing, web development and
              modern computing.
            </p>

            <a href="#contact">View Program →</a>

          </article>

          <article className="course-card">

            <div className="course-top">
              <span>03</span>
              <strong>B.TECH</strong>
            </div>

            <div className="course-icon">
              DS
            </div>

            <h3>Data Science</h3>

            <p>
              Statistics, analytics, data engineering and intelligent
              decision-making.
            </p>

            <a href="#contact">View Program →</a>

          </article>

          <article className="course-card">

            <div className="course-top">
              <span>04</span>
              <strong>B.TECH</strong>
            </div>

            <div className="course-icon">
              CY
            </div>

            <h3>Cyber Security</h3>

            <p>
              Cyber defence, ethical security, digital forensics and network
              protection.
            </p>

            <a href="#contact">View Program →</a>

          </article>

        </div>

      </section>

      {/* WHY NEXORA */}
      <section className="why-section section">

        <div className="why-image"></div>

        <div className="why-content">

          <span className="eyebrow">WHY NEXORA</span>

          <h2>
            More than a
            <span> classroom.</span>
          </h2>

          <div className="why-list">

            <div>
              <strong>01</strong>
              <div>
                <h3>Experienced Faculty</h3>
                <p>
                  Learn from experienced educators and industry professionals.
                </p>
              </div>
            </div>

            <div>
              <strong>02</strong>
              <div>
                <h3>Practical Learning</h3>
                <p>
                  Projects, laboratories and practical experiences beyond
                  textbooks.
                </p>
              </div>
            </div>

            <div>
              <strong>03</strong>
              <div>
                <h3>Industry Exposure</h3>
                <p>
                  Internships, workshops and interactions with industry
                  experts.
                </p>
              </div>
            </div>

            <div>
              <strong>04</strong>
              <div>
                <h3>Student Development</h3>
                <p>
                  Clubs, events, leadership programs and a vibrant campus
                  community.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* CAMPUS */}
      <section className="campus-section section" id="campus">

        <div className="section-heading">

          <div>
            <span className="eyebrow">CAMPUS LIFE</span>

            <h2>
              Life at
              <span> NEXORA.</span>
            </h2>
          </div>

          <p>
            A campus designed to learn, collaborate, create and make lifelong
            memories.
          </p>

        </div>

        <div className="campus-grid">

          <div className="campus-card campus-large">
            <div>
              <span>01</span>
              <h3>Innovation Centre</h3>
            </div>
          </div>

          <div className="campus-card campus-library">
            <div>
              <span>02</span>
              <h3>Central Library</h3>
            </div>
          </div>

          <div className="campus-card campus-sports">
            <div>
              <span>03</span>
              <h3>Sports & Recreation</h3>
            </div>
          </div>

          <div className="campus-card campus-labs">
            <div>
              <span>04</span>
              <h3>Advanced Laboratories</h3>
            </div>
          </div>

        </div>

      </section>

      {/* PLACEMENTS */}
      <section className="placement-section section" id="placements">

        <div className="section-heading centered">

          <span className="eyebrow">CAREERS & PLACEMENTS</span>

          <h2>
            From learning to
            <span> earning.</span>
          </h2>

          <p>
            Our career development ecosystem connects students with
            opportunities across technology and business.
          </p>

        </div>

        <div className="placement-numbers">

          <div>
            <strong>95%</strong>
            <span>Placement Assistance</span>
          </div>

          <div>
            <strong>50+</strong>
            <span>Industry Partners</span>
          </div>

          <div>
            <strong>12L</strong>
            <span>Highest Package*</span>
          </div>

          <div>
            <strong>500+</strong>
            <span>Alumni Network</span>
          </div>

        </div>

        <p className="demo-disclaimer">
          *All statistics displayed on this fictional demo website are for
          demonstration purposes only.
        </p>

      </section>

      {/* NEWS */}
      <section className="news-section section" id="news">

        <div className="section-heading">

          <div>
            <span className="eyebrow">NEWS & EVENTS</span>

            <h2>
              What's happening at
              <span> NEXORA.</span>
            </h2>
          </div>

          <a href="#contact" className="dark-button">
            View All News →
          </a>

        </div>

        <div className="news-grid">

          <article className="news-card">

            <div className="news-date">
              <strong>15</strong>
              <span>MAR</span>
            </div>

            <div>
              <span className="news-category">EVENT</span>
              <h3>Annual Technology Innovation Summit 2027</h3>
              <p>
                Students showcase innovative technology projects and ideas.
              </p>
              <a href="#contact">Read More →</a>
            </div>

          </article>

          <article className="news-card">

            <div className="news-date">
              <strong>28</strong>
              <span>APR</span>
            </div>

            <div>
              <span className="news-category">ADMISSIONS</span>
              <h3>Applications Open for Academic Year 2027</h3>
              <p>
                Applications are now open for selected undergraduate programs.
              </p>
              <a href="#admissions">Apply Now →</a>
            </div>

          </article>

          <article className="news-card">

            <div className="news-date">
              <strong>10</strong>
              <span>MAY</span>
            </div>

            <div>
              <span className="news-category">CAMPUS</span>
              <h3>Inter-College Sports Championship</h3>
              <p>
                Students participate in a range of sports and cultural
                activities.
              </p>
              <a href="#contact">Read More →</a>
            </div>

          </article>

        </div>

      </section>

      {/* ADMISSION CTA */}
      <section className="admission-section" id="admissions">

        <div className="admission-overlay"></div>

        <div className="admission-content">

          <span className="eyebrow">
            ADMISSIONS 2027
          </span>

          <h2>
            Your journey
            <br />
            starts <span>here.</span>
          </h2>

          <p>
            Take the first step towards an exciting academic journey at
            NEXORA Institute of Technology.
          </p>

          <div className="hero-actions">

            <a href="#contact" className="gold-button">
              Start Application
            </a>

            <a href="#contact" className="outline-button">
              Talk to Admissions
            </a>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="contact-section section" id="contact">

        <div className="contact-grid">

          <div>

            <span className="eyebrow">
              GET IN TOUCH
            </span>

            <h2>
              Have a question?
              <span> Talk to us.</span>
            </h2>

            <p>
              Our admissions team is available to help students and parents
              understand programs, admissions and campus life.
            </p>

            <div className="contact-details">

              <div>
                <span>📍</span>
                <div>
                  <small>ADDRESS</small>
                  <strong>
                    NEXORA Institute of Technology,
                    <br />
                    Chhatrapati Sambhajinagar,
                    Maharashtra, India
                  </strong>
                </div>
              </div>

              <div>
                <span>☎</span>
                <div>
                  <small>PHONE</small>
                  <strong>+91 87937 07291</strong>
                </div>
              </div>

              <div>
                <span>✉</span>
                <div>
                  <small>EMAIL</small>
                  <strong>admissions@nexora.edu</strong>
                </div>
              </div>

            </div>

          </div>

          <div className="enquiry-box">

            <h3>Admission Enquiry</h3>

            <p>
              Fill in your details and our admissions team will contact you.
            </p>

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <select defaultValue="">
              <option value="" disabled>
                Select Program
              </option>
              <option>B.Tech Artificial Intelligence</option>
              <option>B.Tech Computer Science</option>
              <option>B.Tech Data Science</option>
              <option>B.Tech Cyber Security</option>
            </select>

            <button className="submit-button">
              Submit Enquiry →
            </button>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="college-footer">

        <div className="footer-main">

          <div className="footer-brand">

            <div className="college-brand">

              <div className="college-crest">
                <div className="crest-inner">
                  N
                </div>
              </div>

              <div className="brand-text">
                <h1>NEXORA</h1>
                <h2>INSTITUTE OF TECHNOLOGY</h2>
                <p>Learn • Innovate • Lead</p>
              </div>

            </div>

            <p>
              A fictional college website demonstration created by
              SPVANTA DIGITAL.
            </p>

          </div>

          <div className="footer-column">
            <h4>QUICK LINKS</h4>
            <a href="#about">About Us</a>
            <a href="#academics">Academics</a>
            <a href="#campus">Campus Life</a>
            <a href="#placements">Placements</a>
          </div>

          <div className="footer-column">
            <h4>ADMISSIONS</h4>
            <a href="#admissions">Apply Online</a>
            <a href="#contact">Admission Enquiry</a>
            <a href="#news">News & Events</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-column">
            <h4>CONTACT</h4>
            <span>Chhatrapati Sambhajinagar</span>
            <span>Maharashtra, India</span>
            <span>+91 87937 07291</span>
            <span>admissions@nexora.edu</span>
          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © 2026 NEXORA Institute of Technology. Demo Website.
          </span>

          <span>
            Website Designed & Developed by
            <strong> SPVANTA DIGITAL</strong>
          </span>

        </div>

      </footer>

      {/* WHATSAPP */}
      <a
        className="whatsapp-button"
        href="https://wa.me/918793707291"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <span>WA</span>
      </a>

    </div>
  );
}

export default App;