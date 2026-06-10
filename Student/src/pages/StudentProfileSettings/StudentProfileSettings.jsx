import { useEffect, useState } from "react";
import "./StudentProfileSettings.css";

const topAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAMWPpMd9WV8r6TOgVgJbxX7O5SkxBLbylyHiOKNK7xAB0zD7pQryGA56_3V0CjULnlZnzUnGgwmpa4m14HRHjpe3kYNoGEwhcWi7BXVItIXr8TO1fKTcSsECvQnw5NvirNdfbhwaI_svyIlOpJqTZfGJvS2bR-3uUKarcVDDLmBvEbX2YgY4kLF-_nfASpvF4VicNZVxwyQ_KWBrJ4j_cEZ4Yl11G36skIhB2tU_K9iYhFiBdxiXV8-NUDnHTaIOCI1UB5kFIKdvg";

const profileAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDJVLIFPRSVU8NkbQVhyphCsVUYF6U8gioAdBegcuXntRtyaGWCZtkkH1K24n-Ifx--j_IM_POmY8-e9WkQw6AWEFQ44ACi_6xFW5pHvupV6EkEHAYmCnIZetJTj-Xn57bqkjjCZcHKaNyEfvFdlaTvJaPC6LT-9Z5eM5l36ePZgEJPFb_fA1jfs0FEV_YgMCUv2CRRro2JCtdOO6CZB9X8oX_IW_zZgw5N38mPoFIkv94ZT2DImXPqg3GQp54u1KN-Y4a5t-tSNC8";

const sideLinks = [
  { icon: "dashboard", label: "Dashboard" },
  { icon: "school", label: "Courses" },
  { icon: "assignment", label: "Assignments" },
  { icon: "group", label: "Students" },
  { icon: "calendar_today", label: "Schedule" },
  { icon: "analytics", label: "Analytics" },
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

export default function StudentProfileSettings() {
  const [activeTab, setActiveTab] = useState("details");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.title = "EduPremium | Student Profile & Settings";
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);

    return () => {
      document.documentElement.classList.remove("dark");
    };
  }, [darkMode]);

  return (
    <div className="student-settings-page">
      <TopNav />

      <div className="settings-shell">
        <SideNav />

        <main className="settings-main">
          <PageHeader />

          <div className="settings-grid">
            <ProfileColumn />
            <SettingsPanel
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          </div>
        </main>
      </div>

      <SettingsFooter />
    </div>
  );
}

function TopNav() {
  return (
    <header className="top-nav">
      <div className="top-left">
        <span className="brand-name">EduPremium</span>

        <div className="top-search">
          <Icon name="search" />
          <input type="text" placeholder="Search courses or resources..." />
        </div>
      </div>

      <div className="top-actions">
        <button type="button" aria-label="Notifications">
          <Icon name="notifications" />
        </button>

        <button type="button" aria-label="Help">
          <Icon name="help" />
        </button>

        <button type="button" aria-label="Apps">
          <Icon name="apps" />
        </button>

        <button className="top-avatar" type="button" aria-label="Profile">
          <img src={topAvatar} alt="User profile avatar" />
        </button>
      </div>
    </header>
  );
}

function SideNav() {
  return (
    <aside className="side-nav">
      <nav className="side-links">
        {sideLinks.map((link) => (
          <a href="#" onClick={preventLink} key={link.label} className="side-link">
            <Icon name={link.icon} />
            <span>{link.label}</span>
          </a>
        ))}
      </nav>

      <div className="side-bottom">
        <a href="#" onClick={preventLink} className="side-link active">
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

function PageHeader() {
  return (
    <div className="page-header">
      <h1>Student Profile & Settings</h1>
      <p>
        Manage your personal information, academic identity, and portal
        preferences.
      </p>
    </div>
  );
}

function ProfileColumn() {
  return (
    <aside className="profile-column">
      <section className="profile-card">
        <div className="profile-image-wrap">
          <div className="profile-image">
            <img src={profileAvatar} alt="Student profile" />
          </div>

          <div className="profile-image-overlay">
            <Icon name="photo_camera" />
          </div>
        </div>

        <h2>Alexandria Sterling</h2>
        <p className="student-id">ID: STU-882941-B</p>

        <div className="grade-pill">
          <Icon name="verified" />
          Grade 12 Senior
        </div>

        <hr />

        <div className="profile-stats">
          <div>
            <span>Current GPA</span>
            <strong>3.94</strong>
          </div>

          <div>
            <span>Major</span>
            <p>Computer Science</p>
          </div>

          <div>
            <span>Joined</span>
            <p>Sept 2021</p>
          </div>
        </div>
      </section>

      <section className="account-card">
        <h3>Account Status</h3>

        <div className="account-status">
          <div className="status-icon">
            <Icon name="check_circle" />
          </div>

          <div>
            <p>Active Student</p>
            <span>Fees Paid Through 2024</span>
          </div>
        </div>
      </section>
    </aside>
  );
}

function SettingsPanel({
  activeTab,
  setActiveTab,
  darkMode,
  setDarkMode,
}) {
  return (
    <section className="settings-panel">
      <div className="tabs">
        <button
          type="button"
          className={activeTab === "details" ? "active" : ""}
          onClick={() => setActiveTab("details")}
        >
          Personal Details
        </button>

        <button
          type="button"
          className={activeTab === "security" ? "active" : ""}
          onClick={() => setActiveTab("security")}
        >
          Security
        </button>

        <button
          type="button"
          className={activeTab === "preferences" ? "active" : ""}
          onClick={() => setActiveTab("preferences")}
        >
          Preferences
        </button>
      </div>

      {activeTab === "details" && <PersonalDetails />}
      {activeTab === "security" && <SecuritySettings />}
      {activeTab === "preferences" && (
        <PreferencesSettings
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      )}
    </section>
  );
}

function PersonalDetails() {
  return (
    <section className="settings-card">
      <div className="form-grid">
        <FormField label="First Name">
          <input type="text" defaultValue="Alexandria" />
        </FormField>

        <FormField label="Last Name">
          <input type="text" defaultValue="Sterling" />
        </FormField>

        <FormField label="Email Address">
          <input type="email" defaultValue="a.sterling@edupremium.edu" />
        </FormField>

        <FormField label="Phone Number">
          <input type="tel" defaultValue="+1 (555) 012-3456" />
        </FormField>
      </div>

      <FormField label="Biography">
        <textarea
          rows="4"
          defaultValue="Passionate senior student pursuing Computer Science. Lead programmer for the Robotics Club and editor for the campus Tech Review. Interested in AI and ethical tech development."
        />
      </FormField>

      <div className="form-actions end">
        <button type="button" className="primary-action">
          Save Changes
        </button>
      </div>
    </section>
  );
}

function SecuritySettings() {
  return (
    <section className="settings-card">
      <div className="section-heading">
        <Icon name="lock_reset" />
        <h3>Change Password</h3>
      </div>

      <div className="password-fields">
        <FormField label="Current Password">
          <input type="password" placeholder="••••••••" />
        </FormField>

        <FormField label="New Password">
          <input type="password" placeholder="Min. 8 characters" />
        </FormField>

        <FormField label="Confirm New Password">
          <input type="password" placeholder="Confirm" />
        </FormField>
      </div>

      <div className="info-box">
        <Icon name="info" />
        <p>
          Password must contain at least one uppercase letter, one number, and
          one special character.
        </p>
      </div>

      <div className="security-actions">
        <button type="button" className="text-danger-button">
          Two-Factor Authentication
        </button>

        <button type="button" className="primary-action">
          Update Password
        </button>
      </div>
    </section>
  );
}

function PreferencesSettings({ darkMode, setDarkMode }) {
  return (
    <section className="settings-card">
      <div className="preferences-group">
        <h3>Appearance & Display</h3>

        <div className="preference-box">
          <div className="preference-left">
            <Icon name="dark_mode" />
            <div>
              <p>Dark Mode</p>
              <span>Reduce eye strain in low-light environments.</span>
            </div>
          </div>

          <Switch checked={darkMode} onChange={setDarkMode} />
        </div>
      </div>

      <div className="preferences-group">
        <h3>Notifications</h3>

        <div className="notification-options">
          <PreferenceRow
            icon="mail"
            label="Email Course Updates"
            defaultChecked
          />

          <PreferenceRow
            icon="notifications_active"
            label="Push Assignment Reminders"
            defaultChecked
          />

          <PreferenceRow icon="forum" label="Forum Discussion Alerts" />
        </div>
      </div>

      <div className="form-actions">
        <button type="button" className="primary-action">
          Apply Preferences
        </button>
      </div>
    </section>
  );
}

function PreferenceRow({ icon, label, defaultChecked = false }) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <div className="preference-row">
      <div className="preference-left">
        <Icon name={icon} />
        <p>{label}</p>
      </div>

      <Switch checked={checked} onChange={setChecked} />
    </div>
  );
}

function Switch({ checked, onChange }) {
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      <span className="switch-slider" />
    </label>
  );
}

function FormField({ label, children }) {
  return (
    <label className="form-field">
      <span>{label}</span>
      {children}
    </label>
  );
}

function SettingsFooter() {
  return (
    <footer className="settings-footer">
      <div className="settings-footer-inner">
        <div className="footer-brand">
          <span>EduPremium</span>
          <p>| Professional Academic Portal</p>
        </div>

        <nav>
          {footerLinks.map((link) => (
            <a href="#" onClick={preventLink} key={link}>
              {link}
            </a>
          ))}
        </nav>

        <p className="copyright">
          © 2024 EduPremium Academy. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}