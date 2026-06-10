import { useEffect, useRef, useState } from "react";
import "./FacultyRegistration.css";

const facultyAvatars = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqV9kQcB19KWzhGymtmqu1bndnZAopUz3QQiUwZMfKgXByBscpX9IpxiXHtSJSc-jO0tAveqQWq5MrlcZWjPO4-2jbtBpgFMezvK2SzNECvpZOJQN-_9b9KNuiHszItVKo7ZC-jWDaRN90-YPA9cqoqzl6GilAZY47jTJCjqdPMhYZzUw4ZP-dMYApLCLCz90XwBYcHggJbYVNi4xM4azEE-I4InQTGYwb5-X6gxdLsS891W5loKw4bsFSEVQ2D_7v-GpXgOU14DE",
    alt: "Female teacher portrait",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-MsEkHV3kfwe8Bqrybwq4YH_77ZlAi0-JEIio7J4kSzaIELHd_L2XYVPCoo-XLwemGlZqhJPBV7ew_YQcFqrszclhx9ZWUxQVXqlgdJ_ghKF0xWVEoLJZO097UwuxfE0GS_4DnTdzxSK3JwJwYeg6srXjjDCqL-K1dHvCemetemE0NKmhEg7t4lUPmkwnT1xkp3rQ0AjajRsI-X4ZnvXD4B1OkEqhCXI5sDBsPh3aVuV4-3BxcATNNTCXeoXoH8ln3x7dgFvG4Og",
    alt: "Male professor portrait",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6ynzDmTG8O439PmhdrRFKkeeU6BLt_kRb4qf95M7jzVGqpM3hkrVwiAe49vkix-sozo0CTC6mGcoBpf2xinVlQVzuix0PE7x7Eadex5HTPrLacg7zHjkhw3lR5NbDt85iysx3XE1AHZ8EbRF3B46gA_VXg0c7et--_HMImPyzl6NzTObaMVQe2u5TpMw0LlFNFCisGPQf-8_hoxmpaaBqbPyjY7RyLgW6LtKryE_cXrVmOK3QPAp8T3msOJ1eYZ6JvnW4aTwFBzE",
    alt: "Young teacher portrait",
  },
];

const stepTitles = ["Faculty Onboarding", "Academic Profile", "Secure Account"];

const footerLinks = [
  "Privacy Policy",
  "Terms of Service",
  "Help Center",
  "School Website",
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

export default function FacultyRegistration() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitState, setSubmitState] = useState("idle");
  const submitTimer = useRef(null);

  useEffect(() => {
    document.title = "Join Faculty | EduPremium LMS";

    return () => {
      if (submitTimer.current) clearTimeout(submitTimer.current);
    };
  }, []);

  const totalSteps = 3;
  const progressWidth = `${(currentStep / totalSteps) * 100}%`;

  const handleNext = () => {
    setCurrentStep((step) => Math.min(step + 1, totalSteps));
  };

  const handlePrevious = () => {
    setCurrentStep((step) => Math.max(step - 1, 1));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitState("loading");

    submitTimer.current = setTimeout(() => {
      setSubmitState("success");
      alert("Onboarding submitted! Welcome to the faculty.");
    }, 1500);
  };

  return (
    <div className="faculty-registration-page">
      <main className="registration-main">
        <div className="background-glow glow-one" />
        <div className="background-glow glow-two" />

        <section className="registration-shell">
          <VisualPanel />

          <section className="form-panel">
            <MobileBrand />

            <div className="form-header">
              <h3>{stepTitles[currentStep - 1]}</h3>

              <div className="progress-row">
                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{ width: progressWidth }}
                  />
                </div>

                <span>
                  Step {currentStep} of {totalSteps}
                </span>
              </div>
            </div>

            <form className="signup-form" onSubmit={handleSubmit}>
              {currentStep === 1 && <StepOne />}
              {currentStep === 2 && <StepTwo />}
              {currentStep === 3 && <StepThree />}

              <div className="form-buttons">
                {currentStep < totalSteps ? (
                  <button
                    className="primary-button"
                    type="button"
                    onClick={handleNext}
                  >
                    <span>Continue</span>
                    <Icon name="arrow_forward" />
                  </button>
                ) : (
                  <button
                    className={`primary-button ${
                      submitState === "success" ? "success" : ""
                    }`}
                    type="submit"
                    disabled={submitState === "loading" || submitState === "success"}
                  >
                    {submitState === "idle" && (
                      <>
                        <span>Join Faculty</span>
                        <Icon name="how_to_reg" />
                      </>
                    )}

                    {submitState === "loading" && (
                      <>
                        <Icon name="progress_activity" className="spin" />
                        <span>Joining...</span>
                      </>
                    )}

                    {submitState === "success" && (
                      <>
                        <Icon name="check_circle" filled />
                        <span>Welcome!</span>
                      </>
                    )}
                  </button>
                )}

                <button
                  className={`previous-button ${
                    currentStep === 1 ? "is-hidden" : ""
                  }`}
                  type="button"
                  onClick={handlePrevious}
                >
                  Back to previous step
                </button>
              </div>
            </form>

            <div className="signin-text">
              <p>
                Already have a faculty account?
                <a href="#" onClick={preventLink}>
                  Sign In
                </a>
              </p>
            </div>
          </section>
        </section>
      </main>

      <RegistrationFooter />
    </div>
  );
}

function VisualPanel() {
  return (
    <aside className="visual-panel">
      <div className="visual-content">
        <div className="visual-brand">
          <Icon name="school" />
          <h1>EduPremium</h1>
        </div>

        <h2>Elevate Your Teaching Experience</h2>

        <p>
          Join an elite network of educators leveraging state-of-the-art tools to
          personalize student success and streamline academic workflows.
        </p>
      </div>

      <div className="faculty-proof">
        <div className="avatar-stack">
          {facultyAvatars.map((avatar) => (
            <img key={avatar.src} src={avatar.src} alt={avatar.alt} />
          ))}
        </div>

        <p>Over 4,500 faculty members already onboard.</p>
      </div>

      <div className="decorative-grid" />
    </aside>
  );
}

function MobileBrand() {
  return (
    <div className="mobile-brand">
      <Icon name="school" />
      <span>EduPremium</span>
    </div>
  );
}

function StepOne() {
  return (
    <div className="step-pane">
      <div className="field-stack">
        <FormField
          label="Full Name"
          id="full_name"
          icon="person"
          type="text"
          placeholder="Dr. Sarah Johnson"
        />

        <FormField
          label="Institutional Email"
          id="email"
          icon="mail"
          type="email"
          placeholder="s.johnson@university.edu"
        />
      </div>
    </div>
  );
}

function StepTwo() {
  return (
    <div className="step-pane">
      <div className="field-stack">
        <label className="form-field" htmlFor="subject">
          <span>Subject Specialization</span>

          <div className="input-wrapper">
            <Icon name="book" className="input-icon" />

            <select id="subject" name="subject" defaultValue="" required>
              <option disabled value="">
                Select specialization...
              </option>
              <option value="mathematics">Mathematics</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="biology">Biology</option>
              <option value="literature">Literature & Arts</option>
              <option value="computer_science">Computer Science</option>
              <option value="history">History & Social Studies</option>
            </select>

            <Icon name="keyboard_arrow_down" className="select-icon" />
          </div>
        </label>

        <FormField
          label="Assigned Grade/Class"
          id="grade"
          icon="groups"
          type="text"
          placeholder="e.g. Senior Year - Group B"
        />
      </div>
    </div>
  );
}

function StepThree() {
  return (
    <div className="step-pane">
      <div className="field-stack">
        <FormField
          label="Security Password"
          id="password"
          icon="lock"
          type="password"
          placeholder="••••••••••••"
        />

        <p className="password-hint">
          Must be at least 12 characters with symbols.
        </p>

        <label className="terms-row" htmlFor="terms">
          <input id="terms" type="checkbox" required />

          <span>
            I agree to the{" "}
            <a href="#" onClick={preventLink}>
              Academic Conduct Policy
            </a>{" "}
            and{" "}
            <a href="#" onClick={preventLink}>
              Terms of Service
            </a>
            .
          </span>
        </label>
      </div>
    </div>
  );
}

function FormField({ label, id, icon, type, placeholder }) {
  return (
    <label className="form-field" htmlFor={id}>
      <span>{label}</span>

      <div className="input-wrapper">
        <Icon name={icon} className="input-icon" />

        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          required
        />
      </div>
    </label>
  );
}

function RegistrationFooter() {
  return (
    <footer className="registration-footer">
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