import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Contact component with form handling

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="contact-hero">
      <div class="container">
        <div class="contact-content">
          <h1 class="page-title">Get In Touch</h1>
          <p class="page-subtitle">Let's discuss your next project or just say hello</p>
        </div>
      </div>
    </section>

    <section class="contact-details">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2 class="section-title">Let's Connect</h2>
            <p class="contact-description">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div class="contact-methods">
              <div class="contact-method" *ngFor="let method of contactMethods">
                <div class="method-icon">
                  <i [class]="method.icon"></i>
                </div>
                <div class="method-content">
                  <h3 class="method-title">{{ method.title }}</h3>
                  <p class="method-value">{{ method.value }}</p>
                </div>
              </div>
            </div>

            <div class="social-links">
              <h3 class="social-title">Follow Me</h3>
              <div class="social-icons">
                <a 
                  *ngFor="let social of socialLinks"
                  [href]="social.url" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="social-link">
                  <i [class]="social.icon"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="contact-form-container">
            <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <h3 class="form-title">Send Message</h3>
              
              <div class="form-group">
                <label for="name" class="form-label">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  class="form-input" 
                  [(ngModel)]="formData.name"
                  required
                  #name="ngModel">
                <div class="error-message" *ngIf="name.invalid && name.touched">
                  Name is required
                </div>
              </div>

              <div class="form-group">
                <label for="email" class="form-label">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  class="form-input" 
                  [(ngModel)]="formData.email"
                  required
                  email
                  #email="ngModel">
                <div class="error-message" *ngIf="email.invalid && email.touched">
                  <span *ngIf="email.errors?.['required']">Email is required</span>
                  <span *ngIf="email.errors?.['email']">Please enter a valid email</span>
                </div>
              </div>

              <div class="form-group">
                <label for="subject" class="form-label">Subject *</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  class="form-input" 
                  [(ngModel)]="formData.subject"
                  required
                  #subject="ngModel">
                <div class="error-message" *ngIf="subject.invalid && subject.touched">
                  Subject is required
                </div>
              </div>

              <div class="form-group">
                <label for="message" class="form-label">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  class="form-textarea" 
                  rows="5"
                  [(ngModel)]="formData.message"
                  required
                  #message="ngModel"></textarea>
                <div class="error-message" *ngIf="message.invalid && message.touched">
                  Message is required
                </div>
              </div>

              <button 
                type="submit" 
                class="btn btn-primary btn-large"
                [disabled]="contactForm.invalid || isSubmitting">
                <span *ngIf="!isSubmitting">Send Message</span>
                <span *ngIf="isSubmitting">
                  <i class="fas fa-spinner fa-spin"></i> Sending...
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="map-section">
      <div class="container">
        <h2 class="section-title text-center">Find Me Here</h2>
        <div class="map-container">
          <div class="map-image">
            <img 
              src="https://maps.googleapis.com/maps/api/staticmap?center=Section-7+Road-1+House+33+Pallabi+Mirpur+Dhaka+1216,Bangladesh&zoom=15&size=500x300&maptype=roadmap&markers=color:red%7Clabel:A%7CSection-7+Road-1+House+33+Pallabi+Mirpur+Dhaka+1216,Bangladesh&key=YOUR_API_KEY" 
              alt="Location Map - Section-7, Road-1, House 33, Pallabi, Mirpur, Dhaka 1216"
              class="map-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="map-placeholder" style="display: none;">
              <i class="fas fa-map-marker-alt"></i>
              <p>Section-7, Road-1, House 33, Pallabi, Mirpur, Dhaka 1216</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-hero {
      padding: 4rem 0 3rem;
      background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%);
      color: white;
      text-align: center;
    }

    .page-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 0.8rem;
    }

    .page-subtitle {
      font-size: 1.1rem;
      opacity: 0.9;
    }

    .contact-details {
      padding: 3rem 0;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: start;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 2rem;
      color: #333;
    }

    .contact-description {
      font-size: 1.1rem;
      line-height: 1.8;
      margin-bottom: 3rem;
      color: #666;
    }

    .contact-methods {
      margin-bottom: 2rem;
    }

    .contact-method {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      padding: 1rem;
      background: #f8f9fa;
      border-radius: 10px;
      transition: transform 0.3s ease;
    }

    .contact-method:hover {
      transform: translateX(10px);
    }

    .method-icon {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1rem;
      font-size: 1.2rem;
      color: white;
      transition: all 0.3s ease;
    }

    .contact-method:hover .method-icon {
      background: linear-gradient(135deg, #ffc107 0%, #ff8c00 100%);
      transform: scale(1.1);
      color: #333;
    }

    .method-title {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 0.3rem;
      color: #333;
    }

    .method-value {
      color: #666;
      margin: 0;
      font-size: 0.9rem;
    }

    .social-links {
      text-align: center;
    }

    .social-title {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: #333;
    }

    .social-icons {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    .social-link {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      font-size: 1.2rem;
      transition: all 0.3s ease;
      box-shadow: 0 2px 8px rgba(26, 54, 93, 0.3);
    }

    .social-link:hover {
      background: linear-gradient(135deg, #ffc107 0%, #ff8c00 100%);
      color: #333;
      transform: translateY(-3px) scale(1.1);
      box-shadow: 0 8px 20px rgba(255, 193, 7, 0.4);
    }

    .contact-form-container {
      background: white;
      padding: 1.5rem;
      border-radius: 12px;
      box-shadow: 0 3px 15px rgba(0, 0, 0, 0.08);
    }

    .form-title {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 1.2rem;
      color: #333;
      text-align: center;
    }

    .form-group {
      margin-bottom: 0.8rem;
    }

    .form-label {
      display: block;
      margin-bottom: 0.4rem;
      font-weight: 500;
      color: #555;
      font-size: 0.9rem;
    }

    .form-input,
    .form-textarea {
      width: 100%;
      padding: 0.7rem;
      border: 1px solid #ddd;
      border-radius: 6px;
      font-size: 0.9rem;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
      font-family: inherit;
      background: #fafafa;
    }

    .form-input:focus,
    .form-textarea:focus {
      outline: none;
      border-color: #1a365d;
      box-shadow: 0 0 0 2px rgba(26, 54, 93, 0.1);
      background: white;
    }

    .form-textarea {
      resize: vertical;
      min-height: 80px;
    }

    .error-message {
      color: #dc3545;
      font-size: 0.9rem;
      margin-top: 0.5rem;
    }

    .btn {
      display: inline-block;
      padding: 0.7rem 1.2rem;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.9rem;
      transition: all 0.3s ease;
      border: 1px solid transparent;
      cursor: pointer;
      width: 100%;
    }

    .btn-primary {
      background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%);
      color: white;
      border-color: transparent;
    }

    .btn-primary:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(26, 54, 93, 0.4);
    }

    .btn-primary:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .btn-large {
      padding: 0.8rem 1.5rem;
      font-size: 0.95rem;
    }

    .map-section {
      padding: 3rem 0;
      background: #f8f9fa;
    }

    .map-container {
      margin-top: 2rem;
    }

    .map-image {
      position: relative;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }

    .map-img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      border-radius: 15px;
      transition: transform 0.3s ease;
    }

    .map-img:hover {
      transform: scale(1.02);
    }

    .map-placeholder {
      height: 250px;
      background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%);
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.2rem;
    }

    .map-placeholder i {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    @media (max-width: 768px) {
      .contact-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .page-title {
        font-size: 2.5rem;
      }

      .contact-form-container {
        padding: 2rem;
      }

      .contact-method {
        padding: 1rem;
      }

      .method-icon {
        width: 50px;
        height: 50px;
        font-size: 1.2rem;
        margin-right: 1rem;
      }

      .map-img {
        height: 200px;
      }

      .map-placeholder {
        height: 200px;
      }
    }
  `]
})
export class ContactComponent implements OnInit {
  isSubmitting = false;
  
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  contactMethods = [
    {
      title: 'Email',
      value: 'shihab.hossain5239@gmail.com',
      icon: 'fas fa-envelope'
    },
    {
      title: 'Phone',
      value: '+8801768584357',
      icon: 'fas fa-phone'
    },
    {
      title: 'Location',
      value: 'Section-7, Road-1, House 33, Pallabi, Mirpur, Dhaka 1216',
      icon: 'fas fa-map-marker-alt'
    },
    {
      title: 'Availability',
      value: 'Everyday, 8AM - 11PM',
      icon: 'fas fa-clock'
    }
  ];

  socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/shehab-bs1553',
      icon: 'fab fa-github'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/md-shihab-hossain',
      icon: 'fab fa-linkedin'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/shehab-bs1553',
      icon: 'fas fa-code'
    },
    {
      name: 'Codeforces',
      url: 'https://codeforces.com/profile/shehab-bs1553',
      icon: 'fas fa-trophy'
    }
  ];

  ngOnInit(): void {
    // Initialize contact component
  }

  onSubmit(): void {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', this.formData);
      alert('Thank you for your message! I\'ll get back to you soon.');
      this.formData = { name: '', email: '', subject: '', message: '' };
      this.isSubmitting = false;
    }, 2000);
  }
}
