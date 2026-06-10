import { useEffect, useState } from "react";
import "./TeacherAttendanceManagement.css";

const teacherAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBBpr96WaeuI2irfazbVudJe90IRuUZG9LlcjgOMolWMe5uJsoQ4Ga_tjFqFwXlQptQLO7yXPfmJKGMgC9GMB9t84u3fzVeLsetkjj5uoZ35ShbIFD6tbm2h4OWcbS1ZZeYTB-bCnXZaS5ykSnyMUuPh21belSYSLNxL-pzv7gO1Dn20RdZs2Y9Zp1szGGtlmjoC6OmOYR9sB9qSGBab8HVs35zbugLzeBE6IiR-mYUMsC1vIfG6OWFlA0JHjjtJfAsQkrtiom0tok";

const navItems = [
  { icon: "dashboard", label: "Dashboard" },
  { icon: "class", label: "My Classes" },
  { icon: "group", label: "Students" },
  { icon: "book", label: "Subjects" },
  { icon: "assignment", label: "Assignments" },
  { icon: "assessment", label: "Results" },
  { icon: "event_available", label: "Attendance", active: true },
  { icon: "calendar_today", label: "Schedule" },
];

const initialStudents = [
  {
    id: "#STU-9021",
    name: "Alexander Chen",
    role: "Top Performer",
    status: "present",
    remark: "",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCVbRpB3o5nAJn3-UVUQ0ZlXdsnSR51103c0rB052nGFDQ1wO8nSVDaJNHiecKoM7uYkgvYS1YPjd0aVgKHX6NTxEWUH6Zb-llNZPWdlPWIrqAcItIpGB0yBnlrxk7QbdAD_ycymYzO5vPks8w0kqn9xEen_sN1GaFNtcDSsJoUnCmcC6gxi04AimlDxkmf-o7aOy2eciDgWqfRpFoKV6laWlY1Q8oi_33SH3ZPChpu5BBUkAiNsFywJdQh6Xbt0WHnaCOHyDvVWno",
  },
  {
    id: "#STU-9025",
    name: "Beatrix Thorne",
    role: "Class Representative",
    status: "present",
    remark: "",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGU7pNtg_d1JgfRUGysAABcAwxlXgzuJhazOovP8RuoU4U9wgyyV03BBSwbP4nr4iZzTbOTRpoJfjJgL7KPLbTmWYvR_Fv_C2zT79ERxeeCew63thLE24Hk4Gup72xNyerpG2I2buGe0wDsK9_08BVBt0hDzMPnzPU3c9ja_-svN4BBqhSQYoFaWrZmNlrbfGp2Q3gU8BfV0xe1pEBLcfKQ-auotMrhjDT-3p7nE_Wlj7ksT_9pBLPPQPaDO9BRO_-COlgbEXgFok",
  },
  {
    id: "#STU-9029",
    name: "Caleb O'Reilly",
    role: "Student",
    status: "absent",
    remark: "Sick leave",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA29hZyRdFpuwIep0z1Dyn170GH9qrWpectsilYSTlS3b7auGfqvzBozLTKoJ1CIW75j6sw00ojGFQeHt9VBqRhfTuNSEGnbxOrDcmlL1gWiE4nK-d6pWuH6oy_JFbxncSnv6maC9pQWH1AsSFmxlKfgQ401DybpwBlReQBGw6MlaZx7Tua2qHmhFi4yaSgEu3U7f3YlQVcvfiwX8VJzmEpeXJz0Wm6IlLoe8ZFkm75Rnw9jXiPvF59xgUwpOLD_yaem2C_yEmgBC4",
  },
  {
    id: "#STU-9032",
    name: "Daisy Henderson",
    role: "Student",
    status: "late",
    remark: "Arrived 10:15",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDWTUn0fUWsqSroDC1emXSHrvZ7F_XR4-XVAYyF49dUaCzbAkigoKItjA_n71koLj9EusnkGjJVXg2ZHvrFBFDGg2kzxC8rt-WgcYB9n9vg3kgYbIdnB-jbRaD8EkRAkNiXkLRlNye_9M68Th5UGTxHmPjtvkcFySnsls8tn4Ky9ux7npqOnOHdEfm7qnBLBabjj4U7d-t9Hy2rRZTr9mH-hEm6mBs6hNYXi5JccIA0_PQ-Hqb333HNXmbhkjeiPD1KAoIpQ1Od_aY",
  },
  {
    id: "#STU-9040",
    name: "Elliot Smith",
    role: "Student",
    status: "present",
    remark: "",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZKiQ1vqNx6mKBOcSh0E2w5hrN_nNpCpPgyF-rpkyB9cP-6VdZL5Bt-REi12GU_vBpA4og_CmBC0r22_CEJG6FpgEUkQwV6kdpv7BgduojG-LdIUlBuCOnCul1_kuxAQJWEtyZNDrYoo8WusZatqKJxcUsVMmr5l_yTQC4qjvnyFssmNFKznC2pMEzEUtH9cbO4QLfUc0AhfUFCKDF-gV7NqzMv513gbKHmDB9_rVn2JkSa8ZtGrwdDbp6HPrBOYjUMxkmmuqPOkc",
  },
];

const trendData = [
  { day: "MON", value: 92, active: false },
  { day: "TUE", value: 88, active: false },
  { day: "WED", value: 95, active: false },
  { day: "THU", value: 85, active: true },
  { day: "FRI", value: 20, active: false, muted: true },
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

export default function TeacherAttendanceManagement() {
  const [students, setStudents] = useState(initialStudents);

  useEffect(() => {
    document.title = "Attendance Management | EduPortal";
  }, []);

  const updateStatus = (studentId, status) => {
    setStudents((currentStudents) =>
      currentStudents.map((student) =>
        student.id === studentId ? { ...student, status } : student
      )
    );
  };

  const markAllPresent = () => {
    setStudents((currentStudents) =>
      currentStudents.map((student) => ({ ...student, status: "present" }))
    );
  };

  const resetAttendance = () => {
    setStudents(initialStudents);
  };

  return (
    <div className="attendance-management-page">
      <SideNav />

      <main className="attendance-main">
        <TopNav />

        <section className="attendance-canvas">
          <PageHeader />

          <div className="attendance-grid">
            <StudentRoster
              students={students}
              updateStatus={updateStatus}
              markAllPresent={markAllPresent}
              resetAttendance={resetAttendance}
            />

            <AttendanceSummary />
          </div>
        </section>

        <AttendanceFooter />
      </main>
    </div>
  );
}

function SideNav() {
  return (
    <aside className="side-nav custom-scrollbar">
      <div className="side-brand">
        <div className="side-logo">
          <Icon name="school" />
        </div>

        <div>
          <h1>EduPortal</h1>
          <p>Teacher Dashboard</p>
        </div>
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
      <div className="top-search">
        <Icon name="search" className="search-icon" />
        <input type="text" placeholder="Search students, classes..." />
      </div>

      <div className="top-actions">
        <div className="top-icon-group">
          <button type="button" className="notification-button" aria-label="Notifications">
            <Icon name="notifications" />
            <span />
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
    <div className="page-header">
      <div>
        <h2>Attendance Register</h2>
        <p>Advanced Physics • Grade 12-A • Oct 24, 2024</p>
      </div>

      <div className="page-actions">
        <div className="date-pill">
          <Icon name="calendar_month" />
          <span>Thursday, Oct 24</span>
        </div>

        <button type="button" className="submit-button">
          <Icon name="save" />
          Submit Attendance
        </button>
      </div>
    </div>
  );
}

function StudentRoster({
  students,
  updateStatus,
  markAllPresent,
  resetAttendance,
}) {
  return (
    <section className="roster-card">
      <div className="roster-header">
        <h3>Student Roster</h3>

        <div className="roster-actions">
          <button type="button" onClick={markAllPresent}>
            Mark All Present
          </button>
          <button type="button" onClick={resetAttendance}>
            Reset
          </button>
        </div>
      </div>

      <div className="table-scroll">
        <table className="roster-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>ID Number</th>
              <th className="center">Status</th>
              <th className="align-right">Remarks</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <StudentRow
                key={student.id}
                student={student}
                updateStatus={updateStatus}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function StudentRow({ student, updateStatus }) {
  return (
    <tr>
      <td>
        <div className="student-cell">
          <img src={student.avatar} alt={student.name} />

          <div>
            <p>{student.name}</p>
            <span>{student.role}</span>
          </div>
        </div>
      </td>

      <td className="muted-cell">{student.id}</td>

      <td>
        <StatusToggle
          status={student.status}
          onChange={(status) => updateStatus(student.id, status)}
        />
      </td>

      <td className="align-right">
        {student.remark ? (
          <span className={`remark-text ${student.status}`}>{student.remark}</span>
        ) : (
          <button type="button" className="remark-icon" aria-label="Add remark">
            <Icon name="chat_bubble" />
          </button>
        )}
      </td>
    </tr>
  );
}

function StatusToggle({ status, onChange }) {
  return (
    <div className="status-toggle">
      <button
        type="button"
        className={status === "present" ? "active present" : ""}
        onClick={() => onChange("present")}
      >
        P
      </button>

      <button
        type="button"
        className={status === "absent" ? "active absent" : ""}
        onClick={() => onChange("absent")}
      >
        A
      </button>

      <button
        type="button"
        className={status === "late" ? "active late" : ""}
        onClick={() => onChange("late")}
      >
        L
      </button>
    </div>
  );
}

function AttendanceSummary() {
  return (
    <aside className="summary-column">
      <OverviewCard />
      <TrendCard />
      <LowAttendanceAlert />
    </aside>
  );
}

function OverviewCard() {
  return (
    <section className="overview-card">
      <div className="overview-content">
        <h3>Today's Overview</h3>

        <div className="overview-stats">
          <div>
            <p>24</p>
            <span>Present</span>
          </div>

          <div className="overview-divider" />

          <div>
            <p className="absent-value">2</p>
            <span>Absent</span>
          </div>

          <div className="overview-divider" />

          <div>
            <p className="late-value">1</p>
            <span>Late</span>
          </div>
        </div>

        <div className="overview-bar">
          <div className="present-bar" />
          <div className="absent-bar" />
          <div className="late-bar" />
        </div>
      </div>

      <Icon name="analytics" className="overview-bg-icon" />
    </section>
  );
}

function TrendCard() {
  return (
    <section className="trend-card">
      <div className="trend-header">
        <h3>Attendance Trend</h3>

        <select defaultValue="Weekly">
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>

      <div className="trend-chart">
        {trendData.map((item) => (
          <div className="trend-bar-item" key={item.day}>
            <div
              className={`trend-bar ${item.active ? "active" : ""} ${
                item.muted ? "muted" : ""
              }`}
              style={{ height: `${item.value}%` }}
            />
            <span className={item.active ? "active-label" : ""}>{item.day}</span>
          </div>
        ))}
      </div>

      <div className="trend-legend">
        <div>
          <span className="legend-dot secondary" />
          <p>Class Average</p>
          <strong>94.2%</strong>
        </div>

        <div>
          <span className="legend-dot error" />
          <p>Critical Dropouts</p>
          <strong className="error-text">3 Students</strong>
        </div>
      </div>
    </section>
  );
}

function LowAttendanceAlert() {
  return (
    <section className="alert-card">
      <div className="alert-icon">
        <Icon name="warning" />
      </div>

      <div>
        <h4>Low Attendance Alert</h4>
        <p>Caleb O'Reilly has been absent for 3 consecutive days.</p>
        <button type="button">Contact Guardian</button>
      </div>
    </section>
  );
}

function AttendanceFooter() {
  return (
    <footer className="attendance-footer">
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