import { useEffect } from "react";
import "./TeacherDashboard.css";

const teacherAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAfTPfJT2tZCQ35EJsZ80kVUJGRESlxfzgQ5kWr0alApkk0rvXmnqpOaN5iBZIC35FlRwvomLBfF4P8chWuCe806GM_nEpEvt41_SYC12nevwSqvnqGCQ6BLKvrfCd6SkGFG9xOvKCFqe9i1VV3Gr1NgRo8Xj18e5x-SHrzE5BROWAE7Fz05ZKYsgvzpknuHx_DojxbhIBmxVHkSCMlOH-lRgWh_lOG14n_slEGFJhaljbt6l3eKIvkGJYHQszLdGgwmp8PDgIjQac";

const liamAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuArg_0qC1FdGm_Cn7MM6Wa432sbs7P55EMyykApa566rB6OW8UKShe3d9Vkasz-k3yiec0Eolukh5DMIdaY-x2ebqXvdviNRP6rIzAs1CS-tATBp6SncqbmNLL53PZkgJVxHL-Jvjhel0tD9e7UkEAjT9OUNsPi-rC03v4KYsyOl6PQZqEFxe886AzaoNWa-aeBAZOGu4eiDZqEHkcVji2liIV9yjRjEl3SA3qZlq7weXaBdHHj0OW3TGBOkCLFgkZCE7CwlZlgZiQ";

const sophiaAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCwXJ3ATr-4fABj6jTfQf9c4SM1M3vki0gwdnK2IPdtHawnQHBcUf4XcVwKZeJFzidai16n8xlJOGo7KzTuh_LKMuWB3Po0X_mYHRsVONZ6zHCLm1CeQvxKkQ-_jhGtrBfTzP9VY27gjfuo8UxBlHgWVVLEXadqhU8gMt_NvnAeiiMvKqrVH1YhHKxmrz7fn-qwwH3BeqsIGqnhKAMwnWk6Gb8lUNlJUSU0EjF7ycfqc34KaW2IBjVqFgCY8dcnGuytXBkFO1oFXy0";

const navItems = [
  { icon: "dashboard", label: "Dashboard", active: true },
  { icon: "class", label: "My Classes" },
  { icon: "group", label: "Students" },
  { icon: "book", label: "Subjects" },
  { icon: "assignment", label: "Assignments" },
  { icon: "assessment", label: "Results" },
  { icon: "event_available", label: "Attendance" },
  { icon: "calendar_today", label: "Schedule" },
];

const kpiCards = [
  {
    label: "Total Students",
    value: "150",
    footer: "+5% from last month",
    footerIcon: "trending_up",
    footerType: "positive",
    icon: "group",
    iconType: "secondary",
  },
  {
    label: "Classes Today",
    value: "04",
    footer: "Next: Advanced Calc at 10:00 AM",
    footerIcon: "schedule",
    footerType: "muted",
    icon: "class",
    iconType: "primary",
  },
  {
    label: "Pending Grading",
    value: "22",
    valueType: "danger",
    footer: "8 items due tomorrow",
    footerIcon: "priority_high",
    footerType: "danger",
    icon: "assignment_late",
    iconType: "danger",
  },
];

const chartData = [
  { label: "Calculus", value: 85, color: "primary" },
  { label: "Physics", value: 65, color: "secondary" },
  { label: "Algebra", value: 92, color: "primary" },
  { label: "Bio", value: 78, color: "secondary" },
  { label: "Stats", value: 70, color: "primary" },
];

const submissions = [
  {
    name: "Liam Peterson",
    task: "Advanced Calculus - Quiz #4",
    time: "Submitted 2h ago",
    avatar: liamAvatar,
  },
  {
    name: "Sophia Chen",
    task: "Bio-Physics - Lab Report",
    time: "Submitted 5h ago",
    avatar: sophiaAvatar,
  },
  {
    name: "Marcus King",
    task: "World History - Essay 2",
    time: "Submitted Yesterday",
    initials: "MK",
  },
];

const scheduleItems = [
  {
    time: "09:00 - 10:30 AM",
    title: "Advanced Calculus - Section A",
    location: "Room 302, Science Building",
    badge: "Lecture",
    marker: "primary",
  },
  {
    time: "11:00 - 12:00 PM",
    title: "Faculty Meeting",
    location: "Main Hall Conference Room",
    badge: "Meeting",
    marker: "secondary",
  },
  {
    time: "01:30 - 03:00 PM",
    title: "Bio-Physics Practical",
    location: "West Lab 12",
    badge: "Lab",
    marker: "active",
    active: true,
  },
  {
    time: "04:00 - 05:00 PM",
    title: "Student Counseling",
    location: "Online (MS Teams)",
    badge: "Office Hours",
    marker: "muted",
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

export default function TeacherDashboard() {
  useEffect(() => {
    document.title = "EduPortal LMS - Teacher Dashboard";
  }, []);

  return (
    <div className="teacher-dashboard-page">
      <SideNav />
      <TopAppBar />

      <main className="teacher-main">
        <div className="teacher-container">
          <WelcomeSection />
          <KpiGrid />

          <div className="dashboard-grid">
            <div className="dashboard-left">
              <PerformanceChart />
              <RecentSubmissions />
            </div>

            <TodaySchedule />
          </div>
        </div>
      </main>

      <TeacherFooter />
    </div>
  );
}

function SideNav() {
  return (
    <aside className="side-nav">
      <div className="side-nav-inner">
        <div className="side-brand">
          <div className="brand-mark">EP</div>

          <div>
            <h1>EduPortal</h1>
            <p>Teacher Dashboard</p>
          </div>
        </div>

        <nav className="side-links">
          {navItems.map((item) => (
            <a
              href="#"
              onClick={preventLink}
              key={item.label}
              className={`side-link ${item.active ? "active" : ""}`}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
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
    </aside>
  );
}

function TopAppBar() {
  return (
    <header className="top-appbar">
      <div className="top-left">
        <button type="button" className="menu-button" aria-label="Menu">
          <Icon name="menu" />
        </button>

        <div className="top-search">
          <Icon name="search" />
          <input
            type="text"
            placeholder="Search students, classes, or files..."
          />
        </div>
      </div>

      <div className="top-right">
        <button type="button" className="top-icon-button" aria-label="Notifications">
          <Icon name="notifications" />
          <span className="notification-dot" />
        </button>

        <button type="button" className="top-icon-button" aria-label="Help">
          <Icon name="help" />
        </button>

        <div className="teacher-profile">
          <div className="teacher-profile-text">
            <p>Prof. S. Henderson</p>
            <span>Senior Faculty</span>
          </div>

          <img src={teacherAvatar} alt="Teacher profile" />
        </div>
      </div>
    </header>
  );
}

function WelcomeSection() {
  return (
    <section className="welcome-section">
      <div className="welcome-content">
        <h2>Good Morning, Prof. Sarah Henderson</h2>
        <p>
          Welcome back! You have 4 classes and 22 pending assignments to grade
          today.
        </p>

        <div className="welcome-actions">
          <button type="button" className="start-class-button">
            Start Class
          </button>

          <button type="button" className="analytics-button">
            View Analytics
          </button>
        </div>
      </div>

      <Icon name="school" filled className="welcome-bg-icon" />
    </section>
  );
}

function KpiGrid() {
  return (
    <section className="kpi-grid">
      {kpiCards.map((card) => (
        <article className="kpi-card" key={card.label}>
          <div>
            <p className="kpi-label">{card.label}</p>

            <h3 className={card.valueType === "danger" ? "danger" : ""}>
              {card.value}
            </h3>

            <p className={`kpi-footer ${card.footerType}`}>
              <Icon name={card.footerIcon} />
              {card.footer}
            </p>
          </div>

          <div className={`kpi-icon ${card.iconType}`}>
            <Icon name={card.icon} filled />
          </div>
        </article>
      ))}
    </section>
  );
}

function PerformanceChart() {
  return (
    <section className="panel chart-panel">
      <div className="panel-header">
        <div>
          <h4>Class Performance</h4>
          <p>Average grades across subjects</p>
        </div>

        <select defaultValue="Semester 1">
          <option>Semester 1</option>
          <option>Semester 2</option>
        </select>
      </div>

      <div className="chart-area">
        <div className="chart-grid-lines">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="chart-bars">
          {chartData.map((item) => (
            <div className="chart-item" key={item.label}>
              <div className="bar-wrap">
                <div
                  className={`chart-bar ${item.color}`}
                  style={{ height: `${item.value}%` }}
                />
              </div>

              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RecentSubmissions() {
  return (
    <section className="panel submissions-panel">
      <div className="submissions-header">
        <h4>Recent Submissions</h4>

        <button type="button">View All</button>
      </div>

      <div className="submission-list">
        {submissions.map((submission) => (
          <article className="submission-row" key={submission.name}>
            <div className="submission-student">
              {submission.avatar ? (
                <img src={submission.avatar} alt={submission.name} />
              ) : (
                <div className="student-initials">{submission.initials}</div>
              )}

              <div>
                <p>{submission.name}</p>
                <span>{submission.task}</span>
              </div>
            </div>

            <div className="submission-actions">
              <span>{submission.time}</span>

              <button type="button">Grade Now</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TodaySchedule() {
  return (
    <aside className="panel schedule-panel">
      <div className="schedule-header">
        <h4>Today's Schedule</h4>
        <span>May 14, 2024</span>
      </div>

      <div className="timeline">
        <div className="timeline-line" />

        {scheduleItems.map((item) => (
          <article
            key={`${item.time}-${item.title}`}
            className={`timeline-item ${item.active ? "active" : ""}`}
          >
            <div className={`timeline-marker ${item.marker}`} />

            <div className="timeline-top">
              <span className="timeline-time">{item.time}</span>
              <span className={`timeline-badge ${item.marker}`}>{item.badge}</span>
            </div>

            <p>{item.title}</p>
            <small>{item.location}</small>

            {item.active && (
              <button type="button" className="join-session-button">
                Join Session
              </button>
            )}
          </article>
        ))}
      </div>
    </aside>
  );
}

function TeacherFooter() {
  return (
    <footer className="teacher-footer">
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