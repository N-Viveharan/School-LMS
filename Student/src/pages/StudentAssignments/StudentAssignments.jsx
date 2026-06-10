import { useEffect } from "react";
import "./StudentAssignments.css";

const userAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBaCBI5faTJmUz7YyVXmGNBkQMboKf4b6xrN7bgbcBR3BNrdEy2_Hln6nZbCQMZHNJtqq2QdYwjXULpgIuQHYBmRkulw9cWQVXJgVQ6ZVYJz8Bn2R7tqyZdZIQDtqddblVwySGz7_FiOCp374h0tMjxvLSWeaIatO9Emtyke8kV1q5La1O5yV6HwZrGclvY_VXM7RAyyF1lxpnpU7a2ovMRPB8sFUvqlCgggZ1hxEsb-0mIf0y-oU8HLbpxq2G6ygKZXXi_VDfMSwU";

const sidebarLinks = [
  { icon: "dashboard", label: "Dashboard" },
  { icon: "school", label: "Courses" },
  { icon: "assignment", label: "Assignments", active: true, filled: true },
  { icon: "group", label: "Students" },
  { icon: "calendar_today", label: "Schedule" },
  { icon: "analytics", label: "Analytics" },
];

const stats = [
  {
    type: "pending",
    icon: "pending_actions",
    label: "Pending Assignments",
    value: "07",
    badge: "4 Urgent",
  },
  {
    type: "gpa",
    icon: "grade",
    label: "GPA Average",
    value: "3.85",
    badge: "+12% vs last month",
  },
];

const assignments = [
  {
    priority: "error",
    title: "Final Thesis Proposal",
    description: "Format: PDF/DOCX • Max 15MB",
    subject: "Academic Writing IV",
    deadline: "Today, 11:59 PM",
    deadlineMeta: "Remaining: 12h 45m",
    deadlineType: "error",
    status: "Pending",
    statusIcon: "error",
    statusType: "error",
    action: "Open",
    actionType: "primary",
  },
  {
    priority: "neutral",
    title: "Quantum Physics Lab #4",
    description: "Simulation & Analysis Report",
    subject: "Physics III",
    deadline: "Oct 24, 2024",
    deadlineMeta: "in 3 days",
    status: "In Progress",
    statusIcon: "schedule",
    statusType: "muted",
    action: "Open",
    actionType: "outline-primary",
  },
  {
    priority: "secondary",
    title: "Microeconomics Quiz 2",
    description: "Multiple Choice & Short Answer",
    subject: "Economics",
    deadline: "Oct 20, 2024",
    deadlineMeta: "Passed",
    status: "Submitted",
    statusIcon: "check_circle",
    statusType: "secondary",
    filledStatus: true,
    action: "View Details",
    actionType: "outline-muted",
  },
  {
    priority: "error",
    title: "Database Normalization Project",
    description: "SQL scripts and ERD documentation",
    subject: "Computer Science",
    deadline: "Tomorrow, 09:00 AM",
    deadlineMeta: "Remaining: 21h",
    deadlineType: "error",
    status: "Pending",
    statusIcon: "priority_high",
    statusType: "error",
    action: "Open",
    actionType: "primary",
  },
  {
    priority: "primary-fixed",
    title: "Intro to Psychology Essay",
    description: "Feedback provided by Prof. Miller",
    subject: "Psychology 101",
    deadline: "Oct 15, 2024",
    deadlineMeta: "Graded on Oct 18",
    status: "Graded (A)",
    statusIcon: "verified",
    statusType: "primary",
    filledStatus: true,
    action: "View Grade",
    actionType: "surface",
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

export default function StudentAssignments() {
  useEffect(() => {
    document.title = "Assignments | EduPremium Student Portal";
  }, []);

  return (
    <div className="assignments-page">
      <Sidebar />

      <main className="assignments-main">
        <TopNav />

        <section className="assignments-canvas">
          <PageHeader />
          <StatsGrid />
          <AssignmentsTable />
        </section>

        <AssignmentsFooter />
      </main>

      <button className="mobile-fab" type="button" aria-label="Add assignment">
        <Icon name="add" />
      </button>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <h1>EduPremium</h1>
        <p>Student Portal</p>
      </div>

      <nav className="sidebar-nav">
        {sidebarLinks.map((link) => (
          <a
            key={link.label}
            href="#"
            onClick={preventLink}
            className={`sidebar-link ${link.active ? "active" : ""}`}
          >
            <Icon name={link.icon} filled={link.filled} />
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
    <header className="top-nav">
      <div className="top-search">
        <Icon name="search" className="search-icon" />
        <input type="text" placeholder="Search assignments..." />
      </div>

      <div className="top-actions">
        <div className="icon-actions">
          <button type="button" className="top-icon-button notification-button">
            <Icon name="notifications" />
            <span />
          </button>

          <button type="button" className="top-icon-button">
            <Icon name="help" />
          </button>

          <button type="button" className="top-icon-button">
            <Icon name="apps" />
          </button>
        </div>

        <div className="top-divider" />

        <button type="button" className="profile-button">
          <img src={userAvatar} alt="Alex Johnson" />
          <span>Alex Johnson</span>
        </button>
      </div>
    </header>
  );
}

function PageHeader() {
  return (
    <div className="page-header">
      <div>
        <h2>Assignments</h2>
        <p>Manage your coursework and track your academic progress.</p>
      </div>

      <div className="page-actions">
        <button type="button" className="filter-button">
          <Icon name="filter_list" />
          Filter
        </button>

        <button type="button" className="submit-button">
          <Icon name="upload_file" />
          Submit Assignment
        </button>
      </div>
    </div>
  );
}

function StatsGrid() {
  return (
    <section className="stats-grid">
      {stats.map((stat) => (
        <article key={stat.label} className={`stat-card ${stat.type}`}>
          <div className="stat-top">
            <div className="stat-icon">
              <Icon name={stat.icon} />
            </div>

            <span className="stat-badge">{stat.badge}</span>
          </div>

          <h3>{stat.label}</h3>
          <p>{stat.value}</p>
        </article>
      ))}

      <article className="stat-card priority-card">
        <div className="priority-content">
          <div className="priority-icon">
            <Icon name="alarm" />
          </div>

          <h3>Next High-Priority</h3>
          <p>Advanced Algorithms</p>
          <span>Due in 14 hours</span>
        </div>

        <Icon name="assignment" className="priority-bg-icon" />
      </article>
    </section>
  );
}

function AssignmentsTable() {
  return (
    <section className="assignments-panel">
      <div className="panel-header">
        <div className="tabs">
          <button type="button" className="active">
            Active Assignments
          </button>

          <button type="button">Graded & Past</button>
        </div>

        <div className="sort-box">
          <Icon name="sort" />
          <select defaultValue="Deadline: Nearest First">
            <option>Deadline: Nearest First</option>
            <option>Subject: A-Z</option>
            <option>Status</option>
          </select>
        </div>
      </div>

      <div className="table-scroll">
        <table className="assignments-table">
          <thead>
            <tr>
              <th>Assignment Name</th>
              <th>Subject</th>
              <th>Deadline</th>
              <th>Status</th>
              <th className="align-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {assignments.map((assignment) => (
              <AssignmentRow key={assignment.title} assignment={assignment} />
            ))}
          </tbody>
        </table>
      </div>

      <Pagination />
    </section>
  );
}

function AssignmentRow({ assignment }) {
  return (
    <tr>
      <td>
        <div className="assignment-name">
          <span className={`priority-bar ${assignment.priority}`} />

          <div>
            <p>{assignment.title}</p>
            <small>{assignment.description}</small>
          </div>
        </div>
      </td>

      <td>
        <span className="subject-pill">{assignment.subject}</span>
      </td>

      <td>
        <div className="deadline-cell">
          <p className={assignment.deadlineType === "error" ? "error" : ""}>
            {assignment.deadline}
          </p>
          <small>{assignment.deadlineMeta}</small>
        </div>
      </td>

      <td>
        <span className={`status ${assignment.statusType}`}>
          <Icon name={assignment.statusIcon} filled={assignment.filledStatus} />
          {assignment.status}
        </span>
      </td>

      <td className="align-right">
        <button type="button" className={`row-action ${assignment.actionType}`}>
          {assignment.action}
        </button>
      </td>
    </tr>
  );
}

function Pagination() {
  return (
    <div className="pagination">
      <p>Showing 5 of 24 assignments</p>

      <div className="pagination-buttons">
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

function AssignmentsFooter() {
  return (
    <footer className="assignments-footer">
      <div className="footer-inner">
        <div>
          <span>EduPremium Academy</span>
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