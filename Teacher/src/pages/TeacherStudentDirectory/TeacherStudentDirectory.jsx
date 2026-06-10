import { useEffect } from "react";
import "./TeacherStudentDirectory.css";

const teacherAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA8tnOisawCoD7xI4RrmKL1UnpEaZeo-Nx2FGcfgZOJHqdCoXfvuZoNQ9XhtLeiDhizifof9PRL9lKH__o0bWNc6k9dcAwLz66hqm0UftGcOQM98O7nZZrg_C-WVXtFoNdiaDVLiNDj10cYn0guO3O6KY1l-G0piIPPcpNq9BaZn4FYLjyeKFVRAwMqzLyo_knwahJRa7OYVq2CS9Mb3wnoV4OckMEHbwD1QTtdlfe5OggmM84CDRjfzKHHdMbE6fxDWQmz4iGnLBA";

const navItems = [
  { icon: "dashboard", label: "Dashboard" },
  { icon: "class", label: "My Classes" },
  { icon: "group", label: "Students", active: true, filled: true },
  { icon: "book", label: "Subjects" },
  { icon: "assignment", label: "Assignments" },
  { icon: "assessment", label: "Results" },
  { icon: "event_available", label: "Attendance" },
  { icon: "calendar_today", label: "Schedule" },
];

const stats = [
  {
    label: "Total Students",
    value: "1,248",
    icon: "trending_up",
    trend: "+12% from last term",
    trendType: "positive",
  },
  {
    label: "Avg. Attendance",
    value: "94.2%",
    icon: "horizontal_rule",
    trend: "Stable performance",
    trendType: "neutral",
  },
  {
    label: "Pass Rate",
    value: "88%",
    icon: "trending_down",
    trend: "-2% critical dip",
    trendType: "negative",
  },
  {
    label: "Pending Tasks",
    value: "24",
    icon: "warning",
    trend: "Requires review",
    trendType: "warning",
  },
];

const students = [
  {
    name: "Alex Thompson",
    email: "alex.t@eduportal.com",
    id: "#EDU-9283",
    grade: "Grade 11-A",
    subject: "Advanced Physics",
    attendance: 98,
    attendanceType: "good",
    performance: "Exemplary",
    performanceIcon: "verified",
    performanceType: "excellent",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAM1VdHe9X23HVzGqUBGLKj7fLUlYrvJ5CJ9hdSKnlISMuEbjbaZtjJGiwVWM3myYdKfDlpIF74Rrx-XfcfnV4FbOpS6s3ir76_qGnjirKZP89fFtydLmAR2n94E5Kbdt-ni1GNuckgd0nsv1qAQulm8DfhlG7hM5CD99km2UKcGtOYpsfCvIW6LDkyCsVcAZx0L7OsTOLCg2YZLyvnVIn_UHuoUC_whEQOg6guo-8Do5_QZE54mK9yc91-iFyeoczG-YvPG6rGECk",
  },
  {
    name: "Mia Rodriguez",
    email: "mia.r@eduportal.com",
    id: "#EDU-4421",
    grade: "Grade 11-C",
    subject: "Biochemistry",
    attendance: 92,
    attendanceType: "good",
    performance: "Above Avg",
    performanceIcon: "star",
    performanceType: "above",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD68dXXQ-mc9oqyWn08FGtCDg0KPEl1GvWCuLws2zn0tCT1IZQ7J8BKQhcuAk6cbIPlf9gRxe40eBHpjjDqju3tNd5fZeV4SX58pk3v5pQxD0_SfuPAgZRNLUTEU2y-DRWr8qeNiUrreV3xLLIukJhFJlPTzM6kQU1O7IHzl7T8e_dErtcfuq1RtUu70lu9MRTVtc4PmKAh_CJD7BuPVa_GiDLyiyjcVEvCAnhZPLI4LbayM9fyyNfTs5Ri8iMjAx4dwr2g4HIqWR8",
  },
  {
    name: "Jordan Chen",
    email: "j.chen@eduportal.com",
    id: "#EDU-1102",
    grade: "Grade 10-B",
    subject: "Computer Science",
    attendance: 74,
    attendanceType: "risk",
    performance: "At Risk",
    performanceIcon: "priority_high",
    performanceType: "risk",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAMJCpBY3778c_Wrp-brE7q4wU8BFxHToc3iM85OD_eqRKp6q5EF2vHHGOCkJRjPe2WpzTf8kitZd6PXGabzuJYvC6bXtPzRP2v7SfbhGRrDTCxtFibfJORI6LW--nLTF5lBQGv_uv7e7PW6xdoRAaMXPP20NeCvmqdWto-nYX8X0RUXnuH__6E_S16bdUtztHPBtVA1657657KBK1VynUjmKqfMPXwvN0L_-_-IXybd06M7AY_RJa_zTrDZAE8h4F2BT4ApIj1pA4",
  },
  {
    name: "Sarah Lee",
    email: "lee.s@eduportal.com",
    id: "#EDU-3398",
    grade: "Grade 12-D",
    subject: "World History",
    attendance: 95,
    attendanceType: "good",
    performance: "Exemplary",
    performanceIcon: "verified",
    performanceType: "excellent",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDXWIMK-H3pgpbZVcS4ngsBwPyk8L6tqpEUvl7BIPh3ZJy7EJotD2kLI7ySa1XPgLizvcmVN3Z458BmmIjkLqquVSiZiipG2qH35-yJM6hEkzVsGpiRlpuDzOIygpyuriTrmAHLK176Q4PbeJVW7q_bm2Rk4zQtb8Y60UzZXGe65Bn1ZjrsxsrQ5fRaNI9OY5p69B1h5D4wOFvjlXx1yepN_6y3R5U51GWsKpJkraQaXRaGP7bmhEMMBsv_IUn8B7zdoutCNAinQkE",
  },
];

const trendBars = [
  { day: "Mon", value: "82%", height: 60 },
  { day: "Tue", value: "85%", height: 75 },
  { day: "Wed", value: "94%", height: 90, strong: true },
  { day: "Thu", value: "81%", height: 65 },
  { day: "Fri", value: "88%", height: 80 },
  { day: "Sat", value: "78%", height: 55 },
  { day: "Sun", value: "84%", height: 70 },
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

export default function TeacherStudentDirectory() {
  useEffect(() => {
    document.title = "Student Directory | EduPortal LMS";
  }, []);

  return (
    <div className="student-directory-page">
      <SideNav />
      <TopNav />

      <main className="directory-main">
        <div className="directory-container">
          <PageHeader />
          <StatsGrid />
          <StudentTableSection />
          <BottomInsights />
        </div>
      </main>

      <DirectoryFooter />
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
            <Icon name={item.icon} filled={item.filled} />
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
      <div className="top-search">
        <Icon name="search" className="top-search-icon" />
        <input type="text" placeholder="Search students, IDs, or grades..." />
      </div>

      <div className="top-actions">
        <button type="button" aria-label="Notifications">
          <Icon name="notifications" />
        </button>

        <button type="button" aria-label="Help">
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
        <nav className="breadcrumbs">
          <span>Dashboard</span>
          <Icon name="chevron_right" />
          <strong>Student Directory</strong>
        </nav>

        <h1>Student Directory</h1>

        <p>
          Manage and track performance for all 1,248 students in your department.
        </p>
      </div>

      <div className="page-actions">
        <button type="button" className="export-button">
          <Icon name="download" />
          Export Report
        </button>

        <button type="button" className="add-button">
          <Icon name="person_add" />
          Add Student
        </button>
      </div>
    </section>
  );
}

function StatsGrid() {
  return (
    <section className="stats-grid">
      {stats.map((stat) => (
        <article className="stat-card" key={stat.label}>
          <p>{stat.label}</p>
          <h2>{stat.value}</h2>

          <div className={`stat-trend ${stat.trendType}`}>
            <Icon name={stat.icon} />
            <span>{stat.trend}</span>
          </div>
        </article>
      ))}
    </section>
  );
}

function StudentTableSection() {
  return (
    <section className="directory-table-section">
      <FilterBar />
      <StudentTable />
    </section>
  );
}

function FilterBar() {
  return (
    <div className="filters-bar">
      <div className="filters-left">
        <SelectFilter
          icon="expand_more"
          options={["Academic Year: 2023-24", "Academic Year: 2022-23"]}
        />

        <SelectFilter
          icon="filter_list"
          options={["All Grades", "Grade 9", "Grade 10", "Grade 11", "Grade 12"]}
        />

        <SelectFilter
          icon="analytics"
          options={["Performance: All", "Top Performers", "At Risk"]}
        />
      </div>

      <p>
        Showing <strong>10</strong> of 1,248 students
      </p>
    </div>
  );
}

function SelectFilter({ options, icon }) {
  return (
    <div className="select-wrap">
      <select defaultValue={options[0]}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>

      <Icon name={icon} className="select-icon" />
    </div>
  );
}

function StudentTable() {
  return (
    <div className="table-card">
      <div className="table-scroll custom-scrollbar">
        <table className="student-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>ID</th>
              <th>Grade</th>
              <th>Primary Subject</th>
              <th>Attendance %</th>
              <th>Performance</th>
              <th className="align-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <StudentRow key={student.id} student={student} />
            ))}
          </tbody>
        </table>
      </div>

      <Pagination />
    </div>
  );
}

function StudentRow({ student }) {
  return (
    <tr>
      <td>
        <div className="student-info">
          <img src={student.avatar} alt={student.name} />

          <div>
            <p>{student.name}</p>
            <span>{student.email}</span>
          </div>
        </div>
      </td>

      <td>{student.id}</td>
      <td>{student.grade}</td>

      <td>
        <span className="subject-pill">{student.subject}</span>
      </td>

      <td>
        <div className="attendance-cell">
          <div className="attendance-track">
            <div
              className={`attendance-fill ${student.attendanceType}`}
              style={{ width: `${student.attendance}%` }}
            />
          </div>

          <span className={student.attendanceType}>{student.attendance}%</span>
        </div>
      </td>

      <td>
        <span className={`performance ${student.performanceType}`}>
          <Icon name={student.performanceIcon} />
          {student.performance}
        </span>
      </td>

      <td className="align-right">
        <button type="button" className="view-profile-button">
          View Profile
        </button>
      </td>
    </tr>
  );
}

function Pagination() {
  return (
    <div className="pagination">
      <p>Showing 1 - 10 of 1,248 results</p>

      <div className="pagination-controls">
        <button type="button" disabled aria-label="Previous page">
          <Icon name="chevron_left" />
        </button>

        <button type="button" className="active">
          1
        </button>

        <button type="button">2</button>
        <button type="button">3</button>

        <span>...</span>

        <button type="button">125</button>

        <button type="button" aria-label="Next page">
          <Icon name="chevron_right" />
        </button>
      </div>
    </div>
  );
}

function BottomInsights() {
  return (
    <section className="bottom-grid">
      <DepartmentTrends />
      <WeeklyInsight />
    </section>
  );
}

function DepartmentTrends() {
  return (
    <article className="trends-card">
      <div className="trends-header">
        <h3>Departmental Trends</h3>

        <div>
          <span />
          <p>Average GPA</p>
        </div>
      </div>

      <div className="bar-chart">
        {trendBars.map((bar) => (
          <div
            className={`trend-bar ${bar.strong ? "strong" : ""}`}
            style={{ height: `${bar.height}%` }}
            key={bar.day}
          >
            <span>{bar.value}</span>
          </div>
        ))}
      </div>

      <div className="chart-labels">
        {trendBars.map((bar) => (
          <span key={bar.day}>{bar.day}</span>
        ))}
      </div>
    </article>
  );
}

function WeeklyInsight() {
  return (
    <article className="insight-card">
      <div className="insight-content">
        <span className="insight-badge">Weekly Insight</span>

        <h3>Physics Lab attendance is up 14% this week across Grade 11.</h3>

        <p>
          New experimental modules have significantly increased student engagement
          metrics.
        </p>
      </div>

      <button type="button">Download Analysis</button>

      <div className="insight-circle insight-circle-one" />
      <div className="insight-circle insight-circle-two" />
    </article>
  );
}

function DirectoryFooter() {
  return (
    <footer className="directory-footer">
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