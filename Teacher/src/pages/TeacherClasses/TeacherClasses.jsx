import { useEffect } from "react";
import "./TeacherClasses.css";

const profileImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBmjC8iqIZHaIyzXGme2FLlXtUoZMpoy8pYePM784kaNkJDJx0-83wVna8jnrnDkDEl_ZqhiyEr_QRbiUEQvsYrMPkKP6w65eI3qOHVuKh4PdzXROrmz649W1e2IYd2gB1rPzNhYIpNzagzFZour9sh61EvTP53lKpYKZlMI3mbeR1shAPG-xS2T4ef7I8CuLtbZoFI0Vb3RXgteP_rEDc-eZWVQv46oM0X3SRSjR2sYQA7rxXaBz-ReeiTbesXF3WqMQb_gQ8MqKs";

const navItems = [
  { icon: "dashboard", label: "Dashboard" },
  { icon: "class", label: "My Classes", active: true },
  { icon: "group", label: "Students" },
  { icon: "book", label: "Subjects" },
  { icon: "assignment", label: "Assignments" },
  { icon: "assessment", label: "Results" },
  { icon: "event_available", label: "Attendance" },
  { icon: "calendar_today", label: "Schedule" },
];

const classCards = [
  {
    badge: "Active Semester",
    title: "Grade 10 - Advanced Calculus",
    schedule: "Mon, Wed, Fri • 09:00 AM - 10:30 AM",
    students: "32 / 35",
    attendance: "94.2%",
    completion: 68,
  },
  {
    badge: "Active Semester",
    title: "Grade 11 - Theoretical Physics",
    schedule: "Tue, Thu • 11:00 AM - 12:45 PM",
    students: "28 / 30",
    attendance: "89.5%",
    completion: 42,
  },
  {
    badge: "Active Semester",
    title: "Grade 12 - Discrete Mathematics",
    schedule: "Wed • 02:00 PM - 04:30 PM",
    students: "24 / 25",
    attendance: "96.8%",
    completion: 81,
  },
  {
    badge: "Lab Course",
    title: "Grade 11 - Quantum Mechanics Lab",
    schedule: "Fri • 01:00 PM - 04:00 PM",
    students: "12 / 12",
    attendance: "100%",
    completion: 15,
  },
  {
    badge: "Seminar",
    title: "Grade 12 - History of Math",
    schedule: "Mon • 11:00 AM - 12:30 PM",
    students: "45 / 45",
    attendance: "91.2%",
    completion: 55,
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

export default function TeacherClasses() {
  useEffect(() => {
    document.title = "EduPortal - My Classes";
  }, []);

  return (
    <div className="teacher-classes-page">
      <SideNav />

      <main className="classes-main">
        <TopNav />

        <section className="classes-canvas">
          <PageHeader />

          <div className="classes-grid">
            {classCards.map((classItem) => (
              <ClassCard key={classItem.title} classItem={classItem} />
            ))}

            <AddClassCard />
          </div>
        </section>

        <TeacherClassesFooter />
      </main>
    </div>
  );
}

function SideNav() {
  return (
    <aside className="side-nav custom-scrollbar">
      <div className="side-brand">
        <h1>EduPortal</h1>
        <p>Teacher Dashboard</p>
      </div>

      <nav className="side-menu">
        <ul>
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                onClick={preventLink}
                className={`side-link ${item.active ? "active" : ""}`}
              >
                <Icon name={item.icon} />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

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
    </aside>
  );
}

function TopNav() {
  return (
    <header className="top-nav">
      <div className="search-wrap">
        <Icon name="search" className="search-icon" />
        <input type="text" placeholder="Search classes or students..." />
      </div>

      <div className="top-actions">
        <div className="top-icon-group">
          <button type="button" aria-label="Notifications">
            <Icon name="notifications" />
          </button>

          <button type="button" aria-label="Help">
            <Icon name="help" />
          </button>
        </div>

        <div className="profile-area">
          <div className="profile-text">
            <p>Dr. Julian Vance</p>
            <span>Mathematics Faculty</span>
          </div>

          <div className="profile-avatar">
            <img src={profileImage} alt="Dr. Julian Vance profile" />
          </div>
        </div>
      </div>
    </header>
  );
}

function PageHeader() {
  return (
    <div className="page-header">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <span>Dashboard</span>
        <Icon name="chevron_right" />
        <strong>My Classes</strong>
      </nav>

      <div className="page-title-row">
        <h2>Assigned Classes</h2>

        <div className="header-actions">
          <button type="button" className="create-button">
            <Icon name="add" />
            Create New Class
          </button>

          <button type="button" className="filter-button">
            <Icon name="filter_list" />
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}

function ClassCard({ classItem }) {
  return (
    <article className="class-card">
      <div className="class-card-body">
        <div className="card-top">
          <span className="class-badge">{classItem.badge}</span>

          <button type="button" className="more-button" aria-label="More options">
            <Icon name="more_vert" />
          </button>
        </div>

        <h3>{classItem.title}</h3>

        <p className="schedule-text">
          <Icon name="schedule" />
          {classItem.schedule}
        </p>

        <div className="class-stats">
          <div>
            <p>Students</p>
            <div>
              <Icon name="person" />
              <strong>{classItem.students}</strong>
            </div>
          </div>

          <div>
            <p>Attendance</p>
            <div>
              <Icon name="check_circle" className="success-icon" />
              <strong>{classItem.attendance}</strong>
            </div>
          </div>
        </div>

        <div className="completion-block">
          <div className="completion-label">
            <span>Syllabus Completion</span>
            <strong>{classItem.completion}%</strong>
          </div>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${classItem.completion}%` }}
            />
          </div>
        </div>
      </div>

      <div className="class-card-footer">
        <button type="button" className="manage-button">
          Manage Class
          <Icon name="arrow_forward" />
        </button>
      </div>
    </article>
  );
}

function AddClassCard() {
  return (
    <article className="add-class-card">
      <div className="add-icon">
        <Icon name="add_circle" />
      </div>

      <h3>Assign New Class</h3>
      <p>Add a course from the curriculum or create a custom lab section.</p>
    </article>
  );
}

function TeacherClassesFooter() {
  return (
    <footer className="classes-footer">
      <p>© 2024 Academic Excellence System. All rights reserved.</p>

      <nav>
        {footerLinks.map((link) => (
          <a href="#" onClick={preventLink} key={link}>
            {link}
          </a>
        ))}
      </nav>
    </footer>
  );
}