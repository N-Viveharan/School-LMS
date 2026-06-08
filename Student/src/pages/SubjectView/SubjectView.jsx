import { useEffect } from "react";
import "./SubjectView.css";

const profileAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD0nedoyJw0loCc-MhVKy0DliiT7RdDbBIZvb_PlCDdKbf1-rwu1hNtL_gwaNXCwNKCXKLeYa4LdyNo6BSr0vFJBXHkqySBBgNyGpeulJgYrLEbqEQLbzCShIFw-FJcPL8MTysh6rlUtb10gZsmRVqW4kc9xYxxV0JiyGShmVbLTSzqUNq79tgdoninO3hJcUgn1f7iBJWmXCzj8uJfrCsE0Zqca1tayDuy4CV-IJiKJ_qgPUY-7GNut9-W6IexWpd2JRLCIxs4oG4";

const teacherAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAeQ5AY6QOYsha4Ptp8SLs98bQjX3hgsTU8ad0MJXYb_tivr5l0HftL37lei5MRFwdpl8vEqRueYoT1RzOXjmVz_2WUlu58gfGPdXiXtCKSt3iXxgZqPCPERJV_7_wRT5Ls5oqLLz57VPAUmhSx3WNqD5e8eT7uFjarXoVHAj5FMBlbZSGiRx0HwJD8Kvsi8AcmS8NIp5YQ1XMNSr47NeImDQcLCETHkNeR1bfO0fxauG5XeSFrB9gWu_YRwHqYk5s6xgivg9aQKRw";

const sidebarItems = [
  { icon: "dashboard", label: "Dashboard" },
  { icon: "school", label: "Courses", active: true, filled: true },
  { icon: "assignment", label: "Assignments" },
  { icon: "group", label: "Students" },
  { icon: "calendar_month", label: "Schedule" },
  { icon: "analytics", label: "Analytics" },
];

const subjectNavItems = [
  { icon: "folder", label: "Resources", active: true, filled: true },
  { icon: "video_library", label: "Recorded Lessons" },
  { icon: "task", label: "Assignments" },
  { icon: "forum", label: "Discussion Board" },
];

const pdfResources = [
  {
    title: "Lecture 14: Complex Integrals & Fourier Series",
    meta: "Uploaded: Oct 24, 2024 • 4.2 MB",
  },
  {
    title: "Advanced Calculus Problem Set #03",
    meta: "Uploaded: Oct 20, 2024 • 1.8 MB",
  },
  {
    title: "Formula Reference Guide - Semester 1",
    meta: "Uploaded: Sep 12, 2024 • 12.5 MB",
  },
];

const videoLessons = [
  {
    title: "Laplace Transforms: Theory & Application",
    date: "Recorded: Oct 26, 2024",
    duration: "42:15",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBuwwlzu6XpVfUTR_PtbzdUVOoMY-kfrEmR9jY4srJ6ZVGpPhK7I03FnGTA3ibO9YHilyIbVXT8FBQjdWYSmIzdpdGTnJ7aghhKvP4IDZfW3KG4Wjm6YutEOopescf7oqCo_cAyQUW96adVny0WcHlamP_K2ZtvRxrCibc9oClCer4ptxWNGAPBf82ar20hmtg0yNQONIvnUdcjmC3eegqVYeVzzDSxA-KiPdy7_4J2zK6raxPf8YatoFo6eFPwYuaxqFoKLRWMINc",
  },
  {
    title: "Vector Spaces and Linear Subspaces",
    date: "Recorded: Oct 22, 2024",
    duration: "38:50",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3CL6vLO9BL0tnvKtb8kje_j7E-neqZqWYdeWB37HGyzIRwTiCk0mAU0gTq7M0S-vTSvUNvgRyQ_1VSnrNzhayWfDkzm_kgGWLSZ_Xi8PwKVMfmnTe8Q8JXNhXGcjgwG5dZ-IlSdCKA6_5Alkm1HGjnYAaV3U9TfYeps4R0tfq4ia-qeYRf6WpPhS2WMEpslOY3-qGPtkZLuaWlLtP9qZB-g2_kc4PBN5MBgl1a9TowZV46LB_CbVnBnC8K406xdU4kOWsYtM0zHc",
  },
];

const footerLinks = [
  "Privacy Policy",
  "Terms of Service",
  "Campus Safety",
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

export default function SubjectView() {
  useEffect(() => {
    document.title = "Subject View | EduPremium LMS";
  }, []);

  return (
    <div className="subject-view-page">
      <Sidebar />

      <main className="subject-main">
        <TopNav />
        <SubjectHeader />

        <div className="subject-content-grid">
          <SubjectSidePanel />

          <div className="subject-main-content">
            <PDFResources />
            <VideoLessons />
            <AssignmentSubmission />
          </div>
        </div>

        <SubjectFooter />
      </main>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-logo">
          <Icon name="school" filled />
        </div>

        <div>
          <h2>St. Edwards Academy</h2>
          <p>Academic Portal</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        {sidebarItems.map((item) => (
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
        <a href="#" onClick={preventLink} className="sidebar-link sidebar-link-bottom">
          <Icon name="help" />
          <span>Help Center</span>
        </a>

        <a href="#" onClick={preventLink} className="sidebar-link sidebar-link-bottom">
          <Icon name="logout" />
          <span>Log Out</span>
        </a>
      </div>
    </aside>
  );
}

function TopNav() {
  return (
    <header className="top-nav">
      <div className="top-nav-left">
        <h1>EduPremium LMS</h1>

        <div className="top-divider" />

        <div className="top-tabs">
          <button type="button" className="top-tab active">
            Subject View
          </button>

          <button type="button" className="top-tab">
            Curriculum
          </button>
        </div>
      </div>

      <div className="top-nav-right">
        <div className="search-box">
          <Icon name="search" />
          <input type="text" placeholder="Search resources..." />
        </div>

        <div className="top-icons">
          <button type="button" aria-label="Notifications">
            <Icon name="notifications" />
          </button>

          <button type="button" aria-label="Apps">
            <Icon name="apps" />
          </button>

          <button type="button" aria-label="Settings">
            <Icon name="settings" />
          </button>

          <img src={profileAvatar} alt="User Profile Avatar" />
        </div>
      </div>
    </header>
  );
}

function SubjectHeader() {
  return (
    <section className="subject-header">
      <div className="subject-header-inner">
        <div className="subject-header-text">
          <nav className="breadcrumb">
            <a href="#" onClick={preventLink}>
              Dashboard
            </a>
            <Icon name="chevron_right" />
            <a href="#" onClick={preventLink}>
              Courses
            </a>
            <Icon name="chevron_right" />
            <span>Advanced Mathematics</span>
          </nav>

          <h2>Advanced Mathematics</h2>

          <div className="course-meta-row">
            <div className="teacher-pill">
              <img src={teacherAvatar} alt="Dr. Alistair Thorne" />

              <div>
                <p>Dr. Alistair Thorne</p>
                <span>Senior Faculty Lead</span>
              </div>
            </div>

            <div className="enrolled-meta">
              <Icon name="group" />
              <span>124 Students Enrolled</span>
            </div>
          </div>
        </div>

        <div className="subject-actions">
          <button type="button" className="outline-button">
            <Icon name="mail" />
            Contact Teacher
          </button>

          <button type="button" className="primary-button">
            <Icon name="play_circle" />
            Resume Last Lesson
          </button>
        </div>
      </div>
    </section>
  );
}

function SubjectSidePanel() {
  return (
    <aside className="subject-side-panel">
      <div className="subject-nav-card">
        <p className="side-card-label">Subject Navigation</p>

        <nav className="subject-section-nav">
          {subjectNavItems.map((item) => (
            <button
              type="button"
              key={item.label}
              className={`subject-nav-button ${item.active ? "active" : ""}`}
            >
              <Icon name={item.icon} filled={item.filled} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="progress-card">
        <h3>Course Progress</h3>

        <div className="progress-block">
          <div className="progress-label-row">
            <span>Completed Lessons</span>
            <strong>18 / 24</strong>
          </div>

          <div className="progress-track">
            <div className="progress-fill" />
          </div>
        </div>

        <p>You're on track to complete this course by December 15th.</p>
      </div>
    </aside>
  );
}

function PDFResources() {
  return (
    <section className="content-card resources-card">
      <div className="card-header">
        <h3>
          <Icon name="picture_as_pdf" />
          Downloadable PDF Notes
        </h3>

        <button type="button" className="text-link-button">
          View All
        </button>
      </div>

      <div className="resource-list">
        {pdfResources.map((resource) => (
          <article className="resource-item" key={resource.title}>
            <div className="resource-info">
              <div className="pdf-icon-box">
                <Icon name="picture_as_pdf" />
              </div>

              <div>
                <h4>{resource.title}</h4>
                <p>{resource.meta}</p>
              </div>
            </div>

            <button type="button" className="round-icon-button" aria-label="Download">
              <Icon name="download" />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function VideoLessons() {
  return (
    <section className="video-section">
      <div className="section-title-row">
        <h3>Recorded Video Lessons</h3>

        <div className="view-buttons">
          <button type="button" aria-label="Grid view">
            <Icon name="grid_view" />
          </button>

          <button type="button" aria-label="List view">
            <Icon name="list" />
          </button>
        </div>
      </div>

      <div className="video-grid">
        {videoLessons.map((video) => (
          <article className="video-card" key={video.title}>
            <div className="video-thumbnail">
              <img src={video.image} alt={video.title} />

              <div className="play-layer">
                <div className="play-button">
                  <Icon name="play_arrow" filled />
                </div>
              </div>

              <span className="duration-badge">{video.duration}</span>
            </div>

            <div className="video-body">
              <h4>{video.title}</h4>
              <p>{video.date}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function AssignmentSubmission() {
  return (
    <section className="assignment-card">
      <div className="assignment-inner">
        <div className="assignment-top">
          <div>
            <span className="assignment-badge">Pending Assignment</span>

            <h3>Midterm Research Paper: Stochastic Processes</h3>

            <p>
              Submit a 5,000-word analysis on the application of Markov Chains
              in modern cryptography.
            </p>
          </div>

          <div className="deadline-box">
            <div>
              <Icon name="timer" />
              <strong>Due in 3 Days</strong>
            </div>

            <p>Deadline: Nov 05, 11:59 PM</p>
          </div>
        </div>

        <div className="submission-grid">
          <div className="submission-status">
            <p className="status-label">Submission Status</p>

            <div className="status-card">
              <div className="upload-status-icon">
                <Icon name="cloud_upload" />
              </div>

              <div>
                <h4>No file uploaded yet</h4>
                <p>Accepted formats: .pdf, .docx</p>
              </div>
            </div>
          </div>

          <div className="upload-area">
            <label className="upload-box">
              <Icon name="upload_file" />
              <span>
                Click to upload or <strong>drag and drop</strong>
              </span>
              <input type="file" />
            </label>
          </div>
        </div>

        <div className="assignment-actions">
          <button type="button" className="ghost-button">
            Save Draft
          </button>

          <button type="button" disabled className="disabled-submit-button">
            Submit Assignment
          </button>
        </div>
      </div>
    </section>
  );
}

function SubjectFooter() {
  return (
    <footer className="subject-footer">
      <div className="subject-footer-inner">
        <div className="footer-brand-row">
          <span>EduPremium Global LMS</span>
          <p>© 2024 EduPremium Global LMS. All rights reserved.</p>
        </div>

        <div className="footer-links">
          {footerLinks.map((link) => (
            <a href="#" onClick={preventLink} key={link}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}