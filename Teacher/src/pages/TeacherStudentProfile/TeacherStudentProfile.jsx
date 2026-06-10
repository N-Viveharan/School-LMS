import { useEffect } from "react";
import "./TeacherStudentProfile.css";

const teacherAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBW1_619iJi6hNndB4cNvgFAood2cFhBoKFnYtLBO69joPMIqvd81fDpRxYcrzd0h81d1vH3j-aj8qFLnfEd5s9qQ0wIRr91OPJjPCH9cxIH6yo9V00Bj-Q-_56ZEo1E-hQf11MzMxE-uW2JuFSUgjbdHuh95JkzkLhJ7bWrfrX6UpFRkO1w3lVevkTGED8eBzAx-kUg-Ns4EKrCHm7uoQkqrC2kr4safhNc3Tli8fHpisdyn0vewT36Y_4b_AFcKtI5ojkW6b0BBo";

const studentAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuACYaH-bSOzTWIj40SME6pyYv1YWMSiLwaVzxUnde21INffrgVCZFKt-bcaDdf_n4jiY8hzXfhqOEFAxEOWByswWju75Pmulmxwihj44Bw0Ar9Azvi3LJohCN0mwj93pVAohV8LPkmzC_eXDah6lT5eP_JRY2MAWa960NmW95yneWK5hat8RQkgrDrCod3DTnx9USoaNN0Y_kbHt3uqTPzEBtqOCNaznFx-0wiv7XJc57IHySw8EM23uU0rix-Jh6tFZVF0OM2kUtU";

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

const performanceBars = [
  { month: "Sept", value: "3.2", height: 128, opacity: "20" },
  { month: "Oct", value: "3.4", height: 160, opacity: "30" },
  { month: "Nov", value: "3.6", height: 192, opacity: "40" },
  { month: "Dec", value: "3.5", height: 176, opacity: "50" },
  { month: "Jan", value: "3.82", height: 224, active: true },
];

const teacherComments = [
  {
    subject: "Mathematics",
    date: "Jan 12",
    comment:
      "Excellent participation during the advanced calculus workshop. Shows strong analytical skills.",
  },
  {
    subject: "History",
    date: "Jan 08",
    comment: "Essay on the Industrial Revolution was remarkably well-researched.",
  },
];

const submissions = [
  {
    icon: "description",
    title: "Calculus Midterm Review",
    subject: "Advanced Math",
    date: "Jan 15, 2024",
    score: "94/100",
    grade: "A",
    status: "graded",
    action: "View Paper",
  },
  {
    icon: "science",
    title: "Lab Report: Thermodynamics",
    subject: "Physics II",
    date: "Jan 12, 2024",
    score: "88/100",
    grade: "B+",
    status: "graded",
    action: "View Paper",
  },
  {
    icon: "edit_note",
    title: "Essay: Cold War Impacts",
    subject: "Modern History",
    date: "Jan 07, 2024",
    score: "98/100",
    grade: "A+",
    status: "graded",
    action: "View Paper",
  },
  {
    icon: "terminal",
    title: "Algorithm Logic Test",
    subject: "Computer Science",
    date: "--",
    score: "PENDING",
    status: "pending",
    action: "Grade Now",
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

export default function TeacherStudentProfile() {
  useEffect(() => {
    document.title = "Student Profile - Alex Thompson | EduPortal";
  }, []);

  return (
    <div className="student-profile-page">
      <SideNav />
      <TopNav />

      <main className="profile-main">
        <div className="profile-container">
          <PageHeader />

          <div className="profile-grid">
            <aside className="left-column">
              <StudentIdentityCard />
              <PersonalDetailsCard />
            </aside>

            <section className="right-column">
              <PerformanceTrendCard />

              <div className="mini-grid">
                <AttendanceCard />
                <TeacherCommentsCard />
              </div>

              <SubmissionsTable />
            </section>
          </div>
        </div>
      </main>

      <ProfileFooter />
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
            key={item.label}
            href="#"
            onClick={preventLink}
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
      <div className="top-left">
        <button className="menu-button" type="button" aria-label="Open menu">
          <Icon name="menu" />
        </button>

        <div className="search-box">
          <Icon name="search" className="search-icon" />
          <input type="text" placeholder="Search student by name or ID..." />
        </div>
      </div>

      <div className="top-actions">
        <button type="button" className="top-icon-button" aria-label="Notifications">
          <Icon name="notifications" />
          <span className="notification-dot" />
        </button>

        <button type="button" className="top-icon-button" aria-label="Help">
          <Icon name="help" />
        </button>

        <div className="top-divider" />

        <button type="button" className="teacher-profile">
          <div>
            <p>Dr. Eleanor Rigby</p>
            <span>Science Faculty</span>
          </div>

          <img src={teacherAvatar} alt="Teacher profile" />
        </button>
      </div>
    </header>
  );
}

function PageHeader() {
  return (
    <section className="page-header">
      <div>
        <nav className="breadcrumbs">
          <a href="#" onClick={preventLink}>
            Dashboard
          </a>
          <Icon name="chevron_right" />
          <a href="#" onClick={preventLink}>
            Students
          </a>
          <Icon name="chevron_right" />
          <strong>Alex Thompson</strong>
        </nav>

        <h1>Student Portfolio</h1>
      </div>

      <div className="page-actions">
        <button type="button" className="outline-button">
          <Icon name="mail" />
          Message Student
        </button>

        <button type="button" className="primary-button">
          <Icon name="download" />
          Export Report
        </button>
      </div>
    </section>
  );
}

function StudentIdentityCard() {
  return (
    <section className="identity-card">
      <div className="identity-banner" />

      <div className="student-avatar-wrap">
        <img src={studentAvatar} alt="Alex Thompson" />
        <span title="Currently Online" />
      </div>

      <h2>Alex Thompson</h2>

      <p className="student-meta">Grade 11 • Section B • ID: #EDU-2024-042</p>

      <div className="student-tags">
        <span>Honors Student</span>
        <span>Chess Club</span>
      </div>

      <div className="identity-stats">
        <div>
          <span>GPA</span>
          <strong>3.82 / 4.0</strong>
        </div>

        <div>
          <span>Rank</span>
          <strong>4th of 142</strong>
        </div>

        <div>
          <span>Status</span>
          <em>Good Standing</em>
        </div>
      </div>
    </section>
  );
}

function PersonalDetailsCard() {
  return (
    <section className="details-card">
      <h3>
        <Icon name="person" />
        Personal Details
      </h3>

      <div className="details-list">
        <DetailItem label="Email Address" value="alex.thompson@school.edu" />
        <DetailItem label="Phone" value="+1 (555) 234-5678" />

        <div>
          <p>Emergency Contact</p>
          <strong>Sarah Thompson (Mother)</strong>
          <a href="tel:+15559876543">+1 (555) 987-6543</a>
        </div>

        <DetailItem label="Address" value="452 Oakwood Ave, Highcrest Hills" />
      </div>
    </section>
  );
}

function DetailItem({ label, value }) {
  return (
    <div>
      <p>{label}</p>
      <strong>{value}</strong>
    </div>
  );
}

function PerformanceTrendCard() {
  return (
    <section className="performance-card">
      <div className="card-header">
        <div>
          <h3>Academic Performance Trend</h3>
          <p>Monthly GPA progression - Academic Year 2023/24</p>
        </div>

        <select defaultValue="All Subjects">
          <option>All Subjects</option>
          <option>Mathematics</option>
          <option>Physics</option>
        </select>
      </div>

      <div className="chart-area">
        <div className="y-axis">
          <span>4.0</span>
          <span>3.0</span>
          <span>2.0</span>
          <span>1.0</span>
          <span>0</span>
        </div>

        {performanceBars.map((bar) => (
          <div className="chart-item" key={bar.month}>
            <div
              className={`chart-bar ${bar.active ? "active" : `opacity-${bar.opacity}`}`}
              style={{ height: `${bar.height}px` }}
            >
              <span>{bar.value}</span>
            </div>

            <p className={bar.active ? "active-month" : ""}>{bar.month}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AttendanceCard() {
  return (
    <section className="attendance-card">
      <div className="mini-card-header">
        <h3>Attendance</h3>
        <strong>96.4% Total</strong>
      </div>

      <div className="attendance-content">
        <div className="attendance-ring">
          <svg viewBox="0 0 36 36">
            <path
              className="ring-bg"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="transparent"
              strokeWidth="3"
            />
            <path
              className="ring-progress"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="transparent"
              strokeDasharray="96, 100"
              strokeLinecap="round"
              strokeWidth="3"
            />
          </svg>

          <div>
            <strong>108/112</strong>
            <span>Days</span>
          </div>
        </div>

        <div className="attendance-stats">
          <RowStat label="Present" value="108" />
          <RowStat label="Absent" value="2" variant="error" />
          <RowStat label="Late" value="2" variant="warning" />
        </div>
      </div>

      <button type="button">View Detailed Log</button>
    </section>
  );
}

function RowStat({ label, value, variant = "primary" }) {
  return (
    <div>
      <span>{label}</span>
      <strong className={variant}>{value}</strong>
    </div>
  );
}

function TeacherCommentsCard() {
  return (
    <section className="comments-card">
      <h3>Teacher Comments</h3>

      <div className="comments-scroll custom-scrollbar">
        {teacherComments.map((item) => (
          <article className="comment-item" key={`${item.subject}-${item.date}`}>
            <div>
              <strong>{item.subject}</strong>
              <span>{item.date}</span>
            </div>
            <p>"{item.comment}"</p>
          </article>
        ))}
      </div>

      <div className="quick-note">
        <input type="text" placeholder="Add a quick note..." />
        <button type="button" aria-label="Send note">
          <Icon name="send" />
        </button>
      </div>
    </section>
  );
}

function SubmissionsTable() {
  return (
    <section className="submissions-card">
      <div className="submissions-header">
        <h3>Recent Submissions & Grades</h3>

        <div>
          <button type="button" aria-label="Filter">
            <Icon name="filter_list" />
          </button>
          <button type="button" aria-label="More options">
            <Icon name="more_vert" />
          </button>
        </div>
      </div>

      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Assignment Name</th>
              <th>Subject</th>
              <th>Date Submitted</th>
              <th>Score</th>
              <th className="align-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {submissions.map((submission) => (
              <SubmissionRow key={submission.title} submission={submission} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
        <button type="button">View All 24 Submissions</button>
      </div>
    </section>
  );
}

function SubmissionRow({ submission }) {
  const isPending = submission.status === "pending";

  return (
    <tr className={isPending ? "pending-row" : ""}>
      <td>
        <div className="assignment-cell">
          <Icon name={submission.icon} />
          <span>{submission.title}</span>
        </div>
      </td>

      <td>{submission.subject}</td>
      <td>{submission.date}</td>

      <td>
        {isPending ? (
          <span className="pending-pill">Pending</span>
        ) : (
          <div className="score-cell">
            <strong>{submission.score}</strong>
            <span>{submission.grade}</span>
          </div>
        )}
      </td>

      <td className="align-right">
        <button type="button" disabled={isPending}>
          {submission.action}
        </button>
      </td>
    </tr>
  );
}

function ProfileFooter() {
  return (
    <footer className="profile-footer">
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