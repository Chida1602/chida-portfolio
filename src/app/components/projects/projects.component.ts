import { Component } from '@angular/core';

interface Project {
  title: string;
  summary: string;
  impact: string[];
  tech: string[];
  github: string;
  live?: string;
  icon: string;
  color: string;
  badge: string;
}

interface Certification {
  name: string;
  icon: string;
  issuer: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Healthcare Patient Portal',
      summary: 'Production-grade Angular 17 SPA for managing patient records and clinical workflows at Dedalus. Built with lazy-loaded feature modules, RxJS state streams, and JWT-secured REST APIs.',
      impact: [
        '40% faster initial load via lazy loading & OnPush change detection',
        '30% reduction in dev effort through reusable component library',
        'Served 500+ daily active healthcare users in production',
      ],
      tech: ['Angular 17', 'TypeScript', 'RxJS', 'JWT', 'Oracle DB', 'Java/Quarkus', 'REST APIs'],
      github: 'https://github.com/Chida1602',
      icon: 'fas fa-hospital',
      color: '#6366f1',
      badge: 'Enterprise',
    },
    {
      title: 'Fitpro Inc – Diet Planner',
      summary: 'Full-featured Angular SPA for managing nutrition plans, meal tracking, and user dietary habits. Built with reactive forms, component routing, and a clean, responsive UI.',
      impact: [
        'Fully reactive forms with client-side validation & dynamic controls',
        'Modular Angular architecture with reusable UI components',
        'Mobile-first responsive design across all breakpoints',
      ],
      tech: ['Angular', 'TypeScript', 'Reactive Forms', 'HTML5', 'SCSS', 'REST APIs'],
      github: 'https://github.com/Chida1602/Angular-fitpro-project',
      icon: 'fas fa-heartbeat',
      color: '#ec4899',
      badge: 'Angular SPA',
    },
    {
      title: 'Driver Drowsiness Detection',
      summary: 'Real-time smart driver alertness system using CNNs to detect yawning and eye-closure patterns. Research-grade ML pipeline for preventing road accidents with published paper.',
      impact: [
        'Published research paper on CNN-based drowsiness detection',
        '93%+ detection accuracy on real-world test dataset',
        'Real-time inference using OpenCV video stream processing',
      ],
      tech: ['Python', 'TensorFlow', 'CNN', 'OpenCV', 'NumPy', 'Deep Learning'],
      github: 'https://github.com/Chida1602/Chauffeur-Torpidity-Forewarning-Aid-using-CNN',
      icon: 'fas fa-car',
      color: '#10b981',
      badge: 'ML / Research',
    }
  ];

  certifications: Certification[] = [
    { name: 'Google Cloud Fundamentals – Core Infrastructure', issuer: 'Google Cloud', icon: 'fab fa-google' },
    { name: 'Java 17 Masterclass',                            issuer: 'Udemy',         icon: 'fab fa-java'  },
    { name: 'Building Microservices with Quarkus',            issuer: 'Red Hat',       icon: 'fas fa-bolt'  },
    { name: 'Data Processing Specialist – English',           issuer: 'Certification', icon: 'fas fa-certificate' },
  ];
}
