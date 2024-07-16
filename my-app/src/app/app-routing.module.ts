import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeroComponent } from './components/hero/hero.component';
import { KeyConceptsComponent } from './components/key-concepts/key-concepts.component';

const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'learn-angular', component: AboutComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'learn-angular/key-concepts', component: KeyConceptsComponent,  },
  { path: 'learn-angular/key-concepts/:id', component: KeyConceptsComponent }, 
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
