import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @ViewChild('navMenu', { static: false }) navMenu?: ElementRef;
  @ViewChild('navToggle', { static: false }) navToggle?: ElementRef;

  isScrolled = false;
  isMenuOpen = false;
  activeSection = 'home';

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isScrolled = window.scrollY > 50;
    this.updateActiveSection();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    // Close menu when resizing to desktop size
    if (window.innerWidth > 768 && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    // Close menu when clicking outside
    if (this.isMenuOpen && 
        this.navMenu?.nativeElement && 
        this.navToggle?.nativeElement &&
        !this.navMenu.nativeElement.contains(event.target) &&
        !this.navToggle.nativeElement.contains(event.target)) {
      this.closeMenu();
    }
  }

  ngOnInit(): void {
    // Initialize header functionality
    this.updateActiveSection();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    // Prevent body scroll when menu is open
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
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
