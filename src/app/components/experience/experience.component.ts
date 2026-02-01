import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  workExperience = [
    {
      title: 'Software Engineer II',
      date: 'Jan 2026 - Present',
      description: 'Lead development of intelligent and scalable backend systems using .NET and FastAPI. Architect and implement advanced AI-powered solutions including LangGraph and Agentic AI workflows. Mentor junior developers and drive technical excellence.',
      tags: ['.NET', 'FastAPI', 'LangGraph', 'AI', 'GraphQL', 'Microservice', 'MVC', 'Design Pattern', 'Leadership']
    },
    {
      title: 'Software Engineer I',
      date: 'Jan 2025 - Dec 2025',
      description: 'Develop intelligent and scalable backend systems using .NET and FastAPI. Build and integrate AI-powered solutions including Semantic Kernel, LangGraph, and Agentic AI workflows.',
      tags: ['.NET', 'FastAPI', 'Semantic Kernel', 'LangGraph', 'AI']
    },
    {
      title: 'Associate Software Engineer',
      date: 'Aug 2024 - Dec 2024',
      description: 'Developed backend modules and APIs using .NET and Entity Framework. Contributed to NopCommerce plugin development and integrated AI-powered features. Collaborated with team members on scalable solutions.',
      tags: ['.NET', 'Entity Framework', 'NopCommerce', 'API Development', 'Backend Development']
    },
    {
      title: 'Software Engineer Trainee',
      date: 'Apr 2024 - Jul 2024',
      description: 'Assisted in developing backend modules using .NET and Entity Framework. Supported NopCommerce plugin development for AI-integrated features.',
      tags: ['.NET', 'Entity Framework', 'NopCommerce', 'API Development']
    }
  ];

  education = [
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
    },
    {
      title: 'Secondary School Certificate (SSC)',
      date: '2014 - 2016',
      description: 'Completed SSC from Adarsha High School, Kaitola, Bera, Pabna with GPA 5.0 out of 5. Studied Science group with excellent academic performance.',
      tags: ['Science', 'Mathematics', 'Physics', 'Chemistry', 'Biology']
    }
  ];

  ngOnInit(): void {
    // Initialize experience component
  }
}
