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
        { name: '.NET', level: 85 },
        { name: 'Angular', level: 70 },
        { name: 'FastAPI', level: 85 },
        { name: 'Entity Framework', level: 85 },
        { name: 'ASP.NET Core', level: 80 },
        { name: 'React', level: 75 }
      ]
    },
    {
      name: 'AI & Machine Learning',
      skills: [
        { name: 'Semantic Kernel', level: 85 },
        { name: 'LangGraph', level: 85 },
        { name: 'LangChain', level: 80 },
        { name: 'OpenAI API', level: 80 },
        { name: 'Pandas', level: 75 },
        { name: 'NumPy', level: 70 }
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
