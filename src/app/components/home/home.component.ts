import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private scrollAnimationService: ScrollAnimationService) {}

  skills = [
    {
      name: '.NET',
      icon: 'fab fa-microsoft',
      description: 'Building scalable backend systems and APIs with .NET Framework'
    },
    {
      name: 'Angular',
      icon: 'fab fa-angular',
      description: 'Developing modern web applications with Angular framework'
    },
    {
      name: 'AI & ML',
      icon: 'fas fa-brain',
      description: 'Developing AI-powered solutions with Semantic Kernel and LangGraph'
    },
    {
      name: 'NopCommerce',
      icon: 'fas fa-shopping-cart',
      description: 'Creating custom plugins and e-commerce solutions'
    },
    {
      name: 'Python',
      icon: 'fab fa-python',
      description: 'Building intelligent systems and data analysis solutions'
    },
    {
      name: 'Microservice',
      icon: 'fas fa-server',
      description: 'Designing and implementing scalable microservices architecture'
    },
    {
      name: 'GraphQL',
      icon: 'fas fa-project-diagram',
      description: 'Building efficient APIs with GraphQL query language'
    }
  ];

  ngOnInit(): void {
    // Initialize home component
    setTimeout(() => {
      this.scrollAnimationService.observeElements();
    }, 100);
  }
}
