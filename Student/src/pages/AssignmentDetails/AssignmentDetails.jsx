import { useEffect, useRef, useState } from "react";
import "./AssignmentDetails.css";

const userAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBPE2GKZsehvvSDo2pt6jHjazO2FjTKwehZB_b4hGkIwz75G3lPE5MHcRxn49bRWXd_4VWBvB72a8OjXPcSIUIB2PBTMEI7UgMZU-akOZOlsYuaRSawbAA8qUvXwNVbcXaX4PPHiGgQuAuRF223fiGqdnWxLixev1BzgAYz5qM_Nu_Gz_kU-raVE1Hu7mGLGDYIvIqGwSRxPfL9jX8bBYI8sU4Gp5gAikJszh8rub4IYneIoiiCa6u_mu_yZ9441ZppZUZVRs2rfgA";

const commentAvatarOne =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCtfiyHxrQiAPDT9-cDBlcPTPGWtaO4-nvQchpKetNuow1z_Sbst9dMN6op1gt3xYEirDWVf4TD0TwmVzhRh922OaYRrzJydClS0OOEOEHsNQlrXWq1cTrG0g1VH8VBskFm_MJyLSk4sC3k9kGURvkBPIUL9iG1259eSRCKkzTUaL096sLP7xiivzMDf3qDgQ8mfvXRn0ghtMS1QaDU9Bjhfg-fBZRAY6w7HhnzdOZIH-aNwieW-vr18iuGKKRsDzVFvZiZDWxrviM";

const commentAvatarTwo =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCbvYw2mbuUp6KPfxQsGfUEGgOnENRfSb96uaqLWu9F-OVAkJ47htVng14y8VEZjBh55DcHa6nUFKkrGZ8cYNzYnACbf4TYsu4u-zQ4KdDrXWo68O-P1frxl2TuQOVec24mGGAmQOzIV3nZupOyFs-8a_uQ5IeaCzrk5UG6R4IqDY365Lnt0RjEHiv8C60XRSpjZA1fCkgIzv7pEwCd7F-a34FWXb5ceslkWdXGglC2Tx6Y347DcZE7WVtDmhQog32BETn-FGhBDfE";

const sidebarLinks = [
  { icon: "dashboard", label: "Dashboard" },
  { icon: "school", label: "Courses" },
  { icon: "assignment", label: "Assignments", active: true },
  { icon: "group", label: "Students" },
  { icon: "calendar_today", label: "Schedule" },
  { icon: "analytics", label: "Analytics" },
];

const attachments = [
  {
    icon: "picture_as_pdf",
    title: "Assignment_Brief_v2.pdf",
    size: "1.2 MB",
  },
  {
    icon: "dataset",
    title: "training_dataset_sample.csv",
    size: "456 KB",
  },
];

const rubricItems = [
  { label: "Complexity of Analysis", points: "40 pts", width: "40%" },
  { label: "Code Efficiency", points: "30 pts", width: "33%" },
  { label: "Visualization & Clarity", points: "30 pts", width: "25%" },
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

function formatCountdown(totalMinutes) {
  const safeMinutes = Math.max(0, totalMinutes);
  const days = Math.floor(safeMinutes / 1440);
  const hours = Math.floor((safeMinutes % 1440) / 60);
  const minutes = safeMinutes % 60;

  return `${days}d ${hours}h ${minutes}m`;
}

function formatFileSize(bytes) {
  if (!bytes) return "0 KB";

  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;

  return `${(kb / 1024).toFixed(1)} MB`;
}

export default function AssignmentDetails() {
  const [remainingMinutes, setRemainingMinutes] = useState(
    2 * 24 * 60 + 14 * 60 + 22
  );

  useEffect(() => {
    document.title = "Assignment Details | EduPremium Student Portal";

    const timer = setInterval(() => {
      setRemainingMinutes((previous) => Math.max(0, previous - 1));
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="assignment-details-page">
      <Sidebar />

      <main className="assignment-main">
        <TopNav />

        <div className="assignment-layout">
          <div className="assignment-left-column">
            <AssignmentInformation countdown={formatCountdown(remainingMinutes)} />
            <Discussion />
          </div>

          <div className="assignment-right-column">
            <SubmissionCard />
            <RubricCard />
          </div>
        </div>

        <AssignmentFooter />
      </main>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="assignment-sidebar">
      <div className="sidebar-brand">
        <h1>EduPremium</h1>
        <p>Student Portal</p>
      </div>

      <nav className="sidebar-nav">
        {sidebarLinks.map((link) => (
          <a
            key={link.label}
            href="#"
            onClick={preventLink}
            className={`sidebar-link ${link.active ? "active" : ""}`}
          >
            <Icon name={link.icon} />
            <span>{link.label}</span>
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
    <header className="assignment-topnav">
      <div className="topnav-left">
        <button type="button" className="back-button" aria-label="Go back">
          <Icon name="arrow_back" />
        </button>

        <h2>Assignment Details</h2>
      </div>

      <div className="topnav-right">
        <div className="top-search">
          <Icon name="search" className="top-search-icon" />
          <input type="text" placeholder="Search resources..." />
        </div>

        <div className="top-icons">
          <button type="button" aria-label="Notifications">
            <Icon name="notifications" />
          </button>

          <button type="button" aria-label="Help">
            <Icon name="help" />
          </button>

          <button type="button" aria-label="Apps">
            <Icon name="apps" />
          </button>

          <div className="top-avatar">
            <img src={userAvatar} alt="User profile avatar" />
          </div>
        </div>
      </div>
    </header>
  );
}

function AssignmentInformation({ countdown }) {
  return (
    <section className="assignment-card assignment-info-card">
      <div className="assignment-info-header">
        <div>
          <span className="course-pill">CS302: Advanced Algorithms</span>

          <h3>Neural Network Optimization Strategy</h3>

          <p>Instructor: Dr. Helena Vance • Issued: Oct 24, 2024</p>
        </div>

        <div className="deadline-box">
          <div className="countdown">
            <Icon name="timer" />
            <span>{countdown}</span>
          </div>

          <p>Due Date: Oct 31, 11:59 PM</p>
        </div>
      </div>

      <div className="instructions">
        <h4>Instructions</h4>

        <p>
          For this assignment, you are required to analyze the computational
          efficiency of backpropagation in deep neural networks. Your report
          should focus on gradient descent variants and their convergence rates
          on non-convex surfaces. Specifically, we expect a comparative analysis
          between Adam, RMSProp, and Stochastic Gradient Descent with Momentum.
        </p>

        <ul>
          <li>Minimum 2,500 words excluding bibliography.</li>
          <li>Include at least three visualization charts of loss curves.</li>
          <li>Format must be IEEE standard PDF.</li>
          <li>
            Original code implementation must be provided in a separate .zip
            file.
          </li>
        </ul>
      </div>

      <div className="attachments-section">
        <h4>Downloadable Attachments</h4>

        <div className="attachments-grid">
          {attachments.map((item) => (
            <button type="button" className="attachment-card" key={item.title}>
              <div className="attachment-icon">
                <Icon name={item.icon} />
              </div>

              <div>
                <p>{item.title}</p>
                <span>{item.size}</span>
              </div>

              <Icon name="download" className="download-icon" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Discussion() {
  return (
    <section className="assignment-card discussion-card">
      <h4>Class Discussion</h4>

      <div className="comment-row">
        <img src={commentAvatarOne} alt="Sarah Jenkins" />

        <div className="comment-content">
          <div className="comment-bubble">
            <div className="comment-meta">
              <span>Sarah Jenkins</span>
              <small>2 hours ago</small>
            </div>

            <p>
              Are we allowed to use PyTorch for the code implementation part, or
              should it be pure NumPy as discussed in week 4?
            </p>
          </div>

          <button type="button" className="reply-button">
            Reply
          </button>
        </div>
      </div>

      <div className="comment-row">
        <img src={commentAvatarTwo} alt="Student profile" />

        <div className="comment-content">
          <textarea placeholder="Add a comment or ask a question..." />
        </div>
      </div>
    </section>
  );
}

function SubmissionCard() {
  const fileInputRef = useRef(null);
  const submitTimerRef = useRef(null);

  const [files, setFiles] = useState([]);
  const [dragOver, setDragOver] = useState(false);
  const [submitState, setSubmitState] = useState("idle");

  useEffect(() => {
    return () => {
      if (submitTimerRef.current) clearTimeout(submitTimerRef.current);
    };
  }, []);

  const addFiles = (fileList) => {
    const incomingFiles = Array.from(fileList || []);
    if (incomingFiles.length === 0) return;

    setFiles((previous) => [...previous, ...incomingFiles]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragOver(false);
    addFiles(event.dataTransfer.files);
  };

  const handleSubmit = () => {
    setSubmitState("processing");

    submitTimerRef.current = setTimeout(() => {
      setSubmitState("submitted");
    }, 1500);
  };

  const removeFile = (indexToRemove) => {
    setFiles((previous) =>
      previous.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <section className="assignment-card submission-card">
      <h4>Submission</h4>

      <p className="submission-intro">
        Upload your final PDF report and ZIP archive containing source code.
      </p>

      <div
        className={`dropzone ${dragOver ? "drag-over" : ""}`}
        onClick={() => fileInputRef.current?.click()}
        onDragOver={(event) => {
          event.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={(event) => {
          event.preventDefault();
          setDragOver(false);
        }}
        onDrop={handleDrop}
        role="button"
        tabIndex={0}
      >
        <div className="dropzone-icon">
          <Icon name="upload_file" />
        </div>

        <div>
          <p>Drag and drop your files here</p>
          <span>
            or <strong>browse your computer</strong>
          </span>
        </div>

        <small>Maximum file size: 50MB</small>

        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={(event) => addFiles(event.target.files)}
        />
      </div>

      {files.length > 0 && (
        <div className="file-list">
          {files.map((file, index) => (
            <div className="file-item" key={`${file.name}-${index}`}>
              <div>
                <Icon name="description" />
                <span>{file.name}</span>
                <small>{formatFileSize(file.size)}</small>
              </div>

              <button
                type="button"
                aria-label={`Remove ${file.name}`}
                onClick={() => removeFile(index)}
              >
                <Icon name="close" />
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="submission-actions">
        <button
          type="button"
          className={`submit-primary ${submitState === "submitted" ? "submitted" : ""}`}
          onClick={handleSubmit}
          disabled={submitState === "processing"}
        >
          {submitState === "processing" && (
            <>
              <Icon name="sync" className="spin" />
              Processing...
            </>
          )}

          {submitState === "submitted" && (
            <>
              <Icon name="check_circle" filled />
              Submitted Successfully
            </>
          )}

          {submitState === "idle" && "Submit Assignment"}
        </button>

        <button type="button" className="draft-button">
          Save as Draft
        </button>
      </div>

      <div className="submission-status">
        <h5>Submission Status</h5>

        <div>
          <span
            className={`status-dot ${
              submitState === "submitted" ? "submitted" : ""
            }`}
          />
          <p>{submitState === "submitted" ? "Submitted" : "Not Submitted"}</p>
        </div>

        <small>You can edit your submission until the deadline.</small>
      </div>
    </section>
  );
}

function RubricCard() {
  return (
    <section className="assignment-card rubric-card">
      <h4>Grading Rubric</h4>

      <div className="rubric-list">
        {rubricItems.map((item) => (
          <div className="rubric-item" key={item.label}>
            <div className="rubric-label">
              <span>{item.label}</span>
              <strong>{item.points}</strong>
            </div>

            <div className="rubric-track">
              <div
                className="rubric-fill"
                style={{
                  width: item.width,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <button type="button" className="rubric-link">
        View Full Rubric PDF
        <Icon name="open_in_new" />
      </button>
    </section>
  );
}

function AssignmentFooter() {
  return (
    <footer className="assignment-footer">
      <div className="assignment-footer-inner">
        <p>© 2024 EduPremium Academy. All Rights Reserved.</p>

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