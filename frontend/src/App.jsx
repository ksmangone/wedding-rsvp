import { useState } from "react";
import "./App.css";

function App() {
  const [accessCode, setAccessCode] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const cleanedCode = accessCode.trim().toUpperCase();

    if (!cleanedCode) {
      setMessage("Please enter the RSVP code from your invitation.");
      return;
    }

    setMessage(
      "Thanks — RSVP lookup will be connected in the next phase of the project."
    );
  }

  return (
    <main className="page-shell">
      <section className="hero-card" aria-labelledby="page-title">
        <div className="eyebrow">Mangone Wedding RSVP</div>

        <h1 id="page-title">We’re so glad you’re here.</h1>

        <p className="intro">
          Please enter the access code that came with your invitation to view and
          complete the RSVP for you or your household.
        </p>

        <form className="rsvp-form" onSubmit={handleSubmit}>
          <label htmlFor="access-code">Invitation access code</label>

          <div className="input-row">
            <input
              id="access-code"
              type="text"
              value={accessCode}
              onChange={(event) => setAccessCode(event.target.value)}
              placeholder="Example: ROSE-7K42"
              autoComplete="off"
            />

            <button type="submit">Continue</button>
          </div>
        </form>

        {message && (
          <p className="form-message" role="status" aria-live="polite">
            {message}
          </p>
        )}

        <div className="details-panel">
          <div>
            <span className="detail-label">Date</span>
            <span className="detail-value">January 16th, 2027</span>
          </div>

          <div>
            <span className="detail-label">Location</span>
            <span className="detail-value">274 South St, Hingham, MA</span>
          </div>

          <div>
            <span className="detail-label">RSVP by</span>
            <span className="detail-value">December 16th, 2026</span>
          </div>
        </div>

        <p className="support-note">
          Having trouble? Please contact us (Keaton & Julie) directly and we’ll be happy
          to help.
        </p>
      </section>
    </main>
  );
}

export default App;