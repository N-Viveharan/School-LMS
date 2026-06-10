import { useEffect } from "react";
import "./AttendanceTracking.css";

const userAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAlU5oGMyKs5-n3_BXsVHMVRt3KusO2jnWeqZVNkROzct1FFyk0sBaJDtY9QerGvR9fsTNXhES9BsOwhqm_sMO4rI_vuSOB5OM3_PIPcjaXcdU7O0qt9eIY6iiP_Owjhy0vuHxiOGhXsK8M8Sa7-qzOtVs407OQK57RgjUpnmC_7czW9IH3bJL2Sc2nwuLWV5dmRtMB-emGgB3sIuXMnt5J7FACbUKR0CMBVhI7MBmSkgNcxeh0UN1VlFGp08sxyk7km-puujQMGeY";

const sidebarLinks = [
  { icon: "dashboard", label: "Dashboard" },
  { icon: "calendar_today", label: "Attendance", active: true },
  { icon: "school", label: "Courses" },
  { icon: "assignment", label: "Assignments" },
  { icon: "analytics", label: "Analytics" },
];

const metrics = [
  {
    label: "Semester Average",
    value: "94.8%",
    border: "primary",
    valueClass: "primary",
    trendIcon: "trending_up",
    trendText: "2.1% from last month",
    trendClass: "positive",
  },
  {
    label: "March Attendance",
    value: "92.0%",
    border: "secondary",
    valueClass: "secondary",
    trendIcon: "trending_down",
    trendText: "1.5% below target",
    trendClass: "negative",
  },
  {
    label: "Classes Attended",
    value: "118",
    border: "neutral",
    valueClass: "default",
    footer: "Out of 124 sessions",
  },
  {
    label: "Excused Absences",
    value: "4",
    border: "neutral",
    valueClass: "default",
    footer: "Doctor's notes verified",
  },
];

const calendarDays = [
  { day: "26", type: "previous" },
  { day: "27", type: "previous" },
  { day: "28", type: "previous" },
  { day: "29", type: "previous" },
  { day: "1", type: "present soft" },
  { day: "2", type: "weekend" },
  { day: "3", type: "weekend" },
  { day: "4", type: "present" },
  { day: "5", type: "present" },
  { day: "6", type: "absent" },
  { day: "7", type: "present" },
  { day: "8", type: "present" },
  { day: "9", type: "weekend" },
  { day: "10", type: "weekend" },
  { day: "11", type: "present" },
  { day: "12", type: "present" },
  { day: "13", type: "present" },
  { day: "14", type: "present" },
  { day: "15", type: "excused" },
  { day: "16", type: "weekend" },
  { day: "17", type: "weekend" },
  { day: "18", type: "present" },
  { day: "19", type: "present" },
  { day: "20", type: "present" },
  { day: "21", type: "present selected" },
  { day: "22", type: "future" },
  { day: "23", type: "weekend" },
  { day: "24", type: "weekend" },
];

const courseBreakdown = [
  { course: "Advanced Mathematics II", value: 98, color: "primary" },
  { course: "Theoretical Physics", value: 88, color: "secondary" },
  { course: "Computer Architecture", value: 95, color: "primary" },
  { course: "Economics 101", value: 92, color: "secondary" },
];

const attendanceLogs = [
  {
    date: "March 21, 2024",
    course: "Advanced Mathematics II",
    time: "09:00 AM - 10:30 AM",
    professor: "Dr. Sarah Miller",
    status: "Present",
    statusType: "present",
    actionIcon: "info",
  },
  {
    date: "March 20, 2024",
    course: "Computer Architecture",
    time: "01:00 PM - 02:30 PM",
    professor: "Prof. Alan Turing",
    status: "Present",
    statusType: "present",
    actionIcon: "info",
  },
  {
    date: "March 15, 2024",
    course: "Theoretical Physics",
    time: "11:00 AM - 12:30 PM",
    professor: "Dr. Richard Feynman",
    status: "Excused",
    statusType: "excused",
    actionIcon: "description",
  },
  {
    date: "March 06, 2024",
    course: "Economics 101",
    time: "08:00 AM - 09:30 AM",
    professor: "Prof. Janet Yellen",
    status: "Absent",
    statusType: "absent",
    actionIcon: "warning",
  },
];

const footerLinks = [
  "Academic Calendar",
  "Privacy Policy",
  "Student Handbook",
  "Contact Support",
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

export default function AttendanceTracking() {
  useEffect(() => {
    document.title = "EduPremium - Attendance Tracking";
  }, []);

  const handleRowClick = () => {
    console.log("Row clicked for detailed view");
  };

  return (
    <div className="attendance-page">
      <Sidebar />

      <main className="attendance-main">
        <TopNav />

        <section className="attendance-content">
          <MetricsGrid />
          <VisualizationSection />
          <AttendanceLog onRowClick={handleRowClick} />
        </section>

        <AttendanceFooter />
      </main>

      <AppealFab />
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="attendance-sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-logo">
          <Icon name="school" />
        </div>

        <div>
          <h1>EduPremium</h1>
          <p>Student Portal</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        {sidebarLinks.map((link) => (
          <a
            key={link.label}
            href="#"
            onClick={preventLink}
            className={`sidebar-link ${link.active ? "active" : ""}`}
          >
            <Icon name={link.icon} />
            <span>{link.label}</span>
          </a>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <a href="#" onClick={preventLink} className="sidebar-link">
          <Icon name="settings" />
          <span>Settings</span>
        </a>

        <a href="#" onClick={preventLink} className="sidebar-link">
          <Icon name="logout" />
          <span>Logout</span>
        </a>
      </div>
    </aside>
  );
}

function TopNav() {
  return (
    <header className="attendance-topnav">
      <div className="topnav-left">
        <h2>Attendance Tracker</h2>

        <div className="top-search">
          <Icon name="search" />
          <input type="text" placeholder="Search records..." />
        </div>
      </div>

      <div className="topnav-right">
        <div className="top-icons">
          <button type="button" aria-label="Notifications">
            <Icon name="notifications" />
          </button>

          <button type="button" aria-label="Help">
            <Icon name="help" />
          </button>
        </div>

        <div className="student-profile">
          <div className="student-text">
            <p>Alex Johnson</p>
            <span>Student ID: #20240912</span>
          </div>

          <div className="student-avatar">
            <img src={userAvatar} alt="Alex Johnson profile" />
          </div>
        </div>
      </div>
    </header>
  );
}

function MetricsGrid() {
  return (
    <section className="metrics-grid">
      {metrics.map((metric) => (
        <article
          key={metric.label}
          className={`metric-card border-${metric.border}`}
        >
          <span className="metric-label">{metric.label}</span>

          <strong className={`metric-value ${metric.valueClass}`}>
            {metric.value}
          </strong>

          {metric.trendText ? (
            <div className={`metric-trend ${metric.trendClass}`}>
              <Icon name={metric.trendIcon} />
              <span>{metric.trendText}</span>
            </div>
          ) : (
            <span className="metric-footer">{metric.footer}</span>
          )}
        </article>
      ))}
    </section>
  );
}

function VisualizationSection() {
  return (
    <section className="visualization-grid">
      <AttendanceCalendar />
      <CourseBreakdown />
    </section>
  );
}

function AttendanceCalendar() {
  return (
    <article className="calendar-card">
      <div className="card-title-row">
        <h3>Daily Attendance Activity</h3>

        <div className="view-switch">
          <button type="button" className="active">
            Monthly
          </button>
          <button type="button">Term</button>
        </div>
      </div>

      <div className="calendar-content">
        <div className="calendar-header">
          <strong>March 2024</strong>

          <div className="legend">
            <LegendItem color="present" label="Present" />
            <LegendItem color="absent" label="Absent" />
            <LegendItem color="excused" label="Excused" />
          </div>
        </div>

        <div className="calendar-scroll">
          <div className="calendar-grid">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <div className="weekday" key={day}>
                {day}
              </div>
            ))}

            {calendarDays.map((item, index) => (
              <div
                key={`${item.day}-${index}`}
                className={`calendar-cell ${item.type}`}
              >
                {item.day}
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function LegendItem({ color, label }) {
  return (
    <div className="legend-item">
      <span className={`legend-dot ${color}`} />
      <span>{label}</span>
    </div>
  );
}

function CourseBreakdown() {
  return (
    <article className="course-breakdown-card">
      <h3>Course Breakdown</h3>

      <div className="course-list">
        {courseBreakdown.map((item) => (
          <div className="course-progress" key={item.course}>
            <div className="course-progress-header">
              <span>{item.course}</span>
              <strong className={item.color}>{item.value}%</strong>
            </div>

            <div className="progress-track">
              <div
                className={`progress-fill ${item.color}`}
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="breakdown-note">
        <p>
          Note: Attendance below 75% may result in loss of credits for that
          course.
        </p>
      </div>
    </article>
  );
}

function AttendanceLog({ onRowClick }) {
  return (
    <section className="attendance-log-card">
      <div className="log-header">
        <h3>Detailed Attendance Log</h3>

        <div className="log-filters">
          <select defaultValue="All Courses">
            <option>All Courses</option>
            <option>Mathematics</option>
            <option>Physics</option>
          </select>

          <select defaultValue="All Status">
            <option>All Status</option>
            <option>Present</option>
            <option>Absent</option>
            <option>Excused</option>
          </select>
        </div>
      </div>

      <div className="table-scroll">
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Course</th>
              <th>Time</th>
              <th>Professor</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {attendanceLogs.map((log) => (
              <tr key={`${log.date}-${log.course}`} onClick={onRowClick}>
                <td>{log.date}</td>
                <td>{log.course}</td>
                <td className="muted-cell">{log.time}</td>
                <td className="muted-cell">{log.professor}</td>
                <td>
                  <span className={`status-pill ${log.statusType}`}>
                    {log.status}
                  </span>
                </td>
                <td>
                  <button
                    type="button"
                    className={`table-action ${log.statusType}`}
                    aria-label="View details"
                  >
                    <Icon name={log.actionIcon} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination />
    </section>
  );
}

function Pagination() {
  return (
    <div className="pagination">
      <span>Showing 1-10 of 124 records</span>

      <div className="pagination-buttons">
        <button type="button" aria-label="Previous page">
          <Icon name="chevron_left" />
        </button>

        <button type="button" className="active">
          1
        </button>

        <button type="button">2</button>
        <button type="button">3</button>

        <button type="button" aria-label="Next page">
          <Icon name="chevron_right" />
        </button>
      </div>
    </div>
  );
}

function AttendanceFooter() {
  return (
    <footer className="attendance-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span>EduPremium</span>
          <p>© 2024 EduPremium Academy. All Rights Reserved.</p>
        </div>

        <nav>
          {footerLinks.map((link) => (
            <a href="#" onClick={preventLink} key={link}>
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

function AppealFab() {
  return (
    <button className="appeal-fab" type="button" aria-label="Submit Appeal">
      <Icon name="add" />
      <span>Submit Appeal</span>
    </button>
  );
}