import React from 'react';
import './privacy.css';

export default function Privacy() {
  return (
    <div className="privacy-container">
      
      {/* HEADER */}
      <header className="privacy-header">
        <h1 className="privacy-title">
          LEGAL DOCUMENTATION
        </h1>
        <p className="privacy-subtitle">
          Orbies.in – by Secreteye Telematics Pvt Ltd • Last Updated: February 24, 2026
        </p>
        <p className="privacy-email">team@orbies.in</p>
      </header>

      {/* PRIVACY POLICY */}
      <section id="privacy" className="privacy-section">
        <div className="privacy-section-title-wrapper">
          <div className="privacy-indicator indicator-indigo"></div>
          <h2 className="privacy-section-h2">Privacy Policy</h2>
        </div>

        <div className="privacy-content">
          <p className="italic">Welcome to Orbies.in! Your privacy is important to us. This Privacy Policy explains what data we collect, how we use it, and your rights regarding your personal information when you use our app and services.</p>
          
          <div className="privacy-subsections">
            <div>
              <h3 className="privacy-subsection-h3">1. Information We Collect</h3>
              <p>When you use Orbies, we collect the following categories of information:</p>
              <ul className="privacy-list">
                <li><strong>Personal Information:</strong> Name, phone number, date of birth, gender, gender preference, account login details and identifiers.</li>
                <li><strong>Location Data:</strong> Approximate location based on IP or device location services only to provide relevant local content and matches, never precise GPS data.</li>
                <li><strong>User-Generated Content:</strong> Answers to daily prompts, messages and interactions with other users, any content you share through the app.</li>
                <li><strong>Device Information:</strong> Device type, operating system version, and app version, crash reports and diagnostics for performance and security monitoring.</li>
                <li><strong>Usage Data:</strong> Information on how you interact with the app (time spent, features used).</li>
              </ul>
            </div>

            <div>
              <h3 className="privacy-subsection-h3">2. How We Use Your Data</h3>
              <ul className="privacy-list">
                <li>Provide and improve Orbies’ services and user experience</li>
                <li>Match you with other users based on your prompt responses</li>
                <li>Communicate important updates and respond to support requests</li>
                <li>Protect our platform against abuse, spam, and fraudulent activity</li>
                <li>Comply with legal requirements and law enforcement requests</li>
              </ul>
              <p className="privacy-important">Important: We do not sell or rent your personal information to third parties or advertisers.</p>
            </div>

            <div>
              <h3 className="privacy-subsection-h3">3. Data Sharing and Storage</h3>
              <p>Your data is stored securely on servers with encryption both at rest and in transit.</p>
              <p>We do not share your personal information or user-generated content with advertisers or marketing partners.</p>
              <p>We may share your information with third-party service providers who help us operate the app, but only under strict confidentiality agreements.</p>
              <p>If required by law or to protect the rights and safety of Orbies or its users, we may disclose your information to legal authorities or in response to legal processes.</p>
            </div>

            <div>
              <h3 className="privacy-subsection-h3">4. Your Rights and Choices</h3>
              <ul className="privacy-list">
                <li><strong>Account Management:</strong> You can update your personal details or preferences at any time through your account settings.</li>
                <li><strong>Account Deletion:</strong> You may delete your account within the app, which will remove your profile and associated data from our systems.</li>
                <li><strong>Data Access:</strong> You can request access to the personal data we hold about you.</li>
                <li><strong>Opt-Out:</strong> For certain data usages like in-app notifications or promotional content (if any), you may opt out via your settings.</li>
              </ul>
            </div>

            <div>
              <h3 className="privacy-subsection-h3">5. Children's Privacy</h3>
              <p>Orbies is intended solely for users 18 years of age or older. We do not knowingly collect or solicit personal information from anyone under 18. If you believe we have collected data from a child under 18, please contact us immediately so we can delete that information.</p>
            </div>

            <div>
              <h3 className="privacy-subsection-h3">6. Security</h3>
              <p>We take reasonable technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction.</p>
            </div>

            <div>
              <h3 className="privacy-subsection-h3">7. Updates to This Policy</h3>
              <p>We may update this Privacy Policy from time to time. When we do, we’ll update the “Last Updated” date and notify you via the app or email if necessary.</p>
            </div>

            <div>
              <h3 className="privacy-subsection-h3">8. Contact Us</h3>
              <p>If you have any questions or concerns about this policy or your data, or for subscription-related questions, please contact: <a href="mailto:team@orbies.in" className="privacy-link">team@orbies.in</a></p>
            </div>
          </div>
        </div>
      </section>

      <hr className="privacy-divider" />

      {/* CHILD SAFETY */}
      <section id="safety" className="privacy-section">
        <div className="privacy-section-title-wrapper">
          <div className="privacy-indicator indicator-rose"></div>
          <h2 className="privacy-section-h2">Child Safety Standards</h2>
        </div>

        <div className="privacy-content">
          <p><strong>Commitment to a Safe Social Space</strong></p>
          <p>At Orbies, we take child safety extremely seriously. We are committed to creating a safe and respectful platform for all users and have implemented strict policies and tools to prevent and respond to any instance of child sexual abuse material (CSAM) or exploitation (CSAE).</p>
          
          <div className="privacy-subsections">
            <div>
              <h3 className="privacy-subsection-h3">1. User Eligibility</h3>
              <p>Orbies is strictly intended for users aged 18 and above. During sign-up, users are required to confirm their age. Any accounts found to be created by or impersonating minors will be permanently removed.</p>
            </div>

            <div>
              <h3 className="privacy-subsection-h3">2. Reporting & Moderation Tools</h3>
              <p>Users can report inappropriate content, messages, or profiles directly from within the app. Reports are reviewed manually by our moderation team within 24 hours. We also provide tools for users to block or remove others from their interactions.</p>
            </div>

            <div>
              <h3 className="privacy-subsection-h3">3. Content Review & Prevention</h3>
              <p>We have implemented manual moderation to detect and act on any content that violates our safety policies. Profiles, prompts, and messages are monitored through user reports and moderation sweeps.</p>
            </div>

            <div>
              <h3 className="privacy-subsection-h3">4. Law Enforcement Collaboration</h3>
              <p>We comply with all applicable child safety laws and cooperate with regional and national authorities. In cases involving suspected CSAM, we preserve evidence and report the matter as required by law.</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="privacy-divider" />

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

      {/* FOOTER */}
      <footer className="privacy-footer">
        <div>
          <h2 className="footer-brand-name">Orbies.in</h2>
          <p className="footer-tagline">Authentic social connections. No filters, no fakes, just you.</p>
        </div>
        <p className="footer-copyright-text">
          © 2026 Secreteye Telematics Pvt Ltd. All rights reserved.
        </p>
      </footer>

    </div>
  );
}
