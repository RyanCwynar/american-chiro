'use client';

import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Demo Banner */}
      <div className="demo-banner">
        ✨ This is a free redesign mockup created by Byldr — <a href="https://ryancwynar.github.io">Learn More</a>
      </div>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <a href="#" className="logo">
            <span className="logo-icon">🌿</span>
            <span className="logo-text">American Chiro</span>
          </a>
          
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#team">Our Team</a>
            <a href="#insurance">Insurance</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="tel:954-974-3456" className="nav-cta">
            Call Now
          </a>

          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">Serving Margate Since 1986</div>
          <h1>Where Science and Nature Unite With Care</h1>
          <p>Experience holistic healing at American Chiropractic & Acupuncture Center. Our interdisciplinary approach combines chiropractic care, acupuncture, and natural therapies to help you achieve optimal health.</p>
          <div className="hero-buttons">
            <a href="tel:954-974-3456" className="btn btn-primary">
              📞 (954) 974-3456
            </a>
            <a href="#services" className="btn btn-secondary">
              Our Services
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-placeholder">
            <span>🌿</span>
            <p>Holistic Healing</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="section-container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive holistic healthcare designed to maximize your healing potential</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🦴</div>
              <h3>Chiropractic Care</h3>
              <p>Expert spinal adjustments and treatments to restore mobility, reduce pain, and correct imbalances throughout the body.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">📍</div>
              <h3>Acupuncture</h3>
              <p>Traditional acupuncture therapy to promote natural healing, reduce pain, and restore balance to your body&apos;s energy flow.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🚗</div>
              <h3>Auto Accident Injuries</h3>
              <p>Specialized care for whiplash, back pain, and other injuries sustained in automobile accidents. Get the treatment you need to recover.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">💼</div>
              <h3>Work Injuries</h3>
              <p>Comprehensive treatment for work-related injuries to help you get back to your job safely and quickly.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🌱</div>
              <h3>Holistic Wellness</h3>
              <p>Natural, effective methods to achieve optimal health without drugs or surgery. We focus on treating the whole person.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">💆</div>
              <h3>Pain Management</h3>
              <p>Relief from back pain, neck pain, headaches, and other chronic conditions using proven natural therapies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-container">
          <div className="about-grid">
            <div className="about-content">
              <h2>Proudly Serving the Community Since 1986</h2>
              <p>For nearly 40 years, American Chiropractic & Acupuncture Center has been helping patients of all ages in Margate and surrounding communities achieve optimal health through natural, effective methods.</p>
              <p>Our interdisciplinary approach combines chiropractic care, acupuncture, and complementary therapies. By understanding each patient&apos;s unique needs, our doctors tailor individual treatment programs to achieve the highest level of wellness.</p>
              <ul className="about-features">
                <li>✓ Natural healing without drugs or surgery</li>
                <li>✓ Personalized treatment plans</li>
                <li>✓ Multiple board-certified doctors</li>
                <li>✓ Most insurance plans accepted</li>
              </ul>
            </div>
            <div className="about-image">
              <div className="about-image-placeholder">
                <span>🏥</span>
                <p>40 Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team">
        <div className="section-container">
          <div className="section-header">
            <h2>Meet Our Doctors</h2>
            <p>Experienced, caring professionals dedicated to your wellness</p>
          </div>
          
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">
                <span>👩‍⚕️</span>
              </div>
              <h3>Dr. Marcia Sasso</h3>
              <p className="team-title">Doctor of Chiropractic</p>
              <p>Providing expert chiropractic and holistic care to patients in the Margate community.</p>
            </div>
            
            <div className="team-card">
              <div className="team-avatar">
                <span>👩‍⚕️</span>
              </div>
              <h3>Dr. Debra Rabideau</h3>
              <p className="team-title">Doctor of Chiropractic</p>
              <p>Specializing in natural healing methods and personalized treatment plans.</p>
            </div>
            
            <div className="team-card">
              <div className="team-avatar">
                <span>👩‍⚕️</span>
              </div>
              <h3>Dr. Jillian Duquette</h3>
              <p className="team-title">Doctor of Chiropractic</p>
              <p>Committed to helping patients achieve optimal health through comprehensive care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section id="insurance" className="insurance">
        <div className="section-container">
          <div className="section-header">
            <h2>Insurance We Accept</h2>
            <p>We work with most major insurance providers to make care accessible</p>
          </div>
          
          <div className="insurance-grid">
            <div className="insurance-item">Blue Cross Blue Shield</div>
            <div className="insurance-item">Aetna</div>
            <div className="insurance-item">Cigna</div>
            <div className="insurance-item">Humana (PPO)</div>
            <div className="insurance-item">Medicare Part B</div>
            <div className="insurance-item">HealthSun</div>
            <div className="insurance-item">AvMed</div>
            <div className="insurance-item">Meritain</div>
          </div>
          
          <p className="insurance-note">Insurance not listed? Many plans have out-of-network benefits. Call us with your card information and we&apos;ll check your coverage!</p>
        </div>
      </section>

      {/* Hours Section */}
      <section className="hours">
        <div className="section-container">
          <div className="hours-grid">
            <div className="hours-content">
              <h2>Hours of Operation</h2>
              <div className="hours-list">
                <div className="hours-item">
                  <span>Monday</span>
                  <span>9:00 AM - 3:00 PM</span>
                </div>
                <div className="hours-item">
                  <span>Tuesday</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="hours-item">
                  <span>Wednesday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="hours-item">
                  <span>Thursday</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="hours-item">
                  <span>Friday</span>
                  <span>9:00 AM - 1:00 PM</span>
                </div>
                <div className="hours-item">
                  <span>Saturday</span>
                  <span>9:00 AM - 1:00 PM</span>
                </div>
                <div className="hours-item closed">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
            <div className="hours-cta">
              <h3>Ready to Feel Better?</h3>
              <p>Contact us today to schedule your appointment and start your journey to optimal health.</p>
              <a href="tel:954-974-3456" className="btn btn-primary">
                📞 Call (954) 974-3456
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="section-container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contact Us</h2>
              <p>We&apos;re here to help you on your path to wellness. Reach out today!</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <strong>Address</strong>
                    <p>Margate, FL 33063</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div>
                    <strong>Phone</strong>
                    <p><a href="tel:954-974-3456">(954) 974-3456</a></p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">📠</span>
                  <div>
                    <strong>Fax</strong>
                    <p>(954) 974-3568</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <h3>Send Us a Message</h3>
              {formSubmitted ? (
                <div className="form-success">
                  <span>✓</span>
                  <p>Thank you! We&apos;ll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                  <textarea
                    placeholder="How can we help you?"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  ></textarea>
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="section-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-icon">🌿</span>
                <span className="logo-text">American Chiropractic</span>
              </div>
              <p>Where Science and Nature Unite With Care</p>
              <p className="footer-since">Proudly serving Margate since 1986</p>
            </div>
            
            <div className="footer-links">
              <h4>Quick Links</h4>
              <a href="#services">Services</a>
              <a href="#about">About Us</a>
              <a href="#team">Our Team</a>
              <a href="#insurance">Insurance</a>
              <a href="#contact">Contact</a>
            </div>
            
            <div className="footer-contact">
              <h4>Contact</h4>
              <p>Margate, FL 33063</p>
              <p><a href="tel:954-974-3456">(954) 974-3456</a></p>
              <p>Fax: (954) 974-3568</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2026 American Chiropractic & Acupuncture Center. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Tracking Pixel */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var params = new URLSearchParams(window.location.search);
              var ref = params.get('ref');
              if (ref) {
                var img = new Image();
                img.src = 'https://convex-actions.byldr.co/track?ref=' + encodeURIComponent(ref) + '&url=' + encodeURIComponent(window.location.href);
              }
            })();
          `,
        }}
      />

      <style jsx>{`
        /* Demo Banner */
        .demo-banner {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: linear-gradient(135deg, #059669 0%, #10b981 100%);
          color: white;
          text-align: center;
          padding: 0.5rem 1rem;
          font-size: 0.85rem;
          font-weight: 500;
          z-index: 1001;
        }
        .demo-banner a {
          color: white;
          text-decoration: underline;
        }

        /* Navigation */
        .nav {
          position: fixed;
          top: 36px;
          left: 0;
          right: 0;
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          z-index: 1000;
          padding: 1rem 2rem;
        }
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: #059669;
          font-weight: 700;
          font-size: 1.25rem;
        }
        .logo-icon {
          font-size: 1.5rem;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-links a {
          color: #374151;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-links a:hover {
          color: #059669;
        }
        .nav-cta {
          background: #059669;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          text-decoration: none;
          font-weight: 600;
          transition: background 0.2s;
        }
        .nav-cta:hover {
          background: #047857;
        }
        .mobile-menu {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }
        .mobile-menu span {
          width: 24px;
          height: 2px;
          background: #374151;
          border-radius: 2px;
        }

        /* Hero */
        .hero {
          padding: 10rem 2rem 5rem;
          background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          max-width: 1400px;
          margin: 0 auto;
          align-items: center;
        }
        .hero-badge {
          display: inline-block;
          background: #059669;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .hero h1 {
          font-size: 3rem;
          font-weight: 800;
          color: #111827;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }
        .hero p {
          font-size: 1.25rem;
          color: #4b5563;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .hero-buttons {
          display: flex;
          gap: 1rem;
        }
        .btn {
          padding: 1rem 2rem;
          border-radius: 9999px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
          display: inline-block;
        }
        .btn-primary {
          background: #059669;
          color: white;
        }
        .btn-primary:hover {
          background: #047857;
        }
        .btn-secondary {
          background: white;
          color: #059669;
          border: 2px solid #059669;
        }
        .btn-secondary:hover {
          background: #059669;
          color: white;
        }
        .hero-image-placeholder, .about-image-placeholder {
          background: white;
          border-radius: 1rem;
          padding: 4rem;
          text-align: center;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }
        .hero-image-placeholder span, .about-image-placeholder span {
          font-size: 6rem;
          display: block;
          margin-bottom: 1rem;
        }
        .hero-image-placeholder p, .about-image-placeholder p {
          color: #6b7280;
          font-weight: 600;
        }

        /* Sections */
        .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 800;
          color: #111827;
          margin-bottom: 1rem;
        }
        .section-header p {
          font-size: 1.25rem;
          color: #6b7280;
        }

        /* Services */
        .services {
          padding: 6rem 0;
          background: white;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .service-card {
          background: #f9fafb;
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }
        .service-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        .service-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 0.75rem;
        }
        .service-card p {
          color: #6b7280;
          line-height: 1.6;
        }

        /* About */
        .about {
          padding: 6rem 0;
          background: #f9fafb;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .about-content h2 {
          font-size: 2.5rem;
          font-weight: 800;
          color: #111827;
          margin-bottom: 1.5rem;
        }
        .about-content p {
          color: #4b5563;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }
        .about-features {
          list-style: none;
          padding: 0;
        }
        .about-features li {
          color: #059669;
          font-weight: 600;
          padding: 0.5rem 0;
        }

        /* Team */
        .team {
          padding: 6rem 0;
          background: white;
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .team-card {
          text-align: center;
          padding: 2rem;
        }
        .team-avatar {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-size: 3rem;
        }
        .team-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 0.25rem;
        }
        .team-title {
          color: #059669;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .team-card > p:last-child {
          color: #6b7280;
        }

        /* Insurance */
        .insurance {
          padding: 6rem 0;
          background: linear-gradient(135deg, #059669 0%, #10b981 100%);
          color: white;
        }
        .insurance .section-header h2, .insurance .section-header p {
          color: white;
        }
        .insurance-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .insurance-item {
          background: rgba(255,255,255,0.2);
          padding: 1.25rem;
          border-radius: 0.5rem;
          text-align: center;
          font-weight: 600;
        }
        .insurance-note {
          text-align: center;
          opacity: 0.9;
        }

        /* Hours */
        .hours {
          padding: 6rem 0;
          background: #f9fafb;
        }
        .hours-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .hours-content h2 {
          font-size: 2rem;
          font-weight: 800;
          color: #111827;
          margin-bottom: 2rem;
        }
        .hours-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .hours-item {
          display: flex;
          justify-content: space-between;
          padding: 0.75rem 0;
          border-bottom: 1px solid #e5e7eb;
        }
        .hours-item.closed span:last-child {
          color: #ef4444;
        }
        .hours-cta {
          background: white;
          padding: 3rem;
          border-radius: 1rem;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          text-align: center;
        }
        .hours-cta h3 {
          font-size: 1.75rem;
          font-weight: 800;
          color: #111827;
          margin-bottom: 1rem;
        }
        .hours-cta p {
          color: #6b7280;
          margin-bottom: 2rem;
        }

        /* Contact */
        .contact {
          padding: 6rem 0;
          background: white;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }
        .contact-info h2 {
          font-size: 2.5rem;
          font-weight: 800;
          color: #111827;
          margin-bottom: 1rem;
        }
        .contact-info > p {
          color: #6b7280;
          margin-bottom: 2rem;
        }
        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .contact-item {
          display: flex;
          gap: 1rem;
        }
        .contact-icon {
          font-size: 1.5rem;
        }
        .contact-item strong {
          color: #111827;
          display: block;
          margin-bottom: 0.25rem;
        }
        .contact-item p {
          color: #6b7280;
        }
        .contact-item a {
          color: #059669;
          text-decoration: none;
        }
        .contact-form-container {
          background: #f9fafb;
          padding: 2rem;
          border-radius: 1rem;
        }
        .contact-form-container h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 1.5rem;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .contact-form input, .contact-form textarea {
          padding: 1rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          font-size: 1rem;
          width: 100%;
          box-sizing: border-box;
        }
        .contact-form input:focus, .contact-form textarea:focus {
          outline: none;
          border-color: #059669;
        }
        .form-success {
          text-align: center;
          padding: 3rem;
        }
        .form-success span {
          font-size: 4rem;
          color: #059669;
          display: block;
          margin-bottom: 1rem;
        }

        /* Footer */
        .footer {
          background: #111827;
          color: white;
          padding: 4rem 0 2rem;
        }
        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 4rem;
          margin-bottom: 3rem;
        }
        .footer-brand .logo {
          color: white;
          margin-bottom: 1rem;
        }
        .footer-brand p {
          color: #9ca3af;
        }
        .footer-since {
          margin-top: 0.5rem;
          font-size: 0.875rem;
        }
        .footer-links h4, .footer-contact h4 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .footer-links a {
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-links a:hover {
          color: white;
        }
        .footer-contact p {
          color: #9ca3af;
          margin-bottom: 0.5rem;
        }
        .footer-contact a {
          color: #10b981;
          text-decoration: none;
        }
        .footer-bottom {
          border-top: 1px solid #374151;
          padding-top: 2rem;
          text-align: center;
          color: #6b7280;
          font-size: 0.875rem;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .demo-banner {
            font-size: 0.7rem;
            padding: 0.4rem 0.75rem;
          }
          .nav {
            top: 28px;
            padding: 0.75rem 1rem;
          }
          .logo-text {
            font-size: 1rem;
          }
          .nav-links {
            display: none;
          }
          .nav-links.open {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            padding: 1rem;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          }
          .nav-cta {
            padding: 0.5rem 0.75rem;
            font-size: 0.85rem;
            white-space: nowrap;
          }
          .mobile-menu {
            display: flex;
          }

          .hero {
            grid-template-columns: 1fr;
            padding: 8rem 1rem 3rem;
            gap: 2rem;
          }
          .hero h1 {
            font-size: 2rem;
          }
          .hero p {
            font-size: 1rem;
          }
          .hero-buttons {
            flex-direction: column;
          }
          .hero-image {
            order: -1;
          }
          .hero-image-placeholder {
            padding: 2rem;
          }
          .hero-image-placeholder span {
            font-size: 4rem;
          }

          .section-header h2 {
            font-size: 1.75rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .about-grid {
            grid-template-columns: 1fr;
          }
          .about-image {
            order: -1;
          }

          .team-grid {
            grid-template-columns: 1fr;
          }

          .insurance-grid {
            grid-template-columns: 1fr 1fr;
          }

          .hours-grid {
            grid-template-columns: 1fr;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
