import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header" [class.scrolled]="isScrolled">
      <nav class="navbar">
        <div class="container">
          <div class="nav-brand">
            <a href="#home" class="brand-link">
              <div class="brand-logo">
                <img src="assets/image/1.jpg" alt="Logo" class="logo-img">
              </div>
              <span class="brand-text">MD Shehab Hossain</span>
            </a>
          </div>
          
          <div class="nav-menu" [class.active]="isMenuOpen">
            <ul class="nav-list">
              <li class="nav-item">
                <a href="#home" class="nav-link" (click)="closeMenu()" 
                   [class.active]="activeSection === 'home'">Home</a>
              </li>
              <li class="nav-item">
                <a href="#about" class="nav-link" (click)="closeMenu()"
                   [class.active]="activeSection === 'about'">About</a>
              </li>
              <li class="nav-item">
                <a href="#projects" class="nav-link" (click)="closeMenu()"
                   [class.active]="activeSection === 'projects'">Projects</a>
              </li>
              <li class="nav-item">
                <a href="#skills" class="nav-link" (click)="closeMenu()"
                   [class.active]="activeSection === 'skills'">Skills</a>
              </li>
              <li class="nav-item">
                <a href="#experience" class="nav-link" (click)="closeMenu()"
                   [class.active]="activeSection === 'experience'">Experience</a>
              </li>
              <li class="nav-item">
                <a href="#contact" class="nav-link" (click)="closeMenu()"
                   [class.active]="activeSection === 'contact'">Contact</a>
              </li>
            </ul>
          </div>
          
          <div class="nav-toggle" (click)="toggleMenu()">
            <span class="hamburger" [class.active]="isMenuOpen"></span>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background: rgba(30, 41, 59, 0.95);
      backdrop-filter: blur(15px);
      z-index: 1000;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border-bottom: 1px solid rgba(59, 130, 246, 0.2);
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
    }

    .header.scrolled {
      background: rgba(15, 23, 42, 0.95);
      box-shadow: 0 4px 32px rgba(0, 0, 0, 0.4);
      border-bottom: 1px solid rgba(59, 130, 246, 0.3);
    }

    .navbar {
      padding: 1rem 0;
    }

    .navbar .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .brand-link {
      text-decoration: none;
      color: #60a5fa;
      font-weight: 700;
      font-size: 1.6rem;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .brand-link:hover {
      color: #93c5fd;
      transform: translateY(-2px);
    }

    .brand-logo {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      border: 2px solid #60a5fa;
      transition: all 0.3s ease;
    }

    .brand-logo:hover {
      border-color: #93c5fd;
      transform: scale(1.05);
    }

    .logo-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .brand-text {
      color: #60a5fa;
    }

    .nav-menu {
      display: flex;
      align-items: center;
    }

    .nav-list {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 2rem;
    }

    .nav-link {
      text-decoration: none;
      color: #cbd5e1;
      font-weight: 500;
      font-size: 1rem;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      padding: 0.8rem 1.2rem;
      border-radius: 8px;
    }

    .nav-link:hover {
      color: #60a5fa;
      background: rgba(59, 130, 246, 0.1);
      transform: translateY(-2px);
    }

    .nav-link.active {
      color: #60a5fa;
      background: rgba(59, 130, 246, 0.15);
    }

    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 4px;
      left: 50%;
      width: 0;
      height: 2px;
      background: #60a5fa;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      transform: translateX(-50%);
      border-radius: 1px;
    }

    .nav-link:hover::after,
    .nav-link.active::after {
      width: 80%;
    }

    .nav-toggle {
      display: none;
      flex-direction: column;
      cursor: pointer;
      padding: 0.5rem;
    }

    .hamburger {
      width: 28px;
      height: 3px;
      background: #cbd5e1;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      border-radius: 2px;
    }

    .hamburger::before,
    .hamburger::after {
      content: '';
      position: absolute;
      width: 28px;
      height: 3px;
      background: #cbd5e1;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border-radius: 2px;
    }

    .hamburger::before {
      top: -8px;
    }

    .hamburger::after {
      top: 8px;
    }

    .hamburger.active {
      background: transparent;
      box-shadow: none;
    }

    .hamburger.active::before {
      transform: rotate(45deg);
      top: 0;
      background: #60a5fa;
    }

    .hamburger.active::after {
      transform: rotate(-45deg);
      top: 0;
      background: #60a5fa;
    }

    @media (max-width: 768px) {
      .brand-logo {
        width: 35px;
        height: 35px;
      }

      .brand-text {
        font-size: 1.4rem;
      }

      .nav-menu {
        position: fixed;
        top: 100%;
        left: 0;
        width: 100%;
        background: rgba(15, 23, 42, 0.98);
        backdrop-filter: blur(15px);
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        border-top: 1px solid rgba(59, 130, 246, 0.2);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
      }

      .nav-menu.active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }

      .nav-list {
        flex-direction: column;
        padding: 2rem 0;
        gap: 0;
      }

      .nav-item {
        width: 100%;
        text-align: center;
      }

      .nav-link {
        display: block;
        padding: 1.2rem 2rem;
        border-bottom: 1px solid rgba(59, 130, 246, 0.1);
        color: #cbd5e1;
        text-align: center;
        font-size: 1.1rem;
      }

      .nav-link:hover {
        background: rgba(59, 130, 246, 0.1);
        color: #60a5fa;
        transform: none;
      }

      .nav-link.active {
        background: rgba(59, 130, 246, 0.15);
        color: #60a5fa;
      }

      .nav-toggle {
        display: flex;
      }
    }
  `]
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  isMenuOpen = false;
  activeSection = 'home';

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isScrolled = window.scrollY > 50;
    this.updateActiveSection();
  }

  ngOnInit(): void {
    // Initialize header functionality
    this.updateActiveSection();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  updateActiveSection(): void {
    const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          this.activeSection = section;
          break;
        }
      }
    }
  }
}
