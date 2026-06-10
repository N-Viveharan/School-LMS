import { useEffect, useState } from "react";
import "./AcademicSchedule.css";

const avatarImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC3mD6jF7UABn4S2sJyWQ90QkljCw2A-DS4i2fujtVtZ9eIA3wuYOK3q41NNFPdZRiVAVgy2duQSAd6FyaL9w1C5G5Q0CBynFVBJf85q07qBfAClEVaIyt6YgeuEf6-1kCrolaLVm9wHcMndp5ANtjszDnjUSY53egpN3hMZQyfoxc_n0mYi7LHQmrXmipW3hqoas0B5TrZIymvY4ZhBKZaQvNxPlXkxFoXaoCAdbW3OW5xedjoCAUWugBY0sJ3zwMxI57z1rGRdHU";

const topLinks = [
  { label: "Dashboard" },
  { label: "Courses" },
  { label: "Schedule", active: true },
];

const sideLinks = [
  { icon: "dashboard", label: "Dashboard" },
  { icon: "school", label: "Courses" },
  { icon: "assignment", label: "Assignments" },
  { icon: "calendar_month", label: "Schedule", active: true },
  { icon: "analytics", label: "Analytics" },
];

const days = [
  { day: "MON", date: "12 Oct" },
  { day: "TUE", date: "13 Oct", active: true },
  { day: "WED", date: "14 Oct" },
  { day: "THU", date: "15 Oct" },
  { day: "FRI", date: "16 Oct" },
];

const scheduleRows = [
  {
    time: "08:00 AM",
    cells: [
      { title: "Calculus II", meta: "Room 102 • Dr. Aris" },
      { highlight: true },
      { title: "Calculus II", meta: "Room 102 • Dr. Aris" },
      null,
      { title: "Calculus II", meta: "Lab 3 • Dr. Aris" },
    ],
  },
  {
    time: "10:00 AM",
    cells: [
      null,
      {
        title: "Physics III",
        meta: "Room 402B • Prof. Elena",
        current: true,
        highlight: true,
      },
      { title: "World History", meta: "Auditorium B • Dr. Smith" },
      { title: "Physics III", meta: "Room 402B • Prof. Elena" },
      null,
    ],
  },
  {
    time: "12:00 PM",
    lunch: true,
  },
  {
    time: "02:00 PM",
    cells: [
      { title: "Comp Science", meta: "Lab 1 • Prof. Gates" },
      { highlight: true },
      null,
      { title: "Comp Science", meta: "Lab 1 • Prof. Gates" },
      { title: "Comp Science", meta: "Lab 1 • Prof. Gates" },
    ],
  },
];

const exams = [
  {
    month: "Nov",
    day: "14",
    title: "Mid-Term: Applied Calculus",
    details: "Duration: 180 Minutes • Main Hall • 09:00 AM",
    critical: true,
    danger: true,
    tags: ["Seating: Row A-12", "Paper Code: MTH-202"],
  },
  {
    month: "Nov",
    day: "16",
    title: "Final Project: Quantum Systems",
    details: "Submission Deadline • Online Portal • 11:59 PM",
    muted: true,
    tags: ["Weight: 40%"],
  },
  {
    month: "Nov",
    day: "20",
    title: "Theory: World History II",
    details: "Duration: 120 Minutes • Hall C • 02:00 PM",
    muted: true,
    tags: [],
  },
];

const preparationProgress = [
  { subject: "Calculus II", value: 85, type: "secondary" },
  { subject: "Physics III", value: 40, type: "error" },
];

const footerLinks = ["Privacy Policy", "Terms of Service", "Contact Support"];

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

export default function AcademicSchedule() {
  const [activeView, setActiveView] = useState("weekly");

  useEffect(() => {
    document.title = "Student Schedule | EduPremium LMS";
  }, []);

  return (
    <div className="academic-schedule-page">
      <TopNav />

      <div className="schedule-shell">
        <SideNav />

        <main className="schedule-main">
          <ScheduleHeader activeView={activeView} setActiveView={setActiveView} />

          {activeView === "weekly" ? <WeeklyView /> : <ExamView />}
        </main>
      </div>

      <ScheduleFooter />
    </div>
  );
}

function TopNav() {
  return (
    <header className="top-navbar">
      <div className="top-navbar-inner">
        <div className="top-navbar-left">
          <span className="brand-name">EduPremium LMS</span>

          <nav className="top-links">
            {topLinks.map((link) => (
              <a
                href="#"
                onClick={preventLink}
                key={link.label}
                className={link.active ? "active" : ""}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="top-actions">
          <button type="button" className="notification-button" aria-label="Notifications">
            <Icon name="notifications" />
            <span />
          </button>

          <button type="button" className="top-icon-button" aria-label="Settings">
            <Icon name="settings" />
          </button>

          <img className="profile-avatar" src={avatarImage} alt="User Profile Avatar" />
        </div>
      </div>
    </header>
  );
}

function SideNav() {
  return (
    <aside className="side-navbar">
      <div className="side-brand">
        <h2>St. Edwards Academy</h2>
        <p>Academic Portal</p>
      </div>

      <nav className="side-links">
        {sideLinks.map((link) => (
          <a
            key={link.label}
            href="#"
            onClick={preventLink}
            className={`side-link ${link.active ? "active" : ""}`}
          >
            <Icon name={link.icon} />
            <span>{link.label}</span>
          </a>
        ))}
      </nav>

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

function ScheduleHeader({ activeView, setActiveView }) {
  return (
    <header className="schedule-header">
      <div>
        <h1>Timetable & Schedule</h1>
        <p>Manage your academic routine and exam periods.</p>
      </div>

      <div className="view-toggle">
        <button
          type="button"
          className={activeView === "weekly" ? "active" : ""}
          onClick={() => setActiveView("weekly")}
        >
          Weekly Classes
        </button>

        <button
          type="button"
          className={activeView === "exam" ? "active" : ""}
          onClick={() => setActiveView("exam")}
        >
          Exam Schedule
        </button>
      </div>
    </header>
  );
}

function WeeklyView() {
  return (
    <section className="weekly-view fade-in">
      <ActiveSession />
      <Timetable />
    </section>
  );
}

function ActiveSession() {
  return (
    <section className="active-session-card">
      <div className="active-session-info">
        <div className="live-icon">
          <Icon name="sensors" filled />
        </div>

        <div>
          <span className="live-badge">Happening Now</span>
          <h3>Advanced Theoretical Physics</h3>
          <p>Room 402B • Prof. Elena Vance • 10:00 AM - 11:30 AM</p>
        </div>
      </div>

      <button type="button" className="join-class-button">
        <span>Join Online Class</span>
        <Icon name="videocam" />
      </button>
    </section>
  );
}

function Timetable() {
  return (
    <section className="timetable-card">
      <div className="timetable-scroll">
        <div className="timetable-grid">
          <div className="timetable-row timetable-head">
            <div className="empty-cell" />

            {days.map((item) => (
              <div key={item.day} className={`day-cell ${item.active ? "active" : ""}`}>
                {item.day}
                <span>{item.date}</span>
              </div>
            ))}
          </div>

          {scheduleRows.map((row) =>
            row.lunch ? (
              <div className="timetable-row" key={row.time}>
                <TimeCell time={row.time} />
                <div className="lunch-cell">
                  <span>Lunch Break</span>
                </div>
              </div>
            ) : (
              <div className="timetable-row" key={row.time}>
                <TimeCell time={row.time} />

                {row.cells.map((cell, index) => (
                  <div
                    className={`table-cell ${cell?.highlight ? "today-column" : ""}`}
                    key={`${row.time}-${index}`}
                  >
                    {cell?.title && (
                      <ClassBlock
                        title={cell.title}
                        meta={cell.meta}
                        current={cell.current}
                      />
                    )}
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function TimeCell({ time }) {
  return (
    <div className="time-cell">
      <span>{time}</span>
    </div>
  );
}

function ClassBlock({ title, meta, current }) {
  return (
    <article className={`class-block ${current ? "current" : ""}`}>
      <h4>{title}</h4>
      <p>{meta}</p>

      {current && <span className="current-dot" />}
    </article>
  );
}

function ExamView() {
  return (
    <section className="exam-view fade-in">
      <div className="exam-grid">
        <div className="exam-list">
          {exams.map((exam) => (
            <ExamCard exam={exam} key={`${exam.day}-${exam.title}`} />
          ))}
        </div>

        <aside className="exam-aside">
          <PreparationProgress />
          <ExamPolicy />
        </aside>
      </div>
    </section>
  );
}

function ExamCard({ exam }) {
  return (
    <article className={`exam-card ${exam.muted ? "muted" : ""}`}>
      <div className={`exam-date ${exam.danger ? "danger" : ""}`}>
        <span>{exam.month}</span>
        <strong>{exam.day}</strong>
      </div>

      <div className="exam-content">
        <div className="exam-title-row">
          <h3>{exam.title}</h3>

          {exam.critical && (
            <span className="critical-exam">
              <Icon name="priority_high" />
              Critical Exam
            </span>
          )}
        </div>

        <p>{exam.details}</p>

        {exam.tags.length > 0 && (
          <div className="exam-tags">
            {exam.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function PreparationProgress() {
  return (
    <section className="preparation-card">
      <h4>Preparation Progress</h4>

      <div className="preparation-list">
        {preparationProgress.map((item) => (
          <div key={item.subject}>
            <div className="progress-label">
              <span>{item.subject}</span>
              <span>{item.value}%</span>
            </div>

            <div className="progress-track">
              <div
                className={`progress-fill ${item.type}`}
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ExamPolicy() {
  return (
    <section className="policy-card">
      <div className="policy-content">
        <h4>Exam Policy</h4>
        <p>
          Remember to bring your student ID and reach the examination hall 30
          minutes prior.
        </p>

        <a href="#" onClick={preventLink}>
          Download Hall Ticket
        </a>
      </div>

      <Icon name="info" className="policy-icon-bg" />
    </section>
  );
}

function ScheduleFooter() {
  return (
    <footer className="schedule-footer">
      <div className="schedule-footer-inner">
        <span>© 2024 EduPremium Global LMS. All rights reserved.</span>

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