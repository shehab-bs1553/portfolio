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
      title: 'Software Engineer I',
      date: 'Aug 2024 - Present',
      description: 'Develop intelligent and scalable backend systems using .NET and FastAPI. Build and integrate AI-powered solutions including Semantic Kernel, LangGraph, and Agentic AI workflows.',
      tags: ['.NET', 'FastAPI', 'Semantic Kernel', 'LangGraph', 'AI']
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
