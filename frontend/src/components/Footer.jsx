import React from 'react';
import { Heart, Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <h3 className="footer-name">Satya Laswik Pakki</h3>
          <p className="footer-role">Web Developer</p>
        </div>

        <div className="footer-social">
          <a
            href="mailto:laswikpakki07@gmail.com"
            className="footer-link"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/laswik-pakki/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/laswik384"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;