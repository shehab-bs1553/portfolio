import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="skills-hero">
      <div class="container">
        <div class="skills-content">
          <h1 class="page-title">Technical Skills</h1>
          <p class="page-subtitle">Technologies and tools I work with</p>
        </div>
      </div>
    </section>

    <section class="skills-details scroll-animate">
      <div class="container">
        <div class="skills-categories">
          <div class="skill-category scroll-animate-scale" *ngFor="let category of skillCategories">
            <h3 class="category-title">{{ category.name }}</h3>
            <div class="skills-list">
              <div class="skill-item" *ngFor="let skill of category.skills">
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" [style.width.%]="skill.level"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-hero {
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

    .skills-details {
      padding: 2.5rem 0;
      background: #f8f9fa;
      opacity: 1; /* Ensure visibility even without animation */
    }

    .skills-categories {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .skill-category {
      background: white;
      padding: 1.5rem;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      opacity: 1; /* Ensure visibility even without animation */
    }

    .skill-category:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.12);
    }

    .category-title {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: #333;
      text-align: center;
    }

    .skills-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .skill-item {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .skill-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .skill-name {
      font-weight: 500;
      color: #333;
    }

    .skill-level {
      font-size: 0.9rem;
      color: #1a365d;
      font-weight: 600;
    }

    .skill-bar {
      height: 8px;
      background: #e9ecef;
      border-radius: 4px;
      overflow: hidden;
    }

    .skill-progress {
      height: 100%;
      background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%);
      border-radius: 4px;
      transition: width 1s ease-in-out;
    }

    @media (max-width: 768px) {
      .skills-categories {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .skill-category {
        padding: 1rem;
      }

      .page-title {
        font-size: 1.8rem;
      }
    }
  `]
})
export class SkillsComponent implements OnInit {
  constructor(private scrollAnimationService: ScrollAnimationService) {}

  skillCategories = [
    {
      name: 'Programming Languages',
      skills: [
        { name: 'C#', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'SQL', level: 75 }
      ]
    },
    {
      name: 'Frameworks & Libraries',
      skills: [
        { name: '.NET Core', level: 95 },
        { name: 'Angular', level: 85 },
        { name: 'React', level: 80 },
        { name: 'FastAPI', level: 85 },
        { name: 'Entity Framework', level: 90 }
      ]
    },
    {
      name: 'AI & Machine Learning',
      skills: [
        { name: 'Semantic Kernel', level: 90 },
        { name: 'LangGraph', level: 85 },
        { name: 'OpenAI API', level: 80 },
        { name: 'Pandas', level: 75 },
        { name: 'NumPy', level: 70 }
      ]
    },
    {
      name: 'Tools & Technologies',
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'Git', level: 90 },
        { name: 'Azure', level: 75 },
        { name: 'NopCommerce', level: 85 },
        { name: 'PostgreSQL', level: 80 }
      ]
    }
  ];

  ngOnInit(): void {
    // Initialize skills component
    setTimeout(() => {
      this.scrollAnimationService.observeElements();
    }, 100);
    
    // Fallback: Force show elements after a delay if animation doesn't work
    setTimeout(() => {
      this.scrollAnimationService.forceShowAllElements();
    }, 2000);
  }
}
