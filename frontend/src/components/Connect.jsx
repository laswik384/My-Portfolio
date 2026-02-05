import React, { useState } from 'react';
import { Send, Mail, MapPin, Linkedin, Github, MessageSquare } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Connect = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Message Sent! ✅",
          description: data.message || "Thank you for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.detail || 'Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error ❌",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'Hyderabad, India'
    },
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'laswikpakki07@gmail.com',
      link: 'mailto:laswikpakki07@gmail.com'
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/laswik-pakki/',
      color: '#0A66C2'
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      link: 'https://github.com/laswik384',
      color: '#FFFFFF'
    },
    {
      icon: <MessageSquare size={24} />,
      label: 'WhatsApp',
      link: 'https://wa.me/916305542738',
      color: '#25D366'
    }
  ];

  return (
    <section id="connect" className="section-container">
      <div className="section-header">
        <h2 className="section-title">Connect With Me</h2>
        <div className="section-divider"></div>
      </div>

      <div className="connect-grid">
        {/* Contact Form */}
        <div className="contact-form-wrapper glass-card">
          <h3 className="contact-form-title">Send a Message</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="form-input form-textarea"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary submit-btn"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send size={20} />
            </button>
          </form>
        </div>

        {/* Contact Info & Social Links */}
        <div className="contact-info-wrapper">
          {/* Contact Info Cards */}
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card glass-card">
                <div className="contact-info-icon">{info.icon}</div>
                <div>
                  <p className="contact-info-label">{info.label}</p>
                  {info.link ? (
                    <a href={info.link} className="contact-info-value">
                      {info.value}
                    </a>
                  ) : (
                    <p className="contact-info-value">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="social-links-wrapper glass-card">
            <h4 className="social-links-title">Follow Me</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                  style={{ '--hover-color': social.color }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;