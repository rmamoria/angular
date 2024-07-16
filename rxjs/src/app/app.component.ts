import {
  Component,
  DestroyRef,
  OnInit,
  computed,
  effect,
  inject,
  signal
} from "@angular/core";
import { interval, map } from "rxjs";
@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);

  clickCount = signal(0);
  interval = signal(0);
  doubleInterval = computed(() => this.interval() * 2);

  constructor() {
    effect(() => {
      console.log(`Button clicked ${this.clickCount()} times.`);
    });
  }
  ngOnInit(): void {
    setInterval(() => {
      this.interval.update((prev) => prev + 1);
      // console.log(this.doubleInterval());f
    }, 1000);
    //  const subscription =  interval(1000).pipe(
    //   map((val)=>val*2)
    //  ).subscribe({f
    //     next:(val)=>console.log(val),

    //   });

    //   this.destroyRef.onDestroy(()=>{
    //     subscription.unsubscribe();
    //   })
  }

  onClick() {
    this.clickCount.update((prevCount) => {
      return prevCount + 1;
    });
  }
}
