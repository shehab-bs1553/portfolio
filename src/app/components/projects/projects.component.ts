import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
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
      githubUrl: 'https://github.com/shehab-bs1553',
      outcomes: 'Enhanced data security with 99.9% uptime, reduced manual data sharing by 80%, improved user experience with intuitive interface',
      challenges: 'Complex RBAC implementation, multi-tenant architecture, real-time data synchronization, performance optimization for large datasets',
      impact: 'Streamlined dealer operations, improved data security compliance, reduced administrative overhead, enhanced customer satisfaction'
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
      githubUrl: 'https://github.com/shehab-bs1553',
      outcomes: 'Achieved 92% customer query resolution rate, reduced support tickets by 65%, improved response time to under 2 seconds',
      challenges: 'Integration with multiple NopCommerce stores, handling complex product queries, maintaining context across conversations, scaling AI responses',
      impact: 'Enhanced customer experience, reduced support workload, increased sales conversion by 25%, improved customer satisfaction scores'
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
      githubUrl: 'https://github.com/shehab-bs1553',
      outcomes: 'Automated 95% of financial report generation, reduced report creation time from 8 hours to 30 minutes, achieved 99.5% accuracy in calculations',
      challenges: 'Complex financial data integration, real-time data processing, ensuring compliance with accounting standards, handling large datasets efficiently',
      impact: 'Streamlined financial operations, improved decision-making speed, reduced manual errors, enhanced financial transparency and reporting efficiency'
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
      githubUrl: 'https://github.com/shehab-bs1553',
      outcomes: 'Achieved 88% accuracy in sentiment classification, processed 10,000+ tweets per hour, reduced manual sentiment analysis time by 90%',
      challenges: 'Handling noisy social media data, model fine-tuning for domain-specific language, real-time processing constraints, dealing with multilingual content',
      impact: 'Improved brand monitoring capabilities, enabled data-driven marketing decisions, enhanced customer feedback analysis, supported proactive reputation management'
    },
    {
      id: 5,
      title: 'Competitive Programming Solutions',
      description: 'Solved 3,000+ algorithmic problems across multiple platforms including LeetCode (Knight - Max rating: 1923), Codeforces (Pupil - Max rating: 1363), TopH, CSES, CodeChef, HackerRank, and HackerEarth. Participated in UGVIntra University Programming Contest 2023.',
      category: 'Algorithms',
      technologies: ['C++', 'Python', 'Data Structures', 'Algorithms', 'Problem Solving'],
      date: '2019 - Present',
      status: 'completed',
      icon: 'fas fa-code',
      liveUrl: 'https://leetcode.com/shehab-bs1553',
      githubUrl: 'https://github.com/shehab-bs1553',
      outcomes: 'Solved 3,000+ problems across 7 platforms, achieved Knight rank on LeetCode (top 5%), maintained consistent problem-solving streak, participated in 50+ contests',
      challenges: 'Complex algorithmic thinking, time pressure in contests, optimizing solutions for efficiency, mastering advanced data structures and algorithms',
      impact: 'Enhanced problem-solving skills, improved algorithmic thinking, developed efficient coding practices, built strong foundation for software development'
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
      githubUrl: 'https://github.com/shehab-bs1553',
      outcomes: 'Developed 5+ custom plugins, improved customer engagement by 40%, reduced development time for e-commerce features by 60%',
      challenges: 'NopCommerce architecture complexity, plugin compatibility issues, AI integration with existing systems, performance optimization',
      impact: 'Enhanced e-commerce functionality, improved customer experience, increased sales conversion rates, streamlined development processes'
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
