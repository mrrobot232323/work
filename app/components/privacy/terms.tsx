import React from 'react';
import './privacy.css';

export default function TermsOfService() {
  return (
    <div className="privacy-container">
      
      {/* HEADER */}
      <header className="privacy-header">
        <h1 className="privacy-title">
          TERMS & CONDITIONS
        </h1>
        <p className="privacy-subtitle">
          Orbies.in – by Secreteye Telematics Pvt Ltd • Last Updated: February 24, 2026
        </p>
        <p className="privacy-email">team@orbies.in</p>
      </header>

      {/* TERMS AND CONDITIONS */}
      <section id="terms" className="privacy-section">
        <div className="privacy-section-title-wrapper">
          <div className="privacy-indicator indicator-slate"></div>
          <h2 className="privacy-section-h2">Terms and Conditions</h2>
        </div>

        <div className="privacy-content">
          <p>Welcome to Orbies.in! These Terms and Conditions (“Terms”) govern your access to and use of the Orbies.in mobile application, its features, and related services. By downloading, accessing, or using Orbies.in you agree to these Terms, which form a legally binding agreement between you and Secreteye Telematics Pvt Ltd.</p>

          <div className="privacy-subsections">
            <div>
              <h3 className="privacy-subsection-h3">1. Eligibility</h3>
              <ul className="privacy-list">
                <li>You must be at least 18 years old to register for or use Orbies.</li>
                <li>You must provide accurate and complete information during registration.</li>
                <li>You agree to update your information promptly if it changes.</li>
              </ul>
            </div>

            <div>
              <h3 className="privacy-subsection-h3">2. User Conduct and Content</h3>
              <p>Orbies is designed for creative, humorous, and authentic engagement. You agree not to:</p>
              <ul className="privacy-list">
                <li>Post or transmit sexually explicit, abusive, or inappropriate content.</li>
                <li>Impersonate others or create fake accounts.</li>
                <li>Discriminate on the basis of race, gender, religion, etc.</li>
                <li>Spam or use Orbies for commercial purposes without permission.</li>
                <li>Violate any applicable laws.</li>
              </ul>
            </div>

            <div>
              <h3 className="privacy-subsection-h3">3. Ownership & Rights</h3>
              <p>Orbies’ branding and content are owned/licensed by Secreteye Telematics Pvt Ltd. Users retain ownership of their content but grant Orbies limited use rights to moderate and promote it.</p>
            </div>

            <div>
              <h3 className="privacy-subsection-h3">4. Liability & Indemnity</h3>
              <p>Orbies is provided "as-is" without warranties. Secreteye Telematics Pvt Ltd is not liable for user behavior, emotional harm, or disputes. You agree to indemnify Secreteye Telematics Pvt Ltd against claims arising from your use of Orbies.</p>
            </div>

            <div>
              <h3 className="privacy-subsection-h3">5. Governing Law</h3>
              <p>These Terms are governed by the laws of India. Disputes shall be subject to the courts of Jaipur, Rajasthan, India.</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="privacy-divider" />

      {/* DELETE ACCOUNT */}
      <section id="deletion" className="privacy-section">
        <div className="privacy-section-title-wrapper">
          <div className="privacy-indicator indicator-orange"></div>
          <h2 className="privacy-section-h2">Delete Account</h2>
        </div>

        <div className="privacy-content">
          <p>We value your control over your personal data. If you wish to delete your account, please follow these steps:</p>
          <ul className="privacy-list">
            <li><strong>In-App:</strong> You may delete your account directly within the app settings, which will remove your profile and associated data from our systems.</li>
            <li><strong>Email:</strong> You can send a request to <a href="mailto:team@orbies.in" className="privacy-link">team@orbies.in</a> from your registered email address.</li>
          </ul>
        </div>
      </section>

    </div>
  );
}
