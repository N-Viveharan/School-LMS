import { useEffect, useState } from "react";
import "./TeacherSubjectManagement.css";

const teacherAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAlg4cG9ag_erzK7A9dLINQg2sGfozGEa_zBhv-LuNq617k4LqHFVwfR2kqpWUjaK1HoVdEpT9e43v8GfdtCR0DSeA7wDcXjdWutGDsTocBp1q11iiWxnTJfameqb8A2BCbrLgIply6oKALKUbU0fYv-3nIwCu19HBH_W5OYJeoTf2uaOnrI7yKg5jllLK2oAU0TmPe8BYtwrg6CEe8c8N3_QqpV9VqKUFyjYfp5gmobi9FGJiuN3EyMzh1e4Y6TuxI4yDrNgikfxo";

const navItems = [
  { icon: "dashboard", label: "Dashboard" },
  { icon: "class", label: "My Classes" },
  { icon: "group", label: "Students" },
  { icon: "book", label: "Subjects", active: true },
  { icon: "assignment", label: "Assignments" },
  { icon: "assessment", label: "Results" },
  { icon: "event_available", label: "Attendance" },
  { icon: "calendar_today", label: "Schedule" },
];

const subjects = [
  {
    title: "Advanced Mathematics",
    description: "Grade 12 • Calculus & Algebra",
    icon: "functions",
    iconClass: "primary",
    resources: 12,
    accent: "primary",
    avatars: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBIawb4MD8fZjQ6Ip0s_A_YhvxlFRzaF1jTySoMAH3TbMXdhmWCExgHQkTiICkGlMT_Q-Xo4gZ9Bc5s9nyqCBwOWF5nWHaOCEZoQ3IKVDiDqQhMT-5p1EtKSrRqOplAa8lIreAlngcTJfKo2pxyl2llZ7O25KtKJ3tXoq0cn7DL9SqTN4LNtzstNsOa3E4C3CQ0LC8fYooMCejdc2Fs3n1paAC-cZMekNGqyfnhOI90lGOyjeBXXCiaPsMS3Ft1I64PcQxfqbiJJZM",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD_Pk8WT71pbsckatTqtceolicNlm6RDp_ALaWeDgeKo-5Oc1ZIMojGS53gHY0FFvMR8vMyRoLWpCtWNnSP_aJsjS6Exp186AgUowxUldJQKrAXZP92KMMv0kD8DUQDTjmX0pDP8dJch5yBuwXKSX80Yv2x8B821218nHhOWZxwrJ1dpLrszia5tOHYDuENcLLNcERS0cGmKxg7I20A9XxO5FUmfRxx5HqjUflS40H7kCEZu_voywbhpMObbc7AgGTFDV18BnkYyGY",
    ],
    extraStudents: "+24",
  },
  {
    title: "Quantum Physics",
    description: "Grade 12 • Mechanics & Waves",
    icon: "rocket_launch",
    iconClass: "secondary",
    resources: 8,
    accent: "primary",
    avatars: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQuWBvoEtfOFNs931ijqe9JAuRfshqLLzJluIwwETyvAdG4zPUJCERiGzmqnb2eks00zt4Iex818In5lFppLOsCkRqwT06hmrifT0nzmal3SS4dXLLJM-pbRVluAC_oWdrySa2miBVAxUaZBy-O2qRqDTxDVLFPEYywUpXT1-cjfFZt2xCOlOZCcS229ZsiZ6tnoi-hrLX9BURHpg6UFWwaFc6QoBU8fgJtooiOg25Opw09IIlMmhY_zxfyFPZN5Vn41oduPqac1U",
    ],
    extraStudents: "+18",
  },
  {
    title: "Modern Literature",
    description: "Grade 11 • Post-Colonial Studies",
    icon: "menu_book",
    iconClass: "tertiary",
    resources: 15,
    accent: "muted",
    avatars: [],
    extraStudents: "+32",
  },
];

const videoLectures = [
  {
    title: "Introduction to Differential Equations",
    duration: "45:20",
    date: "Oct 12, 2024",
  },
  {
    title: "Complex Numbers and Fractals",
    duration: "38:15",
    date: "Oct 15, 2024",
  },
];

const pdfNotes = [
  {
    title: "Module_1_Calculus.pdf",
    size: "2.4 MB",
  },
  {
    title: "Linear_Algebra_CheatSheet.pdf",
    size: "1.1 MB",
  },
];

const presentations = [
  {
    title: "Integration Techniques",
    meta: "24 Slides • PowerPoint",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuATM5xtJrZCwuGC_RAodHorpGyc1C0N4d5TZK-_bKNPDTa1Gz6HwJfAPhl5OPIt7OUmN_F4bNt0gULvyTCDNpCRAwzRaQC1Cl47e3Q7jWqNArBBWTI4Zz5N9WJbDuqWQQsY79ddaMBJXFUc55EY-cnVg1n1-LafGNOeNMKYQiQ08PXM-c2yhkCkqkssSS40ZY3ntgnizQ26rEqhrgeIRiFf6GhEBTS22jNYx3oqXnSpjrM4hkN0lt_MajKMCjuCvTPLgaXVzNsomSc",
  },
  {
    title: "Volume of Solids",
    meta: "18 Slides • Google Slides",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCUmlmMiBlMbssf8_yfjWDYS0hTIh9neCjNo81ZaO9Ecq4EszHHSVKIMCbvOeusj8F5WPbsjkITz7DY-kkbh3EMb-0DFxyzRyebYuR1aNfLRQLcKcIxCg0kQqbJ64xZSNOoCx6d5umtpsaG9OfO4CRXX1IvC6rinM0TuVIsNkgRyU821FIUAWgvy83fGnXLQyjE64GCUYdqzyW-DJjuwhfVyU9kRgFFSrw4I33-2x_C8LtlQLifLHjA48vW_mvIXX4F77VHp5cW9Iw",
  },
];

const footerLinks = [
  "Privacy Policy",
  "Terms of Service",
  "Help Center",
  "School Website",
];

function preventLink(event) {
  event.preventDefault();
}

function Icon({ name, filled = false, className = "" }) {
  return (
    <span
      className={`material-symbols-outlined ${filled ? "filled" : ""} ${className}`}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}

export default function TeacherSubjectManagement() {
  const [selectedSubject, setSelectedSubject] = useState("Advanced Mathematics");

  useEffect(() => {
    document.title = "Subject Management - EduPortal";
  }, []);

  return (
    <div className="subject-management-page">
      <SideNav />
      <TopNav />

      <main className="subject-main">
        <div className="subject-container">
          <PageHeader />
          <SubjectGrid
            selectedSubject={selectedSubject}
            setSelectedSubject={setSelectedSubject}
          />
          <ResourceLibrary selectedSubject={selectedSubject} />
        </div>
      </main>

      <SubjectFooter />

      <button className="mobile-fab" type="button" aria-label="Add">
        <Icon name="add" />
      </button>
    </div>
  );
}

function SideNav() {
  return (
    <nav className="side-nav">
      <div className="side-nav-inner">
        <div className="side-brand">
          <div className="brand-icon">
            <Icon name="school" />
          </div>

          <div>
            <h1>EduPortal</h1>
            <p>Teacher Dashboard</p>
          </div>
        </div>

        <div className="side-links">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              onClick={preventLink}
              className={`side-link ${item.active ? "active" : ""}`}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="side-bottom">
        <a href="#" onClick={preventLink} className="side-link">
          <Icon name="settings" />
          <span>Settings</span>
        </a>

        <a href="#" onClick={preventLink} className="side-link">
          <Icon name="logout" />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}

function TopNav() {
  return (
    <header className="top-nav">
      <div className="top-search">
        <Icon name="search" className="search-icon" />
        <input type="text" placeholder="Search subjects or resources..." />
      </div>

      <div className="top-actions">
        <button type="button" className="top-icon-button" aria-label="Notifications">
          <Icon name="notifications" />
          <span className="notification-dot" />
        </button>

        <button type="button" className="top-icon-button" aria-label="Help">
          <Icon name="help" />
        </button>

        <div className="teacher-profile">
          <div>
            <p>Dr. Sarah Jenkins</p>
            <span>Senior Faculty</span>
          </div>

          <img src={teacherAvatar} alt="Teacher profile" />
        </div>
      </div>
    </header>
  );
}

function PageHeader() {
  return (
    <section className="page-header">
      <div>
        <h2>Subject Library</h2>
        <p>
          Manage your curriculum, resources, and lecture materials in one place.
        </p>
      </div>

      <button type="button" className="create-subject-button">
        <Icon name="add_circle" />
        <span>Create New Subject</span>
      </button>
    </section>
  );
}

function SubjectGrid({ selectedSubject, setSelectedSubject }) {
  return (
    <section className="subject-grid">
      {subjects.map((subject) => (
        <SubjectCard
          key={subject.title}
          subject={subject}
          selected={selectedSubject === subject.title}
          onSelect={() => setSelectedSubject(subject.title)}
        />
      ))}
    </section>
  );
}

function SubjectCard({ subject, selected, onSelect }) {
  return (
    <article
      className={`subject-card accent-${subject.accent} ${
        selected ? "selected" : ""
      }`}
      onClick={onSelect}
    >
      <div className="subject-card-top">
        <div className={`subject-icon ${subject.iconClass}`}>
          <Icon name={subject.icon} />
        </div>

        <button type="button" className="more-button" aria-label="More options">
          <Icon name="more_vert" />
        </button>
      </div>

      <h3>{subject.title}</h3>
      <p>{subject.description}</p>

      <div className="subject-card-footer">
        <div className="avatar-stack">
          {subject.avatars.map((avatar) => (
            <img src={avatar} alt="Student" key={avatar} />
          ))}
          <span>{subject.extraStudents}</span>
        </div>

        <strong>{subject.resources} Resources</strong>
      </div>
    </article>
  );
}

function ResourceLibrary({ selectedSubject }) {
  return (
    <section className="resource-library">
      <div className="resource-library-header">
        <div>
          <h4>{selectedSubject}: Resource Library</h4>
          <p>Last updated 2 hours ago</p>
        </div>

        <div className="library-actions">
          <button type="button">Filter</button>
          <button type="button">Sort by Date</button>
        </div>
      </div>

      <div className="resource-library-body">
        <VideoLectures />
        <PdfNotes />
        <Presentations />
      </div>
    </section>
  );
}

function SectionTitle({ icon, title }) {
  return (
    <div className="section-title">
      <Icon name={icon} filled />
      <h5>{title}</h5>
      <span />
    </div>
  );
}

function VideoLectures() {
  return (
    <section>
      <SectionTitle icon="movie" title="Video Lectures" />

      <div className="table-scroll">
        <table className="resource-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Duration</th>
              <th>Added Date</th>
              <th className="align-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {videoLectures.map((lecture) => (
              <tr key={lecture.title}>
                <td>
                  <div className="resource-title-cell">
                    <div className="video-icon-box">
                      <Icon name="play_circle" />
                    </div>
                    <span>{lecture.title}</span>
                  </div>
                </td>
                <td>{lecture.duration}</td>
                <td>{lecture.date}</td>
                <td className="align-right">
                  <ResourceActions />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function PdfNotes() {
  return (
    <section>
      <SectionTitle icon="description" title="PDF Notes" />

      <div className="pdf-grid">
        {pdfNotes.map((pdf) => (
          <article className="pdf-card" key={pdf.title}>
            <div className="pdf-info">
              <Icon name="picture_as_pdf" className="pdf-icon" />

              <div>
                <p>{pdf.title}</p>
                <span>{pdf.size}</span>
              </div>
            </div>

            <div className="pdf-actions">
              <button type="button" aria-label="Edit PDF">
                <Icon name="edit" />
              </button>

              <button type="button" aria-label="Delete PDF">
                <Icon name="delete" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Presentations() {
  return (
    <section>
      <SectionTitle icon="present_to_all" title="Presentations" />

      <div className="presentation-grid">
        {presentations.map((presentation) => (
          <article className="presentation-card" key={presentation.title}>
            <div className="presentation-image-wrap">
              <img src={presentation.image} alt={presentation.title} />

              <div className="presentation-overlay">
                <button type="button" aria-label="View presentation">
                  <Icon name="visibility" />
                </button>

                <button type="button" aria-label="Edit presentation">
                  <Icon name="edit" />
                </button>
              </div>
            </div>

            <div className="presentation-info">
              <p>{presentation.title}</p>
              <span>{presentation.meta}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ResourceActions() {
  return (
    <div className="resource-actions">
      <button type="button" aria-label="Edit">
        <Icon name="edit" />
      </button>

      <button type="button" aria-label="Delete">
        <Icon name="delete" />
      </button>
    </div>
  );
}

function SubjectFooter() {
  return (
    <footer className="subject-footer">
      <p>© 2024 Academic Excellence System. All rights reserved.</p>

      <nav>
        {footerLinks.map((link) => (
          <a key={link} href="#" onClick={preventLink}>
            {link}
          </a>
        ))}
      </nav>
    </footer>
  );
}