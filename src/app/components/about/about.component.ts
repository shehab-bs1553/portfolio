import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
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
      description: 'Graduated from Gopalganj Science and Technology University with CGPA 3.41/4.00. Focused on software engineering principles and algorithmic problem solving.',
      tags: ['Computer Science', 'Software Engineering', 'Data Structures', 'Algorithms']
    },
    {
      title: 'Higher Secondary Certificate (HSC)',
      date: '2016 - 2018',
      description: 'Completed HSC from Monipur Uchcha Vidyalaya and College. Studied Science group with focus on Mathematics, Physics, and Chemistry.',
      tags: ['Science', 'Mathematics', 'Physics', 'Chemistry']
    }
  ];

  ngOnInit(): void {
    // Initialize about component
    setTimeout(() => {
      this.scrollAnimationService.observeElements();
    }, 100);
  }
}
