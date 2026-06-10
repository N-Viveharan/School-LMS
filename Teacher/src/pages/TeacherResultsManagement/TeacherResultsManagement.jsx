import { useEffect, useMemo, useState } from "react";
import "./TeacherResultsManagement.css";

const teacherAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAmwSwGgU2WyRobjgJvAqi3wsHUqlyxH6t0F-oZb2aH0SIgDC_HfXEpuDiyqyWAOLdfkPEMmPT2Xnm7ORq4Suc9zqz5fir6jdVcHaEzn_Tgd1gl5SrRw8gzLvS2OWNsn830JFjkr47gy9Nw9h74qXG383Eh932aNww-uiu6qo3VkvcDAZJSwT37Xp2E3Yec5Rmc4apkHsEUhGWikito_JJH1_EOHz3wt_pwFiaPLhr0f7daEDNA7YCm3rbtDPEdiD_odHseFpPb00M";

const navItems = [
  { icon: "dashboard", label: "Dashboard" },
  { icon: "class", label: "My Classes" },
  { icon: "group", label: "Students" },
  { icon: "book", label: "Subjects" },
  { icon: "assignment", label: "Assignments" },
  { icon: "assessment", label: "Results", active: true },
  { icon: "event_available", label: "Attendance" },
  { icon: "calendar_today", label: "Schedule" },
];

const summaryCards = [
  {
    label: "Class Average",
    value: "78.4%",
    icon: "trending_up",
    note: "+2.5% vs Last Term",
    noteType: "secondary",
  },
  {
    label: "Highest Grade",
    value: "98.0%",
    icon: "workspace_premium",
    note: "Liam O'Connor",
  },
  {
    label: "Submission Rate",
    value: "94.2%",
    icon: "check_circle",
    note: "30 of 32 Submissions",
  },
  {
    label: "Pending Grades",
    value: "12",
    icon: "pending_actions",
    note: "Final Project (Part 1)",
    noteType: "error",
  },
];

const students = [
  {
    initials: "AO",
    initialsClass: "primary-container",
    name: "Amara Okafor",
    scores: {
      quiz1: { value: "9" },
      project: { value: "48" },
      midterm: { value: "92" },
      quiz2: { value: "14" },
      finalProject: { value: "95" },
    },
    finalGrade: "94.5% (A)",
  },
  {
    initials: "BM",
    initialsClass: "tertiary-container",
    name: "Ben Miller",
    scores: {
      quiz1: { value: "7" },
      project: { value: "42" },
      midterm: { value: "76", error: true },
      quiz2: { value: "11" },
      finalProject: { placeholder: "Pending", pending: true },
    },
    finalGrade: "76.2% (C)",
  },
  {
    initials: "LC",
    initialsClass: "secondary-container",
    name: "Liam O'Connor",
    scores: {
      quiz1: { value: "10" },
      project: { value: "50" },
      midterm: { value: "98" },
      quiz2: { value: "15" },
      finalProject: { value: "100" },
    },
    finalGrade: "99.1% (A+)",
  },
  {
    initials: "SW",
    initialsClass: "outline",
    name: "Sarah Wright",
    scores: {
      quiz1: { value: "8" },
      project: { value: "45" },
      midterm: { value: "88" },
      quiz2: { missing: true },
      finalProject: { value: "82" },
    },
    finalGrade: "82.4% (B)",
  },
  {
    initials: "KC",
    initialsClass: "primary",
    name: "Kevin Chen",
    scores: {
      quiz1: { value: "9" },
      project: { value: "44" },
      midterm: { value: "85" },
      quiz2: { value: "13" },
      finalProject: { value: "90" },
    },
    finalGrade: "88.7% (B+)",
  },
];

const gradeDistribution = [
  { label: "A", value: 35, color: "secondary" },
  { label: "B", value: 42, color: "secondary" },
  { label: "C", value: 15, color: "secondary" },
  { label: "D/F", value: 8, color: "error" },
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

export default function TeacherResultsManagement() {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.title = "Results Management - EduPortal";
  }, []);

  const filteredStudents = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return students;

    return students.filter((student) =>
      student.name.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="teacher-results-page">
      <SideNav />

      <div className="results-shell">
        <TopNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <main className="results-main">
          <PageHeader />
          <SummaryGrid />
          <GradebookTable students={filteredStudents} />
          <InsightsSection />
        </main>

        <ResultsFooter />
      </div>
    </div>
  );
}

function SideNav() {
  return (
    <aside className="side-nav">
      <div className="side-brand">
        <h1>EduPortal</h1>
        <p>Teacher Dashboard</p>
      </div>

      <nav className="side-menu">
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

function TopNav({ searchQuery, setSearchQuery }) {
  return (
    <header className="top-nav">
      <div className="top-search">
        <Icon name="search" className="search-icon" />
        <input
          type="text"
          placeholder="Search students or results..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </div>

      <div className="top-actions">
        <div className="top-icon-actions">
          <button type="button" aria-label="Notifications">
            <Icon name="notifications" />
          </button>

          <button type="button" aria-label="Help">
            <Icon name="help" />
          </button>
        </div>

        <div className="teacher-profile">
          <div>
            <p>Dr. Julian Vance</p>
            <span>Senior Faculty</span>
          </div>

          <img src={teacherAvatar} alt="Teacher Profile" />
        </div>
      </div>
    </header>
  );
}

function PageHeader() {
  return (
    <section className="page-header">
      <div>
        <h1>Gradebook: Computer Science 101</h1>
        <p>Semester 2 • Section A • 32 Students Enrolled</p>
      </div>

      <div className="page-actions">
        <button type="button" className="publish-button">
          <Icon name="publish" />
          Publish Results
        </button>

        <div className="export-buttons">
          <button type="button">
            <Icon name="picture_as_pdf" />
            PDF
          </button>

          <button type="button">
            <Icon name="csv" />
            CSV
          </button>
        </div>
      </div>
    </section>
  );
}

function SummaryGrid() {
  return (
    <section className="summary-grid">
      {summaryCards.map((card) => (
        <article className="summary-card" key={card.label}>
          <div className="summary-top">
            <span>{card.label}</span>
            <Icon name={card.icon} />
          </div>

          <div>
            <strong>{card.value}</strong>
            <p className={card.noteType || ""}>{card.note}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

function GradebookTable({ students }) {
  return (
    <section className="gradebook-card">
      <div className="gradebook-filters">
        <div className="filter-selects">
          <select defaultValue="All Assignments">
            <option>All Assignments</option>
            <option>Exams Only</option>
            <option>Quizzes</option>
          </select>

          <select defaultValue="Sort by: Name (A-Z)">
            <option>Sort by: Name (A-Z)</option>
            <option>Sort by: Rank (High to Low)</option>
            <option>Sort by: Missing Work</option>
          </select>
        </div>

        <div className="legend">
          <span>
            <i className="missing" /> Missing
          </span>
          <span>
            <i className="graded" /> Graded
          </span>
          <span>
            <i className="pending" /> Pending
          </span>
        </div>
      </div>

      <div className="gradebook-scroll">
        <table className="gradebook-table">
          <thead>
            <tr>
              <th className="sticky-col">Student Name</th>
              <AssignmentHeader title="Quiz 1" meta="10 pts • 02/10" />
              <AssignmentHeader title="Project A" meta="50 pts • 02/25" />
              <AssignmentHeader title="Midterm" meta="100 pts • 03/15" />
              <AssignmentHeader title="Quiz 2" meta="15 pts • 03/30" />
              <AssignmentHeader title="Final Project" meta="100 pts • 04/10" />
              <th className="final-grade-header">
                <div>Final Grade</div>
                <span>Calculated</span>
              </th>
            </tr>
          </thead>

          <tbody>
            {students.length > 0 ? (
              students.map((student) => (
                <GradebookRow key={student.name} student={student} />
              ))
            ) : (
              <tr>
                <td className="empty-row" colSpan="7">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>

          <tfoot>
            <tr>
              <td className="sticky-col">Section Average</td>
              <td>8.2 / 10</td>
              <td>45.8 / 50</td>
              <td>87.1 / 100</td>
              <td>12.2 / 15</td>
              <td>91.4 / 100</td>
              <td className="final-average">78.4%</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <GradebookPagination />
    </section>
  );
}

function AssignmentHeader({ title, meta }) {
  return (
    <th>
      <div>{title}</div>
      <span>{meta}</span>
    </th>
  );
}

function GradebookRow({ student }) {
  return (
    <tr>
      <td className="sticky-col student-cell">
        <div className={`student-initials ${student.initialsClass}`}>
          {student.initials}
        </div>
        <span>{student.name}</span>
      </td>

      <ScoreCell score={student.scores.quiz1} />
      <ScoreCell score={student.scores.project} />
      <ScoreCell score={student.scores.midterm} />
      <ScoreCell score={student.scores.quiz2} />
      <ScoreCell score={student.scores.finalProject} />

      <td className="final-grade-cell">{student.finalGrade}</td>
    </tr>
  );
}

function ScoreCell({ score }) {
  if (score.missing) {
    return (
      <td className="score-cell missing-cell">
        <span>
          <Icon name="warning" />
          0
        </span>
      </td>
    );
  }

  return (
    <td className="score-cell">
      <input
        type="text"
        defaultValue={score.value || ""}
        placeholder={score.placeholder || ""}
        className={`${score.error ? "error-value" : ""} ${
          score.pending ? "pending-value" : ""
        }`}
      />
    </td>
  );
}

function GradebookPagination() {
  return (
    <div className="gradebook-pagination">
      <span>Showing 5 of 32 students</span>

      <div className="pagination-controls">
        <button type="button" aria-label="Previous page">
          <Icon name="chevron_left" />
        </button>

        <button type="button" className="active">
          1
        </button>

        <button type="button">2</button>
        <button type="button">3</button>
        <span>...</span>
        <button type="button">7</button>

        <button type="button" aria-label="Next page">
          <Icon name="chevron_right" />
        </button>
      </div>
    </div>
  );
}

function InsightsSection() {
  return (
    <section className="insights-grid">
      <article className="insights-card">
        <h3>
          <Icon name="info" />
          Grading Insights
        </h3>

        <ul>
          <InsightItem
            icon="trending_down"
            title="Low Performance: Midterm Exam"
            text="45% of students scored below 70%. Consider a review session."
          />

          <InsightItem
            icon="alarm"
            title="Unpublished Grades"
            text="Final Project (Part 1) grades are ready but not yet visible to students."
          />
        </ul>
      </article>

      <article className="distribution-card">
        <h3>Grade Distribution</h3>
        <p>Distribution across Grade Letters for this section.</p>

        <div className="distribution-list">
          <DistributionRow grade="A" value={35} color="secondary" />
          <DistributionRow grade="B" value={42} color="secondary" />
          <DistributionRow grade="C" value={15} color="secondary" />
          <DistributionRow grade="D/F" value={8} color="error" />
        </div>
      </article>
    </section>
  );
}

function InsightItem({ icon, title, text }) {
  return (
    <li>
      <Icon name={icon} />
      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
    </li>
  );
}

function DistributionRow({ grade, value, color }) {
  return (
    <div className="distribution-row">
      <span>{grade}</span>

      <div className="distribution-track">
        <div
          className={`distribution-fill ${color}`}
          style={{ width: `${value}%` }}
        />
      </div>

      <strong>{value}%</strong>
    </div>
  );
}

function ResultsFooter() {
  return (
    <footer className="results-footer">
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