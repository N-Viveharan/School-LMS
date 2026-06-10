import { useEffect, useState } from "react";
import "./TeacherLogin.css";

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCq7umPOaoHUoiKYP2_8VJ3AD4hxXYzrsJ10ddgHU6ojFxeegXjh7ERIjyMmLr3BRZcZlW70gOmDVU7V1JVVAXduXmGt6pBmzDl33HLmK-lvW5912Bv2eJHutkFXLsHFLg2lQ0z4GZE5GpGpQ3hWV7vJ5fL0m0n70l4bZeyghY9pj-ZZFUl7v9_YAc-Bqa4aX6V8DY7_8ww51Q8HFD_-x7nK345B8ZIaw8vwCttU8PqQoSktoMWFuHEf4-HiyYWb6gKxpCG-_WWWVE";

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

export default function TeacherLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.title = "Teacher Login | EduPremium";

    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="teacher-login-page">
      <HeroPanel />

      <main className={`login-panel ${visible ? "is-visible" : ""}`}>
        <MobileLogo />

        <div className="login-card">
          <header className="login-header">
            <h3>Welcome Back</h3>
            <p>
              Please enter your academic credentials to manage your digital
              classroom.
            </p>
          </header>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">School Email</label>

              <div className="input-wrap">
                <Icon name="mail" className="input-icon" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="teacher@institution.edu"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="label-row">
                <label htmlFor="password">Password</label>
                <a href="#" onClick={preventLink}>
                  Forgot Password?
                </a>
              </div>

              <div className="input-wrap">
                <Icon name="lock" className="input-icon" />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((current) => !current)}
                >
                  <Icon name={showPassword ? "visibility_off" : "visibility"} />
                </button>
              </div>
            </div>

            <label className="remember-row" htmlFor="remember">
              <input id="remember" type="checkbox" />
              <span>Remember this device for 30 days</span>
            </label>

            <button type="submit" className="login-button">
              <Icon name="login" />
              Secure Login
            </button>
          </form>

          <footer className="login-footer">
            <p>
              New to the faculty?
              <a href="#" onClick={preventLink}>
                Sign up as a Teacher
              </a>
            </p>

            <div className="footer-links">
              <a href="#" onClick={preventLink}>
                Privacy Policy
              </a>
              <a href="#" onClick={preventLink}>
                Technical Support
              </a>
            </div>
          </footer>
        </div>

        <div className="system-branding">
          <p>
            <Icon name="verified" />
            Academic Excellence System v4.2
          </p>
        </div>
      </main>
    </div>
  );
}

function HeroPanel() {
  return (
    <section className="hero-panel">
      <img src={heroImage} alt="Inspiring modern university library" />

      <div className="hero-gradient">
        <div className="hero-content">
          <div className="hero-brand">
            <Icon name="school" />
            <h1>EduPremium</h1>
          </div>

          <h2>Inspiring the Next Generation.</h2>

          <p>
            Access your comprehensive teaching suite, student analytics, and
            collaborative curriculum tools in one secure space.
          </p>
        </div>
      </div>

      <div className="grid-pattern" />
    </section>
  );
}

function MobileLogo() {
  return (
    <div className="mobile-logo">
      <Icon name="school" />
      <span>EduPremium</span>
    </div>
  );
}