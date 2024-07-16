import { Component, DestroyRef, OnInit, inject, signal } from "@angular/core";

import { PlacesContainerComponent } from "../places-container/places-container.component";
import { PlacesComponent } from "../places.component";
import { Place } from "../place.model";

import { PlacesService } from "../places.service";

@Component({
  selector: "app-user-places",
  standalone: true,
  templateUrl: "./user-places.component.html",
  styleUrl: "./user-places.component.css",
  imports: [PlacesContainerComponent, PlacesComponent]
})
export class UserPlacesComponent implements OnInit {
  isFetching = signal(false);
  error = signal("");
  userplaces = signal<Place[] | undefined>(undefined);

  private destroyRef = inject(DestroyRef);
  private placesService = inject(PlacesService);
  places = this.placesService.loadedUserPlaces;
  ngOnInit() {
    this.isFetching.set(true);
    const subscription = this.placesService.loadUserPlaces().subscribe({
      error: (error) => {
        console.log("error object", error);
        this.error.set(error.message);
      },
      complete: () => {
        this.isFetching.set(false);
      }
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onRemovePlace(place: Place) {
    const subscription = this.placesService.removeUserPlace(place).subscribe();
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
