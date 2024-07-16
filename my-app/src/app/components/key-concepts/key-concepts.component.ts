import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import keyConcepts from 'data/keyConceptData'; // Assuming keyConcepts is imported correctly

@Component({
  selector: 'app-key-concepts',
  templateUrl: './key-concepts.component.html',
  styleUrls: ['./key-concepts.component.css']
})
export class KeyConceptsComponent implements OnInit {
  keyConcepts = keyConcepts;
  selectedConcept: any;

  constructor(private route: ActivatedRoute,  private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const conceptId = params.get('id');
      // Check if conceptId is correctly fetched
      console.log('Concept ID:', conceptId);
  
      // Use conceptId to find the corresponding concept from keyConcepts array
      this.selectedConcept = this.keyConcepts.find(concept => concept.id === conceptId);
  
      // Set default concept if no matching conceptId is found
      if (!this.selectedConcept) {
        this.selectedConcept = this.keyConcepts.find(concept => concept.id === 'modules');
        this.router.navigate(['/learn-angular/key-concepts', "modules"]);
      }
    });
  }
  

  onConceptClick(concept: any): void {
    this.selectedConcept = concept;
    this.router.navigate(['/learn-angular/key-concepts', concept.id]);
  }
}
