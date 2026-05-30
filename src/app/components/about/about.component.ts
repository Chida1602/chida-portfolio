import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  photoError = false;
  aboutPhotoError = false;

  stats = [
    { value: '2.10+',  label: 'Years Experience' },
    { value: '15+',   label: 'Angular Components' },
    { value: '8+',    label: 'Technologies' },
    { value: '40%',   label: 'Perf Gain Achieved' },
  ];

  experiences = [
    {
      role: 'Associate Software Engineer',
      company: 'Dedalus S.p.A',
      period: 'Aug 2023 – Present',
      type: 'Full-time',
      bullets: [
        'Developed 15+ reusable Angular components across 3 product modules, reducing frontend development effort by 30%',
        'Optimized change detection using OnPush strategy and RxJS operators — improved rendering performance by 40%',
        'Built REST API integrations with JWT authentication for patient data workflows serving 500+ daily active users',
        'Implemented lazy-loaded feature modules reducing initial bundle size by 35%, boosting Lighthouse score',
        'Collaborated in 2-week Agile sprints with cross-functional teams of 8+, delivering all features on schedule',
      ],
      tech: ['Angular 17', 'TypeScript', 'RxJS', 'Java', 'Quarkus', 'Oracle DB', 'JWT', 'REST APIs'],
      icon: 'fas fa-briefcase',
    },
    {
      role: 'Software Engineering Intern',
      company: 'Dedalus S.p.A',
      period: 'Feb 2023 – Jul 2023',
      type: 'Internship',
      bullets: [
        'Built Angular UI components for an internal healthcare module following enterprise component architecture patterns',
        'Integrated JDBC-backed REST endpoints and supported production deployment workflows in a Linux environment',
        'Wrote unit tests using Jasmine/Karma maintaining 80%+ code coverage on assigned modules',
      ],
      tech: ['Angular', 'TypeScript', 'HTML5', 'SCSS', 'Java', 'JDBC', 'Jasmine', 'Karma'],
      icon: 'fas fa-laptop-code',
    },
  ];

  onPhotoError(event: Event): void { this.photoError = true; }
  onAboutPhotoError(event: Event): void { this.aboutPhotoError = true; }
}
