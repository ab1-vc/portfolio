import { FormEvent, useEffect, useState } from "react";

/* =========================================================
   EDITABLE PROFILE DETAILS
   Update anything here and it reflects across the site.
   ========================================================= */
const profile = {
  name: "Subaharisha A.",
  initials: "SA",
  title: "Full Stack Developer | Web Developer",
  // Add the domain (e.g. "harisuba2702@gmail.com") to make the email clickable.
  email: "harisuba2702",
  phone: "63848334226",
  countryCode: "91",
  linkedin: "https://www.linkedin.com/in/subaharisha-a-92a974338/",
  github: "https://github.com/ab1-vc",
  location: "Kanyakumari, Tamil Nadu",
  resume: `${import.meta.env.BASE_URL}Subaharisha-A-Resume.html`,
  period: "2025–26",
};

const whatsappNumber = `${profile.countryCode}${profile.phone}`;
const emailHref = profile.email.includes("@") ? `mailto:${profile.email}` : undefined;
const asset = (name: string) => `${import.meta.env.BASE_URL}${name}`;

type IconName =
  | "arrow"
  | "download"
  | "mail"
  | "phone"
  | "github"
  | "linkedin"
  | "menu"
  | "close"
  | "external"
  | "code"
  | "pin"
  | "check"
  | "chat"
  | "award";

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Education", "education"],
  ["Contact", "contact"],
];

const skillGroups = [
  { label: "Frontend", skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React"] },
  { label: "Backend & Database", skills: ["Python", "SQL", "MySQL"] },
  { label: "Version Control", skills: ["Git", "GitHub"] },
];

/* Add "live" and "github" URLs per project. Leave live empty if not deployed yet. */
const projects = [
  {
    number: "01",
    title: "GASCKK Chatbot",
    image: asset("gasckk-chatbot.png"),
    alt: "Student support chatbot interface concept",
    description:
      "A student-support chatbot project for BCA students, providing syllabus and college-related information with English and Tamil responses.",
    technologies: ["HTML", "CSS", "JavaScript"],
    live: "",
    github: profile.github,
  },
  {
    number: "02",
    title: "Ajil Aqua Park Website",
    image: asset("ajil-aqua-park.png"),
    alt: "RO water purifiers displayed at the Ajil Aqua Park store",
    description:
      "A responsive business website created to present products, services, company information, contact details, and customer enquiries.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    live: "https://ajilaquapark.netlify.app/",
    github: profile.github,
  },
  {
    number: "03",
    title: "Inventory Billing System",
    image: asset("inventory-billing.png"),
    alt: "Inventory and billing dashboard concept",
    description:
      "A Python and Flask inventory and billing system with product and customer management, billing, sales and stock reports, low-stock monitoring, and login functionality.",
    technologies: ["Python", "Flask", "MySQL"],
    live: "",
    github: profile.github,
  },
  {
    number: "04",
    title: "Sujin Bus & Cab Booking",
    image: asset("sujin-bus.png"),
    alt: "Two Sujin buses side by side on a rainy highway under a lightning sky",
    description:
      "A responsive website for a local bus and cab booking service, featuring service information, contact options, location details, and booking enquiries.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    live: "",
    github: profile.github,
  },
];

const experience = [
  {
    role: "Java Internship",
    organization: "Besant Technologies",
    period: "2025–26",
    label: "Internship",
    description:
      "Gained practical exposure to Java development and core software development concepts during the internship.",
  },
];

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Government Arts and Science College, Kanyakumari",
    period: "2025–26",
    grade: "CGPA 8.5",
    description:
      "A computer applications foundation that developed my interest in web development, software projects, and continuous technical learning.",
  },
];

/* Add more certificates here as you complete them. */
const certifications = [
  {
    title: "Python Full Stack Development",
    issuer: "Besant Technologies",
    period: "2025–26",
  },
];

function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    download: <><path d="M12 3v12m0 0 4-4m-4 4-4-4" /><path d="M5 19v2h14v-2" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />,
    github: <><path d="M15 22v-3.7c0-1 .1-1.8-.5-2.5 2.7-.3 5.5-1.3 5.5-6A4.7 4.7 0 0 0 18.7 6.5 4.4 4.4 0 0 0 18.6 3S17.5 2.7 15 4.4a12.2 12.2 0 0 0-6 0C6.5 2.7 5.4 3 5.4 3A4.4 4.4 0 0 0 5.3 6.5 4.7 4.7 0 0 0 4 9.8c0 4.7 2.8 5.7 5.5 6-.6.5-.6 1.4-.5 2.5V22" /><path d="M9.5 19.5C7 20.3 6 18.3 6 18.3" /></>,
    linkedin: <><path d="M7 9v10M7 5v.01M11 19v-5.5a4.5 4.5 0 0 1 9 0V19M11 13.5V9" /></>,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    external: <><path d="M14 5h5v5M19 5l-8 8" /><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" /></>,
    code: <><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" /></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    chat: <><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" /><path d="M8.5 12h.01M12 12h.01M15.5 12h.01" /></>,
    award: <><circle cx="12" cy="9" r="5" /><path d="m8.5 13.5-1.5 7 5-2.5 5 2.5-1.5-7" /></>,
  };

  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="section-heading reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <div className="heading-copy">{children}</div>}
    </div>
  );
}

function ProjectLinks({ live, github, title }: { live: string; github: string; title: string }) {
  return (
    <div className="project-actions">
      {live ? (
        <a className="project-link project-link-dark" href={live} target="_blank" rel="noreferrer" aria-label={`Open live demo of ${title}`}>
          <Icon name="external" /> Live Demo
        </a>
      ) : (
        <span className="project-link project-link-muted" aria-disabled="true" title="Live demo coming soon">
          <Icon name="external" /> Live Demo
        </span>
      )}
      <a className="project-link" href={github} target="_blank" rel="noreferrer" aria-label={`Open GitHub for ${title}`}>
        <Icon name="github" /> GitHub
      </a>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  /* Sends the form content straight to your WhatsApp number. */
  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const text = `Hi Subaharisha, I'm ${name} (${email}).\n\n${message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    form.reset();
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label={`${profile.name} home`}>
          <span className="brand-mark">{profile.initials}</span>
          <span>{profile.name}</span>
        </a>
        <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
        <nav className={menuOpen ? "main-nav nav-open" : "main-nav"} aria-label="Main navigation">
          {navItems.map(([label, target]) => (
            <a key={target} href={`#${target}`} onClick={closeMenu}>{label}</a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-visual" aria-hidden="true">
            <img src={asset("gasckk-chatbot.png")} alt="" />
          </div>
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="hero-kicker">Portfolio / {profile.period}</p>
            <p className="hero-name">Subaharisha A<span>.</span></p>
            <h1>Full Stack Developer<br />&amp; Web Developer</h1>
            <p className="hero-copy">Recent BCA graduate and aspiring Full Stack Developer with hands-on experience building responsive websites and web-based projects. I am a quick learner, adaptable, and passionate about creating clean and user-friendly web experiences.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#projects">View My Projects <Icon name="arrow" /></a>
              <a className="button button-ghost" href={profile.resume} download>Download Resume <Icon name="download" /></a>
              <a className="text-action" href="#contact">Contact Me <Icon name="arrow" /></a>
            </div>
            <div className="hero-social">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a>
            </div>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about section"><span /> Scroll to explore</a>
        </section>

        <section className="section about" id="about">
          <div className="about-intro reveal">
            <p className="eyebrow">01 / About me</p>
            <h2>Building considered digital experiences, one project at a time.</h2>
          </div>
          <div className="about-copy reveal">
            <p>I am a BCA graduate beginning my career as a Full Stack Developer. Through hands-on academic and personal projects, I have built responsive interfaces and practical web-based solutions with a focus on clarity and usability.</p>
            <p>I bring a quick-learning mindset, adaptability, and a collaborative approach to every opportunity. I am eager to deepen my technical knowledge, contribute to a supportive team, and learn new technologies that help create better web experiences.</p>
            <a className="inline-link" href="#contact">Let's connect <Icon name="arrow" /></a>
          </div>
          <div className="principles reveal">
            <div><span>01</span><p>Curious &amp; quick to learn</p></div>
            <div><span>02</span><p>Adaptable team contributor</p></div>
            <div><span>03</span><p>Thoughtful web problem-solver</p></div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <SectionHeading eyebrow="02 / Skills" title="A practical foundation for the web.">
            <p>Technologies I use across responsive front-end work, back-end fundamentals, and web-based projects.</p>
          </SectionHeading>
          <div className="skills-layout">
            {skillGroups.map((group, groupIndex) => (
              <div className="skill-group reveal" key={group.label} style={{ transitionDelay: `${groupIndex * 90}ms` }}>
                <p className="skill-group-title">{group.label}</p>
                <ul>
                  {group.skills.map((skill) => <li key={skill}><Icon name="check" /><span>{skill}</span></li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <SectionHeading eyebrow="03 / Selected work" title="Projects built with purpose.">
            <p>A selection of web projects that reflect my growing development skills and interest in useful digital solutions.</p>
          </SectionHeading>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project reveal" key={project.title} style={{ transitionDelay: `${index % 2 === 0 ? 0 : 100}ms` }}>
                <div className="project-image">
                  <img src={project.image} alt={project.alt} />
                  <span>{project.number}</span>
                </div>
                <div className="project-details">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-footer">
                    <ul className="tech-list" aria-label={`Technologies used in ${project.title}`}>
                      {project.technologies.map((tech) => <li key={tech}>{tech}</li>)}
                    </ul>
                    <ProjectLinks live={project.live} github={project.github} title={project.title} />
                  </div>
                </div>
              </article>
            ))}
          </div>
          <a className="project-note reveal" href={profile.github} target="_blank" rel="noreferrer">
            <Icon name="code" /> View more of my work on GitHub <Icon name="arrow" />
          </a>
        </section>

        <section className="section journey-section" id="experience">
          {experience.map((item) => (
            <div className="journey-block reveal" key={item.role}>
              <p className="eyebrow">04 / Experience</p>
              <div className="journey-row">
                <div><h2>{item.role}</h2><p className="institution">{item.organization}</p></div>
                <span className="journey-label"><span>{item.period}</span><span className="journey-meta">{item.label}</span></span>
              </div>
              <p className="journey-description">{item.description}</p>
            </div>
          ))}
          {education.map((item) => (
            <div className="journey-block reveal" id="education" key={item.degree}>
              <p className="eyebrow">05 / Education</p>
              <div className="journey-row">
                <div><h2>{item.degree}</h2><p className="institution">{item.institution}</p></div>
                <span className="journey-label"><span>{item.period}</span><span className="journey-meta">{item.grade}</span></span>
              </div>
              <p className="journey-description">{item.description}</p>
            </div>
          ))}
        </section>

        <section className="section certifications-section" id="certifications">
          <SectionHeading eyebrow="06 / Certifications" title="Continuous learning.">
            <p>Professional training that strengthens my full stack development skills.</p>
          </SectionHeading>
          <ul className="certificate-list">
            {certifications.map((cert) => (
              <li className="certificate-row reveal" key={cert.title}>
                <div className="certificate-icon"><Icon name="award" /></div>
                <div>
                  <h3>{cert.title}</h3>
                  <p>{cert.issuer}</p>
                </div>
                <span className="certificate-period">{cert.period}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="resume-section" id="resume">
          <div className="resume-art" aria-hidden="true"><span>{profile.initials}</span><span>{profile.period}</span><span>&lt;/&gt;</span></div>
          <div className="resume-content reveal">
            <p className="eyebrow">Resume</p>
            <h2>Interested in<br />working together?</h2>
            <p>Download my resume to learn more about my skills, projects, and experience.</p>
            <a className="button button-light" href={profile.resume} download>Download Resume <Icon name="download" /></a>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <SectionHeading eyebrow="07 / Contact" title="Let's start a conversation.">
            <p>Open to entry-level Full Stack Developer and Web Developer opportunities.</p>
          </SectionHeading>
          <div className="contact-layout">
            <div className="contact-details reveal">
              <p className="contact-prompt">For opportunities, collaborations, or a quick hello.</p>
              {emailHref ? (
                <a className="contact-item" href={emailHref}><Icon name="mail" /><span><small>Email</small>{profile.email}</span></a>
              ) : (
                <div className="contact-item"><Icon name="mail" /><span><small>Email</small>{profile.email}</span></div>
              )}
              <a className="contact-item" href={`tel:+${whatsappNumber}`}><Icon name="phone" /><span><small>Phone</small>+{profile.countryCode} {profile.phone}</span></a>
              <a className="contact-item" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer"><Icon name="chat" /><span><small>WhatsApp</small>Chat with me</span></a>
              <a className="contact-item" href={profile.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" /><span><small>LinkedIn</small>in/subaharisha-a-92a974338</span></a>
              <a className="contact-item" href={profile.github} target="_blank" rel="noreferrer"><Icon name="github" /><span><small>GitHub</small>github.com/ab1-vc</span></a>
              <div className="contact-item"><Icon name="pin" /><span><small>Location</small>{profile.location}</span></div>
            </div>
            <form className="contact-form reveal" onSubmit={submitForm}>
              <label>Name<input type="text" name="name" placeholder="Your name" required /></label>
              <label>Email<input type="email" name="email" placeholder="you@company.com" required /></label>
              <label>Message<textarea name="message" placeholder="Tell me about the opportunity..." rows={5} required /></label>
              <button className="button button-dark" type="submit">Send Message <Icon name="chat" /></button>
              <p className="form-hint">Your message is delivered directly to my WhatsApp (+{profile.countryCode} {profile.phone}).</p>
              {submitted && <p className="form-status">WhatsApp is opening with your message. If it did not open, please message me directly at +{profile.countryCode} {profile.phone}.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#home"><span className="brand-mark">{profile.initials}</span><span>{profile.name}</span></a>
        <p>© {profile.period} {profile.name} · {profile.title}</p>
        <div className="footer-links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a>
        </div>
      </footer>
    </div>
  );
}
