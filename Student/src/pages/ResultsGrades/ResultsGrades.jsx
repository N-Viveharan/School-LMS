import { useEffect } from "react";
import "./ResultsGrades.css";

const userAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAUqZ4PiCjQdN7h-sN_iV28Eb_JlXT38TE_Qev0u1EZ0HFhFAWhMKhvmQtGd_FoC8se5xmDqW0n1ujUgXO-uijfsiJDv_FY9xmE9G1mqhvWtQcl50cw0wI_sucEPeBanZY93JMogNv_jpx-ixkTIJJCs3sSf_Pcr9V6NISeKUX_vx6hn1LZu7X8ysF2VRfw3HQEX_mc__n162puYhQT3rZkj3o0eeLQCRw2nrfxXFSKX15wJTwbOx3bgsyWGAwoEAeyQl3wZaBt_2M";

const sidebarLinks = [
  { icon: "dashboard", label: "Dashboard" },
  { icon: "analytics", label: "Analytics", active: true, filled: true },
  { icon: "school", label: "Courses" },
  { icon: "assignment", label: "Assignments" },
  { icon: "calendar_today", label: "Schedule" },
];

const recentMarks = [
  {
    icon: "functions",
    subject: "Calculus III",
    type: "Midterm Exam",
    score: "92%",
    trend: "+4%",
    trendIcon: "trending_up",
    trendType: "up",
  },
  {
    icon: "psychology",
    subject: "Cognitive Psych",
    type: "Quiz 4",
    score: "88%",
    trend: "0%",
    trendIcon: "horizontal_rule",
    trendType: "flat",
  },
  {
    icon: "biotech",
    subject: "Microbiology",
    type: "Lab Report",
    score: "95%",
    trend: "+2%",
    trendIcon: "trending_up",
    trendType: "up",
  },
];

const grades = [
  {
    code: "CS-402",
    subject: "Advanced Algorithms",
    professor: "Prof. Alan Turing",
    completed: 3,
    total: 4,
    assignmentLabel: "3/4 Completed",
    midterm: "94",
    final: "Pending",
    grade: "A",
    gradeType: "green",
    trendIcon: "trending_up",
    trend: "Improving",
    trendType: "up",
  },
  {
    code: "MA-201",
    subject: "Linear Algebra",
    professor: "Dr. Emily Noether",
    completed: 4,
    total: 4,
    assignmentLabel: "All Completed",
    midterm: "88",
    final: "Pending",
    grade: "B+",
    gradeType: "blue",
    trendIcon: "trending_flat",
    trend: "Steady",
    trendType: "flat",
  },
  {
    code: "PH-105",
    subject: "Quantum Mechanics I",
    professor: "Prof. Richard Feynman",
    completed: 1,
    total: 4,
    assignmentLabel: "1/4 Completed",
    midterm: "91",
    final: "96",
    grade: "A+",
    gradeType: "green",
    trendIcon: "trending_up",
    trend: "Improving",
    trendType: "up",
  },
  {
    code: "HS-312",
    subject: "History of Science",
    professor: "Prof. Thomas Kuhn",
    completed: 2,
    total: 4,
    assignmentLabel: "2/4 Completed",
    midterm: "76",
    final: "Pending",
    grade: "C+",
    gradeType: "orange",
    trendIcon: "trending_down",
    trend: "Warning",
    trendType: "down",
  },
];

const gpaBars = [
  { label: "Sem 1", value: "3.4", height: 128, className: "bar-30" },
  { label: "Sem 2", value: "3.52", height: 144, className: "bar-40" },
  { label: "Sem 3", value: "3.75", height: 176, className: "bar-60" },
  { label: "Sem 4", value: "3.88", height: 192, className: "bar-current" },
  { label: "Sem 5", future: true, height: 96 },
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

export default function ResultsGrades() {
  useEffect(() => {
    document.title = "Results & Grades | EduPremium Student Portal";
  }, []);

  const handleGradeRowClick = () => {
    console.log("Row clicked - opening subject details");
  };

  return (
    <div className="results-page">
      <Sidebar />

      <main className="results-main">
        <TopNav />

        <section className="results-canvas">
          <SummarySection />
          <GradesTable onRowClick={handleGradeRowClick} />
          <BottomInsights />
        </section>

        <ResultsFooter />
      </main>
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
        {sidebarLinks.map((item) => (
          <a
            key={item.label}
            href="#"
            onClick={preventLink}
            className={`sidebar-link ${item.active ? "active" : ""}`}
          >
            <Icon name={item.icon} filled={item.filled} />
            <span>{item.label}</span>
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
      <div className="top-title">
        <h2>Results & Academic Records</h2>
      </div>

      <div className="top-actions">
        <div className="top-search">
          <Icon name="search" className="search-icon" />
          <input type="text" placeholder="Search grades..." />
        </div>

        <div className="icon-actions">
          <button type="button" className="top-icon-button notification-button">
            <Icon name="notifications" />
            <span />
          </button>

          <button type="button" className="top-icon-button">
            <Icon name="help" />
          </button>

          <button type="button" className="avatar-button">
            <img src={userAvatar} alt="User profile avatar" />
          </button>
        </div>
      </div>
    </header>
  );
}

function SummarySection() {
  return (
    <section className="summary-grid">
      <article className="gpa-card">
        <div className="gpa-bg-glow" />

        <div className="gpa-main-content">
          <div>
            <span className="eyebrow">Overall Performance</span>

            <h3>
              3.88 <span>/ 4.0</span>
            </h3>

            <p>You are in the top 5% of your cohort. Keep it up!</p>
          </div>

          <div className="gpa-mini-stats">
            <div>
              <span>Credits Earned</span>
              <strong>112 / 128</strong>
            </div>

            <div>
              <span>Attendance</span>
              <strong>94.2%</strong>
            </div>
          </div>
        </div>

        <div className="semester-progress">
          <div className="semester-progress-label">
            <span>Semester Progress</span>
            <span>85% Complete</span>
          </div>

          <div className="semester-track">
            <div className="semester-fill" />
          </div>
        </div>
      </article>

      <RecentMarksCard />
    </section>
  );
}

function RecentMarksCard() {
  return (
    <article className="recent-card">
      <div className="recent-header">
        <h4>Recent Marks</h4>

        <button type="button">View All</button>
      </div>

      <div className="recent-list">
        {recentMarks.map((item) => (
          <div className="recent-item" key={item.subject}>
            <div className="recent-left">
              <div className="recent-icon">
                <Icon name={item.icon} />
              </div>

              <div>
                <p>{item.subject}</p>
                <span>{item.type}</span>
              </div>
            </div>

            <div className="recent-score">
              <p>{item.score}</p>

              <span className={item.trendType}>
                <Icon name={item.trendIcon} />
                {item.trend}
              </span>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function GradesTable({ onRowClick }) {
  return (
    <section className="grades-panel">
      <div className="grades-panel-header">
        <div>
          <h4>Semester Results: Fall 2024</h4>
          <p>Detailed subject-wise breakdown</p>
        </div>

        <div className="grades-actions">
          <button type="button" className="filter-button">
            <Icon name="filter_list" />
            Filter
          </button>

          <button type="button" className="download-button">
            <Icon name="download" />
            Download Transcript
          </button>
        </div>
      </div>

      <div className="table-scroll custom-scrollbar">
        <table className="grades-table">
          <thead>
            <tr>
              <th>Subject Code</th>
              <th>Subject Name</th>
              <th>Assignments</th>
              <th className="center">Midterm</th>
              <th className="center">Final</th>
              <th className="center">Grade</th>
              <th>Trend</th>
            </tr>
          </thead>

          <tbody>
            {grades.map((grade) => (
              <GradeRow
                grade={grade}
                key={grade.code}
                onClick={onRowClick}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function GradeRow({ grade, onClick }) {
  return (
    <tr onClick={onClick}>
      <td className="code-cell">{grade.code}</td>

      <td>
        <div className="subject-name">{grade.subject}</div>
        <div className="professor-name">{grade.professor}</div>
      </td>

      <td>
        <AssignmentProgress completed={grade.completed} total={grade.total} />
        <span className="assignment-caption">{grade.assignmentLabel}</span>
      </td>

      <td className="center score-cell">{grade.midterm}</td>
      <td className="center score-cell">{grade.final}</td>

      <td className="center">
        <span className={`grade-pill ${grade.gradeType}`}>{grade.grade}</span>
      </td>

      <td>
        <div className={`trend-cell ${grade.trendType}`}>
          <Icon name={grade.trendIcon} />
          <span>{grade.trend}</span>
        </div>
      </td>
    </tr>
  );
}

function AssignmentProgress({ completed, total }) {
  return (
    <div className="assignment-progress">
      {Array.from({ length: total }).map((_, index) => (
        <span
          key={index}
          className={index < completed ? "completed" : "incomplete"}
        />
      ))}
    </div>
  );
}

function BottomInsights() {
  return (
    <section className="bottom-grid">
      <GpaTrendChart />
      <LearningInsights />
    </section>
  );
}

function GpaTrendChart() {
  return (
    <article className="chart-card">
      <h4>GPA Trend over Semesters</h4>

      <div className="bar-chart">
        {gpaBars.map((bar) => (
          <div
            key={bar.label}
            className={`bar-item ${bar.future ? "future" : ""}`}
          >
            <div
              className={`bar ${bar.className || ""}`}
              style={{ height: `${bar.height}px` }}
            >
              {!bar.future && <span className="bar-tooltip">{bar.value}</span>}
            </div>

            <span className={bar.label === "Sem 4" ? "active-label" : ""}>
              {bar.label}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}

function LearningInsights() {
  return (
    <article className="insights-card">
      <h4>Learning Insights</h4>

      <div className="insight-list">
        <div className="insight-box strong">
          <div className="insight-title">
            <Icon name="star" />
            <span>Strongest Subject</span>
          </div>

          <p>
            You are excelling in <strong>Theoretical Physics</strong>. Your
            average score is 94%, which is 15% higher than the class average.
          </p>
        </div>

        <div className="insight-box warning">
          <div className="insight-title">
            <Icon name="priority_high" />
            <span>Attention Needed</span>
          </div>

          <p>
            Your <strong>Humanities</strong> score has dipped slightly. Consider
            attending the optional workshop on Modern History on Friday.
          </p>
        </div>
      </div>
    </article>
  );
}

function ResultsFooter() {
  return (
    <footer className="results-footer">
      <div className="results-footer-inner">
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