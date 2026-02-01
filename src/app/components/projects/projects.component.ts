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
      description: 'Built dealer portal with role-based access control for administrators, dealers, and sub-users. Implemented secure data sharing with authentication and authorization.',
      category: 'Full Stack',
      technologies: ['ASP.NET Core', 'Entity Framework', 'RBAC', 'NopCommerce'],
      date: 'Aug 2025 - Present',
      status: 'in-progress',
      icon: 'fas fa-users-cog',
      liveUrl: null,
      githubUrl: 'https://github.com/shehab-bs1553',
      outcomes: '99.9% uptime, 80% reduction in manual data sharing, secure user authentication system',
      challenges: 'Role-based access control implementation, multi-tenant data architecture, real-time data synchronization, database performance optimization',
      impact: 'Automated dealer data access, implemented security protocols, reduced manual data processing, improved user login system'
    },
    {
      id: 2,
      title: 'Knowledge-Based Chatbot for E-Commerce',
      description: 'Built AI chatbot using Semantic Kernel, LangGraph, and OpenAI APIs for NopCommerce stores. Implemented query processing and knowledge base updates.',
      category: 'AI/ML',
      technologies: ['ASP.NET', 'NopCommerce', 'Semantic Kernel', 'LangGraph', 'OpenAI'],
      date: 'Aug 2024 - Dec 2024',
      status: 'completed',
      icon: 'fas fa-robot',
      liveUrl: null,
      githubUrl: 'https://github.com/shehab-bs1553',
      outcomes: '92% query resolution rate, 65% reduction in support tickets, 2-second response time',
      challenges: 'NopCommerce store integration, product query processing, conversation context management, AI response scaling',
      impact: 'Automated customer support, reduced support ticket volume, increased sales conversion by 25%, faster customer response times'
    },
    {
      id: 3,
      title: 'FinanceBot',
      description: 'Built financial reporting system using LangChain agents and AI workflows. Automated Profit & Loss, Balance Sheet, and Cash Flow report generation with real-time data processing.',
      category: 'AI/ML',
      technologies: ['Python', 'FastAPI', 'LangChain', 'Agentic AI', 'OpenAI'],
      date: 'May 2025 - Aug 2025',
      status: 'completed',
      icon: 'fas fa-chart-pie',
      liveUrl: null,
      githubUrl: 'https://github.com/shehab-bs1553',
      outcomes: '95% automated report generation, 8 hours to 30 minutes report time, 99.5% calculation accuracy',
      challenges: 'Financial data integration, real-time data processing, accounting standards compliance, large dataset handling',
      impact: 'Automated financial reporting, faster report generation, reduced calculation errors, standardized financial data processing'
    },
    {
      id: 4,
      title: 'Sentiment Analysis System',
      description: 'Built sentiment analysis system using DistilBERT for social media data. Processed tweet data with 88% accuracy for customer opinion analysis.',
      category: 'AI/ML',
      technologies: ['Python', 'Hugging Face', 'DistilBERT', 'Pandas', 'NumPy'],
      date: 'May 2024 - Jun 2024',
      status: 'completed',
      icon: 'fas fa-brain',
      liveUrl: null,
      githubUrl: 'https://github.com/shehab-bs1553',
      outcomes: '88% sentiment classification accuracy, 10,000+ tweets processed per hour, 90% reduction in manual analysis time',
      challenges: 'Social media data noise filtering, model fine-tuning for specific language patterns, real-time processing limits, multilingual content processing',
      impact: 'Automated brand monitoring, enabled marketing data analysis, processed customer feedback data, implemented reputation tracking system'
    },
    {
      id: 5,
      title: 'Competitive Programming Solutions',
      description: 'Solved 3,000+ algorithmic problems on LeetCode (Knight rank, 1923 rating), Codeforces (Pupil rank, 1363 rating), TopH, CSES, CodeChef, HackerRank, and HackerEarth. Participated in UGVIntra University Programming Contest 2023.',
      category: 'Algorithms',
      technologies: ['C++', 'Python', 'Data Structures', 'Algorithms', 'Problem Solving'],
      date: '2019 - Present',
      status: 'completed',
      icon: 'fas fa-code',
      liveUrl: 'https://leetcode.com/u/Shihab_Hossain_038/',
      githubUrl: 'https://github.com/shehab-bs1553',
      outcomes: '3,000+ problems solved across 7 platforms, LeetCode Knight rank (top 5%), consistent problem-solving streak, 50+ contest participations',
      challenges: 'Algorithmic problem solving, contest time constraints, solution optimization, advanced data structures and algorithms',
      impact: 'Developed problem-solving skills, improved algorithmic thinking, built efficient coding practices, established software development foundation'
    },
    {
      id: 6,
      title: 'NopCommerce Plugin Development',
      description: 'Built custom NopCommerce plugins for e-commerce applications. Integrated chatbot functionality and AI features for customer interaction.',
      category: 'E-Commerce',
      technologies: ['NopCommerce', 'C#', 'ASP.NET', 'Plugin Development', 'AI Integration'],
      date: '2024 - 2025',
      status: 'completed',
      icon: 'fas fa-puzzle-piece',
      liveUrl: null,
      githubUrl: 'https://github.com/shehab-bs1553',
      outcomes: '5+ custom plugins developed, 40% customer engagement increase, 60% reduction in e-commerce feature development time',
      challenges: 'NopCommerce architecture complexity, plugin compatibility issues, AI integration with existing systems, performance optimization',
      impact: 'Extended e-commerce functionality, improved customer interaction, increased sales conversion rates, streamlined development processes'
    },
    {
      id: 7,
      title: 'KPI Template',
      description: 'Developed a comprehensive backend system for KPI (Key Performance Indicator) template management. Built scalable APIs for creating, managing, and tracking performance metrics with flexible template configurations.',
      category: 'Backend',
      technologies: ['.NET', 'FastAPI', 'PostgreSQL', 'GraphQL', 'Microservice', 'Entity Framework'],
      date: 'Sep 2025 - Present',
      status: 'in-progress',
      icon: 'fas fa-chart-line',
      liveUrl: null,
      githubUrl: 'https://github.com/shehab-bs1553',
      outcomes: 'Scalable KPI management system, flexible template configurations, real-time performance tracking, efficient data processing',
      challenges: 'Complex KPI calculation logic, flexible template system design, performance optimization for large datasets, microservices architecture implementation',
      impact: 'Streamlined KPI management processes, enabled customizable performance tracking, improved data analysis capabilities, enhanced reporting efficiency'
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
