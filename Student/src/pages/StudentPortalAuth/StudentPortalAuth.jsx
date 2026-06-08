import { useEffect, useRef, useState } from "react";
import "./StudentPortalAuth.css";

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAZOhI8MY39vBb_KyxTysog6X0jC6e_C-aOL14gH-NUfmgILdzO0uSb95SiWyXXPGc75mfzdyDKDV6E1Ln2Yjbh9o-_0DydmER4OVJrvAgv2KfZeDaouNE8xVYMyCvJX8W_6F4HWV-WtK0gVdIfpN22B_G8AZDDAq-rVqZfuaWWJmL4oXtIjBuS4A8M6YmBHODf5SU_OTUjABdKCW673xBadukPnnf_i-U_9fxFSMTNo7GQlO9Cwx-PoKxkEr_xcj8n-va0MTXLuTM";

function Icon({ name, className = "" }) {
  return (
    <span className={`material-symbols-outlined ${className}`} aria-hidden="true">
      {name}
    </span>
  );
}

function preventLink(event) {
  event.preventDefault();
}

export default function StudentPortalAuth() {
  const [authMode, setAuthMode] = useState("login");
  const [isFading, setIsFading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const heroImgRef = useRef(null);
  const fadeTimer = useRef(null);

  useEffect(() => {
    document.title = "EduPremium LMS | Student Portal";

    const handleMouseMove = (event) => {
      if (!heroImgRef.current) return;

      const moveX = (event.clientX - window.innerWidth / 2) * 0.01;
      const moveY = (event.clientY - window.innerHeight / 2) * 0.01;

      heroImgRef.current.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (fadeTimer.current) clearTimeout(fadeTimer.current);
    };
  }, []);

  const toggleAuth = (mode) => {
    if (mode === authMode) return;

    setIsFading(true);

    fadeTimer.current = setTimeout(() => {
      setAuthMode(mode);
      setIsFading(false);
    }, 200);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="student-auth-page">
      {/* Left Hero Side */}
      <section className="auth-hero">
        <img
          ref={heroImgRef}
          src={heroImage}
          alt="Students in a modern university library"
          className="auth-hero-image"
        />

        <div className="auth-hero-overlay" />

        <div className="auth-hero-content">
          <div className="auth-brand auth-brand-light">
            <div className="auth-brand-icon auth-brand-icon-light">
              <Icon name="school" className="filled-icon" />
            </div>
            <span>EduPremium LMS</span>
          </div>

          <div className="auth-hero-text">
            <h1>Empowering the Leaders of Tomorrow</h1>

            <p>
              Join over 50,000 students worldwide in a prestigious digital
              environment designed for academic rigor and career success.
            </p>

            <div className="auth-hero-stats">
              <div>
                <strong>98%</strong>
                <span>Graduation Rate</span>
              </div>

              <div>
                <strong>120+</strong>
                <span>Partner Institutions</span>
              </div>
            </div>
          </div>

          <div className="auth-verified">
            <Icon name="verified" />
            <span>Accredited Global Excellence System</span>
          </div>
        </div>
      </section>

      {/* Right Auth Side */}
      <section className="auth-panel">
        <div className="auth-card">
          {/* Mobile Logo */}
          <div className="mobile-brand auth-brand">
            <div className="auth-brand-icon">
              <Icon name="school" />
            </div>
            <span>EduPremium LMS</span>
          </div>

          {/* Toggle */}
          <div className="auth-toggle">
            <div
              className={`auth-toggle-bg ${
                authMode === "signup" ? "is-signup" : ""
              }`}
            />

            <button
              type="button"
              onClick={() => toggleAuth("login")}
              className={`auth-toggle-button ${
                authMode === "login" ? "is-active" : ""
              }`}
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => toggleAuth("signup")}
              className={`auth-toggle-button ${
                authMode === "signup" ? "is-active" : ""
              }`}
            >
              Sign Up
            </button>
          </div>

          <div className={`auth-form-wrapper ${isFading ? "is-fading" : ""}`}>
            {authMode === "login" ? (
              <LoginForm
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                onSubmit={handleSubmit}
              />
            ) : (
              <SignupForm onSubmit={handleSubmit} />
            )}
          </div>

          <InstitutionalSSO />

          <div className="auth-copyright">
            <p>
              © 2024 EduPremium Global LMS. All rights reserved.
              <br />
              Authorized Access Only.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function LoginForm({ showPassword, setShowPassword, onSubmit }) {
  return (
    <form className="auth-form" onSubmit={onSubmit}>
      <div className="auth-form-header">
        <h2>Welcome Back</h2>
        <p>Enter your credentials to access your student portal.</p>
      </div>

      <div className="form-fields">
        <div className="form-group">
          <label>School Email</label>

          <div className="input-wrapper">
            <Icon name="mail" className="input-icon" />
            <input
              type="email"
              placeholder="student@edu-premium.com"
              autoComplete="email"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Password</label>

          <div className="input-wrapper">
            <Icon name="lock" className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              autoComplete="current-password"
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              <Icon name={showPassword ? "visibility_off" : "visibility"} />
            </button>
          </div>
        </div>
      </div>

      <div className="form-options">
        <label className="remember-label">
          <input type="checkbox" />
          <span>Remember me</span>
        </label>

        <a href="#" onClick={preventLink}>
          Forgot password?
        </a>
      </div>

      <button type="submit" className="primary-auth-button">
        Secure Login
      </button>
    </form>
  );
}

function SignupForm({ onSubmit }) {
  return (
    <form className="auth-form" onSubmit={onSubmit}>
      <div className="auth-form-header">
        <h2>Join the Academy</h2>
        <p>Create your student account to begin your journey.</p>
      </div>

      <div className="form-fields">
        <div className="form-group">
          <label>Full Name</label>

          <div className="input-wrapper">
            <Icon name="person" className="input-icon" />
            <input type="text" placeholder="Alex Rivers" autoComplete="name" />
          </div>
        </div>

        <div className="form-group">
          <label>School Email</label>

          <div className="input-wrapper">
            <Icon name="mail" className="input-icon" />
            <input
              type="email"
              placeholder="alex.rivers@edu-premium.com"
              autoComplete="email"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Grade / Class Selection</label>

          <div className="input-wrapper">
            <Icon name="layers" className="input-icon" />

            <select defaultValue="">
              <option disabled value="">
                Select your current grade
              </option>
              <option value="9">Grade 9 - Freshman</option>
              <option value="10">Grade 10 - Sophomore</option>
              <option value="11">Grade 11 - Junior</option>
              <option value="12">Grade 12 - Senior</option>
              <option value="grad">Graduate Studies</option>
            </select>

            <Icon name="expand_more" className="select-arrow" />
          </div>
        </div>

        <div className="form-group">
          <label>Set Password</label>

          <div className="input-wrapper">
            <Icon name="lock" className="input-icon" />
            <input
              type="password"
              placeholder="Minimum 8 characters"
              autoComplete="new-password"
            />
          </div>
        </div>
      </div>

      <p className="terms-text">
        By signing up, you agree to our{" "}
        <a href="#" onClick={preventLink}>
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" onClick={preventLink}>
          Privacy Policy
        </a>
        .
      </p>

      <button type="submit" className="primary-auth-button">
        Create Account
      </button>
    </form>
  );
}

function InstitutionalSSO() {
  return (
    <div className="sso-section">
      <p>Or continue with institutional SSO</p>

      <div className="sso-buttons">
        <button type="button" className="sso-button">
          <GoogleIcon />
          <span>Google</span>
        </button>

        <button type="button" className="sso-button">
          <MicrosoftIcon />
          <span>Microsoft</span>
        </button>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg className="sso-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function MicrosoftIcon() {
  return (
    <svg className="sso-icon microsoft-icon" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.071 5.35c-1.127 0-2.316.59-3.044 1.48-.727-.89-1.917-1.48-3.043-1.48-1.968 0-3.564 1.597-3.564 3.565 0 2.457 2.21 4.457 5.55 7.484l1.057.962 1.057-.962c3.34-3.027 5.55-5.027 5.55-7.484 0-1.968-1.597-3.565-3.564-3.565z" />
    </svg>
  );
}