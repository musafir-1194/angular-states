import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { StateService } from "../services/state.service";

// Component A
@Component({
  selector: 'app-component-oa',
  template: `
    <h2>Component A with observables and subjects</h2>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
    <p>Count: {{ count$ | async }}</p>
  `
})
export class ComponentOA {
  count$: Observable<number>;

  constructor(private stateService: StateService) {
    this.count$ = this.stateService.count$;
  }

  increment() {
    this.stateService.incrementCountOb();
  }

  decrement() {
    this.stateService.decrementCountOb();
  }
}