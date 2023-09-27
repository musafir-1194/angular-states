import { Component } from '@angular/core';
import { StateService } from '../services/state.service';

// Component A
@Component({
    selector: 'app-component-a',
    template: `
    <h2>Component A with service</h2>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
    <p>Count: {{ count }}</p>
  `,
})
export class ComponentA {
    count: number;

    constructor(private stateService: StateService) {
        this.count = this.stateService.getCount();
    }

    increment() {
        this.stateService.incrementCount();
        this.count = this.stateService.getCount();
    }

    decrement() {
        this.stateService.decrementCount();
        this.count = this.stateService.getCount();
    }
}
