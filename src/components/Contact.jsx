import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { me } from '../data/portfolio';
import './Contact.css';

const EMAILJS_SERVICE_ID  = 'service_o4ducxk';
const EMAILJS_TEMPLATE_ID = 'template_ki6o5wk';
const EMAILJS_PUBLIC_KEY  = 'ibKos5voSehZrofHy';

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm]       = useState({ name: '', email: '', message: '' });
  const [status, setStatus]   = useState('idle'); // idle | sending | sent | error
  const [error, setError]     = useState('');

  const handle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const submit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    setStatus('sending');

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setStatus('error');
        setError('Something went wrong. Please try again or email me directly.');
      });
  };

  return (
    <section className="contact-section section" id="contact">
      <div className="container">

        <div className="contact-grid">
          {/* Left — copy */}
          <div className="contact-left">
            <p className="t-label fade-up">Contact</p>
            <h2 className="contact-heading fade-up">
              Let's work<br />
              <span className="contact-heading-serif">together.</span>
            </h2>
            <p className="contact-desc t-body-lg fade-up">
              Have a project in mind or want to talk?
              Send a message — I reply within 24 hours.
            </p>

            <div className="contact-details fade-up">
              <a href={`mailto:${me.email}`} className="contact-detail-row">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>{me.email}</span>
              </a>
              <a href={me.github} target="_blank" rel="noreferrer" className="contact-detail-row">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                <span>github.com/muhammadumair551</span>
              </a>
              <a href={me.linkedin} target="_blank" rel="noreferrer" className="contact-detail-row">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="contact-right fade-up">
            {status === 'sent' ? (
              <div className="contact-success">
                <div className="contact-success-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3>Message sent</h3>
                <p className="t-body-sm">Thanks for reaching out — I'll get back to you within 24 hours.</p>
                <button
                  className="contact-success-reset"
                  onClick={() => setStatus('idle')}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form ref={formRef} className="contact-form" onSubmit={submit} noValidate>
                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label t-label" htmlFor="f-name">Name</label>
                    <input
                      id="f-name"
                      name="from_name"
                      type="text"
                      className="form-input"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => handle({ target: { name: 'name', value: e.target.value } })}
                      autoComplete="name"
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label t-label" htmlFor="f-email">Email</label>
                    <input
                      id="f-email"
                      name="from_email"
                      type="email"
                      className="form-input"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => handle({ target: { name: 'email', value: e.target.value } })}
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label className="form-label t-label" htmlFor="f-message">Message</label>
                  <textarea
                    id="f-message"
                    name="message"
                    className="form-input form-textarea"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={form.message}
                    onChange={(e) => handle({ target: { name: 'message', value: e.target.value } })}
                  />
                </div>

                {error && <p className="form-error t-body-sm">{error}</p>}

                <button
                  type="submit"
                  className="form-submit btn-primary"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending...' : 'Send message'}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}