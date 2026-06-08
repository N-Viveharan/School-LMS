import { useEffect, useState } from "react";
import "./Home.css";

const preventLink = (e) => e.preventDefault();

const programs = [
  {
    icon: "child_care",
    title: "Primary Education",
    description:
      "A creative environment for young minds to develop core skills and ignite a lifelong passion for discovery.",
    features: ["Montessori Approach", "Arts & STEAM Integration"],
  },
  {
    icon: "school",
    title: "Secondary Education",
    description:
      "Rigorous academic standards paired with character development to prepare students for global challenges.",
    features: ["Advanced Placement (AP)", "Global Citizenship Lab"],
    featured: true,
  },
  {
    icon: "workspace_premium",
    title: "Higher Ed Pathways",
    description:
      "Comprehensive college counseling and specialized honors programs for top-tier university placement.",
    features: ["Ivy League Mentorship", "Research Internships"],
  },
];

const galleryImages = [
  {
    className: "gallery-card--large",
    label: "Modern Campus Labs",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDh2_5IxY2um20dWqz1JfYUzaymY-3lg5ehXYNtLPXvMVc8EzDmOYiglq744Au8qUw_Rg8W7Ltx46XelS34GI5rnhFYzl0rhjZDdjsso7sp7ULHaKIz-Kfsz9jYYpk6PunRq_1T4pswNYfS0g7ZnZ1A28069j40oZEdm81bPzD0asTG-gsCReoDEQDjdDp9KXWXP4ianvokhkFxayWVht93QJH3quyTesc219-SYbOIQtWZ0K85_dJbL_LLKZj740H-lKNgPAp0o7w",
    alt: "Students collaborating in a modern library",
  },
  {
    className: "gallery-card--small",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSCGxr7eAjIyUduTcE_01eswIUjWLUD4gsEjZQLEA30Ry9fDMkoxxzURldy9b8JFfji_Il1R5A-lGypM8aNd9kCsx7bcAI4ojc4E1RpiWMilG46v4YIXI50ARtkyBzdqKwpIRSx8bKXEDLSPFofoxnu-TRrXgyg9QvRtnQL8x5yTwoLrBEVCQqgEg5lIOMgDr0Kr8gysgwnkrZisYqQdZ6DXn_H-3jV75FHh9jBzXSb1EkZaAePHFH9KQATpqd6bh0pciNhITkJeg",
    alt: "Student conducting chemistry experiment",
  },
  {
    className: "gallery-card--tall",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuOuRvgaXdAJPmxvqhWm8W0yzuaoQ0owZdSB6rH2-ws7D_OnTKJP8s0SL1AHV_-fEyK8Y-hpTwNXzzzsrSbuM45Ao5diO2IOAVnhUfXF_rU7B6qt5O8i_sZ-NDxjk51vbZtPA3KTw98geUE8V1Le4NUEh1GcxRdVAFINKSevOE6qWM7QZ8iPo-ELG8VLzkjNZOgpV3lTR5UinBW5bdhe8n-CL2DmJnyibZu8RALjiAl7W70f-Tw48hqn2muWx-8EviaL59ByS27iA",
    alt: "Students playing soccer",
  },
  {
    className: "gallery-card--small",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwnrfcsbVkUbKAAd0JOiXSZ7Pp_lLf8edlCsBVqUuaDmzHw0uYRYuGM5EY3fGI7e9AdLYoYxYMrejLNb8fnc2cnKGtoye6JnCFrQVPX2CjJOqPqf_B00YuEFaUWo0P2TvbxAo9FAFv1jlja4HkiU_1GDNdATJ6bw0qgmZndA4mzZf8UC_LqiGPBO-bvGK9BwgBnrPnoLroOvFMkXbSVphKRlisYZI-RANoxaO9N4WQWRHrMJ4UQLsgzx4FFaBLOTZ2Bcx_xPN1JOE",
    alt: "Teacher leading a classroom art project",
  },
];

const mobileGalleryImages = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoNeKwOFA17Za7_MFMHVmjGyaJvMgQCKT6v-CY5tWlANCrZyVuUY63mKj5xmoBYMrf4OtbpQhY-DtoQE-ypMS92c2IMwyvaL-3ia7ZGbfOrco-HyiSRMLOTGBiYt9BiJ7bTeRvhfpt4DNwmvnWX9algo7_525yKKtei_lnzYDkiyyN07T-gv0AjcsCsR31ojmcePJDlZNVc0_2xoOn20bUlqvGcxM2sLypMIjywBegZUrZO1qwMvIK49IyoE55dMp4j9E3Qwr_BVc",
    alt: "Campus lab interior",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4_VbEwzvO2Ydfe0vOsdlI2qKIoh-4peTF8ItacpBFz8aatY9YwVTS64NgLPXmTKFysaZzQRKH6lGzM11EZnk8ndBbiXNdghh0s6CYt1-sC6t_n_ELmD1Jw9nTTo5Jk903wsYmk0ZLY1XGSOGDMax0Qne0Ur7vThmSwgnoIvy0ynQSj_G-i2lt-pDvIwUTKiyfjpv00PFL1sNATOWRFt8grsHHKQcldE48NUWsQBHn8BPc9UP7OS9Y5aFQCyVUA9vH_XqX4kAVamQ",
    alt: "Sports field",
  },
];

const events = [
  {
    day: "24",
    month: "Oct",
    title: "Global Innovation Summit: Future Leaders 2024",
    time: "10:00 AM — Main Auditorium",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnEh1yvMDXiroCmLcQVXJ9VE7YSfbJXiRjFof6ZBGKQu2wKg2g9y25nXzZ4p6KuLKupk0uDfTz0dp8OZYMn6LSwAeFSuTl8GOPM7UGxZwdDZBeGGpWHyNxNFw-vLL5AOTRM2pnmpzvJMfql3z9pr0aDem5Vmay06nVUYuexWX4yEr0MTmJvk_SVT9J1k8JyOfejo4MsLUew_iERsCN4J6MdAiK-tu8rQSL6HmCWmMFAKXyEdeqlIdanuzn8BAfCYLvcQMOSeHzFxk",
  },
  {
    day: "28",
    month: "Oct",
    title: "Annual Green Campus Drive & Tree Planting",
    time: "08:00 AM — Campus Gardens",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuoEIUBRS1KOoKP8jIEnk4qlnEobrGf5GJ-n3Nr8Vibz_ZgN5carvPnBuyQE0bkywebT95DSSV0l1i123LXJM-rUTYwEbR_urbPItgJVz6HzJWY9HlMQ6iDojs_ltlEYx1OhKwId903YCoC0D-z2VFSQwLwcV4tz6pnda_LuWp87UbhB9vmgTEWeo9-6_pcMdKfdmYa6EMvYuIROy2LuVtgrJyMR6TwQ1qTdzW0mh1A_BjkUe2Bzug9hAj47q3DuvsbJu5rH0FNj0",
  },
  {
    day: "02",
    month: "Nov",
    title: "Inter-School Debate Championship Finals",
    time: "02:00 PM — Lecture Hall B",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBw2aWM0gHqEaz3LKqtUUrBnwPZMtxqk0f_CoieP4R1iRSfY1hUWu-1KtuoL_PDV6abczK8eQgz20O-ZSt6T-RNwgp1tVBPYWGc8Fso024X14hP0E-m7qXeS2syJfDB1gO0-FqlnwyPTgkEdAMdPhFlo-iOJVfNTeD9r9YJZ-BmPKUvtVLiEL3aDAzvoBU5qLct6pTXeX3camp8NGb3DkAV4NoNjes7SMhQle-B-69KU3cEbr2rfuxD-Pkvad44FWYXnN4AGLgsKzc",
  },
  {
    day: "15",
    month: "Nov",
    title: "Fine Arts Exhibition: Creative Currents",
    time: "09:00 AM — Arts Wing",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNKG7yYTJf2meLGe25nfUVoTvqeikpimW7N7TNzdd7049k_ph23I0SheZbcbusfuzEu_CvhtfcuUfzaPXGXxeJXxZqxPpRzlJUGRVeooDZl971YjWB6dzfRj6MlBf3Nx8LzRqr4aQj-qccgP7nDNx3AyXbJDBjN7ELCpJsec6jz7CiTwQRuH9LnqBBBFwxrJmzlcu28NZ1XAvrWj6Hyx8o3puTKbghbcO9OW3ZSDceT8r5vaxbIQ2BExU_RkCnG-vYW6bIWpjaWeQ",
  },
];

const faculty = [
  {
    name: "Dr. Julian Vance",
    role: "Head of Sciences",
    education: "Ph.D., Stanford University",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ6KnOgF7SZch2z8rGTde-OHTuiryNv_wD91097TJNHQuSplifSk0K4Gf8zJNvKPVjwn4tFEY48biTN_5PlzvtLm6To3pDd_oXHXzEhE0YejRUl3EJgCjmAEyWw5OT3ym9WaSHhLy_iv72jNiPtGBmaPHxlbOmT72nRmCg4uT7hcIcmRM9Erd7RZDk349kXWA_Q5iB21uCUWvtSNbmVmWx5D2q9rRqX3YrKivbbAJMDde0lUXH_ouBTmcvCcCvIQApk2_I586Q8Rc",
  },
  {
    name: "Prof. Elena Rossi",
    role: "Dept. of Humanities",
    education: "M.A., Oxford University",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAz5uK27oPrDxL2rXhY5SMvY8D21_TWYAFihgmBMKLBxKr_PBDeAXYO_mN5RVPFTtGd_X41CahbLmuuR5hNcbez2vfjCj7jIEBwyCm6JyDdkXPEUr4CMCFgN3BSueZJf-2ooixLxMzKpyW6Vfk4z1bwjPR7XUJR4U9sOlyu9h-UEvR_bVhWChiePs_0O_V74Mi_TYtw5253Un6q4tC7EZAUKzI401q6K3PVHNA-31UL1pwbYUXL19NjKSpqWU4stOXlx1-HFuuDJLM",
  },
  {
    name: "Mr. David Chen",
    role: "Tech & Innovation",
    education: "Former Lead at MIT Labs",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5hntF7Uu74Og_CFykvg_bokh2b0y-B1g_bBjN8gc1A6Gvfnfh29y6Jdy0jowKkL_XTiSi4j0J6qFCsSXgvubiZz8tnkFHGTHqJJSIFU67q47qX2DN_8u4OelcuFSv_cITE5zyJ0Kl3xoyGArH-knYsL_MezaynaTJALq-SbrXb5SLC4euITLpD8R0AnYjEc7Sy3srQe1xfsTiCb_IlpO_iEM3XlWC-7DLa5ETX_S69URavY-R1e3xc-PA2LQQStPLnNJHwYK2jyE",
  },
  {
    name: "Ms. Sarah Jenkins",
    role: "Arts & Design",
    education: "B.F.A., RISD",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuATb67MungiqL2OhYgExUKqhSUa91gvQy87fTxtnftd9a1mgysPPB0iw1SlWy2XDBd34errOj58QTokaLEV1Nt_PjxoQKimIcMGeBYleeUhGgO3EdZqKgAMqx8qZZkTlVVyl5qOn9M8PXvVbFdEVN1qcJOyeQZ5CFz1qbAdUPZOTn0-xc8COQHJ3b72FGHyfe_OBjmCiPS0j-MrKp0MsOkdjlsDMvDWMgo47XbX8x4g7FNrQBRdI3giGgm1WJMuc4hQhk_TO73cFPw",
  },
];

function Icon({ name, className = "" }) {
  return (
    <span className={`material-symbols-outlined ${className}`} aria-hidden="true">
      {name}
    </span>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.title = "EduPremium LMS | Excellence in Education";

    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="app">
      <Header scrolled={scrolled} />

      <main className="main-content">
        <Hero />
        <AcademicPrograms />
        <Gallery />
        <NewsEvents />
        <Faculty />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

function Header({ scrolled }) {
  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="container header-inner">
        <div className="header-left">
          <a href="#" onClick={preventLink} className="brand">
            EduPremium LMS
          </a>

          <nav className="desktop-nav">
            <a href="#" onClick={preventLink} className="nav-link nav-link--active">
              Home
            </a>
            <a href="#" onClick={preventLink} className="nav-link">
              Admissions
            </a>
            <a href="#" onClick={preventLink} className="nav-link">
              Academics
            </a>
            <a href="#" onClick={preventLink} className="nav-link">
              Faculty
            </a>
          </nav>
        </div>

        <div className="header-actions">
          <div className="search-box">
            <Icon name="search" className="search-icon" />
            <input
              className="search-input"
              placeholder="Search school info..."
              type="text"
            />
          </div>

          <button className="icon-button" type="button" aria-label="Notifications">
            <Icon name="notifications" />
          </button>

          <button className="login-button" type="button">
            Portal Login
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-media">
        <img
          className="hero-image"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq9YLkxUXEmw3lFGzmfEeoKq3t44cIO2bGymyk3F7l23NbSm8yDTDC2uHBq_SwQftkm5PRlRCTob242doAKBCC9bmhO5dkgWIYxiZW09Go6m8R1MFQGtxMl4q4d49Xfvvmtj1lzp5qBJjae6t20wmK_9GqhBI96LZhHQhberMz8VRz1DEmGwJ3ghh8MRZThIiPaShOOAeMNjplRS2tZGH_KlWrDJUcxvd-QGIqL-4II4GAFWH8GgOPLy8wbAAWrjQdrasAcgp66JY"
          alt="Prestigious university campus"
        />
        <div className="hero-gradient" />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="admission-pill">
            <span className="admission-dot" />
            <span>Admissions Open 2024-25</span>
          </div>

          <h1 className="hero-title">
            Excellence in Education, Empowering the Future.
          </h1>

          <p className="hero-description">
            Nurturing curiosity and fostering leadership through a globally
            recognized curriculum and a legacy of academic distinction.
          </p>

          <div className="hero-buttons">
            <button className="button button--secondary" type="button">
              Apply Now <Icon name="arrow_forward" />
            </button>

            <button className="button button--outline-light" type="button">
              Virtual Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function AcademicPrograms() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <h2 className="section-title">Academic Programs</h2>
            <p className="section-description">
              From foundational early years to advanced higher education, we
              provide a holistic learning journey.
            </p>
          </div>

          <a href="#" onClick={preventLink} className="section-link">
            View Curricula <Icon name="open_in_new" className="small-icon" />
          </a>
        </div>

        <div className="program-grid">
          {programs.map((program) => (
            <article
              key={program.title}
              className={`program-card ${program.featured ? "program-card--featured" : ""}`}
            >
              <div className="program-icon-box">
                <Icon name={program.icon} className="program-icon" />
              </div>

              <h3 className="program-title">{program.title}</h3>

              <p className="program-description">{program.description}</p>

              <ul className="program-list">
                {program.features.map((feature) => (
                  <li key={feature}>
                    <Icon name="check_circle" className="check-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="section gallery-section">
      <div className="container">
        <h2 className="section-title center-title">Life at EduPremium</h2>

        <div className="bento-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className={`gallery-card ${image.className}`}>
              <img src={image.src} alt={image.alt} />

              {image.label && (
                <div className="gallery-overlay">
                  <span>{image.label}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mobile-gallery">
          {mobileGalleryImages.map((image) => (
            <div className="mobile-gallery-card" key={image.src}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsEvents() {
  return (
    <section className="section events-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Latest News & Events</h2>

          <div className="event-controls">
            <button className="circle-button" type="button" aria-label="Previous">
              <Icon name="chevron_left" />
            </button>
            <button className="circle-button" type="button" aria-label="Next">
              <Icon name="chevron_right" />
            </button>
          </div>
        </div>

        <div className="event-grid">
          {events.map((event) => (
            <article className="event-card" key={event.title}>
              <div className="event-image-box">
                <img src={event.src} alt={event.title} />

                <div className="date-badge">
                  <span className="date-day">{event.day}</span>
                  <span className="date-month">{event.month}</span>
                </div>
              </div>

              <h3 className="event-title">{event.title}</h3>
              <p className="event-time">{event.time}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faculty() {
  return (
    <section className="section faculty-section">
      <div className="container text-center">
        <h2 className="section-title">Our Distinguished Faculty</h2>

        <p className="section-description faculty-description">
          Guided by experts from world-class institutions, our students receive
          mentorship that transcends traditional teaching.
        </p>

        <div className="faculty-grid">
          {faculty.map((member) => (
            <article className="faculty-card" key={member.name}>
              <div className="faculty-image-box">
                <img src={member.src} alt={member.name} />
              </div>

              <h3 className="faculty-name">{member.name}</h3>
              <p className="faculty-role">{member.role}</p>
              <p className="faculty-education">{member.education}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-card">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Begin Your Excellence Journey?</h2>

            <p className="cta-description">
              Download our prospectus or speak with an admissions counselor today
              to learn more about the EduPremium difference.
            </p>

            <div className="cta-buttons">
              <button className="button button--light" type="button">
                Apply Online
              </button>

              <button className="button button--primary-soft" type="button">
                Schedule a Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand-column">
            <a href="#" onClick={preventLink} className="footer-brand">
              EduPremium LMS
            </a>

            <p>
              Defining educational excellence through innovation, integrity, and
              global perspectives since 1994.
            </p>

            <div className="social-links">
              <a href="#" onClick={preventLink} aria-label="Website">
                <Icon name="public" />
              </a>
              <a href="#" onClick={preventLink} aria-label="Email">
                <Icon name="alternate_email" />
              </a>
              <a href="#" onClick={preventLink} aria-label="Chat">
                <Icon name="chat" />
              </a>
            </div>
          </div>

          <FooterLinks
            title="Quick Links"
            links={[
              "Privacy Policy",
              "Terms of Service",
              "Campus Safety",
              "Contact Support",
            ]}
          />

          <FooterLinks
            title="Admissions"
            links={[
              "How to Apply",
              "Scholarship Programs",
              "Fee Structure",
              "FAQ",
            ]}
          />

          <div className="footer-column">
            <h3>Contact Us</h3>

            <ul className="footer-contact-list">
              <li>
                <Icon name="location_on" className="footer-contact-icon" />
                123 Academic Drive, Excellence Valley, CA 90210
              </li>
              <li>
                <Icon name="call" className="footer-contact-icon" />
                +1 (555) 123-4567
              </li>
              <li>
                <Icon name="mail" className="footer-contact-icon" />
                admissions@edupremium.edu
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 EduPremium Global LMS. All rights reserved.</p>

          <div className="footer-bottom-links">
            <a href="#" onClick={preventLink}>
              Accreditation
            </a>
            <a href="#" onClick={preventLink}>
              Sitemap
            </a>
            <a href="#" onClick={preventLink}>
              Student Portal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }) {
  return (
    <div className="footer-column">
      <h3>{title}</h3>

      <ul>
        {links.map((link) => (
          <li key={link}>
            <a href="#" onClick={preventLink}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}