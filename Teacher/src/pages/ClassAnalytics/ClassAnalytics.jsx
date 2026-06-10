import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./ClassAnalytics.css";

const teacherAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDvd6xNY1ev1UrXsP4tTemqprbOnvSusSTOI0w3k01O_-3WsuVo70TSt1rS6oQ8FZRgzdH72SwZZr7xlgk3T_Z28RnDzG-DmC9KqF0dOfdyukcVEvDHtE9u8rNPevPTOV3R7Tt2QBliaVncj_8l9tK-DIep9DQDkRnwUc5boombMFFJUnJWtYm7nPj6hB59HvJwn360ZxNl5ob2hM_KOS1F4kutLylg3mChXAZZ_e4MCFexHYIPOsvX-qwoY5F9VdIfYdm6g-u5xUQ";

const navItems = [
  { icon: "dashboard", label: "Dashboard" },
  { icon: "assessment", label: "Results", active: true },
  { icon: "class", label: "My Classes" },
  { icon: "group", label: "Students" },
  { icon: "book", label: "Subjects" },
  { icon: "assignment", label: "Assignments" },
  { icon: "event_available", label: "Attendance" },
  { icon: "calendar_today", label: "Schedule" },
];

const statCards = [
  {
    label: "Class Average",
    value: "84.2%",
    note: "Overall cohort grade mean",
    badge: "+2.4%",
    badgeType: "positive",
    accent: "secondary",
  },
  {
    label: "Attendance Rate",
    value: "92.5%",
    note: "Daily presence average",
    badge: "-0.8%",
    badgeType: "negative",
    accent: "secondaryLight",
  },
  {
    label: "Submission Rate",
    value: "98.1%",
    note: "Assignment turn-in ratio",
    badge: "+5.1%",
    badgeType: "positive",
    accent: "primaryContainer",
  },
  {
    label: "Pending Grading",
    value: "14",
    note: "Papers awaiting feedback",
    badge: "Priority",
    badgeType: "warning",
    accent: "outline",
  },
];

const topPerformers = [
  {
    name: "Alexander Chen",
    gpa: "GPA: 4.0",
    score: "98%",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALXCg4_hfd6WZOCb5P8fliyookeTN-PxkjxDBYnBYDmvUULnNLZlcZBIhsZ7S-rbXQ89Ww2WmkZVxJ3Nyru4-SEszcSPFkVoOpeLAA4_eDJtpb81XM0CFma9zjKPcFZzf2JxUdPhVGh_NYaXWZJ-hjwaiscULb_Fcw7Z3RJajPzHa-WwkxLg29Dt0V0YDEo59hLlkJ7Buo59k2R0ZhM3UMQjulZoMT_CPg4oBfy5NHsUANQ0OQe0SQno5qVttDt5Sq1YOzdpsrBtk",
  },
  {
    name: "Elena Rodriguez",
    gpa: "GPA: 3.9",
    score: "96%",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACxRLZI2Enh1zDO9hLwXUIj7AXjy9auFCpF0OS1WU-Fx09g7ZqbEY4IodRVTJdvIRbRJRBhtr8MCRCLrx4BLVZrD7WKsVP3s75kLj5R9cJoqEGOZzzn3XllljKn7MePZgJvZaBj0TuiwsBmR3NWKLWH4mkk2fnm4JwYrKQNU9ruNVhMOb1JHnnSMrcn_b1BX1xU_A2WlnMCKTi9JgiigF3oWik0oTUivNWkoFTKo2Duif1jwlCIt5wAtfASRsAqXQweBsewZuXzXE",
  },
  {
    name: "Marcus Holloway",
    gpa: "GPA: 3.9",
    score: "95%",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCchNQcvdjMvaN_cKz_MkNv_V1jMNrhrBFBUEuZvx7o-TLS4qCnsG828FeRs4KuM99jYdIPNiErPGYXal2E-XEC_f2d5qQO6f2x9qD-i8Ey-4f66JsHMaxSsyZkouxEqF5-KKh9jQG0qoqgesUkJwVXFFksUpYf-XXbszPZGBpGZhzHoGknqaFSChmP8QFsMPGtuoJVP0p7km6wHXaJfU0qum125SsIF6T6Fog-iwCBPsUlllis3sPaFt2KGEcKeh-Gnd5iY_6J9oA",
  },
];

const riskStudents = [
  {
    name: "Liam Smith",
    issue: "Attendance < 65%",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA9Qw3oiJotGE7OXNFip9dF3fFu3aKtxaDiEHJat9O7GU5DqouA7YOtJmnDMyPN8dx8l0kZg2Ik5Y-ATCCS39nLWHhM6Z-6aLQe1mjf76iLL561UEMwREiLuAA9PC3GkoKUsPDrQVXs3-KHYt7xR0josqX2i_OIGtL9-D3qO-0KHOB-jDmMHIEJXV88e6rlLawQnd-be31wAS26892uUVgZp_xaK-PXlxbsa1bQF8W43_weNhVvN2R-HOOgA3BYySYwVpc6CdItAcI",
  },
  {
    name: "Sarah Wood",
    issue: "Missing Project",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-ccxE-1vRztOR35TApk9ZB5vx0t2EKuWhN6D5HQkDPgO4wcbeI08LBdO-7GeQNXuDZhdEmwcemAjH2vdSqgs4DD_B_4p8sF2PeZkmktgdrkzQHrhXYDlEu-uCZ27yYVqPmj4Bxi9GsfypOr63ylTFyIoH-JPssVSmtv-Y8NguG7EujNQvIBBXcxNnV82gqwhWzX7v_Oug_uYZtxG4sg11PfdcahRdGQVadX8PSzpqDbwXLpLhvtR_UnE96XduwsF1GJZs95CWlVE",
  },
];

const subjectPassRates = [
  { label: "Theoretical Physics", value: 94, color: "primary" },
  { label: "Advanced Calculus", value: 82, color: "secondary" },
  { label: "Quantum Mechanics", value: 76, color: "primaryContainer" },
  { label: "Thermodynamics", value: 89, color: "secondaryContainer" },
];

const auditRows = [
  {
    initials: "AC",
    name: "Alexander Chen",
    id: "#2024-0012",
    midterm: "98%",
    attendance: "100%",
    status: "Excellent",
    statusType: "excellent",
    avatarType: "secondaryFixed",
  },
  {
    initials: "LS",
    name: "Liam Smith",
    id: "#2024-0089",
    midterm: "54%",
    attendance: "62%",
    status: "Critical",
    statusType: "critical",
    avatarType: "primaryFixed",
    danger: true,
  },
  {
    initials: "SW",
    name: "Sarah Wood",
    id: "#2024-0105",
    midterm: "72%",
    attendance: "88%",
    status: "Borderline",
    statusType: "borderline",
    avatarType: "tertiaryFixed",
  },
];

const footerLinks = [
  "Privacy Policy",
  "Terms of Service",
  "Help Center",
  "School Website",
];

function Icon({ name, filled = false, className = "" }) {
  return (
    <span className={`material-symbols-outlined ${filled ? "filled" : ""} ${className}`}>
      {name}
    </span>
  );
}

function preventLink(event) {
  event.preventDefault();
}

export default function ClassAnalytics() {
  useEffect(() => {
    document.title = "Class Analytics | EduPortal LMS";
  }, []);

  return (
    <div className="class-analytics-page">
      <SideNav />
      <TopNav />

      <main className="analytics-main">
        <PageHeader />

        <section className="bento-grid">
          {statCards.map((card) => (
            <StatCard key={card.label} card={card} />
          ))}

          <PerformanceDistributionChart />

          <div className="side-stack">
            <TopPerformers />
            <StudentsAtRisk />
          </div>

          <SubjectPassRates />
          <AttendanceTrendChart />
          <StudentAuditTable />
        </section>
      </main>

      <AnalyticsFooter />
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

      <nav className="side-links">
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

function TopNav() {
  return (
    <header className="top-nav">
      <div className="top-left">
        <Icon name="menu" className="mobile-menu" />

        <div className="top-search">
          <Icon name="search" />
          <input type="text" placeholder="Search analytics..." />
        </div>
      </div>

      <div className="top-actions">
        <div className="icon-actions">
          <button type="button" aria-label="Notifications">
            <Icon name="notifications" />
          </button>
          <button type="button" aria-label="Help">
            <Icon name="help" />
          </button>
        </div>

        <div className="top-divider" />

        <button type="button" className="profile-button">
          <div>
            <p>Dr. Sarah Jenkins</p>
            <span>Senior Faculty</span>
          </div>
          <img src={teacherAvatar} alt="Teacher Profile" />
        </button>
      </div>
    </header>
  );
}

function PageHeader() {
  return (
    <header className="page-header">
      <div>
        <h1>Class Performance Analytics</h1>
        <p>Semester 2, 2024 • Advanced Mathematics & Physics Section B</p>
      </div>

      <div className="page-actions">
        <button type="button" className="export-button">
          <Icon name="download" />
          Export PDF
        </button>

        <button type="button" className="semester-button">
          <Icon name="calendar_month" />
          Past Semester
        </button>
      </div>
    </header>
  );
}

function StatCard({ card }) {
  return (
    <article className="stat-card">
      <span className={`stat-accent ${card.accent}`} />

      <div className="stat-top">
        <span>{card.label}</span>
        <strong className={card.badgeType}>{card.badge}</strong>
      </div>

      <h2>{card.value}</h2>
      <p>{card.note}</p>
    </article>
  );
}

function PerformanceDistributionChart() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const chart = new Chart(canvasRef.current, {
      type: "bar",
      data: {
        labels: ["90-100%", "80-89%", "70-79%", "60-69%", "50-59%", "<50%"],
        datasets: [
          {
            label: "Students",
            data: [12, 19, 14, 8, 4, 2],
            backgroundColor: [
              "#1a365d",
              "#66affe",
              "#66affe",
              "#adc7f7",
              "#ccdbf4",
              "#ba1a1a",
            ],
            borderRadius: 8,
            borderSkipped: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#223144",
            titleFont: { size: 14, family: "Inter" },
            bodyFont: { size: 13, family: "Inter" },
            padding: 12,
            cornerRadius: 8,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: "#E2E8F0" },
            ticks: { font: { family: "Inter" } },
          },
          x: {
            grid: { display: false },
            ticks: { font: { family: "Inter", weight: "600" } },
          },
        },
      },
    });

    return () => chart.destroy();
  }, []);

  return (
    <section className="panel performance-chart-panel">
      <div className="panel-header">
        <div>
          <h3>Performance Distribution</h3>
          <p>Grade bracket breakdown across all students</p>
        </div>

        <select defaultValue="Mid-Term Exams">
          <option>Mid-Term Exams</option>
          <option>Weekly Quizzes</option>
          <option>Final Project</option>
        </select>
      </div>

      <div className="chart-wrapper">
        <canvas ref={canvasRef} />
      </div>
    </section>
  );
}

function TopPerformers() {
  return (
    <section className="panel people-card performers-card">
      <h3>
        <Icon name="stars" filled />
        Top Performers
      </h3>

      <div className="people-list">
        {topPerformers.map((student) => (
          <PersonRow key={student.name} person={student} type="performer" />
        ))}
      </div>
    </section>
  );
}

function StudentsAtRisk() {
  return (
    <section className="panel people-card risk-card">
      <h3>
        <Icon name="report_problem" filled />
        Students at Risk
      </h3>

      <div className="people-list">
        {riskStudents.map((student) => (
          <RiskRow key={student.name} student={student} />
        ))}
      </div>
    </section>
  );
}

function PersonRow({ person }) {
  return (
    <div className="person-row">
      <div className="person-info">
        <img src={person.image} alt={person.name} />
        <div>
          <p>{person.name}</p>
          <span>{person.gpa}</span>
        </div>
      </div>

      <strong>{person.score}</strong>
    </div>
  );
}

function RiskRow({ student }) {
  return (
    <div className="person-row risk-row">
      <div className="person-info">
        <img src={student.image} alt={student.name} />
        <div>
          <p>{student.name}</p>
          <span>{student.issue}</span>
        </div>
      </div>

      <button type="button">Intervene</button>
    </div>
  );
}

function SubjectPassRates() {
  return (
    <section className="panel subject-pass-panel">
      <h3>Subject Pass Rates</h3>

      <div className="pass-rate-list">
        {subjectPassRates.map((item) => (
          <div className="pass-rate-row" key={item.label}>
            <div>
              <span>{item.label}</span>
              <strong>{item.value}%</strong>
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
    </section>
  );
}

function AttendanceTrendChart() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const chart = new Chart(canvasRef.current, {
      type: "line",
      data: {
        labels: [
          "Week 1",
          "Week 2",
          "Week 3",
          "Week 4",
          "Week 5",
          "Week 6",
          "Week 7",
          "Week 8",
        ],
        datasets: [
          {
            label: "Attendance %",
            data: [96, 94, 98, 92, 89, 91, 93, 95],
            borderColor: "#0061a5",
            backgroundColor: "rgba(0, 97, 165, 0.1)",
            fill: true,
            tension: 0.4,
            pointRadius: 4,
            pointBackgroundColor: "#0061a5",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: {
            min: 80,
            max: 100,
            grid: { color: "#E2E8F0" },
            ticks: { font: { family: "Inter" } },
          },
          x: {
            grid: { display: false },
            ticks: { font: { family: "Inter" } },
          },
        },
      },
    });

    return () => chart.destroy();
  }, []);

  return (
    <section className="panel attendance-chart-panel">
      <h3>Attendance Trend (Weekly)</h3>

      <div className="chart-wrapper small">
        <canvas ref={canvasRef} />
      </div>
    </section>
  );
}

function StudentAuditTable() {
  return (
    <section className="panel audit-panel">
      <div className="audit-header">
        <h3>Student Performance Audit</h3>

        <div className="audit-actions">
          <button type="button">
            <Icon name="filter_list" />
            Filter
          </button>

          <button type="button">
            <Icon name="sort" />
            Sort by Grade
          </button>
        </div>
      </div>

      <div className="table-scroll">
        <table className="audit-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Student ID</th>
              <th>Mid-Term</th>
              <th>Attendance</th>
              <th>Status</th>
              <th className="align-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {auditRows.map((row) => (
              <AuditRow key={row.id} row={row} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function AuditRow({ row }) {
  return (
    <tr>
      <td>
        <div className="audit-student">
          <div className={`initials ${row.avatarType}`}>{row.initials}</div>
          <span>{row.name}</span>
        </div>
      </td>

      <td>{row.id}</td>
      <td className={row.danger ? "danger-score" : "score"}>{row.midterm}</td>
      <td>{row.attendance}</td>

      <td>
        <span className={`status-pill ${row.statusType}`}>{row.status}</span>
      </td>

      <td className="align-right">
        <button type="button" aria-label="More options">
          <Icon name="more_vert" />
        </button>
      </td>
    </tr>
  );
}

function AnalyticsFooter() {
  return (
    <footer className="analytics-footer">
      <p>© 2024 Academic Excellence System. All rights reserved.</p>

      <nav>
        {footerLinks.map((link) => (
          <a key={link} href="#" onClick={preventLink}>
            {link}
          </a>
        ))}
      </nav>
    </footer>
  );
}