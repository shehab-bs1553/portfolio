import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about-hero">
      <div class="container">
        <div class="about-content">
          <h1 class="page-title">About Me</h1>
          <p class="page-subtitle">Get to know more about my journey and expertise</p>
        </div>
      </div>
    </section>

    <section class="about-details scroll-animate">
      <div class="container">
        <div class="about-grid">
          <div class="about-text scroll-animate-left">
            <h2 class="section-title">My Story</h2>
            <p class="about-description">
              I'm a Software Engineer I at Brain Station-23 PLC, specializing in scalable .NET API 
              development, NopCommerce plugin development, and AI-driven solutions. With a strong 
              foundation in computer science and a passion for emerging technologies.
            </p>
            <p class="about-description">
              I excel in building intelligent systems using Semantic Kernel, LangGraph, and Agentic AI 
              workflows. My expertise spans from developing chatbots and image similarity systems to 
              creating containerized deployments with Docker and MCP server management.
            </p>
            <p class="about-description">
              As a competitive programmer, I've solved 3,000+ algorithmic problems on LeetCode (Knight) 
              and Codeforces (Pupil), continuously exploring emerging technologies in AI and cloud-native architectures.
            </p>
          </div>
          
          <div class="about-image scroll-animate-right">
            <div class="image-container">
              <div class="profile-card">
                <div class="profile-avatar">
                  <i class="fas fa-user-circle"></i>
                </div>
                <h3 class="profile-name">MD Shehab Hossain</h3>
                <p class="profile-title">Software Engineer I</p>
                <div class="profile-stats">
                  <div class="stat">
                    <span class="stat-number">3000+</span>
                    <span class="stat-label">Problems Solved</span>
                  </div>
                  <div class="stat">
                    <span class="stat-number">2+</span>
                    <span class="stat-label">Years Experience</span>
                  </div>
                  <div class="stat">
                    <span class="stat-number">3.42</span>
                    <span class="stat-label">CGPA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  `,
  styles: [`
    .about-hero {
      padding: 2.5rem 0 2rem;
      background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%);
      color: white;
      text-align: center;
    }

    .page-title {
      font-size: 1.8rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .page-subtitle {
      font-size: 1rem;
      opacity: 0.9;
    }

    .about-details {
      padding: 2.5rem 0;
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;
      align-items: center;
    }

    .section-title {
      font-size: 1.8rem;
      font-weight: 600;
      margin-bottom: 1.2rem;
      color: #333;
    }

    .about-description {
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 1rem;
      color: #666;
    }

    .profile-card {
      background: white;
      border-radius: 20px;
      padding: 2rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      text-align: center;
    }

    .profile-avatar {
      font-size: 4rem;
      color: #1a365d;
      margin-bottom: 1rem;
      transition: all 0.3s ease;
    }

    .profile-card:hover .profile-avatar {
      color: #ffc107;
      transform: scale(1.1);
    }

    .profile-name {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: #333;
    }

    .profile-title {
      color: #666;
      margin-bottom: 2rem;
    }

    .profile-stats {
      display: flex;
      justify-content: space-around;
      margin-top: 2rem;
    }

    .stat {
      text-align: center;
    }

    .stat-number {
      display: block;
      font-size: 1.5rem;
      font-weight: 700;
      color: #1a365d;
    }

    .stat-label {
      font-size: 0.9rem;
      color: #666;
    }


    .experience-section {
      padding: 5rem 0;
    }

    .timeline {
      position: relative;
      max-width: 800px;
      margin: 0 auto;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 30px;
      top: 0;
      bottom: 0;
      width: 2px;
      background: #1a365d;
    }

    .timeline-item {
      position: relative;
      margin-bottom: 3rem;
      padding-left: 80px;
    }

    .timeline-marker {
      position: absolute;
      left: 20px;
      top: 10px;
      width: 20px;
      height: 20px;
      background: #1a365d;
      border-radius: 50%;
      border: 4px solid white;
      box-shadow: 0 0 0 4px #1a365d;
    }

    .timeline-content {
      background: white;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    .timeline-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .timeline-title {
      font-size: 1.3rem;
      font-weight: 600;
      color: #333;
    }

    .timeline-date {
      color: #1a365d;
      font-weight: 500;
    }

    .timeline-description {
      color: #666;
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    .timeline-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tag {
      background: #f8f9fa;
      color: #1a365d;
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 500;
    }

    .cta-section {
      padding: 5rem 0;
      background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%);
      color: white;
      text-align: center;
    }

    .cta-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .cta-description {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .btn {
      display: inline-block;
      padding: 1rem 2rem;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      transition: all 0.3s ease;
      border: 2px solid transparent;
      cursor: pointer;
    }

    .btn-primary {
      background: #ffc107;
      color: #333;
      border-color: #ffc107;
    }

    .btn-primary:hover {
      background: transparent;
      color: #ffc107;
      border-color: #ffc107;
      transform: translateY(-2px);
    }

    .btn-large {
      padding: 1.2rem 2.5rem;
      font-size: 1.1rem;
    }

    @media (max-width: 768px) {
      .about-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .page-title {
        font-size: 2.5rem;
      }

      .timeline::before {
        left: 15px;
      }

      .timeline-item {
        padding-left: 50px;
      }

      .timeline-marker {
        left: 5px;
      }

      .timeline-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
      }
    }
  `]
})
export class AboutComponent implements OnInit {
  constructor(private scrollAnimationService: ScrollAnimationService) {}


  timeline = [
    {
      title: 'Software Engineer I',
      date: 'Aug 2024 - Present',
      description: 'Develop intelligent and scalable backend systems using .NET Core and FastAPI. Build and integrate AI-powered solutions including Semantic Kernel, LangGraph, and Agentic AI workflows.',
      tags: ['.NET Core', 'FastAPI', 'Semantic Kernel', 'LangGraph', 'AI']
    },
    {
      title: 'Software Engineer Trainee',
      date: 'Apr 2024 - Jul 2024',
      description: 'Assisted in developing backend modules using .NET Core and Entity Framework. Supported NopCommerce plugin development for AI-integrated features.',
      tags: ['.NET Core', 'Entity Framework', 'NopCommerce', 'API Development']
    },
    {
      title: 'B.Sc. in Computer Science and Engineering',
      date: '2019 - 2024',
      description: 'Graduated from Gopalganj Science and Technology University with CGPA 3.42/4.00. Focused on software engineering principles and algorithmic problem solving.',
      tags: ['Computer Science', 'Software Engineering', 'Data Structures', 'Algorithms']
    }
  ];

  ngOnInit(): void {
    // Initialize about component
    setTimeout(() => {
      this.scrollAnimationService.observeElements();
    }, 100);
  }
}
