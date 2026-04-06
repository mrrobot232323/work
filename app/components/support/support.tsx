import React from 'react';
import './support.css';

export default function Support() {
  return (
    <div className="support-container">
      
      {/* TITLE SECTION */}
      <h1 className="support-title">Orbee Support</h1>
      <p className="support-subtitle">
        Need help with the Orbee app? If you experience any issues or have questions about using Orbee, contact our support team.
      </p>

      {/* CONTACT SECTION */}
      <div className="support-contact-section">
        <a href="mailto:teams@orbies.in" className="support-email-link">
          teams@orbies.in
        </a>
      </div>

      {/* COMMON ISSUES LIST */}
      <div className="support-issues-section">
        <h2 className="support-section-title">Common issues</h2>
        <ul className="support-list">
          <li className="support-list-item">Login problems</li>
          <li className="support-list-item">Account deletion</li>
          <li className="support-list-item">Reporting users</li>
          <li className="support-list-item">Bug reports</li>
        </ul>
      </div>

      {/* FOOTER MESSAGE */}
      <footer className="support-footer">
        <p>We usually respond within 24-48 hours. Thank you for your patience!</p>
      </footer>

    </div>
  );
}
