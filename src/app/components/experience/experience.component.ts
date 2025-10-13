import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="experience-hero">
      <div class="container">
        <div class="experience-content">
          <h1 class="page-title">Experience & Education</h1>
          <p class="page-subtitle">My professional journey and academic background</p>
        </div>
      </div>
    </section>

    <section class="experience-details">
      <div class="container">
        <div class="timeline">
          <div class="timeline-item" *ngFor="let item of timeline">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <h3 class="timeline-title">{{ item.title }}</h3>
                <span class="timeline-date">{{ item.date }}</span>
              </div>
              <p class="timeline-description">{{ item.description }}</p>
              <div class="timeline-tags">
                <span class="tag" *ngFor="let tag of item.tags">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .experience-hero {
      padding: 3rem 0 2rem;
      background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%);
      color: white;
      text-align: center;
    }

    .page-title {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .page-subtitle {
      font-size: 1rem;
      opacity: 0.9;
    }

    .experience-details {
      padding: 2rem 0;
      background: #f8f9fa;
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
      margin-bottom: 1.5rem;
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
      padding: 1.2rem;
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .timeline-content:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    }

    .timeline-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.8rem;
    }

    .timeline-title {
      font-size: 1.1rem;
      font-weight: 600;
      color: #333;
    }

    .timeline-date {
      color: #1a365d;
      font-weight: 500;
    }

    .timeline-description {
      color: #666;
      line-height: 1.5;
      margin-bottom: 0.8rem;
      font-size: 0.9rem;
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
      transition: all 0.3s ease;
    }

    .tag:hover {
      background: #1a365d;
      color: white;
      transform: translateY(-2px);
    }

    @media (max-width: 768px) {
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

      .page-title {
        font-size: 2.5rem;
      }
    }
  `]
})
export class ExperienceComponent implements OnInit {
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
    // Initialize experience component
  }
}
