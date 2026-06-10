import { useEffect } from "react";
import "./CoursesOverview.css";

const userAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDCyabLJD3UZCZ-dwhDpZONLO5RwwwOT2a6PWWnM_wzrTezptljPO3UMtzwC_CWCuUspvfSgQ-_jYf-Qxd6nnq6M0UOyXmu6wAYZFsFfVnL_9Ff3P-l4ECWwiFg2n5fyFNOyE-kXKNYiYdpmohaaSaRibRNZIeTBPVMTqIgANu7khcMp0hLpnWg4vZxD1mn2juWI-0ViwO87YfIOMwG5UiLrgVSRt8h4vIKaQyVr_WO3VFZkZ5Zk4LkJR5nHlbb6n3czVB9IiNiXRw";

const sidebarLinks = [
  { icon: "dashboard", label: "Dashboard" },
  { icon: "school", label: "Courses", active: true },
  { icon: "assignment", label: "Assignments" },
  { icon: "group", label: "Students" },
  { icon: "calendar_today", label: "Schedule" },
  { icon: "analytics", label: "Analytics" },
];

const courses = [
  {
    title: "Advanced Calculus II",
    teacher: "Dr. Elizabeth Thorne",
    progress: 75,
    accent: "#002045",
    badge: "Advanced Level",
    badgeClass: "badge-secondary",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVhkoh4bfjPPbDJRZ-4rWsvwknkZN696MuBZTxHOakl_cf1Ud9Etol0VFsLSBt9-scie0DsiscVU5ks_V0wCDMmVQ2Rb_pEMbPIgGyTd_M6NcSb5znGYR0GwJ7tUq7cxRQliWXL83kEahHqAqNrLz1qcxBwaJME9nj6FoHadwjk2E1Q2Z4AfKTMrDiGp0DpSCHDX0FwcUL1vlDQg8zy2gsqH5wx90y3bPWCzvTMFEkisbwkQmBfPqqURF3Dq1c1ohT93n8ZKYjzko",
  },
  {
    title: "Quantum Physics",
    teacher: "Prof. Julian Vane",
    progress: 42,
    accent: "#0061a5",
    badge: "Required",
    badgeClass: "badge-tertiary-fixed",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAXmFZ7PCVlo7kR_F2CPNiQSyW9sOvjKnkx4v-t_3mjzXI1Y3UI69sTlaX01Hv-6pMZJ9Vb7uzqjC_N2CexG36VQHE1aa3O99iSbe9fK36tk7gAB4Wu0qktyZE6KpmnShia7lciwlMb4MUdzOyPRVoRcbUe_mzLLURzl9l5mFMM0Wr2phSKGMzO8LXkEsmboc6a-d3rXPvtMz8clTBDl3robfrP-5ssaJOTjRkjCvUtamzLkOCiJemfButsBHSPmY6Fpu8mubP8UtU",
  },
  {
    title: "Molecular Biology",
    teacher: "Dr. Sarah Chen",
    progress: 90,
    accent: "#00497e",
    badge: "Elective",
    badgeClass: "badge-primary-fixed",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBTfZky_-kTXZLwtQ1nS5E20PZCxCfeKDkHc8qfKk8YcdKnWsIDjbqF79GNnLe8BUCEyklREniXMw56Z5CId2qVD2X1Ii_lSLPVb7IScjmX82kzH9ro44FIRzMyDdppqQgj-sq7pMaGXHu3sRAvHaRfWMSj0_4B8mji3K2Bb5eMnqAk_DSy1VT5c_JTyX_-kIHiEApPyWdyXNLuva-bdyYK-bmgFZRYREWQjBcutBf18wn5TqdqGj0uaEDVnVMn07QN1Xmdwvqb-OI",
  },
  {
    title: "Data Structures",
    teacher: "Prof. Michael Ross",
    progress: 15,
    accent: "#1a365d",
    badge: "Advanced Level",
    badgeClass: "badge-secondary-fixed",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDP30YFe1ULs0YX06oh3OCHF3XbF0mZFDDazlxGdoVUb8wCDhXx5RJASWsgWQMPd88Zr0QH-k2ZA4uZCCuh3woJfUhGr6kRdseRYZ1ayqrfdA7UhdpAQ7uEAacwYPpG0IREy3IJrPWl4-PT2mmoDG_Hnjy_Tc4zQvQpMdl0Pl9cHN6e57DLAGsmsyLLFmK8POvxsjgIvWOyP1rQYPZLqH8mswbnbjY5Fk2I6eFBBmE60M86ELWxCvDrWGRdsbEXOFSJHH70xBKvbbY",
  },
  {
    title: "Modern World History",
    teacher: "Dr. Helena Marcus",
    progress: 60,
    accent: "#172328",
    badge: "Required",
    badgeClass: "badge-tertiary-container",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA07nz9B4gKjFX5mxzSLWLyuO6P2IVx_xQlVRdlV0Z02ndN3QkdDl-OAeqURBz34qRWINn_-RFTQ24Wp4CKQYZC2Baz11USluhU9-gZlsxamBremvIOjiHHBTllXm3Bbf_6yiAXDdQ50vSq0ay7qA-hq_vvOrGy99qCNIYwLmbpgSHlUJlWOfltYRIhg68PmozcXZ03R-NbmGtorIkcjIRn67X6L--_vzOplUXWNpS3r2JkQui42hvE6wnZBUO1n4-RYMjMo16raCc",
  },
  {
    title: "Creative Writing",
    teacher: "Prof. Arthur Wells",
    progress: 28,
    accent: "#74777f",
    badge: "Elective",
    badgeClass: "badge-surface-high",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAaiwkTARWxm1MavJ_hAQvOE34fIJUq5JXzdPj4YYcyn2cQLV_kTqjimzjvdUcTl4mFTLVDCQ-ZFqHb08sKzLdSG90ZT5znESm1qUzDxQ6LbuBV7nE2c44Agq_LVfNVjxLrW8yfLgeRPHkvFTUuXYTL_03xh0lYDcO5bWfEVKSawb5puqIWNWjmGvpgQnTzaCWEdzyi2EUy57Fxb7nzDLvuViffHdT16L049SodyW_bK6uy2Myq-sJy--eEOXA6RmW3bG9HG0gLwMk",
  },
];

const footerLinks = [
  "Academic Calendar",
  "Privacy Policy",
  "Student Handbook",
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

export default function CoursesOverview() {
  useEffect(() => {
    document.title = "EduPremium - Courses Overview";
  }, []);

  return (
    <div className="courses-page">
      <Sidebar />

      <main className="courses-main">
        <TopAppBar />

        <section className="courses-canvas">
          <PageHeader />

          <div className="courses-grid">
            {courses.map((course) => (
              <CourseCard key={course.title} course={course} />
            ))}
          </div>
        </section>

        <CoursesFooter />
      </main>

      <button className="floating-button" type="button" aria-label="Add">
        <Icon name="add" />
      </button>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-logo">
          <Icon name="school" />
        </div>

        <div>
          <h1>EduPremium</h1>
          <p>Student Portal</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        {sidebarLinks.map((item) => (
          <a
            key={item.label}
            href="#"
            onClick={preventLink}
            className={`sidebar-link ${item.active ? "active" : ""}`}
          >
            <Icon name={item.icon} />
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

function TopAppBar() {
  return (
    <header className="top-appbar">
      <div className="search-wrapper">
        <Icon name="search" className="search-icon" />
        <input
          type="text"
          placeholder="Search courses, teachers, or materials..."
        />
      </div>

      <div className="top-actions">
        <button type="button" className="icon-button notification-button">
          <Icon name="notifications" />
          <span className="notification-dot" />
        </button>

        <button type="button" className="icon-button">
          <Icon name="help" />
        </button>

        <button type="button" className="icon-button">
          <Icon name="apps" />
        </button>

        <div className="divider" />

        <button className="profile-button" type="button">
          <img src={userAvatar} alt="Sarah Jenkins" />
          <span>Sarah Jenkins</span>
        </button>
      </div>
    </header>
  );
}

function PageHeader() {
  return (
    <div className="page-header">
      <div>
        <h2>My Enrolled Courses</h2>
        <p>
          Manage your academic journey and track progress across all subjects.
        </p>
      </div>

      <div className="page-tools">
        <div className="view-toggle">
          <button type="button" className="active">
            <Icon name="grid_view" />
            Grid
          </button>

          <button type="button">
            <Icon name="list" />
            List
          </button>
        </div>

        <button type="button" className="filter-button">
          <Icon name="filter_list" />
          Filter
        </button>
      </div>
    </div>
  );
}

function CourseCard({ course }) {
  return (
    <article
      className="course-card"
      style={{
        "--course-accent": course.accent,
      }}
    >
      <div className="course-accent" />

      <div className="course-image-wrap">
        <img src={course.image} alt={course.title} />

        <div className="course-image-overlay" />

        <span className={`course-badge ${course.badgeClass}`}>
          {course.badge}
        </span>
      </div>

      <div className="course-body">
        <div className="course-title-row">
          <h3>{course.title}</h3>
          <Icon name="more_vert" className="more-icon" />
        </div>

        <div className="teacher-row">
          <div className="teacher-icon">
            <Icon name="person" />
          </div>

          <span>{course.teacher}</span>
        </div>

        <div className="course-bottom">
          <div className="progress-label-row">
            <span>Course Progress</span>
            <strong>{course.progress}%</strong>
          </div>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${course.progress}%` }}
            />
          </div>

          <button type="button" className="view-course-button">
            View Course
          </button>
        </div>
      </div>
    </article>
  );
}

function CoursesFooter() {
  return (
    <footer className="courses-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span>EduPremium</span>
          <p>© 2024 EduPremium Academy. All Rights Reserved.</p>
        </div>

        <nav className="footer-links">
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