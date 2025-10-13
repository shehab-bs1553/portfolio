import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, HomeComponent, AboutComponent, ProjectsComponent, SkillsComponent, ExperienceComponent, ContactComponent],
  template: `
    <div class="app-container">
      <app-header></app-header>
      <main>
        <app-home></app-home>
        <app-about></app-about>
        <app-projects></app-projects>
        <app-skills></app-skills>
        <app-experience></app-experience>
        <app-contact></app-contact>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    
    main {
      flex: 1;
    }
  `]
})
export class AppComponent implements OnInit {
  title = 'MD Shehab Hossin - Portfolio';

  ngOnInit(): void {
    // Initialize any global functionality here
  }
}
