import { useEffect } from "react";
import "./Deshboard.css";

const preventDefault = (event) => event.preventDefault();

const profileImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBzlXN3D2jgwCTwxF6FsE11t9iTfg3slPxC5vMPPIbdWZa_wQvghL0lpUn9tUGn_kc31zkAGeQmwIhUzSjCKPZ4wKCVkYsY_7Fm6VY08BOD7I4f-_cLDMLivHpta1t9x-mVXlpX2-i0VCcp1VH53VgIotatmJLnoz97J73sEJda7_QZzP-eSvDBDUVqR6yLQeu1yMN6LnnMuStO6Sq733Zo8-JEcwaOc9N8VhG3icyw66bnVfy7DXydrlpdmdMqa757G7ikQfEglYM";

const mobileProfileImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBxp67eCgU6h2n9qw6aw3NecC_VgAuckKM05uwLNvOI992uZmyGg1NDpgCkZ0aqmsKTr2prwZo10qHiqj-9Xdr-0f6qd94WT-n74hMSsD1RVYeBf5g2U-jenrRqiB3ulxf50JnzStR0QWNB_MDP7w9r0Yc0o0rRnP-ZGBulTMUhq10KpdNhLlNuFUvH5ac1sMxnRFp6moxpPV0fs2psP-N2GHuzlkP3afWiQGhg5b6aI1d-KTYihCC-zDe1SgaQOGGydt42YRVvSYI";

const sidebarItems = [
  { icon: "dashboard", label: "Dashboard", active: true },
  { icon: "school", label: "Courses" },
  { icon: "assignment", label: "Assignments" },
  { icon: "calendar_month", label: "Schedule" },
  { icon: "grade", label: "Grades" },
  { icon: "how_to_reg", label: "Attendance" },
];

const stats = [
  {
    icon: "star",
    label: "Current GPA",
    value: "3.8",
    theme: "primary",
  },
  {
    icon: "calendar_today",
    label: "Attendance",
    value: "95%",
    theme: "secondary",
  },
  {
    icon: "fact_check",
    label: "Completed Subjects",
    value: "12",
    theme: "tertiary",
  },
];

const chartBars = [
  { day: "Mon", height: 60 },
  { day: "Tue", height: 85 },
  { day: "Wed", height: 95, highlighted: true },
  { day: "Thu", height: 70 },
  { day: "Fri", height: 80 },
];

const upcomingClasses = [
  {
    time: "09:00",
    period: "AM",
    title: "Advanced Calculus",
    details: "Room 304 • Prof. Stevens",
    active: true,
  },
  {
    time: "11:30",
    period: "AM",
    title: "World History II",
    details: "Hall A • Dr. Mitchell",
  },
  {
    time: "02:00",
    period: "PM",
    title: "Computer Science Lab",
    details: "Lab 4 • Prof. Gupta",
  },
];

const grades = [
  {
    course: "Physics III",
    assignment: "Quantum Lab Report",
    date: "Oct 18, 2024",
    grade: "A (94%)",
  },
  {
    course: "Macroeconomics",
    assignment: "Midterm Quiz",
    date: "Oct 15, 2024",
    grade: "A- (91%)",
  },
  {
    course: "English Lit.",
    assignment: "Renaissance Essay",
    date: "Oct 12, 2024",
    grade: "B+ (88%)",
  },
];

const announcements = [
  {
    type: "Urgent",
    badge: "error",
    title: "Campus Wi-Fi Maintenance",
    description:
      "Scheduled downtime this Saturday from 2:00 AM to 6:00 AM for network core upgrades.",
    meta: "2 hours ago • Administration",
  },
  {
    type: "Event",
    badge: "event",
    title: "Fall Career Fair 2024",
    description:
      "Join over 50 leading companies in the Grand Hall next Tuesday. Registration is now open.",
    meta: "Yesterday • Career Center",
  },
];

const footerLinks = [
  "Privacy Policy",
  "Terms of Service",
  "Campus Safety",
  "Contact Support",
];

const mobileNavItems = [
  { icon: "dashboard", label: "Home", active: true },
  { icon: "school", label: "Courses" },
  { icon: "calendar_month", label: "Schedule" },
  { icon: "notifications", label: "Updates" },
];

function Icon({ name, className = "" }) {
  return (
    <span className={`material-symbols-outlined ${className}`} aria-hidden="true">
      {name}
    </span>
  );
}

export default function App() {
  useEffect(() => {
    document.title = "EduPremium LMS - Student Portal";

    const timer = setTimeout(() => {
      console.log("Portal Initialized: Welcome Alex Johnson.");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="portal-app">
      <Sidebar />

      <main className="portal-main custom-scrollbar">
        <TopHeader />

        <div className="dashboard-canvas container">
          <WelcomeHero />
          <StatsGrid />

          <div className="dashboard-grid">
            <PerformanceAnalytics />
            <UpcomingClasses />
          </div>

          <div className="dashboard-grid">
            <RecentGrades />
            <Announcements />
          </div>
        </div>

        <PortalFooter />
      </main>

      <MobileNavigation />
      <FloatingActionButton />
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <h1>St. Edwards Academy</h1>
        <p>Academic Portal</p>
      </div>

      <nav className="sidebar-nav custom-scrollbar" aria-label="Sidebar navigation">
        {sidebarItems.map((item) => (
          <a
            key={item.label}
            href="#"
            onClick={preventDefault}
            className={`sidebar-link ${item.active ? "is-active" : ""}`}
          >
            <Icon name={item.icon} />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <button className="create-button" type="button">
          <Icon name="add" />
          Create New
        </button>

        <a href="#" onClick={preventDefault} className="sidebar-support-link">
          <Icon name="help" />
          Help Center
        </a>

        <a href="#" onClick={preventDefault} className="sidebar-support-link">
          <Icon name="logout" />
          Log Out
        </a>
      </div>
    </aside>
  );
}

function TopHeader() {
  return (
    <header className="top-header">
      <div className="container top-header-inner">
        <div className="top-search-area">
          <div className="search-field">
            <Icon name="search" className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search courses, materials, grades..."
            />
          </div>
        </div>

        <div className="header-actions">
          <button className="header-icon-button" type="button" aria-label="Notifications">
            <Icon name="notifications" />
          </button>

          <button className="header-icon-button" type="button" aria-label="Apps">
            <Icon name="apps" />
          </button>

          <div className="header-divider" />

          <button className="user-menu" type="button">
            <span className="user-meta">
              <strong>Alex Johnson</strong>
              <small>Student ID: 2024-8832</small>
            </span>

            <img src={profileImage} alt="Alex Johnson profile" />
          </button>
        </div>
      </div>
    </header>
  );
}

function WelcomeHero() {
  return (
    <section className="welcome-card">
      <div className="welcome-content">
        <h2>Welcome back, Alex!</h2>
        <p>
          You have 2 assignments due this week. Your current academic standing is
          Excellent.
        </p>

        <div className="welcome-actions">
          <button className="welcome-button welcome-button-primary" type="button">
            View Deadlines
          </button>

          <button className="welcome-button welcome-button-ghost" type="button">
            Weekly Schedule
          </button>
        </div>
      </div>
    </section>
  );
}

function StatsGrid() {
  return (
    <section className="stats-grid">
      {stats.map((stat) => (
        <article key={stat.label} className="stat-card lift-card">
          <div className={`stat-icon ${stat.theme}`}>
            <Icon name={stat.icon} className="icon-large filled" />
          </div>

          <div>
            <p className="stat-label">{stat.label}</p>
            <p className={`stat-value ${stat.theme}`}>{stat.value}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

function PerformanceAnalytics() {
  return (
    <section className="panel panel-padding lift-card grid-span-2">
      <div className="panel-header-row">
        <h3 className="panel-title">Performance Analytics</h3>

        <select className="semester-select" defaultValue="Semester 1">
          <option>Semester 1</option>
          <option>Semester 2</option>
        </select>
      </div>

      <div className="chart-area">
        {chartBars.map((bar) => (
          <div className="chart-item" key={bar.day}>
            <div className="chart-bar-wrap">
              <div
                className={`chart-bar ${bar.highlighted ? "is-highlighted" : ""}`}
                style={{ height: `${bar.height}%` }}
              />
            </div>
            <span>{bar.day}</span>
          </div>
        ))}
      </div>

      <div className="chart-legend">
        <div>
          <span className="legend-dot secondary-dot" />
          Daily Attendance (%)
        </div>

        <div>
          <span className="legend-dot average-dot" />
          Class Average
        </div>
      </div>
    </section>
  );
}

function UpcomingClasses() {
  return (
    <section className="panel classes-panel lift-card">
      <div className="classes-header">
        <h3 className="panel-title">Upcoming Classes</h3>
        <p>Tuesday, Oct 24</p>
      </div>

      <div className="classes-list">
        {upcomingClasses.map((item) => (
          <article
            key={item.title}
            className={`class-row ${item.active ? "is-active" : ""}`}
          >
            <div className="class-time">
              <strong>{item.time}</strong>
              <span>{item.period}</span>
            </div>

            <div>
              <h4>{item.title}</h4>
              <p>{item.details}</p>
            </div>
          </article>
        ))}
      </div>

      <button className="view-schedule-button" type="button">
        View Full Schedule
      </button>
    </section>
  );
}

function RecentGrades() {
  return (
    <section className="panel grades-panel lift-card grid-span-2">
      <div className="panel-table-header">
        <h3 className="panel-title">Recent Grades</h3>

        <button className="text-button" type="button">
          View Report Card
        </button>
      </div>

      <div className="table-scroll">
        <table className="grades-table">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Assignment</th>
              <th>Date</th>
              <th className="align-right">Grade</th>
            </tr>
          </thead>

          <tbody>
            {grades.map((item) => (
              <tr key={`${item.course}-${item.assignment}`}>
                <td>{item.course}</td>
                <td>{item.assignment}</td>
                <td>{item.date}</td>
                <td className="grade-cell">{item.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Announcements() {
  return (
    <section className="panel panel-padding lift-card">
      <h3 className="panel-title announcements-title">Latest Announcements</h3>

      <div className="announcement-list">
        {announcements.map((item) => (
          <article className="announcement-card" key={item.title}>
            <span className={`announcement-badge ${item.badge}`}>{item.type}</span>

            <h4>{item.title}</h4>

            <p className="announcement-description">{item.description}</p>

            <small>{item.meta}</small>
          </article>
        ))}
      </div>

      <button className="announcement-button" type="button">
        View All Announcements
      </button>
    </section>
  );
}

function PortalFooter() {
  return (
    <footer className="portal-footer">
      <div className="container footer-inner">
        <div className="footer-brand-row">
          <span>EduPremium LMS</span>
          <p>© 2024 EduPremium Global LMS. All rights reserved.</p>
        </div>

        <div className="footer-links">
          {footerLinks.map((link) => (
            <a key={link} href="#" onClick={preventDefault}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function MobileNavigation() {
  return (
    <nav className="mobile-nav" aria-label="Mobile navigation">
      {mobileNavItems.map((item) => (
        <a
          key={item.label}
          href="#"
          onClick={preventDefault}
          className={`mobile-nav-link ${item.active ? "is-active" : ""}`}
        >
          <Icon name={item.icon} />
          <span>{item.label}</span>
        </a>
      ))}

      <a href="#" onClick={preventDefault} className="mobile-nav-link">
        <img src={mobileProfileImage} alt="Profile" />
        <span>Profile</span>
      </a>
    </nav>
  );
}

function FloatingActionButton() {
  return (
    <button className="fab" type="button" aria-label="Edit">
      <Icon name="edit" className="fab-icon" />
    </button>
  );
}