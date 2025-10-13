import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3 class="footer-title">MD Shehab Hossain</h3>
            <p class="footer-description">
              Software Engineer I at Brain Station-23 PLC, specializing in AI-driven solutions and scalable .NET development.
            </p>
            <div class="social-links">
              <a href="https://github.com/shehab-bs1553" target="_blank" rel="noopener noreferrer" class="social-link">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/md-shihab-hossain" target="_blank" rel="noopener noreferrer" class="social-link">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://leetcode.com/shehab-bs1553" target="_blank" rel="noopener noreferrer" class="social-link">
                <i class="fas fa-code"></i>
              </a>
              <a href="mailto:shihab.hossain5239@gmail.com" class="social-link">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-subtitle">Quick Links</h4>
            <ul class="footer-links">
              <li><a href="#home" class="footer-link">Home</a></li>
              <li><a href="#about" class="footer-link">About</a></li>
              <li><a href="#projects" class="footer-link">Projects</a></li>
              <li><a href="#skills" class="footer-link">Skills</a></li>
              <li><a href="#experience" class="footer-link">Experience</a></li>
              <li><a href="#contact" class="footer-link">Contact</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-subtitle">Skills</h4>
            <ul class="footer-links">
              <li><span class="footer-link">.NET Core</span></li>
              <li><span class="footer-link">Python</span></li>
              <li><span class="footer-link">AI/ML</span></li>
              <li><span class="footer-link">NopCommerce</span></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p class="copyright">
            &copy; {{ currentYear }} MD Shehab Hossin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%);
      color: white;
      padding: 2.5rem 0 1rem;
      margin-top: auto;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .footer-title {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: white;
    }

    .footer-subtitle {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: white;
    }

    .footer-description {
      margin-bottom: 1.5rem;
      opacity: 0.9;
      line-height: 1.6;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.1);
      color: white;
      border-radius: 50%;
      text-decoration: none;
      transition: all 0.3s ease;
      font-size: 1.2rem;
    }

    .social-link:hover {
      background: #ffc107;
      color: #333;
      transform: translateY(-2px) scale(1.1);
    }

    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-links li {
      margin-bottom: 0.5rem;
    }

    .footer-link {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-link:hover {
      color: white;
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 1rem;
      text-align: center;
    }

    .copyright {
      margin: 0;
      opacity: 0.8;
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
      }
      
      .social-links {
        justify-content: center;
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
