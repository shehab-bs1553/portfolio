import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Contact component with form handling

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
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
      url: 'https://www.linkedin.com/in/md-shihab-hossain-908458212/',
      icon: 'fab fa-linkedin'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/Shihab_Hossain_038/',
      icon: 'fas fa-code'
    },
    {
      name: 'Codeforces',
      url: 'https://codeforces.com/profile/Shihab_Hossain_38',
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
