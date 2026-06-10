import { useEffect } from "react";
import "./TeacherAssignmentManagement.css";

const profileImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuByK-szganyVhDQnwvO_nLEvn6rA9jbWKab_UB6gFLKt6ARGIPNKhEPdth6RVTvXr6yv3COKgtX5Ln39DnImJqxlBsEy9YFvk5GY7SbbbCNhrEau7JtqAqorHqwCYckkCph_ou9amHPJCueM2AIzEXabusnvVn-y1lGes8S0NGN2AFjTlDqNS4MoROHkPaJIY-Fraw01k19NtaRG95bUfmFx4c_CmJafs9ojEWg1rRr-CuCQM4E7lBRjcUWlcef7werNkCVmwjlp1Y";

const navItems = [
  { icon: "dashboard", label: "Dashboard" },
  { icon: "class", label: "My Classes" },
  { icon: "group", label: "Students" },
  { icon: "book", label: "Subjects" },
  { icon: "assignment", label: "Assignments", active: true },
  { icon: "assessment", label: "Results" },
  { icon: "event_available", label: "Attendance" },
  { icon: "calendar_today", label: "Schedule" },
];

const assignments = [
  {
    icon: "description",
    title: "Midterm Research Paper",
    subtitle: "Weight: 25% of Grade",
    className: "Advanced Calculus",
    dueDate: "Oct 24, 2024",
    dueMeta: "3 days left",
    dueType: "danger",
    status: "Active",
    statusType: "active",
    submissions: "24/30",
    progress: 80,
    progressType: "secondary",
  },
  {
    icon: "functions",
    title: "Vector Spaces Quiz",
    subtitle: "Auto-graded",
    className: "Linear Algebra 101",
    dueDate: "Oct 28, 2024",
    status: "Draft",
    statusType: "draft",
    submissions: "0/45",
    progress: 0,
    progressType: "muted",
  },
  {
    icon: "history_edu",
    title: "Complex Variables Exam",
    subtitle: "Final Project",
    className: "Advanced Calculus",
    dueDate: "Oct 15, 2024",
    status: "Closed",
    statusType: "closed",
    submissions: "30/30",
    progress: 100,
    progressType: "danger",
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

export default function TeacherAssignmentManagement() {
  useEffect(() => {
    document.title = "Assignment Management | EduPortal LMS";
  }, []);

  const handleRowClick = () => {
    console.log("Row clicked");
  };

  return (
    <div className="teacher-assignment-page">
      <SideNav />

      <main className="assignment-main">
        <TopNav />

        <section className="assignment-canvas">
          <PageHeader />
          <StatsAndFilters />
          <AssignmentTable onRowClick={handleRowClick} />
        </section>

        <AssignmentFooter />
      </main>

      <button className="mobile-fab" type="button" aria-label="Create assignment">
        <Icon name="add" />
      </button>
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
        <input type="text" placeholder="Search assignments..." />
      </div>

      <div className="top-actions">
        <button type="button" className="top-icon-button notification-button">
          <Icon name="notifications" />
          <span />
        </button>

        <button type="button" className="top-icon-button">
          <Icon name="help" />
        </button>

        <div className="profile-area">
          <div className="profile-text">
            <p>Dr. Sarah Jenkins</p>
            <span>Mathematics Dept.</span>
          </div>

          <img src={profileImage} alt="Dr. Sarah Jenkins profile" />
        </div>
      </div>
    </header>
  );
}

function PageHeader() {
  return (
    <div className="page-header">
      <div>
        <h1>Assignment Management</h1>
        <p>
          Track, create, and manage academic assessments across all active
          courses.
        </p>
      </div>

      <button className="create-assignment-button" type="button">
        <Icon name="add" />
        Create New Assignment
      </button>
    </div>
  );
}

function StatsAndFilters() {
  return (
    <section className="stats-filter-grid">
      <article className="active-stat-card">
        <p>Active Assignments</p>

        <div>
          <strong>12</strong>
          <span>+2 this week</span>
        </div>
      </article>

      <article className="filters-card">
        <FilterSelect
          label="Filter by Class"
          options={[
            "All Classes",
            "Advanced Calculus (Sec A)",
            "Linear Algebra 101",
            "Mathematical Theory",
          ]}
        />

        <FilterSelect
          label="Status"
          options={["All Status", "Active", "Draft", "Closed"]}
        />

        <FilterSelect
          label="Sort By"
          options={["Due Date (Soonest)", "Due Date (Latest)", "Submission %"]}
        />
      </article>
    </section>
  );
}

function FilterSelect({ label, options }) {
  return (
    <label className="filter-field">
      <span>{label}</span>

      <select defaultValue={options[0]}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function AssignmentTable({ onRowClick }) {
  return (
    <section className="assignments-table-card">
      <div className="table-scroll">
        <table className="assignments-table">
          <thead>
            <tr>
              <th>Assignment Name</th>
              <th>Class</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Submissions</th>
              <th className="align-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {assignments.map((assignment) => (
              <AssignmentRow
                key={assignment.title}
                assignment={assignment}
                onRowClick={onRowClick}
              />
            ))}
          </tbody>
        </table>
      </div>

      <Pagination />
    </section>
  );
}

function AssignmentRow({ assignment, onRowClick }) {
  return (
    <tr onClick={onRowClick}>
      <td>
        <div className="assignment-name">
          <div className="assignment-icon">
            <Icon name={assignment.icon} />
          </div>

          <div>
            <p>{assignment.title}</p>
            <span>{assignment.subtitle}</span>
          </div>
        </div>
      </td>

      <td>{assignment.className}</td>

      <td>
        <div className="due-date">
          <p>{assignment.dueDate}</p>
          {assignment.dueMeta && (
            <span className={assignment.dueType}>{assignment.dueMeta}</span>
          )}
        </div>
      </td>

      <td>
        <span className={`status-pill ${assignment.statusType}`}>
          {assignment.status}
        </span>
      </td>

      <td>
        <div className="submission-progress">
          <div className="progress-track">
            <div
              className={`progress-fill ${assignment.progressType}`}
              style={{ width: `${assignment.progress}%` }}
            />
          </div>

          <strong
            className={assignment.progress === 0 ? "muted-submission" : ""}
          >
            {assignment.submissions}
          </strong>
        </div>
      </td>

      <td className="align-right">
        <div className="row-actions">
          <button type="button" aria-label="View">
            <Icon name="visibility" />
          </button>

          <button type="button" aria-label="Edit">
            <Icon name="edit" />
          </button>

          <button type="button" aria-label="More">
            <Icon name="more_vert" />
          </button>
        </div>
      </td>
    </tr>
  );
}

function Pagination() {
  return (
    <div className="pagination">
      <p>Showing 1-10 of 48 assignments</p>

      <div className="pagination-controls">
        <button type="button" disabled aria-label="Previous page">
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

function AssignmentFooter() {
  return (
    <footer className="assignment-footer">
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