import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-main">
          <div class="footer-brand">
            <div class="brand-info">
              <div class="footer-logo">
                <img src="assets/image/1.jpg" alt="MD Shehab Hossain" class="logo-img">
              </div>
              <div class="brand-text">
                <h3 class="footer-title">MD Shehab Hossain</h3>
                <p class="footer-subtitle">Software Engineer I</p>
              </div>
            </div>
            <p class="footer-description">
              Specializing in AI-driven solutions and scalable .NET development at Brain Station-23 PLC.
            </p>
          </div>
          
          <div class="footer-links">
            <div class="link-group">
              <h4 class="link-title">Navigation</h4>
              <ul class="link-list">
                <li><a href="#home" class="footer-link">Home</a></li>
                <li><a href="#about" class="footer-link">About</a></li>
                <li><a href="#projects" class="footer-link">Projects</a></li>
                <li><a href="#skills" class="footer-link">Skills</a></li>
              </ul>
            </div>
            
            <div class="link-group">
              <h4 class="link-title">Connect</h4>
              <ul class="link-list">
                <li><a href="#experience" class="footer-link">Experience</a></li>
                <li><a href="#contact" class="footer-link">Contact</a></li>
                <li><a href="https://github.com/shehab-bs1553" target="_blank" rel="noopener noreferrer" class="footer-link">GitHub</a></li>
                <li><a href="https://linkedin.com/in/md-shihab-hossain" target="_blank" rel="noopener noreferrer" class="footer-link">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="social-links">
            <a href="https://github.com/shehab-bs1553" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="GitHub">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/md-shihab-hossain" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://leetcode.com/shehab-bs1553" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LeetCode">
              <i class="fas fa-code"></i>
            </a>
            <a href="mailto:shihab.hossain5239@gmail.com" class="social-link" aria-label="Email">
              <i class="fas fa-envelope"></i>
            </a>
          </div>
          <p class="copyright">
            &copy; {{ currentYear }} MD Shehab Hossain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
      color: #e2e8f0;
      padding: 4rem 0 2rem;
      margin-top: auto;
      position: relative;
      overflow: hidden;
    }

    .footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, #60a5fa, transparent);
    }

    .footer-main {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      margin-bottom: 3rem;
      align-items: start;
    }

    .footer-brand {
      max-width: 400px;
    }

    .brand-info {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .footer-logo {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;
      border: 3px solid rgba(96, 165, 250, 0.3);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      flex-shrink: 0;
      position: relative;
    }

    .footer-logo::before {
      content: '';
      position: absolute;
      inset: -2px;
      border-radius: 50%;
      background: linear-gradient(45deg, #60a5fa, #3b82f6, #1d4ed8);
      z-index: -1;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .footer-logo:hover::before {
      opacity: 1;
    }

    .footer-logo:hover {
      transform: scale(1.05);
      border-color: #60a5fa;
    }

    .logo-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .brand-text {
      flex: 1;
    }

    .footer-title {
      font-size: 1.75rem;
      font-weight: 700;
      margin-bottom: 0.25rem;
      color: #f8fafc;
      background: linear-gradient(135deg, #f8fafc, #e2e8f0);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .footer-subtitle {
      font-size: 1rem;
      font-weight: 500;
      color: #60a5fa;
      margin: 0;
    }

    .footer-description {
      font-size: 1rem;
      line-height: 1.7;
      color: #94a3b8;
      margin: 0;
    }

    .footer-links {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }

    .link-group {
      min-width: 0;
    }

    .link-title {
      font-size: 1.1rem;
      font-weight: 600;
      color: #f8fafc;
      margin-bottom: 1.5rem;
      position: relative;
    }

    .link-title::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 30px;
      height: 2px;
      background: linear-gradient(90deg, #60a5fa, #3b82f6);
      border-radius: 1px;
    }

    .link-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .link-list li {
      margin-bottom: 0.75rem;
    }

    .footer-link {
      color: #94a3b8;
      text-decoration: none;
      font-size: 0.95rem;
      font-weight: 400;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      display: inline-block;
    }

    .footer-link::before {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 1px;
      background: #60a5fa;
      transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .footer-link:hover {
      color: #f8fafc;
      transform: translateX(4px);
    }

    .footer-link:hover::before {
      width: 100%;
    }

    .footer-bottom {
      border-top: 1px solid rgba(148, 163, 184, 0.1);
      padding-top: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1.5rem;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      background: rgba(148, 163, 184, 0.1);
      color: #94a3b8;
      border-radius: 12px;
      text-decoration: none;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      font-size: 1.1rem;
      position: relative;
      overflow: hidden;
    }

    .social-link::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, #60a5fa, #3b82f6);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .social-link:hover::before {
      opacity: 1;
    }

    .social-link:hover {
      color: #f8fafc;
      transform: translateY(-2px) scale(1.05);
      box-shadow: 0 8px 25px rgba(96, 165, 250, 0.3);
    }

    .social-link i {
      position: relative;
      z-index: 1;
    }

    .copyright {
      margin: 0;
      font-size: 0.9rem;
      color: #64748b;
      font-weight: 400;
    }

    @media (max-width: 1024px) {
      .footer-main {
        grid-template-columns: 1fr;
        gap: 3rem;
      }

      .footer-links {
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }
    }

    @media (max-width: 768px) {
      .footer {
        padding: 3rem 0 2rem;
      }

      .footer-main {
        gap: 2.5rem;
      }

      .brand-info {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
      }

      .footer-logo {
        width: 50px;
        height: 50px;
      }

      .footer-title {
        font-size: 1.5rem;
      }

      .footer-links {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .footer-bottom {
        flex-direction: column;
        text-align: center;
        gap: 1.5rem;
      }

      .social-links {
        justify-content: center;
      }
    }

    @media (max-width: 480px) {
      .footer {
        padding: 2.5rem 0 1.5rem;
      }

      .footer-main {
        gap: 2rem;
      }

      .brand-info {
        gap: 0.75rem;
      }

      .footer-logo {
        width: 45px;
        height: 45px;
      }

      .footer-title {
        font-size: 1.25rem;
      }

      .footer-subtitle {
        font-size: 0.9rem;
      }

      .footer-description {
        font-size: 0.9rem;
      }

      .social-link {
        width: 40px;
        height: 40px;
        font-size: 1rem;
      }
    }
  `]
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();

  ngOnInit(): void {
    // Initialize footer functionality
  }
}
