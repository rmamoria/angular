import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @HostBinding('class') className = '';

  constructor(private router: Router) { }

  isHomeActive(): boolean {
    return this.router.url === '/';
  }

  navigateToHome(): void {
    this.router.navigateByUrl('/');
  }

  toggleThemeDropdown(): void {
    const themeDropdown = document.getElementById('theme-dropdown');
    if (themeDropdown) {
      themeDropdown.classList.toggle('hidden');
    }
  }

  setTheme(theme: string): void {
    switch (theme) {
      case 'light':
        this.className = 'light-theme';
        break;
      case 'dark':
        this.className = 'dark-theme';
        break;
      case 'system':
        this.className = '';
        break;
    }
    const themeDropdown = document.getElementById('theme-dropdown');
    if (themeDropdown) {
      themeDropdown.classList.add('hidden');
    }
  }
}
