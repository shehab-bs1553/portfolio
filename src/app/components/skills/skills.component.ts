import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  constructor(private scrollAnimationService: ScrollAnimationService) {}

  skillCategories = [
    {
      name: 'Programming Languages',
      skills: [
        { name: 'C#', level: 85 },
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 70 },
        { name: 'TypeScript', level: 65 },
        { name: 'SQL', level: 80 }
      ]
    },
    {
      name: 'Frameworks & Libraries',
      skills: [
        { name: '.NET MVC', level: 85 },
        { name: 'Angular', level: 65 },
        { name: 'FastAPI', level: 85 },
        { name: 'Entity Framework', level: 80 },
        { name: 'ASP.NET Core', level: 80 }
      ]
    },
    {
      name: 'AI & Machine Learning',
      skills: [
        { name: 'Semantic Kernel', level: 80 },
        { name: 'LangGraph', level: 80 },
        { name: 'LangChain', level: 85 },
        { name: 'OpenAI API', level: 80 },
        { name: 'Pandas', level: 75 }
      ]
    },
    {
      name: 'Tools & Technologies',
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'Git', level: 85 },
        { name: 'Azure', level: 75 },
        { name: 'NopCommerce', level: 85 },
        { name: 'PostgreSQL', level: 80 }
      ]
    },
    {
      name: 'Workflow & Automation',
      skills: [
        { name: 'N8N', level: 70 },
        { name: 'MCP Server', level: 75 },
        { name: 'Workflow Automation', level: 70 },
        { name: 'API Integration', level: 70 },
        { name: 'AI Agent Integration', level: 75 }
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
