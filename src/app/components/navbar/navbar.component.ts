import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuOpen = false;
  scrolled = false;
  darkMode = false;

  constructor() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      this.darkMode = true;
      document.body.classList.add('dark-mode');
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 50;
  }

  toggleMenu() { this.menuOpen = !this.menuOpen; }
  closeMenu()  { this.menuOpen = false; }

  toggleTheme() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark-mode', this.darkMode);
    localStorage.setItem('theme', this.darkMode ? 'dark' : 'light');
  }
}
