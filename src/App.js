import React, { useState } from 'react';
import './App.css';

function App() {
  const [expandedFAQ, setExpandedFAQ] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    societyName: '',
    contactPersonName: '',
    email: '',
    contactNumber: '',
    city: '',
    societySize: '',
    additionalMessage: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for registering! We will contact you soon.');
  };

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Aanganone and how does it work?",
      answer: "Aanganone is a comprehensive society management platform that digitizes all aspects of community living. It connects residents, staff, and management through a unified app, enabling features like complaint tracking, announcements, event management, amenity booking, and more. Everything happens in real-time with complete transparency."
    },
    {
      question: "How long does it take to set up Aanganone for my society?",
      answer: "Setting up Aanganone is quick and straightforward. Typically, it takes just a few days to get your entire society up and running. Our team provides complete onboarding support, including data migration, staff training, and resident registration. Most societies are fully operational within 3-5 business days."
    },
    {
      question: "Is my society data secure on Aanganone?",
      answer: "Yes, data security is our top priority. Aanganone uses industry-standard encryption, secure cloud storage, and regular security audits. All data is backed up automatically and stored in compliance with data protection regulations. We never share your society's information with third parties."
    },
    {
      question: "Can residents access Aanganone on their phones?",
      answer: "Absolutely! Aanganone is available as a mobile app for both iOS and Android devices. Residents can download the app, register with their society, and access all features including complaints, announcements, events, and amenity bookings right from their smartphones."
    },
    {
      question: "What happens if we need help or face technical issues?",
      answer: "We provide 24/7 dedicated support to all our societies. Our support team is available via phone, email, and in-app chat. We also offer on-site training sessions and regular check-ins to ensure your society gets the most out of the platform."
    },
    {
      question: "How much does Aanganone cost?",
      answer: "Aanganone offers flexible pricing plans based on your society's size and specific requirements. We provide transparent pricing with no hidden costs. Contact us for a free demo and customized pricing quote that fits your society's budget."
    },
    {
      question: "Can we customize features according to our society needs?",
      answer: "Yes, Aanganone is highly customizable. We understand that every society has unique requirements. Our team works with you to configure the platform according to your specific needs, including custom workflows, approval processes, and feature preferences."
    },
    {
      question: "What if our staff is not tech-savvy?",
      answer: "No worries! Aanganone is designed to be user-friendly and intuitive. We provide comprehensive training sessions for all staff members, including step-by-step guides and video tutorials. Our support team is always available to assist, and most staff members become comfortable with the platform within a few days."
    }
  ];

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo-section">
            <img src="/WhatsApp Image 2025-11-23 at 23.56.05_7b54941a.jpg" alt="Aanganone Logo" className="logo-icon" />
          </div>
          <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span className={mobileMenuOpen ? "hamburger open" : "hamburger"}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
            <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)}>
              <span>×</span>
            </button>
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#features" onClick={() => setMobileMenuOpen(false)}>Feature</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bubble-1"></div>
        <div className="hero-bubble-2"></div>
        <div className="hero-bubble-3"></div>
        <div className="hero-bubble-4"></div>
        <div className="hero-bubble-5"></div>
        <div className="container">
          <div className="hero-badge">
            <div className="badge-icon">
              <img src="/twemoji_house.svg" alt="House" className="badge-icon-img" />
            </div>
            <span className="badge-text">Smart Society Management</span>
          </div>
          <h1 className="hero-title">Your Society, Simplified.</h1>
          <p className="hero-description">
            Aanganone is your all-in-one society management platform that connects residents, staff, and management seamlessly. From complaints to communication everything happens digitally and transparently.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Request a Demo
              <span className="arrow">→</span>
            </a>
            <a href="#features" className="btn-secondary">
              Explore a features
            </a>
          </div>
        </div>
        <div className="hero-illustration">
          <img src="/AAN 1 (1).jpg" alt="Diverse community members" className="hero-image" />
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose">
        <div className="container">
          <div className="why-choose-badge">
            <span>Why Choose </span>
            <span className="badge-logo-text">
              <img src="/WhatsApp Image 2025-11-23 at 23.56.05_7b54941a.jpg" alt="Aanganone" className="badge-logo-img" />
            </span>
          </div>
          <h2 className="section-title">Why Societies Choose Aanganone?</h2>
          <p className="section-subtitle">Traditional society management creates unnecessary friction. We eliminate it.</p>
          
          <div className="problem-solution-grid">
            <div className="ps-card">
              <div className="ps-item problem">
                <div className="ps-icon">
                  <img src="/simple-line-icons_close.svg" alt="Close" className="ps-icon-img" />
                </div>
                <span>Manual paperwork and endless phone calls</span>
              </div>
              <div className="ps-item solution">
                <div className="ps-icon">
                  <img src="/healthicons_yes-outline.svg" alt="Check" className="ps-icon-img" />
                </div>
                <span>Digital workflows and instant notifications</span>
              </div>
            </div>
            <div className="ps-card">
              <div className="ps-item problem">
                <div className="ps-icon">
                  <img src="/simple-line-icons_close.svg" alt="Close" className="ps-icon-img" />
                </div>
                <span>Lost complaints and missed follow-ups</span>
              </div>
              <div className="ps-item solution">
                <div className="ps-icon">
                  <img src="/healthicons_yes-outline.svg" alt="Check" className="ps-icon-img" />
                </div>
                <span>Automated tracking with real-time updates</span>
              </div>
            </div>
            <div className="ps-card">
              <div className="ps-item problem">
                <div className="ps-icon">
                  <img src="/simple-line-icons_close.svg" alt="Close" className="ps-icon-img" />
                </div>
                <span>Lack of transparency in society finances</span>
              </div>
              <div className="ps-item solution">
                <div className="ps-icon">
                  <img src="/healthicons_yes-outline.svg" alt="Check" className="ps-icon-img" />
                </div>
                <span>Clear financial records accessible to all</span>
              </div>
            </div>
            <div className="ps-card">
              <div className="ps-item problem">
                <div className="ps-icon">
                  <img src="/simple-line-icons_close.svg" alt="Close" className="ps-icon-img" />
                </div>
                <span>Coordination chaos between residents and staff</span>
              </div>
              <div className="ps-item solution">
                <div className="ps-icon">
                  <img src="/healthicons_yes-outline.svg" alt="Check" className="ps-icon-img" />
                </div>
                <span>Centralized communication platform</span>
              </div>
            </div>
          </div>

          <div className="stats-section">
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Societies Connected</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">25k+</div>
              <div className="stat-label">Active Residents</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-left">
            <div className="about-card">
              <span className="about-label">About</span>
              <div className="about-layout">
                <div className="about-timeline">
                  <div className="about-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="white"/>
                    </svg>
                  </div>
                  <div className="about-line-wrapper">
                    <div className="about-line"></div>
                    <div className="about-line-node"></div>
                  </div>
                </div>
                <div className="about-content-right">
                  <div className="about-main-card">
                    <div className="about-logo">
                      <img src="/WhatsApp Image 2025-11-23 at 23.56.05_7b54941a.jpg" alt="Aanganone" className="about-logo-img" />
                    </div>
                    <p className="about-description">
                      Aanganone is an AI-powered society management system built to make community living smarter, more connected, and more peaceful. Whether it's handling complaints, scheduling staff, managing finances, or organizing events – Aanganone does it all in one place.
                    </p>
                  </div>
                  <div className="about-bottom">
                    <div className="about-wave-card">
                      <div className="wave-bars">
                        <span className="wave-bar wave-bar-1"></span>
                        <span className="wave-bar wave-bar-2"></span>
                        <span className="wave-bar wave-bar-3"></span>
                        <span className="wave-bar wave-bar-4"></span>
                        <span className="wave-bar wave-bar-5"></span>
                        <span className="wave-bar wave-bar-6"></span>
                        <span className="wave-bar wave-bar-7"></span>
                        <span className="wave-bar wave-bar-8"></span>
                        <span className="wave-bar wave-bar-9"></span>
                        <span className="wave-bar wave-bar-10"></span>
                      </div>
                    </div>
                    <div className="about-stats">
                      <div className="about-stats-number">100+</div>
                      <div className="about-stats-label">Society Trust</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-right">
            <div className="feature-card">
              <div className="feature-icon">
                <span>✓</span>
              </div>
              <div className="feature-text">Connect residents, staff, and secretaries digitally.</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <span>✓</span>
              </div>
              <div className="feature-text">Automate complaints, notices, and approvals.</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <span>✓</span>
              </div>
              <div className="feature-text">Manage staff, vendors, and finances in one place.</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <span>✓</span>
              </div>
              <div className="feature-text">Plan and organize society events effortlessly.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="features-container">
          <div className="features-label">
            <div className="label-icon">⚙️</div>
            <span>Core Features</span>
          </div>
          <h2 className="features-title">Everything Your Society Needs — All in One App</h2>
          <div className="features-wrapper">
            <div className="features-grid">
              {/* Column 1 - Left */}
              <article className="feature-card feature-complaint">
                <div className="feature-icon feature-icon-yellow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="9" r="3" fill="#fbbf24"/>
                    <circle cx="15" cy="9" r="3" fill="#fbbf24"/>
                    <circle cx="12" cy="12" r="1.5" fill="#fbbf24"/>
                    <circle cx="15" cy="7" r="1" fill="#fbbf24"/>
                  </svg>
                </div>
                <h3 className="feature-title">Complaint Box</h3>
                <p className="feature-desc">Residents raise issues instantly, and the secretary assigns them to staff. Track the full resolution journey from start to finish.</p>
              </article>
              <article className="feature-card feature-announcements">
                <div className="feature-icon feature-icon-purple">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L4 6V12C4 16.97 7.16 21.5 12 22C16.84 21.5 20 16.97 20 12V6L12 2Z" fill="white"/>
                    <path d="M8 10L12 14L16 10" stroke="#a855f7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="12" cy="8" r="1" fill="#a855f7"/>
                    <path d="M9 15L11 17L15 13" stroke="#a855f7" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </div>
                <h3 className="feature-title">Announcements</h3>
                <p className="feature-desc">Broadcast important updates like water cut-offs, meetings, or festival info in seconds.</p>
              </article>
              {/* Column 2 - Middle */}
              <article className="feature-card feature-visitor">
                <div className="feature-icon feature-icon-pink">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L4 7V10C4 15.55 7.16 20.74 12 22C16.84 20.74 20 15.55 20 10V7L12 2Z" fill="white"/>
                    <path d="M9 12L11 14L15 10" stroke="#fb5da5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <h3 className="feature-title">Visitor & Pre-Approval</h3>
                <p className="feature-desc">Approve guests or deliveries before they arrive — smooth security flow.</p>
              </article>
              <article className="feature-card feature-finance">
                <div className="feature-icon feature-icon-green">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="4" width="20" height="16" rx="2" fill="white"/>
                    <path d="M2 8H22" stroke="#22c55e" stroke-width="2"/>
                    <circle cx="7" cy="12" r="1.5" fill="#22c55e"/>
                    <path d="M12 10L14 12L18 8" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <h3 className="feature-title">Finance Management</h3>
                <p className="feature-desc">Keep full control of funds and expenses manually — transparent and easy.</p>
              </article>
              {/* Column 3 - Right */}
              <article className="feature-card feature-events">
                <div className="feature-icon feature-icon-blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="18" rx="2" fill="white"/>
                    <path d="M16 2V6M8 2V6M3 10H21M9 14H15" stroke="#3b82f6" stroke-width="2" stroke-linecap="round"/>
                    <path d="M12 14L12 18" stroke="#3b82f6" stroke-width="2" stroke-linecap="round"/>
                    <circle cx="17" cy="6" r="1.5" fill="#3b82f6"/>
                  </svg>
                </div>
                <h3 className="feature-title">Events & Celebrations</h3>
                <p className="feature-desc">Plan and manage upcoming events with RSVP and reminders for everyone.</p>
              </article>
              <article className="feature-card feature-amenities">
                <div className="feature-icon feature-icon-pink-alt">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="6" height="6" rx="1" fill="#fb5da5"/>
                    <rect x="12" y="3" width="6" height="6" rx="1" fill="#fb5da5"/>
                    <rect x="21" y="3" width="6" height="6" rx="1" fill="#fb5da5"/>
                    <rect x="3" y="12" width="6" height="6" rx="1" fill="#fb5da5"/>
                    <rect x="12" y="12" width="6" height="6" rx="1" fill="#fb5da5"/>
                    <rect x="21" y="12" width="6" height="6" rx="1" fill="#fb5da5"/>
                    <rect x="3" y="21" width="6" height="6" rx="1" fill="#fb5da5"/>
                    <rect x="12" y="21" width="6" height="6" rx="1" fill="#fb5da5"/>
                    <rect x="21" y="21" width="6" height="6" rx="1" fill="#fb5da5"/>
                  </svg>
                </div>
                <h3 className="feature-title">Amenities Booking</h3>
                <p className="feature-desc">Reserve clubhouse, garden, or gym slots without paperwork or phone calls.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="results">
        <div className="container">
          <div className="results-label">
            <div className="results-label-icon">
              <img src="/twemoji_house.svg" alt="House" className="badge-icon-img" />
            </div>
            <span>Impact & Benefits</span>
          </div>
          <h2 className="section-title">Measurable Results for Your Society</h2>
          <p className="section-subtitle">Join hundreds of societies already experiencing the transformation</p>
          
          <div className="results-grid">
            <div className="result-card">
              <div className="result-icon-wrapper">
                <img src="/Frame 76.svg" alt="Time" className="result-icon-img" />
              </div>
              <div className="result-percentage-label">
                <span className="result-percentage">75%</span>
                <span className="result-label">Time Saved</span>
              </div>
              <div className="result-desc">Streamline operations and eliminate manual paperwork with automated workflows.</div>
            </div>
            <div className="result-card">
              <div className="result-icon-wrapper">
                <img src="/Frame 76.svg" alt="Time" className="result-icon-img" />
              </div>
              <div className="result-percentage-label">
                <span className="result-percentage">85%</span>
                <span className="result-label">Fewer Complaints</span>
              </div>
              <div className="result-desc">Improve resident satisfaction through faster response times and transparent communication.</div>
            </div>
            <div className="result-card">
              <div className="result-icon-wrapper">
                <img src="/Frame 76.svg" alt="Time" className="result-icon-img" />
              </div>
              <div className="result-percentage-label">
                <span className="result-percentage">90%</span>
                <span className="result-label">Cost Reduction</span>
              </div>
              <div className="result-desc">Cut operational costs by automating routine tasks and reducing administrative overhead.</div>
            </div>
            <div className="result-card">
              <div className="result-icon-wrapper">
                <img src="/Frame 76.svg" alt="Time" className="result-icon-img" />
              </div>
              <div className="result-percentage-label">
                <span className="result-percentage">100%</span>
                <span className="result-label">Digital Transformation</span>
              </div>
              <div className="result-desc">Complete shift to paperless operations with real-time updates and cloud-based access.</div>
            </div>
          </div>

          <div className="results-features">
            <div className="result-feature">
              <div className="feature-icon-wrapper">
                <img src="/Frame 84.svg" alt="Icon" className="feature-icon-img" />
              </div>
              <div className="feature-content">
                <h4 className="feature-title">Cloud-Based Access</h4>
                <p className="feature-text">Access from anywhere, anytime on any device</p>
              </div>
            </div>
            <div className="result-feature">
              <div className="feature-icon-wrapper">
                <img src="/Frame 84.svg" alt="Icon" className="feature-icon-img" />
              </div>
              <div className="feature-content">
                <h4 className="feature-title">Real-Time Updates</h4>
                <p className="feature-text">Instant notifications keep everyone informed</p>
              </div>
            </div>
            <div className="result-feature">
              <div className="feature-icon-wrapper">
                <img src="/Frame 84.svg" alt="Icon" className="feature-icon-img" />
              </div>
              <div className="feature-content">
                <h4 className="feature-title">Easy Onboarding</h4>
                <p className="feature-text">Get your entire society up and running in days</p>
              </div>
            </div>
            <div className="result-feature">
              <div className="feature-icon-wrapper">
                <img src="/Frame 84.svg" alt="Icon" className="feature-icon-img" />
              </div>
              <div className="feature-content">
                <h4 className="feature-title">Dedicated Support</h4>
                <p className="feature-text">Technical assistance whenever you need it</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="about" className="testimonials">
        <div className="container">
          <div className="testimonials-label">
            <div className="testimonials-label-icon">
              <img src="/twemoji_house.svg" alt="House" className="badge-icon-img" />
            </div>
            <span>Society Reviews</span>
          </div>
          <h2 className="section-title">How Aanganone Makes a Difference</h2>
          <div className="testimonials-wrapper">
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="quote-icon">"</div>
                <div className="testimonial-header">
                  <h3 className="society-name">Shaligram</h3>
                  <span className="society-suffix">Society</span>
                </div>
                <p className="testimonial-text">
                  At Shaligram Society, the secretary used to handle 50+ calls weekly for maintenance and updates. After Aanganone, everything is digital residents submit complaints in-app, staff get instant assignments, and updates are tracked in real-time.
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar"></div>
                  <div className="author-info">
                    <div className="author-role">Secretary</div>
                    <div className="author-society">Shaligram Society</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="quote-icon">"</div>
                <div className="testimonial-header">
                  <h3 className="society-name">Indraprasth</h3>
                  <span className="society-suffix">Society</span>
                </div>
                <p className="testimonial-text">
                  Managing finances and vendor payments was a nightmare at Indraprasth Society. With Aanganone, all transactions are transparent, automated, and accessible. Our residents can track every rupee spent, and we've reduced accounting errors by 90%.
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar"></div>
                  <div className="author-info">
                    <div className="author-role">Secretary</div>
                    <div className="author-society">Indraprasth Society</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="quote-icon">"</div>
                <div className="testimonial-header">
                  <h3 className="society-name">Satyagruh</h3>
                  <span className="society-suffix">Society</span>
                </div>
                <p className="testimonial-text">
                  Event management used to be chaotic at Satyagruh Society. Now with Aanganone, residents can book amenities, RSVP to events, and get instant notifications. Our community engagement has increased significantly, and everything runs smoothly.
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar"></div>
                  <div className="author-info">
                    <div className="author-role">Secretary</div>
                    <div className="author-society">Satyagruh Society</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonials-nav">
              <button className="nav-arrow nav-prev">‹</button>
              <button className="nav-arrow nav-next">›</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="container">
          <div className="faq-label">
            <div className="faq-label-icon">
              <img src="/twemoji_house.svg" alt="House" className="badge-icon-img" />
            </div>
            <span>FAQ'S</span>
          </div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Everything you need to know about Aanganone</p>
          
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${expandedFAQ === index ? 'expanded' : ''}`}>
                <div 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-toggle">
                    {expandedFAQ === index ? (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                      </svg>
                    ) : (
                      '+'
                    )}
                  </span>
                </div>
                {expandedFAQ === index && (
                  <div className="faq-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="contact" className="registration">
        <div className="container">
          <div className="registration-label">
            <div className="registration-label-icon">
              <img src="/twemoji_house.svg" alt="House" className="badge-icon-img" />
            </div>
            <span>Get Started</span>
          </div>
          <h2 className="section-title">Register Your Society</h2>
          <p className="section-subtitle">Fill out the form below and we'll get in touch to set up your society.</p>
          
          <div className="registration-contact-cards">
            <div className="contact-card">
              <div className="contact-icon contact-icon-blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="#3b82f6"/>
                </svg>
              </div>
              <div className="contact-info">
                <div className="contact-title">Free Demo</div>
                <div className="contact-detail">+91 76546 48592</div>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon contact-icon-blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#3b82f6"/>
                </svg>
              </div>
              <div className="contact-info">
                <div className="contact-title">Email</div>
                <div className="contact-detail">sales@aagnonone.com</div>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon contact-icon-blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#3b82f6"/>
                </svg>
              </div>
              <div className="contact-info">
                <div className="contact-title">Local Expertise</div>
                <div className="contact-detail">Serving societies across India</div>
              </div>
            </div>
          </div>

          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Society Name *</label>
                <input
                  type="text"
                  name="societyName"
                  value={formData.societyName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Contact Person Name *</label>
                <input
                  type="text"
                  name="contactPersonName"
                  value={formData.contactPersonName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Contact Number *</label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Society Size *</label>
                <input
                  type="text"
                  name="societySize"
                  value={formData.societySize}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>Additional Message (Optional)</label>
              <textarea
                name="additionalMessage"
                value={formData.additionalMessage}
                onChange={handleInputChange}
                rows="4"
                placeholder="Tell us more about your requirements..."
              ></textarea>
            </div>
            <button type="submit" className="btn-primary btn-large">Request Demo</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left-section">
              <div className="footer-brand">
                <h3>AANGANONE SPACE</h3>
              </div>
              <div className="footer-socials">
                <h4>SOCIALS</h4>
                <div className="social-links">
                  <a href="https://www.linkedin.com/company/aanganone" target="_blank" rel="noopener noreferrer">Linkedin</a>
                </div>
              </div>
            </div>
            <div className="footer-divider-vertical"></div>
            <div className="footer-right-section">
              <div className="footer-about">
                <h4>ABOUT</h4>
                <p>Aanganone: Outsmarting Traditional Society Management. Securing Tomorrow At Aanganone, We Don't Just Defend We Outsmart</p>
              </div>
              <div className="footer-navigation">
                <h4>NAVIGATION</h4>
                <div className="footer-nav">
                  <a href="#home">Home</a>
                  <span className="bullet">•</span>
                  <a href="#about">About</a>
                  <span className="bullet">•</span>
                  <a href="#features">Features</a>
                  <span className="bullet">•</span>
                  <a href="#contact">Contact</a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-divider-horizontal"></div>
          <div className="footer-bottom">
            <p>Copyright 2025 - Aanganone space All rights reserved</p>
            <p>Powered by <a href="https://www.codelixitsolutions.com/" target="_blank" rel="noopener noreferrer" style={{color: '#473F52', textDecoration: 'none'}}>Codelix IT Solutions Pvt. Ltd.</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

