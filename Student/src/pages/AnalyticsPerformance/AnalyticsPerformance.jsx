import { useEffect } from "react";
import "./AnalyticsPerformance.css";

const profileAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBR3c_xL6ys3PJm8OuJq2s1XyW9LCNn--aKmzhZPEwEtaZXx1IjYBpwkLzybAaWD2jo3aIoudIV88P2xfIYruJzD3H85nLkY6Hn8bMzCCAVIlxRGgpirw6lSE6xezOa13tjjmBAQYlc24OTGogzHndfenmjS36QzPavD7sshGjlferCPheCDUKopUTFVeRBeco48GTADqeSNGuBtDi2hvQ4VJPfPPnwIzyBNdQO1VCGQYJfGfAqHL-xWrd_HCIx8f8TdUhInDacgCQ";

const mentorAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAP24lAT3zRoNmuO2WCPctXSHTSqYJcf98TXESgLju-8662ynjI7o0tQhiVJGJOo4UgHNT8EDINp5EZ6tWmgXhgvTdaLaxhIDACvgnxP_y1Kd7vOuRgcI5HpEltq5sBjtT7XOTnYKRTqa8DwAfiGK7vus9wDdAmTN11JgE-suYoJr6JscPygrmGIOtu2dBNjUAJ8SCiiacd2PWDXHARi9FurPNe36bXE_AFhu1DIzUoUTK5xrNEhYk7dBIw4MAw4DS5u5cXfl77aj8";

const sideNavItems = [
  { icon: "dashboard", label: "Dashboard" },
  { icon: "school", label: "Courses" },
  { icon: "assignment", label: "Assignments" },
  { icon: "analytics", label: "Analytics", active: true, filled: true },
  { icon: "group", label: "Students" },
  { icon: "calendar_month", label: "Schedule" },
];

const subjectPerformance = [
  { subject: "Mathematics", score: 92, color: "primary" },
  { subject: "Advanced Physics", score: 85, color: "secondary" },
  { subject: "Computer Science", score: 98, color: "primary" },
  { subject: "English Literature", score: 78, color: "secondary" },
];

const examResults = [
  {
    icon: "functions",
    subject: "Calculus II",
    type: "Mid-Term",
    date: "Oct 14, 2024",
    score: "94/100",
    status: "Excellent",
    statusType: "excellent",
  },
  {
    icon: "science",
    subject: "Thermodynamics",
    type: "Quiz #4",
    date: "Oct 09, 2024",
    score: "88/100",
    status: "Passed",
    statusType: "passed",
  },
  {
    icon: "history_edu",
    subject: "Victorian Lit",
    type: "Essay Submission",
    date: "Sep 28, 2024",
    score: "76/100",
    status: "Average",
    statusType: "average",
  },
];

const footerLinks = [
  "Privacy Policy",
  "Terms of Service",
  "Campus Safety",
  "Contact Support",
];

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

function preventLink(event) {
  event.preventDefault();
}

export default function AnalyticsPerformance() {
  useEffect(() => {
    document.title = "EduPremium LMS - Analytics & Performance";
  }, []);

  return (
    <div className="analytics-page">
      <TopNav />

      <div className="analytics-shell">
        <SideNav />

        <main className="analytics-main">
          <PageHeader />

          <section className="top-grid">
            <AcademicProgressCard />
            <AttendanceGauge />
          </section>

          <section className="middle-grid">
            <SubjectPerformanceCard />
            <InsightsCard />
          </section>

          <ExamResultsTable />
        </main>
      </div>

      <AnalyticsFooter />
    </div>
  );
}

function TopNav() {
  return (
    <header className="top-nav">
      <div className="top-nav-inner">
        <div className="top-nav-left">
          <span className="brand">EduPremium LMS</span>

          <nav className="desktop-nav">
            <a href="#" onClick={preventLink}>
              Home
            </a>
            <a href="#" onClick={preventLink} className="active">
              Analytics
            </a>
            <a href="#" onClick={preventLink}>
              Resources
            </a>
          </nav>
        </div>

        <div className="top-nav-right">
          <div className="top-search">
            <Icon name="search" />
            <input type="text" placeholder="Search analytics..." />
          </div>

          <div className="top-icon-actions">
            <button type="button" aria-label="Notifications">
              <Icon name="notifications" />
            </button>
            <button type="button" aria-label="Apps">
              <Icon name="apps" />
            </button>
            <button type="button" aria-label="Settings">
              <Icon name="settings" />
            </button>
          </div>

          <img className="profile-avatar" src={profileAvatar} alt="User Profile Avatar" />
        </div>
      </div>
    </header>
  );
}

function SideNav() {
  return (
    <aside className="side-nav">
      <div className="side-brand">
        <div className="side-logo">
          <Icon name="school" filled />
        </div>

        <div>
          <h2>St. Edwards Academy</h2>
          <p>Academic Portal</p>
        </div>
      </div>

      <nav className="side-links">
        {sideNavItems.map((item) => (
          <a
            href="#"
            onClick={preventLink}
            key={item.label}
            className={item.active ? "side-link active" : "side-link"}
          >
            <Icon name={item.icon} filled={item.filled} />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <button type="button" className="create-button">
        <Icon name="add" />
        Create New
      </button>

      <div className="side-bottom">
        <a href="#" onClick={preventLink} className="side-link support-link">
          <Icon name="help" />
          <span>Help Center</span>
        </a>

        <a href="#" onClick={preventLink} className="side-link support-link">
          <Icon name="logout" />
          <span>Log Out</span>
        </a>
      </div>
    </aside>
  );
}

function PageHeader() {
  return (
    <header className="page-header">
      <div>
        <h1>Performance Analytics</h1>
        <p>Visualizing your academic journey and semester growth.</p>
      </div>

      <div className="page-actions">
        <select defaultValue="Fall Semester 2024">
          <option>Fall Semester 2024</option>
          <option>Spring Semester 2024</option>
        </select>

        <button type="button" className="export-button">
          <Icon name="download" />
          Export Report
        </button>
      </div>
    </header>
  );
}

function AcademicProgressCard() {
  return (
    <article className="panel academic-progress-card">
      <div className="panel-header-row">
        <h3>Academic Progress Over Time</h3>

        <div className="chart-legend">
          <span>
            <i className="legend-dot secondary" />
            This Year
          </span>

          <span>
            <i className="legend-dot average" />
            Class Avg.
          </span>
        </div>
      </div>

      <div className="line-chart-wrap">
        <svg className="line-chart" viewBox="0 0 800 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#0061a5" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0061a5" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            className="chart-gradient-line"
            d="M0,150 L133,130 L266,160 L400,100 L533,110 L666,70 L800,80"
            fill="none"
            stroke="#0061a5"
            strokeLinecap="round"
            strokeWidth="4"
          />

          <path
            d="M0,150 L133,130 L266,160 L400,100 L533,110 L666,70 L800,80 V200 H0 Z"
            fill="url(#lineGrad)"
          />

          <path
            d="M0,160 L133,155 L266,158 L400,150 L533,145 L666,148 L800,140"
            fill="none"
            stroke="#c4c6cf"
            strokeDasharray="8,4"
            strokeWidth="2"
          />
        </svg>

        <div className="chart-months">
          <span>Sep</span>
          <span>Oct</span>
          <span>Nov</span>
          <span>Dec</span>
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
        </div>
      </div>
    </article>
  );
}

function AttendanceGauge() {
  return (
    <article className="panel attendance-card">
      <h3>Attendance</h3>

      <div className="gauge">
        <svg className="gauge-svg" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="transparent"
            stroke="#eff4ff"
            strokeWidth="12"
          />
          <circle
            className="attendance-gauge"
            cx="80"
            cy="80"
            r="70"
            fill="transparent"
            stroke="#0061a5"
            strokeWidth="12"
          />
        </svg>

        <div className="gauge-center">
          <strong>94%</strong>
          <span>Present</span>
        </div>
      </div>

      <p>Only 2 missed sessions this semester.</p>
    </article>
  );
}

function SubjectPerformanceCard() {
  return (
    <article className="panel subject-performance-card">
      <h3>Subject-wise Performance</h3>

      <div className="performance-list">
        {subjectPerformance.map((item) => (
          <div className="performance-item" key={item.subject}>
            <div className="performance-label-row">
              <span>{item.subject}</span>
              <span>{item.score}/100</span>
            </div>

            <div className="progress-track">
              <div
                className={`progress-fill ${item.color}`}
                style={{ width: `${item.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function InsightsCard() {
  return (
    <article className="panel insights-card">
      <h3>Insights & Growth</h3>

      <div className="insight-box strength">
        <div className="insight-title">
          <Icon name="trending_up" filled />
          <span>Key Strength</span>
        </div>
        <p>Exceptional logical reasoning in Computer Science labs.</p>
      </div>

      <div className="insight-box improvement">
        <div className="insight-title">
          <Icon name="error" filled />
          <span>Area for Improvement</span>
        </div>
        <p>Vocabulary nuance in English Literature essays.</p>
      </div>

      <div className="mentor-note">
        <img src={mentorAvatar} alt="Mentor Profile" />

        <div>
          <p>Mentor Note</p>
          <span>"Great progress in Calculus! Focus on narrative structure in Lit."</span>
        </div>
      </div>
    </article>
  );
}

function ExamResultsTable() {
  return (
    <section className="panel exam-card">
      <div className="exam-header">
        <h3>Recent Exam Results</h3>

        <button type="button">View History</button>
      </div>

      <div className="table-scroll">
        <table className="exam-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Exam Type</th>
              <th>Date</th>
              <th>Score</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {examResults.map((exam) => (
              <tr key={`${exam.subject}-${exam.type}`}>
                <td>
                  <div className="subject-cell">
                    <div className="subject-icon">
                      <Icon name={exam.icon} />
                    </div>
                    <span>{exam.subject}</span>
                  </div>
                </td>

                <td>{exam.type}</td>
                <td>{exam.date}</td>
                <td className="score-cell">{exam.score}</td>

                <td>
                  <span className={`status-pill ${exam.statusType}`}>
                    {exam.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function AnalyticsFooter() {
  return (
    <footer className="analytics-footer">
      <div className="analytics-footer-inner">
        <div>
          <span>EduPremium</span>
          <p>© 2024 EduPremium Global LMS. All rights reserved.</p>
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