import React from 'react';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-page">
      {/* Header */}
      <header className="privacy-header">
        <div className="privacy-header-container">
          <div className="logo-section">
            <img src="/Aangan One Logo.svg" alt="Aanganone Logo" className="logo-icon" />
            <span className="logo-text">AanganOne</span>
          </div>
          <nav className="privacy-nav">
            <a href="/">← Back to Home</a>
          </nav>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <section className="privacy-policy">
        <div className="container">
          <div className="privacy-label">
            <div className="privacy-label-icon">
              <img src="/twemoji_house.svg" alt="House" className="badge-icon-img" />
            </div>
            <span>Privacy Policy</span>
          </div>
          <h1 className="section-title">Your Home, Your Data</h1>
          <p className="section-subtitle">At AanganOne, we believe that the privacy of your home extends to the digital tools you use to manage it. This Privacy Policy outlines how we collect, use, and protect your information.</p>
          
          <div className="privacy-content">
            <div className="privacy-intro">
              <div className="intro-badge">
                <span className="intro-badge-icon">🛡️</span>
                <span className="intro-badge-text">Data Fiduciary</span>
              </div>
              <h2 className="intro-title">Your Trusted Digital Custodian</h2>
              <p className="intro-description">Unlike others, we view ourselves not just as a software provider, but as a <strong>"Data Fiduciary"</strong> — a trusted custodian of your digital life.</p>
              <div className="intro-features">
                <div className="intro-feature">
                  <div className="intro-feature-icon">🔐</div>
                  <div className="intro-feature-text">
                    <strong>Enterprise Security</strong>
                    <p>Bank-level encryption and security protocols</p>
                  </div>
                </div>
                <div className="intro-feature">
                  <div className="intro-feature-icon">🤝</div>
                  <div className="intro-feature-text">
                    <strong>Trust & Transparency</strong>
                    <p>Clear policies on data usage and sharing</p>
                  </div>
                </div>
                <div className="intro-feature">
                  <div className="intro-feature-icon">⚖️</div>
                  <div className="intro-feature-text">
                    <strong>Legal Compliance</strong>
                    <p>DPDP Act 2023 compliant practices</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="privacy-section">
              <h2>1. Information We Collect (And Why)</h2>
              <p>We collect the following categories of personal data (as defined under the DPDP Act, 2023):</p>
              
              <div className="privacy-item">
                <h3>Identity Data</h3>
                <p><strong>What:</strong> Name, Flat/Unit Number, Vehicle Number, and Resident Type (Owner/Tenant)</p>
                <p><strong>Purpose:</strong> To verify your identity as a legitimate resident</p>
              </div>

              <div className="privacy-item">
                <h3>Contact Data</h3>
                <p><strong>What:</strong> Phone number and Email address</p>
                <p><strong>Purpose:</strong> To send Visitor notifications, OTPs for login, and maintenance invoices</p>
              </div>

              <div className="privacy-item">
                <h3>Visitor Data</h3>
                <p><strong>What:</strong> Names and phone numbers of guests you invite</p>
                <p><strong>Purpose:</strong> To generate Gate Passes and facilitate entry</p>
              </div>

              <div className="privacy-item">
                <h3>Financial Data</h3>
                <p><strong>What:</strong> Payment history and dues status</p>
                <p><strong>Note:</strong> We do NOT store full credit card or banking details; these are processed by our PCI-DSS compliant payment partners</p>
              </div>

              <div className="privacy-item">
                <h3>Device Data</h3>
                <p><strong>What:</strong> Device ID, IP address, and Operating System</p>
                <p><strong>Purpose:</strong> For security logs, fraud prevention, and app analytics</p>
              </div>
            </div>

            <div className="privacy-section">
              <h2>2. Permissions We Request</h2>
              
              <div className="privacy-item">
                <h3>Contacts (Optional)</h3>
                <p>We request access to your contacts solely to help you select a guest to invite without typing their number manually. This data is not synced to our servers unless you send an invite.</p>
              </div>

              <div className="privacy-item">
                <h3>Location (Optional)</h3>
                <p><strong>Approximate:</strong> Used to verify you are at the main gate for features like "Bluetooth Unlock"</p>
                <p><strong>Precise:</strong> Used strictly for the "Emergency SOS" feature to share your location with security guards during a crisis. We do not track your movement history</p>
              </div>

              <div className="privacy-item">
                <h3>Camera & Photos (Optional)</h3>
                <p>Used to allow you to upload photos to the Helpdesk (e.g., a photo of a broken pipe) or set a profile picture</p>
              </div>

              <div className="privacy-item">
                <h3>Notifications</h3>
                <p>Required to alert you when a visitor arrives</p>
              </div>
            </div>

            <div className="privacy-section">
              <h2>3. How We Share Your Data</h2>
              <p>We do not sell, trade, or rent your personal identification information to third-party ad networks. We share data only in the following strictly limited circumstances:</p>
              
              <div className="privacy-item">
                <h3>With your RWA/Management Committee</h3>
                <p>Your name, vehicle details, and dues status are shared with the Society Administration as part of the core ERP functionality</p>
              </div>

              <div className="privacy-item">
                <h3>With Service Providers</h3>
                <p>We share necessary data with cloud hosting providers (e.g., AWS/Google Cloud) and payment gateways (e.g., Razorpay/PayU) to operate the service. All providers are bound by strict Data Processing Agreements</p>
              </div>

              <div className="privacy-item">
                <h3>Legal Compliance</h3>
                <p>We may disclose data if required by law (e.g., a court order or request from law enforcement agencies)</p>
              </div>
            </div>

            <div className="privacy-section">
              <h2>4. Data Retention and Deletion (Right to be Forgotten)</h2>
              
              <div className="privacy-item">
                <h3>Visitor Logs</h3>
                <p>Data regarding daily visitors (names, entry/exit times) is automatically purged or anonymized after 180 days, ensuring your guest history does not become a permanent record</p>
              </div>

              <div className="privacy-item">
                <h3>Account Deletion</h3>
                <p>You may request the deletion of your account directly within the app settings. Upon deletion, your personal data will be removed from our active databases within 30 days, except for financial transaction records which must be retained for 7 years as per Indian Tax Laws</p>
              </div>
            </div>

            <div className="privacy-section">
              <h2>5. Security Measures</h2>
              <p>We implement industry-standard security measures including SSL/TLS encryption for data in transit and AES-256 encryption for sensitive data at rest. Access to personal data is restricted to authorized employees and verified Management Committee members only on a "need-to-know" basis.</p>
            </div>

            <div className="privacy-section">
              <h2>6. Contact Us</h2>
              <p>For any questions regarding this policy or to exercise your rights under the DPDP Act (including grievance redressal), please contact our Data Protection Officer (DPO):</p>
              
              <div className="contact-info-card">
                <div className="contact-detail">
                  <strong>Name:</strong> Manas Vadodaria
                </div>
                <div className="contact-detail">
                  <strong>Email:</strong> support@aanganone.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
