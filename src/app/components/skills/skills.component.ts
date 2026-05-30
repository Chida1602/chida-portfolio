import { Component } from '@angular/core';

interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  categories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: 'fas fa-layer-group',
      color: '#6366f1',
      skills: ['Angular 17/18', 'TypeScript', 'RxJS', 'JavaScript ES6+', 'HTML5', 'SCSS/CSS3', 'Angular Material', 'Responsive Design', 'Reactive Forms']
    },
    {
      title: 'Angular Architecture',
      icon: 'fas fa-sitemap',
      color: '#8b5cf6',
      skills: ['Lazy Loading', 'Standalone Components', 'State Management', 'Route Guards', 'HTTP Interceptors', 'Dependency Injection', 'OnPush Change Detection', 'Component Architecture', 'Dynamic Components']
    },
    {
      title: 'Backend & APIs',
      icon: 'fas fa-server',
      color: '#06b6d4',
      skills: ['Java', 'Quarkus', 'REST APIs', 'JWT Authentication', 'Oracle DB', 'JDBC', 'Microservices', 'Spring Boot basics']
    },
    {
      title: 'Tools & DevOps',
      icon: 'fas fa-tools',
      color: '#10b981',
      skills: ['Git', 'GitHub', 'Docker', 'VS Code', 'Postman', 'Jira', 'CI/CD', 'Agile/Scrum', 'Linux', 'npm']
    },
    {
      title: 'Testing',
      icon: 'fas fa-vial',
      color: '#f59e0b',
      skills: ['Jasmine', 'Karma', 'Unit Testing', 'Component Testing', 'Test-Driven Dev', 'Code Coverage']
    }
  ];

  coreSkills = [
    { name: 'Angular',     level: 90, icon: 'fab fa-angular',  color: '#dd1b16' },
    { name: 'TypeScript',  level: 88, icon: 'fab fa-js',        color: '#3178c6' },
    { name: 'RxJS',        level: 82, icon: 'fas fa-stream',    color: '#b7178c' },
    { name: 'Java',        level: 76, icon: 'fab fa-java',      color: '#5382a1' },
    { name: 'HTML5/SCSS',  level: 92, icon: 'fab fa-html5',     color: '#e44d26' },
    { name: 'Oracle DB',   level: 73, icon: 'fas fa-database',  color: '#f80000' },
  ];
}
