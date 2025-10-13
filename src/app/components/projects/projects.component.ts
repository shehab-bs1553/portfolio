import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="projects-hero">
      <div class="container">
        <div class="projects-content">
          <h1 class="page-title">My Projects</h1>
          <p class="page-subtitle">Explore my portfolio of web applications and solutions</p>
        </div>
      </div>
    </section>

    <section class="projects-filter">
      <div class="container">
        <div class="filter-buttons">
          <button 
            class="filter-btn" 
            [class.active]="activeFilter === 'all'"
            (click)="setFilter('all')">
            All Projects
          </button>
          <button 
            class="filter-btn" 
            [class.active]="activeFilter === 'ai/ml'"
            (click)="setFilter('ai/ml')">
            AI/ML
          </button>
          <button 
            class="filter-btn" 
            [class.active]="activeFilter === 'full stack'"
            (click)="setFilter('full stack')">
            Full Stack
          </button>
          <button 
            class="filter-btn" 
            [class.active]="activeFilter === 'algorithms'"
            (click)="setFilter('algorithms')">
            Algorithms
          </button>
        </div>
      </div>
    </section>

    <section class="projects-grid">
      <div class="container">
        <div class="projects-container">
          <div 
            class="project-card" 
            *ngFor="let project of filteredProjects"
            [@fadeInUp]>
            <div class="project-image">
              <div class="project-overlay">
                <div class="project-actions">
                  <a [href]="project.liveUrl" target="_blank" class="action-btn" *ngIf="project.liveUrl">
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                  <a [href]="project.githubUrl" target="_blank" class="action-btn">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <div class="project-placeholder">
                <i [class]="project.icon"></i>
              </div>
            </div>
            
            <div class="project-content">
              <div class="project-category">{{ project.category }}</div>
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              
              <div class="project-tech">
                <span class="tech-tag" *ngFor="let tech of project.technologies">
                  {{ tech }}
                </span>
              </div>
              
              <div class="project-footer">
                <div class="project-date">{{ project.date }}</div>
                <div class="project-status" [class]="project.status">
                  {{ project.status }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Interested in My Work?</h2>
          <p class="cta-description">
            I'm always open to discussing new projects and opportunities.
          </p>
          <a href="#contact" class="btn btn-primary btn-large">Let's Discuss</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects-hero {
      padding: 6rem 0 4rem;
      background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%);
      color: white;
      text-align: center;
    }

    .page-title {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .page-subtitle {
      font-size: 1.2rem;
      opacity: 0.9;
    }

    .projects-filter {
      padding: 3rem 0;
      background: #f8f9fa;
    }

    .filter-buttons {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .filter-btn {
      padding: 0.8rem 1.5rem;
      border: 2px solid #1a365d;
      background: transparent;
      color: #1a365d;
      border-radius: 25px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .filter-btn:hover,
    .filter-btn.active {
      background: #1a365d;
      color: white;
      transform: translateY(-2px);
    }

    .projects-grid {
      padding: 4rem 0;
    }

    .projects-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .project-card {
      background: white;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    }

    .project-image {
      position: relative;
      height: 200px;
      background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .project-card:hover .project-overlay {
      opacity: 1;
    }

    .project-actions {
      display: flex;
      gap: 1rem;
    }

    .action-btn {
      width: 50px;
      height: 50px;
      background: #1a365d;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: all 0.3s ease;
      font-size: 1.2rem;
      box-shadow: 0 2px 8px rgba(26, 54, 93, 0.3);
    }

    .action-btn:hover {
      background: #ffc107;
      color: #333;
      transform: scale(1.15);
      box-shadow: 0 4px 15px rgba(255, 193, 7, 0.4);
    }

    .project-placeholder {
      font-size: 4rem;
      color: white;
      opacity: 0.8;
    }

    .project-content {
      padding: 2rem;
    }

    .project-category {
      color: #1a365d;
      font-weight: 600;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 0.5rem;
    }

    .project-title {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: #333;
    }

    .project-description {
      color: #666;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }

    .tech-tag {
      background: #f8f9fa;
      color: #1a365d;
      padding: 0.3rem 0.8rem;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 500;
    }

    .project-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .project-date {
      color: #999;
      font-size: 0.9rem;
    }

    .project-status {
      padding: 0.3rem 0.8rem;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
    }

    .project-status.completed {
      background: #d4edda;
      color: #155724;
    }

    .project-status.in-progress {
      background: #fff3cd;
      color: #856404;
    }

    .project-status.planning {
      background: #d1ecf1;
      color: #0c5460;
    }

    .cta-section {
      padding: 1.5rem 0;
      background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%);
      color: white;
      text-align: center;
    }

    .cta-title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .cta-description {
      font-size: 1rem;
      margin-bottom: 1rem;
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
      .projects-container {
        grid-template-columns: 1fr;
      }

      .page-title {
        font-size: 2.5rem;
      }

      .filter-buttons {
        gap: 0.5rem;
      }

      .filter-btn {
        padding: 0.6rem 1rem;
        font-size: 0.9rem;
      }
    }
  `]
})
export class ProjectsComponent implements OnInit {
  activeFilter = 'all';
  
  projects = [
    {
      id: 1,
      title: 'Dealer Portal',
      description: 'Developed a comprehensive multi-role dealer portal for secure data sharing between administrators, dealers, and sub-users. Implemented advanced rule-based access control (RBAC) mechanism for dynamic data access.',
      category: 'Full Stack',
      technologies: ['ASP.NET Core', 'Entity Framework', 'RBAC', 'NopCommerce'],
      date: 'Aug 2025 - Present',
      status: 'in-progress',
      icon: 'fas fa-users-cog',
      liveUrl: null,
      githubUrl: 'https://github.com/shehab-bs1553'
    },
    {
      id: 2,
      title: 'Knowledge-Based Chatbot for E-Commerce',
      description: 'Developed an AI-powered chatbot using Semantic Kernel, LangGraph, and OpenAI APIs for multi-store NopCommerce platforms. Enabled dual-mode query handling and dynamic knowledge updates.',
      category: 'AI/ML',
      technologies: ['ASP.NET', 'NopCommerce', 'Semantic Kernel', 'LangGraph', 'OpenAI'],
      date: 'Aug 2024 - Dec 2024',
      status: 'completed',
      icon: 'fas fa-robot',
      liveUrl: null,
      githubUrl: 'https://github.com/shehab-bs1553'
    },
    {
      id: 3,
      title: 'FinanceBot',
      description: 'Developed an intelligent financial reporting system using LangChain agents and Agentic AI workflows. Automated Profit & Loss, Balance Sheet, and Cash Flow report generation with real-time data integration.',
      category: 'AI/ML',
      technologies: ['Python', 'FastAPI', 'LangChain', 'Agentic AI', 'OpenAI'],
      date: 'May 2025 - Aug 2025',
      status: 'completed',
      icon: 'fas fa-chart-pie',
      liveUrl: null,
      githubUrl: 'https://github.com/shehab-bs1553'
    },
    {
      id: 4,
      title: 'Sentiment Analysis System',
      description: 'Developed a sentiment analysis system using DistilBERT for real-time social media insights. Processed and classified live tweet data with 88% accuracy, enabling actionable insights into customer opinions.',
      category: 'AI/ML',
      technologies: ['Python', 'Hugging Face', 'DistilBERT', 'Pandas', 'NumPy'],
      date: 'May 2024 - Jun 2024',
      status: 'completed',
      icon: 'fas fa-brain',
      liveUrl: null,
      githubUrl: 'https://github.com/shehab-bs1553'
    },
    {
      id: 5,
      title: 'Competitive Programming Solutions',
      description: 'Solved 3,000+ algorithmic problems on LeetCode (Knight - Max rating: 1923) and Codeforces (Pupil - Max rating: 1363). Participated in UGVIntra University Programming Contest 2023.',
      category: 'Algorithms',
      technologies: ['C++', 'Python', 'Data Structures', 'Algorithms', 'Problem Solving'],
      date: '2019 - Present',
      status: 'completed',
      icon: 'fas fa-code',
      liveUrl: 'https://leetcode.com/shehab-bs1553',
      githubUrl: 'https://github.com/shehab-bs1553'
    },
    {
      id: 6,
      title: 'NopCommerce Plugin Development',
      description: 'Developed custom NopCommerce plugins for AI-driven e-commerce applications. Integrated chatbot functionality and AI-powered features for enhanced customer experience.',
      category: 'E-Commerce',
      technologies: ['NopCommerce', 'C#', 'ASP.NET', 'Plugin Development', 'AI Integration'],
      date: '2024 - 2025',
      status: 'completed',
      icon: 'fas fa-puzzle-piece',
      liveUrl: null,
      githubUrl: 'https://github.com/shehab-bs1553'
    }
  ];

  get filteredProjects() {
    if (this.activeFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => 
      project.category.toLowerCase() === this.activeFilter
    );
  }

  ngOnInit(): void {
    // Initialize projects component
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }
}
