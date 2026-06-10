import { useEffect, useState } from "react";
import "./GradingInterface.css";

const teacherAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB6XX72d7C60Oq0I2ndDfDn2Vexxkw5lKGfvcrsGvodxGvbXDbCGFwujr8UWzj7S4k_wR9GIXYynspxPH0Rriu0QzWBY5153Y58IYTjAzvNakgVPN9vnFdL2EzyywFgpIwoSmLH1Ba2p4hBaNu4117IiRyL14Tfc2Vsf28zS60g0rJFKzTtZks1VwUa3F7MRocLk32FWOOWA8X3b4PGLL7WKUZTQisQGaNPqIQf8WFdLImbku7qI9KM2p9nJZaN4W3rMkEwwKVx01Q";

const documentChartImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCZk8pfm6PqE1ut-tcFEw5NdwRkoT3FjiipIu3YHLzxb1NGThbIvlat24uOM2JlBfEwXMqY20G_xsjUjPTzS1xEAi1CYURu3FNAGlsJw2VzOgL520qHEZ7r4JuAS96Q1UfnI6uKOKX_UqgPjHRng6OSby490hv00pQQeuZJI7m6wJGNQjB10Hsti8shEPQr9WLysNyytNtoe8z-njne8NlF0Tav64jjSLB4j2cj6rCMgrk2wfvOji5KCrfoSaGs2IvE4--SYjXoPZY";

const assessmentChips = [
  "Excellent Analysis",
  "Strong Data",
  "Needs Citations",
  "Minor Typos",
  "Great Structure",
];

const footerLinks = ["Privacy Policy", "Terms of Service", "Help Center"];

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

function getGradeLabel(value) {
  const grade = Number(value);

  if (grade >= 90) return "Grade A+";
  if (grade >= 80) return "Grade A-";
  if (grade >= 70) return "Grade B";

  return "Grade C or below";
}

export default function GradingInterface() {
  const [points, setPoints] = useState("85");

  useEffect(() => {
    document.title = "EduPortal LMS - Grading Interface";
  }, []);

  const handlePointsChange = (event) => {
    const nextValue = event.target.value;

    if (nextValue === "") {
      setPoints("");
      return;
    }

    const numericValue = Number.parseInt(nextValue, 10);

    if (Number.isNaN(numericValue)) {
      setPoints("");
      return;
    }

    const clampedValue = Math.max(0, Math.min(100, numericValue));
    setPoints(String(clampedValue));
  };

  return (
    <div className="grading-page">
      <TopNav />

      <main className="grading-main">
        <div className="grading-layout">
          <SubmissionPreview />
          <GradingControls
            points={points}
            onPointsChange={handlePointsChange}
          />
        </div>
      </main>

      <GradingFooter />
    </div>
  );
}

function TopNav() {
  return (
    <header className="grading-topbar">
      <div className="topbar-left">
        <h1>EduPortal LMS</h1>

        <div className="topbar-divider" />

        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <span>Assignments</span>
          <Icon name="chevron_right" />
          <strong>Final Research Thesis: Modern Architectures</strong>
        </nav>
      </div>

      <div className="topbar-right">
        <div className="topbar-search">
          <Icon name="search" />
          <input type="text" placeholder="Search students..." />
        </div>

        <div className="topbar-actions">
          <button type="button" aria-label="Notifications">
            <Icon name="notifications" />
          </button>

          <button type="button" aria-label="Help">
            <Icon name="help" />
          </button>

          <div className="teacher-avatar">
            <img src={teacherAvatar} alt="Teacher profile" />
          </div>
        </div>
      </div>
    </header>
  );
}

function SubmissionPreview() {
  return (
    <section className="submission-pane">
      <div className="file-toolbar">
        <div className="file-info">
          <div className="file-icon">
            <Icon name="description" />
          </div>

          <div>
            <p>Research_Thesis_v2_Final.pdf</p>
            <span>Submitted Oct 24, 2023 • 4.2 MB</span>
          </div>
        </div>

        <div className="file-actions">
          <button type="button" aria-label="Zoom in">
            <Icon name="zoom_in" />
          </button>

          <button type="button" aria-label="Zoom out">
            <Icon name="zoom_out" />
          </button>

          <button type="button" aria-label="Download">
            <Icon name="download" />
          </button>

          <button type="button" aria-label="Open in new">
            <Icon name="open_in_new" />
          </button>
        </div>
      </div>

      <div className="document-scroll custom-scrollbar">
        <article className="document-page">
          <h2>Impact of Decentralized Systems on Modern Web Infrastructures</h2>

          <p className="document-meta">Student: Julian Thorne | ID: 9822301</p>

          <div className="document-rule" />

          <div className="document-content">
            <h3>Abstract</h3>

            <p>
              This research delves into the transformative nature of
              decentralized architectures, specifically focusing on the shift
              from monolithic server clusters to distributed ledger systems. By
              analyzing latency benchmarks and data integrity metrics across four
              distinct pilot frameworks, this study highlights the significant
              trade-offs between absolute control and systemic resilience.
            </p>

            <h3>1. Introduction</h3>

            <p>
              The evolution of web architecture has reached a pivotal juncture.
              As data sovereignty becomes a primary concern for global users,
              the traditional client-server model faces unprecedented scrutiny.
              This section outlines the historical context of centralized
              networking and introduces the foundational concepts of peer-to-peer
              protocols that inform today's decentralized experiments.
            </p>

            <blockquote>
              “The true measure of a decentralized system is not its ability to
              withstand an attack, but its ability to continue functioning during
              a partial failure of its core nodes.” (Thorne, 2023)
            </blockquote>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.
            </p>

            <img src={documentChartImage} alt="Data analytics graph" />
          </div>
        </article>
      </div>
    </section>
  );
}

function GradingControls({ points, onPointsChange }) {
  return (
    <aside className="grading-panel">
      <div className="queue-header">
        <div className="queue-top">
          <span>Queue: 14 of 42</span>

          <div className="queue-nav">
            <button type="button" aria-label="Previous student">
              <Icon name="arrow_back" />
            </button>

            <button type="button" aria-label="Next student">
              <Icon name="arrow_forward" />
            </button>
          </div>
        </div>

        <div className="student-summary">
          <div className="student-initials">JT</div>

          <div>
            <p>Julian Thorne</p>
            <span>Computer Science, Year 4</span>
          </div>
        </div>
      </div>

      <div className="grading-scroll custom-scrollbar">
        <section className="points-section">
          <label htmlFor="points">Points Awarded</label>

          <div className="points-row">
            <input
              id="points"
              type="number"
              min="0"
              max="100"
              value={points}
              onChange={onPointsChange}
            />

            <span>/ 100</span>
          </div>

          <div className="grade-row">
            <span>{getGradeLabel(points)}</span>
            <button type="button">View Rubric</button>
          </div>
        </section>

        <section className="quick-assessment">
          <label>Quick Assessment</label>

          <div className="assessment-chips">
            {assessmentChips.map((chip) => (
              <button type="button" key={chip}>
                {chip}
              </button>
            ))}
          </div>
        </section>

        <section className="feedback-section">
          <div className="section-label-row">
            <label htmlFor="feedback">Instructor Feedback</label>

            <button type="button" aria-label="Voice input">
              <Icon name="mic" />
            </button>
          </div>

          <textarea
            id="feedback"
            rows="8"
            placeholder="Provide constructive feedback here..."
            defaultValue="Julian, your analysis of decentralized network resilience is exceptional. The comparison between the frameworks is well-articulated and backed by solid data. However, ensure that your citations follow the IEEE standard more strictly in the introduction. Overall, a very professional piece of work."
          />
        </section>

        <section className="private-notes">
          <div>
            <Icon name="lock" />
            <label htmlFor="private-note">Internal Notes (Faculty Only)</label>
          </div>

          <textarea
            id="private-note"
            rows="2"
            placeholder="Add a private note..."
          />
        </section>
      </div>

      <div className="grading-footer-actions">
        <button type="button" className="submit-grade-button">
          <span>Submit Grade</span>
          <Icon name="send" />
        </button>

        <div className="secondary-actions">
          <button type="button" className="save-draft-button">
            Save Draft
          </button>

          <button type="button" className="resubmit-button">
            Request Resubmission
          </button>
        </div>
      </div>
    </aside>
  );
}

function GradingFooter() {
  return (
    <footer className="grading-footer">
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