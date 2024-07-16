import { Component } from '@angular/core';
import aboutData from 'data/AboutData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  sections = aboutData;

  constructor(private router: Router) {}

  // Method to navigate to key concepts page
  navigateToKeyConcepts(): void {
    this.router.navigate(['/about/key-concepts']);
  }
}
