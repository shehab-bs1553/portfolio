import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero">
      <div class="hero-background">
        <div class="hero-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
        </div>
      </div>
      
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              Hi, I'm <span class="highlight">MD Shehab Hossain</span>
            </h1>
            <h2 class="hero-subtitle">Software Engineer I</h2>
            <p class="hero-description">
              Software Engineer at Brain Station-23 PLC, specializing in scalable .NET API development, 
              NopCommerce plugin development, and AI-driven solutions. Passionate about building 
              intelligent systems and solving complex problems.
            </p>
            <div class="hero-buttons">
              <a href="#projects" class="btn btn-primary">View My Work</a>
              <a href="#contact" class="btn btn-outline">Get In Touch</a>
            </div>
          </div>
          
          <div class="hero-image">
            <div class="image-container">
              <div class="profile-image">
                <img src="assets/image/1.jpg" alt="MD Shehab Hossain" class="profile-img">
              </div>
              <div class="floating-elements">
                <div class="floating-element element-1">
                  <i class="fab fa-angular"></i>
                </div>
                <div class="floating-element element-2">
                  <i class="fab fa-react"></i>
                </div>
                <div class="floating-element element-3">
                  <i class="fab fa-node-js"></i>
                </div>
                <div class="floating-element element-4">
                  <i class="fab fa-js-square"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="scroll-indicator">
        <div class="scroll-arrow">
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>

    <section class="skills-preview scroll-animate">
      <div class="container">
        <h2 class="section-title">Technologies I Work With</h2>
        <div class="skills-grid">
          <div class="skill-item scroll-animate-scale" *ngFor="let skill of skills">
            <div class="skill-icon">
              <i [class]="skill.icon"></i>
            </div>
            <h3 class="skill-name">{{ skill.name }}</h3>
            <p class="skill-description">{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="cta-section scroll-animate">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Start Your Next Project?</h2>
          <p class="cta-description">
            Let's work together to bring your ideas to life with cutting-edge technology and creative solutions.
          </p>
          <a href="#contact" class="btn btn-primary btn-large">Let's Talk</a>
        </div>
      </div>
    </section> -->
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      background: linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%);
      color: white;
      overflow: hidden;
      padding: 100px 0 60px;
    }

    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    .hero-shapes {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .shape {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      animation: float 6s ease-in-out infinite;
    }

    .shape-1 {
      width: 200px;
      height: 200px;
      top: 10%;
      left: 10%;
      animation-delay: 0s;
    }

    .shape-2 {
      width: 150px;
      height: 150px;
      top: 60%;
      right: 15%;
      animation-delay: 2s;
    }

    .shape-3 {
      width: 100px;
      height: 100px;
      bottom: 20%;
      left: 20%;
      animation-delay: 4s;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      position: relative;
      z-index: 2;
    }

    .hero-text {
      animation: fadeInLeft 1s ease-out;
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      line-height: 1.2;
    }

    .highlight {
      color: #ffc107;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .hero-subtitle {
      font-size: 1.5rem;
      font-weight: 400;
      margin-bottom: 1.5rem;
      opacity: 0.9;
    }

    .hero-description {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .hero-buttons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .btn {
      display: inline-block;
      padding: 1rem 2rem;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      transition: all 0.3s ease;
      border: 2px solid transparent;
      cursor: pointer;
    }

    .btn-primary {
      background: #ffc107;
      color: #333;
      border-color: #ffc107;
    }

    .btn-primary:hover {
      background: transparent;
      color: #ffc107;
      border-color: #ffc107;
      transform: translateY(-2px);
    }

    .btn-outline {
      background: transparent;
      color: white;
      border-color: white;
    }

    .btn-outline:hover {
      background: white;
      color: #333;
      transform: translateY(-2px);
    }

    .btn-large {
      padding: 1.2rem 2.5rem;
      font-size: 1.1rem;
    }

    .hero-image {
      display: flex;
      justify-content: center;
      animation: fadeInRight 1s ease-out;
    }

    .image-container {
      position: relative;
      width: 300px;
      height: 300px;
    }

    .profile-image {
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(10px);
      border: 2px solid rgba(255, 255, 255, 0.2);
      overflow: hidden;
    }

    .profile-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }

    .floating-elements {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .floating-element {
      position: absolute;
      width: 60px;
      height: 60px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      color: white;
      animation: float 3s ease-in-out infinite;
      transition: all 0.3s ease;
    }

    .floating-element:hover {
      background: rgba(255, 193, 7, 0.3);
      transform: scale(1.1);
      color: #ffc107;
    }

    .element-1 {
      top: 10%;
      right: -10%;
      animation-delay: 0s;
    }

    .element-2 {
      top: 20%;
      left: -10%;
      animation-delay: 1s;
    }

    .element-3 {
      bottom: 20%;
      right: -15%;
      animation-delay: 2s;
    }

    .element-4 {
      bottom: 10%;
      left: -15%;
      animation-delay: 3s;
    }

    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
    }

    .scroll-arrow {
      width: 40px;
      height: 40px;
      border: 2px solid white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: bounce 2s infinite;
      cursor: pointer;
    }

    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
      40% { transform: translateY(-10px); }
      60% { transform: translateY(-5px); }
    }

    .skills-preview {
      padding: 2rem 0;
      background: #334155;
    }

    .section-title {
      text-align: center;
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 3rem;
      color: #f1f5f9;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .skill-item {
      text-align: center;
      padding: 2rem;
      background: #1e293b;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease;
      border: 1px solid #475569;
    }

    .skill-item:hover {
      transform: translateY(-5px);
    }

    .skill-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 1rem;
      background: linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      color: white;
      transition: all 0.3s ease;
    }

    .skill-item:hover .skill-icon {
      background: linear-gradient(135deg, #ffc107 0%, #ff8c00 100%);
      transform: scale(1.1);
      color: #333;
    }

    .skill-name {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: #f1f5f9;
    }

    .skill-description {
      color: #cbd5e1;
      line-height: 1.6;
    }

    .cta-section {
      padding: 2rem 0;
      background: linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%);
      color: white;
      text-align: center;
    }

    .cta-title {
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 0.6rem;
    }

    .cta-description {
      font-size: 1rem;
      margin-bottom: 1.2rem;
      opacity: 0.9;
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
    }

    @media (max-width: 768px) {
      .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 2rem;
      }

      .hero-title {
        font-size: 2rem;
      }

      .hero-buttons {
        justify-content: center;
      }

      .image-container {
        width: 250px;
        height: 250px;
      }

      .profile-image {
        font-size: 6rem;
      }

      .floating-element {
        width: 50px;
        height: 50px;
        font-size: 1.2rem;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  constructor(private scrollAnimationService: ScrollAnimationService) {}

  skills = [
    {
      name: '.NET Core',
      icon: 'fab fa-microsoft',
      description: 'Building scalable backend systems and APIs with .NET Core'
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
    }
  ];

  ngOnInit(): void {
    // Initialize home component
    setTimeout(() => {
      this.scrollAnimationService.observeElements();
    }, 100);
  }
}
