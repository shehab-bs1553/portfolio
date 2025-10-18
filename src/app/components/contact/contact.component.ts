import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmailService, EmailData } from '../../services/email.service';

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
  submitMessage = '';
  showMessage = false;
  isSuccess = false;
  
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
      name: 'Resume',
      url: 'https://drive.google.com/file/d/16RWOGirGxLZgzY6fPvk8VRg_MqOmrfC_/view',
      icon: 'fas fa-file-pdf'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/Shihab_Hossain_038/',
      icon: 'fas fa-code'
    },
    {
      name: 'Codeforces',
      url: 'https://codeforces.com/profile/Shihab_Hossain_38',
      icon: 'fas fa-code'
    }
  ];

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    // Initialize contact component
  }

  async onSubmit(): Promise<void> {
    if (this.isSubmitting) return;
    
    // Check if form is valid before submitting
    if (!this.isFormValid()) {
      this.submitMessage = 'Please fill in all required fields to send your message.';
      this.showMessage = true;
      this.isSuccess = false;
      return;
    }
    
    this.isSubmitting = true;
    this.showMessage = false;
    this.isSuccess = false;
    
    try {
      const emailData: EmailData = {
        name: this.formData.name,
        email: this.formData.email,
        subject: this.formData.subject,
        message: this.formData.message
      };

      const result = await this.emailService.sendEmail(emailData);
      
      console.log('Email service result:', result); // Debug log
      console.log('result.success value:', result.success);
      console.log('typeof result.success:', typeof result.success);
      console.log('result.success === true:', result.success === true);
      
      
      if (result.success) {
        console.log('=== SUCCESS BRANCH ENTERED ===');
        console.log('Before setting success message:');
        console.log('  showMessage:', this.showMessage);
        console.log('  isSuccess:', this.isSuccess);
        console.log('  submitMessage:', this.submitMessage);
        
        // Show success message
        this.submitMessage = 'Thank you for your message! I\'ll get back to you soon.';
        this.showMessage = true;
        this.isSuccess = true;
        
        console.log('After setting success message:');
        console.log('  showMessage:', this.showMessage);
        console.log('  isSuccess:', this.isSuccess);
        console.log('  submitMessage:', this.submitMessage);
        
        // Force change detection
        setTimeout(() => {
          console.log('After timeout - checking values:');
          console.log('  showMessage:', this.showMessage);
          console.log('  isSuccess:', this.isSuccess);
          console.log('  submitMessage:', this.submitMessage);
        }, 100);
        
        // Reset form on successful submission (but don't reset the message display)
        this.formData = { name: '', email: '', subject: '', message: '' };
        // Reset form validation state
        this.resetFormValidation();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.showMessage = false;
          console.log('Success message hidden after 5 seconds'); // Debug log
        }, 5000);
      } else {
        console.log('=== ERROR BRANCH ENTERED ===');
        console.log('result.success was false, showing error message');
        // Show error message
        this.submitMessage = 'Sorry, there was an error sending your message. Please try again.';
        this.showMessage = true;
        this.isSuccess = false;
        
        console.log('Error message should be showing now'); // Debug log
        console.log('Error - showMessage:', this.showMessage);
        console.log('Error - isSuccess:', this.isSuccess);
        console.log('Error - submitMessage:', this.submitMessage);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      this.submitMessage = 'Sorry, there was an error sending your message. Please try again.';
      this.showMessage = true;
      this.isSuccess = false;
    } finally {
      this.isSubmitting = false;
    }
  }

  onFormReset(): void {
    // Reset form validation state when form is reset
    // But don't reset if we're currently showing a success message
    if (!this.isSuccess) {
      this.showMessage = false;
      this.isSuccess = false;
    }
  }

  private resetFormValidation(): void {
    // Reset all form fields to pristine state
    const form = document.querySelector('form');
    if (form) {
      form.reset();
    }
    console.log('Form validation reset completed'); // Debug log
  }

  isFormValid(): boolean {
    return !!(this.formData.name && this.formData.email && this.formData.subject && this.formData.message);
  }

  isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

}
